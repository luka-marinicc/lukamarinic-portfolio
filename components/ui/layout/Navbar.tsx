"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Packages", href: "#packages" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <a href="#home" className="font-semibold text-lg text-neutral-100">
          Luka Marinič
        </a>

        {/* desktop links */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-neutral-300 hover:text-emerald-400"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-800 bg-neutral-950"
          >
            <div className="flex flex-col px-6 py-3 space-y-2">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-neutral-300 hover:text-emerald-400"
                >
                  {l.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
