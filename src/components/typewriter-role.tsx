"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function TypewriterRole({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState(text);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const letters = Array.from(text);
    let length = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      length += deleting ? -1 : 1;
      setDisplayedText(letters.slice(0, length).join(""));

      let delay = deleting ? 45 : 85;
      if (length === letters.length) {
        deleting = true;
        delay = 1800;
      } else if (length === 0) {
        deleting = false;
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
  }, [text, reducedMotion]);

  return (
    <span className="hero-role typewriter-role">
      <span className="sr-only">{text}</span>
      <span className="typewriter-reserve gradient-text" aria-hidden="true">
        {text}
        <span className="typewriter-caret" />
      </span>
      <span className="typewriter-animated gradient-text" aria-hidden="true">
        {displayedText}
        <span className="typewriter-caret" />
      </span>
    </span>
  );
}
