"use client"; // Pastikan ini ada jika menggunakan App Router

import React from "react";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import testimonials from "../data/testimonials"; // Pastikan path sesuai

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">What People Say</h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay={false} />
    </div>
  );
}
