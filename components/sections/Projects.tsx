"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PROJECTS = [
  {
    title: "Client Project Dashboard",
    desc: "Full-stack MERN dashboard with JWT auth, charts, and user roles.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437f0",
    tech: ["MERN", "Recharts", "JWT"],
    live: "#",
    code: "#",
  },
  {
    title: "E-Commerce Site",
    desc: "Custom storefront built with Next.js, Tailwind, and Stripe checkout.",
    img: "https://images.unsplash.com/photo-1556741533-f6acd647d2fb",
    tech: ["Next.js", "Stripe", "Sanity"],
    live: "#",
    code: "#",
  },
  {
    title: "AI Agent",
    desc: "Chat-based assistant built on OpenAI API with React frontend.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    tech: ["React", "Express", "OpenAI"],
    live: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-neutral-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-100">
          Projects
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          Real builds and live templates — showing code quality, performance,
          and design consistency across all tiers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800/80 transition-all duration-300 hover:shadow-[0_8px_25px_-8px_rgba(0,0,0,0.5)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-300 mb-4 leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-auto">
                <Link
                  href={p.live}
                  className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Live
                </Link>
                <Link
                  href={p.code}
                  className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  Code
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
