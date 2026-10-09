"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function RotatingWords({ words }: { words: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <span className="relative inline-flex h-[1.6em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="gradient-text font-semibold"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
