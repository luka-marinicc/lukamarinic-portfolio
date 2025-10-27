import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luka Marinič — Portfolio",
  description:
    "Modern web development and design using React, Next.js, Tailwind, and ShadCN/UI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-950 text-neutral-100`}>
        <Navbar />
        <main className="min-h-[90vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
