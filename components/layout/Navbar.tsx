"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <Link href="/" className="font-semibold text-lg">
          Luka Marinič
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-neutral-300 hover:text-emerald-400"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-800 bg-neutral-950"
          >
            <div className="flex flex-col px-6 py-3 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="py-2 text-neutral-300 hover:text-emerald-400"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
