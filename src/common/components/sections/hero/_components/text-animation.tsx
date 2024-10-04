"use client";
import { motion, useMotionValue } from "framer-motion";
import React from "react";

export interface ITextAnimationProps {
  delay: number;
  baseText: string;
}

export default function TextAnimation({
  delay,
  baseText,
}: ITextAnimationProps) {
  const count = useMotionValue(0);

  return (
    <motion.span
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      className="mb-10 h-64 max-w-96 text-start"
    >
      <motion.span className="text-[2rem] font-extrabold lg:text-[3rem]">{baseText}</motion.span>
      <br />
      <motion.span
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className="mb-10 text-start text-[28px] lg:text-[2rem]"
      >
        Full Stack Developer - React, Node.js, Python
      </motion.span>
    </motion.span>
  );
}
