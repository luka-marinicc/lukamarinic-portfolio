"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/mdkpavyp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setStatus("sent");
    form.reset();
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 bg-neutral-950 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-2xl mb-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-100">
          Let’s work together
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base">
          Fill out the form below or email me directly at{" "}
          <span className="text-emerald-400 font-medium">
            luka.marinič@example.com
          </span>
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md flex flex-col gap-4 text-left"
      >
        <div>
          <label className="block text-sm text-neutral-300 mb-1">Name</label>
          <input
            required
            name="name"
            type="text"
            className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-neutral-100"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-300 mb-1">Email</label>
          <input
            required
            name="email"
            type="email"
            className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-neutral-100"
          />
        </div>

        <div>
          <label className="block text-sm text-neutral-300 mb-1">Message</label>
          <textarea
            required
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-neutral-100 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={status !== "idle"}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-sm sm:text-base transition-colors"
        >
          {status === "loading"
            ? "Sending..."
            : status === "sent"
            ? "Sent!"
            : "Send Message"}
        </Button>
      </motion.form>
    </section>
  );
}
