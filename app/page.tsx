"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Projects } from "@/components/sections/Projects";
// import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Hero />
      <Packages />
      <Projects />
      {/* <About /> */}
      <Contact />
    </motion.div>
  );
}
