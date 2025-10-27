"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-neutral-950"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-neutral-100">
        About Me
      </h2>
      <p className="text-neutral-300 max-w-2xl leading-relaxed mb-8 text-sm sm:text-base">
        I’m Luka Marinič — a full-stack developer focused on creating fast,
        scalable, and beautiful web applications. I combine clean code with
        design precision to deliver business-ready solutions.
      </p>
      <p className="text-neutral-400 text-sm sm:text-base max-w-lg">
        My process: research → design → build → refine → deploy. Always
        data-driven, always user-first.
      </p>
    </motion.section>
  );
}
