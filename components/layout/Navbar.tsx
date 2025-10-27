"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      className="flex items-center justify-between px-6 py-4 border-b border-neutral-800"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Link href="/" className="font-semibold text-lg">
        Luka Marinič
      </Link>
      <div className="flex gap-6 text-sm">
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
    </motion.nav>
  );
}
