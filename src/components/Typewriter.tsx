"use client";
import React, { useEffect, useState } from "react";

type Props = {
  prefix?: string; // text shown without special highlight
  highlight?: string; // highlighted part
  speed?: number; // ms per character
  pause?: number; // ms to wait when full
  className?: string;
};

export default function Typewriter({
  prefix = "Breathe ",
  highlight = "Cleaner Air",
  speed = 80,
  pause = 900,
  className = "",
}: Props) {
  const full = prefix + highlight;
  const [pos, setPos] = useState(0);

  useEffect(() => {
    let t: number | undefined;

    if (pos < full.length) {
      t = window.setTimeout(() => setPos((p) => p + 1), speed);
    } else {
      // finished typing -> pause then reset
      t = window.setTimeout(() => {
        setPos(0);
      }, pause);
    }

    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [pos, full.length, speed, pause]);

  const displayedPrefix = full.slice(0, Math.min(pos, prefix.length));
  const displayedHighlight = pos > prefix.length ? full.slice(prefix.length, pos) : "";

  return (
    <span aria-live="polite" className={className}>
      <span>{displayedPrefix}</span>
      <span className="text-fancy">{displayedHighlight}</span>
      <span className="inline-block w-1 align-middle animate-pulse-slow">{pos < full.length ? "█" : ""}</span>
    </span>
  );
}
