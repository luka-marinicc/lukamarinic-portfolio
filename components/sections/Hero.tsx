"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-neutral-950"
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4 text-neutral-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I build fast, modern websites.
      </motion.h1>
      <p className="text-neutral-400 max-w-md sm:max-w-xl mb-8 text-sm sm:text-base">
        React, Next.js, Tailwind, and ShadCN — handcrafted for performance and
        polish.
      </p>
      <a href="#packages">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-5 text-sm sm:text-base">
          View Packages
        </Button>
      </a>
    </motion.section>
  );
}
