"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PACKAGES = [
  {
    title: "Starter",
    price: "€800–1.200",
    icon: Layers,
    desc: "Perfect for small businesses needing a clean, fast website to establish online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form + map",
      "Basic SEO setup",
    ],
    accent: "border-neutral-700",
  },
  {
    title: "Business",
    price: "€2.000–3.500",
    icon: Rocket,
    desc: "For SMEs that need a custom design, CMS, and strong brand presentation.",
    features: [
      "Up to 10 pages",
      "Custom ShadCN UI design",
      "CMS (Sanity / Strapi)",
      "Newsletter + Analytics integration",
      "2 rounds of revisions",
    ],
    accent: "border-emerald-500",
  },
  {
    title: "Premium",
    price: "€4.000–8.000+",
    icon: CheckCircle2,
    desc: "Full web app or dashboard — for companies that need functionality and scalability.",
    features: [
      "MERN / Next.js + Prisma stack",
      "User auth + admin dashboard",
      "API integrations (Stripe, CRM, etc.)",
      "Performance + SEO optimization",
      "Documentation + testing included",
    ],
    accent: "border-yellow-400",
  },
];

export function Packages() {
  return (
    <motion.section
      id="packages"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 bg-neutral-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-100">
          Packages
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base">
          Transparent pricing, modern stack, and clear deliverables. Choose the
          plan that fits your business goals.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {PACKAGES.map((pkg, i) => {
          const Icon = pkg.icon;
          return (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col justify-between border ${pkg.accent} bg-neutral-900/60 hover:bg-neutral-800 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_25px_-8px_rgba(0,0,0,0.5)]`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-emerald-400" size={24} />
                    <CardTitle className="text-xl font-semibold text-neutral-100">
                      {pkg.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {pkg.desc}
                  </p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-1">
                  <ul className="space-y-2 mb-6 text-neutral-200">
                    {pkg.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2 text-sm leading-snug"
                      >
                        <CheckCircle2
                          className="text-emerald-400 min-w-[18px] shrink-0"
                          size={16}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-lg mb-4 text-neutral-300 font-bold">
                      {pkg.price}
                    </p>
                    <Link
                      aria-label={`Request ${pkg.title} package`}
                      href={`#contact`}
                    >
                      <Button
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base"
                        size="lg"
                      >
                        Request This Package
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
