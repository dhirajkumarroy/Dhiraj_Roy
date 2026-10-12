"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function TypewriterRole({ texts }: { texts: string[] }) {
  const normalizedTexts = texts.map((text) =>
    text.endsWith(".") ? text : `${text}.`,
  );
  const textKey = normalizedTexts.join("\u0000");
  const firstText = normalizedTexts[0] ?? "";
  const reserveText = normalizedTexts.reduce(
    (longest, text) =>
      Array.from(text).length > Array.from(longest).length ? text : longest,
    firstText,
  );
  const [displayedText, setDisplayedText] = useState(firstText);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const sequence = textKey.split("\u0000").filter(Boolean);
    if (sequence.length === 0) return;

    let textIndex = 0;
    let length = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const letters = Array.from(sequence[textIndex]);
      length += deleting ? -1 : 1;
      setDisplayedText(letters.slice(0, length).join(""));

      let delay = deleting ? 45 : 85;
      if (length === letters.length) {
        deleting = true;
        delay = 1800;
      } else if (length === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % sequence.length;
        delay = 450;
      }

      timeout = setTimeout(tick, delay);
    }

    // Keep the complete title in the server-rendered HTML, then begin typing
    // after hydration. Reserved text prevents the surrounding layout jumping.
    timeout = setTimeout(() => {
      setDisplayedText("");
      timeout = setTimeout(tick, 85);
    }, 200);

    return () => clearTimeout(timeout);
  }, [textKey, reducedMotion]);

  return (
    <span className="hero-role typewriter-role">
      <span className="sr-only">{normalizedTexts.join(" ")}</span>
      <span className="typewriter-reserve gradient-text" aria-hidden="true">
        {reserveText}
        <span className="typewriter-caret" />
      </span>
      <span className="typewriter-animated gradient-text" aria-hidden="true">
        {displayedText}
        <span className="typewriter-caret" />
      </span>
    </span>
  );
}
