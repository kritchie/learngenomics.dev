import React, { useEffect } from "react";
import clsx from "clsx";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import {
  markPageRead,
  useGuideMap,
} from "@site/src/components/GuideMap/progress";
import styles from "./styles.module.css";

/**
 * Marks the current page read once its end (the prev/next nav) is on screen.
 * Quiz pages track a score instead (see src/components/Quiz/scores.js).
 */
function useMarkReadAtEnd(id, enabled) {
  useEffect(() => {
    if (!enabled) return undefined;
    const end =
      document.querySelector(".pagination-nav") ||
      document.querySelector(".theme-doc-footer");
    if (!end || !("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        markPageRead(id);
        observer.disconnect();
      }
    });
    observer.observe(end);
    return () => observer.disconnect();
  }, [id, enabled]);
}

/**
 * Wraps the breadcrumbs, tags the page with its chapter (which colors the
 * rule under the h1; front matter outside the chapters gets an ink rule), and
 * records the page as read. The chromosome itself
 * lives in GuideBand, above the sidebar and article.
 */
export default function GuideLocator({ children }) {
  const { metadata, frontMatter } = useDoc();
  const { pages, quizzes } = useGuideMap();
  const current =
    pages.find((page) => page.id === metadata.id) ||
    quizzes.find((quiz) => quiz.id === metadata.id);
  const chapterIndex = current?.chapterIndex;

  useMarkReadAtEnd(metadata.id, !frontMatter.quiz);

  return (
    <div
      className={clsx("lg-locator", styles.locator)}
      data-chapter={chapterIndex !== undefined ? chapterIndex + 1 : undefined}
    >
      {children}
    </div>
  );
}
