"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.currentTarget);

    await fetch("https://formspree.io/f/mdkpavyp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setStatus("sent");
    e.currentTarget.reset();
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-neutral-950 text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-neutral-100">
        Let’s work together
      </h2>
      <p className="text-neutral-400 text-sm sm:text-base mb-10 max-w-md">
        Fill out the form below or email me directly at{" "}
        <span className="text-emerald-400 font-medium">
          luka.marinič@example.com
        </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 text-left"
      >
        <input
          required
          name="name"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:ring-2 focus:ring-emerald-500 text-neutral-100"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:ring-2 focus:ring-emerald-500 text-neutral-100"
        />
        <textarea
          required
          name="message"
          placeholder="Message"
          rows={4}
          className="w-full px-4 py-3 rounded-md bg-neutral-900 border border-neutral-700 focus:ring-2 focus:ring-emerald-500 text-neutral-100 resize-none"
        />
        <Button
          type="submit"
          disabled={status !== "idle"}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-sm sm:text-base"
        >
          {status === "loading"
            ? "Sending..."
            : status === "sent"
            ? "Sent!"
            : "Send Message"}
        </Button>
      </form>
    </motion.section>
  );
}
