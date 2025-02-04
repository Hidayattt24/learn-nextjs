"use client";

import React from "react";
import { Cover } from "./components/ui/cover";
import { useEffect, useState } from "react";
import Link from "next/link"; // Tambahkan Link dari Next.js

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto text-center mt-6 relative z-10 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing websites <br /> at <Cover>warp speed</Cover>
      </h1>

      {/* Tambahkan Tombol Menuju Halaman Testimonials */}
      <Link
        href="/testimonials"
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
      >
        See Testimonials
      </Link>
    </div>
  );
}
