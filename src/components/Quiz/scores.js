import { useEffect, useState } from "react";

const STORAGE_KEY = "learngenomics:quiz-scores";
const CHANGE_EVENT = "learngenomics:quiz-scores-change";

/** Quiz results by doc id: { score, total, best }, stored only in this browser. */
function loadScores() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return stored && typeof stored === "object" && !Array.isArray(stored)
      ? stored
      : {};
  } catch (e) {
    return {};
  }
}

/** Records a finished attempt. `best` keeps the highest score so far. */
export function saveScore(id, score, total) {
  const scores = loadScores();
  const previous = scores[id];
  const best =
    previous && previous.total === total
      ? Math.max(previous.best ?? 0, score)
      : score;
  scores[id] = { score, total, best };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  } catch (e) {
    // Storage can be unavailable (private mode, quotas); scores are optional.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function clearScores() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // See saveScore.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useQuizScores() {
  const [scores, setScores] = useState({});
  useEffect(() => {
    const sync = () => setScores(loadScores());
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(CHANGE_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(CHANGE_EVENT, sync);
    };
  }, []);
  return scores;
}
