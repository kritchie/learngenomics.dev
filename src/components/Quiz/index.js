import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { saveScore, useQuizScores } from "./scores";
import styles from "./styles.module.css";

/*
 * A self-check quiz, authored in MDX (the components are global, see
 * src/theme/MDXComponents.js):
 *
 *   <Quiz>
 *   <Question>
 *
 *   Which molecule carries a gene's message to the ribosome?
 *
 *   <Option>DNA</Option>
 *   <Option correct>mRNA</Option>
 *   <Explanation>
 *
 *   mRNA is the copy ... See [Transcription](03-transcription.md).
 *
 *   </Explanation>
 *   </Question>
 *   </Quiz>
 *
 * Question types:
 *   - single choice (default): exactly one <Option correct>
 *   - multiple choice: <Question multiple>, one or more <Option correct>
 *   - true/false: <Question answer={true}> or {false}, with no <Option>s
 *
 * Grading runs in the browser. The answers ship in the page, which is fine for
 * self-checks. A malformed question throws, so `npm run build` fails on it.
 */

const QuizContext = createContext(null);

/** Marks one choice. Its children are the choice's label, on one line. */
export function Option() {
  return null;
}

/** Shown once the reader checks their answer. Link to the section it draws on. */
export function Explanation({ children }) {
  return <div className={styles.explanation}>{children}</div>;
}

const isA = (type) => (child) => isValidElement(child) && child.type === type;

function choicesOf(items, { multiple, answer }, number) {
  const fail = (message) => {
    throw new Error(`Quiz question ${number}: ${message}`);
  };
  const options = items.filter(isA(Option));
  let choices;
  if (typeof answer === "boolean") {
    if (options.length > 0) fail("a true/false question takes no <Option>s.");
    if (multiple) fail("a true/false question can't be `multiple`.");
    choices = [
      { label: "True", correct: answer },
      { label: "False", correct: !answer },
    ];
  } else {
    if (answer !== undefined) fail("`answer` must be true or false.");
    if (options.length < 2) fail("needs at least two <Option>s.");
    choices = options.map((option) => ({
      label: option.props.children,
      correct: Boolean(option.props.correct),
    }));
  }
  const correct = choices.filter((choice) => choice.correct).length;
  if (!multiple && correct !== 1) {
    fail(`a single-choice question needs exactly one correct option, not ${correct}.`);
  }
  if (multiple && correct < 1) fail("needs at least one correct option.");
  if (items.filter(isA(Explanation)).length !== 1) {
    fail("needs exactly one <Explanation>.");
  }
  return choices;
}

export function Question({ children, multiple = false, answer, number }) {
  const { report } = useContext(QuizContext);
  const id = useId();
  const feedbackRef = useRef(null);
  const items = Children.toArray(children);
  const choices = choicesOf(items, { multiple, answer }, number);
  const explanation = items.find(isA(Explanation));
  const prompt = items.filter(
    (child) => !isA(Option)(child) && !isA(Explanation)(child)
  );

  const [selected, setSelected] = useState(() => new Set());
  const [checked, setChecked] = useState(false);
  const isCorrect = choices.every(
    (choice, index) => choice.correct === selected.has(index)
  );

  const choose = (index) =>
    setSelected((was) => {
      if (!multiple) return new Set([index]);
      const next = new Set(was);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  const check = () => {
    setChecked(true);
    report(number, isCorrect);
  };

  // The Check button goes away once used, so focus moves to the feedback,
  // which a screen reader then reads out.
  useEffect(() => {
    if (checked) feedbackRef.current?.focus();
  }, [checked]);

  return (
    <div
      className={styles.question}
      role="group"
      aria-labelledby={`${id}-prompt`}
      aria-describedby={`${id}-hint`}
    >
      <div id={`${id}-prompt`} className={styles.prompt}>
        <p className={styles.number}>Question {number}</p>
        {prompt}
      </div>
      <p id={`${id}-hint`} className={styles.hint}>
        {multiple ? "Select all that apply." : "Select one."}
      </p>
      <ul className={styles.options}>
        {choices.map((choice, index) => {
          const chosen = selected.has(index);
          return (
            <li key={index}>
              <label
                className={clsx(
                  styles.option,
                  chosen && styles.chosen,
                  checked && choice.correct && styles.correct,
                  checked && chosen && !choice.correct && styles.wrong
                )}
              >
                <input
                  type={multiple ? "checkbox" : "radio"}
                  name={`${id}-choice`}
                  checked={chosen}
                  disabled={checked}
                  onChange={() => choose(index)}
                />
                <span className={styles.label}>{choice.label}</span>
                {checked && (choice.correct || chosen) && (
                  <span className={styles.tags}>
                    {choice.correct && (
                      <span className={clsx(styles.tag, styles.tagCorrect)}>
                        Correct answer
                      </span>
                    )}
                    {chosen && (
                      <span className={styles.tag}>Your answer</span>
                    )}
                  </span>
                )}
              </label>
            </li>
          );
        })}
      </ul>
      {/*
        The explanation is always in the HTML, hidden until checked, so the
        build's broken-link checker sees its links.
      */}
      <div
        ref={feedbackRef}
        tabIndex={-1}
        hidden={!checked}
        className={clsx(
          styles.feedback,
          isCorrect ? styles.feedbackCorrect : styles.feedbackWrong
        )}
      >
        {checked && (
          <p className={styles.verdict}>
            {isCorrect ? "Correct." : "Not quite."}
          </p>
        )}
        {explanation}
      </div>
      {!checked && (
        <button
          type="button"
          className={styles.check}
          disabled={selected.size === 0}
          onClick={check}
        >
          Check answer
        </button>
      )}
    </div>
  );
}

/** Wraps a page's <Question>s, numbers them, and keeps the score. */
export function Quiz({ children }) {
  const { metadata } = useDoc();
  const scores = useQuizScores();
  const topRef = useRef(null);
  const [attempt, setAttempt] = useState(0);
  const [results, setResults] = useState({});

  let total = 0;
  const numbered = Children.map(children, (child) =>
    isA(Question)(child)
      ? cloneElement(child, { number: ++total, key: `${attempt}-${total}` })
      : child
  );
  const answered = Object.keys(results).length;
  const score = Object.values(results).filter(Boolean).length;
  const done = total > 0 && answered === total;
  const saved = scores[metadata.id];

  useEffect(() => {
    if (done) saveScore(metadata.id, score, total);
  }, [done, metadata.id, score, total]);

  const report = (number, correct) =>
    setResults((was) => ({ ...was, [number]: correct }));

  const retake = () => {
    setResults({});
    setAttempt((n) => n + 1);
    topRef.current?.focus();
  };

  return (
    <section className={styles.quiz} aria-label="Quiz">
      <p ref={topRef} tabIndex={-1} className={styles.intro}>
        {total} questions. Your answers are checked in this browser, and your
        score is saved only here.
        {saved && !done && (
          <>
            {" "}
            Your best score so far is {saved.best} of {saved.total}.
          </>
        )}
      </p>
      <QuizContext.Provider value={{ report }}>{numbered}</QuizContext.Provider>
      <div className={styles.summary} role="status">
        {done ? (
          <>
            <p className={styles.score}>
              You scored {score} of {total}.
            </p>
            <button type="button" className={styles.retake} onClick={retake}>
              Retake the quiz
            </button>
          </>
        ) : (
          <p className={styles.progress}>
            {answered} of {total} answered
          </p>
        )}
      </div>
    </section>
  );
}
