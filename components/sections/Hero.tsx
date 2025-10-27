"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        I build fast, modern websites.
      </motion.h1>
      <motion.p
        className="text-neutral-400 max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        React, Next.js, Tailwind, and ShadCN — handcrafted for performance and
        polish.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/packages">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
          >
            View Packages
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
