"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  immediate?: boolean;
};

export function SplitText({ text, className, wordClassName, delay = 0, immediate = false }: SplitTextProps) {
  const words = text.split(" ");
  const anim = immediate ? { animate: { y: 0, rotate: 0 } } : { whileInView: { y: 0, rotate: 0 }, viewport: { once: true, amount: 0.6 } };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <span className="inline-block overflow-hidden pb-[.14em] align-bottom -mb-[.14em]">
              <motion.span
                className={cn("inline-block", wordClassName)}
                initial={{ y: "115%", rotate: 4 }}
                {...anim}
                transition={{ duration: 0.85, delay: delay + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
    </span>
  );
}
