"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Happy Shopper 😊",
    text: "RMart has the best service and products. I found everything I needed at great prices!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 2,
    name: "Satisfied Customer 👍",
    text: "Amazing selection and fast delivery. I love shopping here!",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 3,
    name: "Loyal Client 🛍️",
    text: "Great deals and excellent customer support. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=80&h=80&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="w-full py-12 px-6 bg-blue-300/80 dark:bg-blue-800 rounded-4xl transition hover:bg-blue-400/80 mb-20">
      {/* Content wrapper to constrain width and center */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-8 text-blue-900 dark:text-blue-100">
          What Our Customers Say
        </h2>

        <div className="flex flex-col items-center space-y-6">
          {/* Circular Image */}
          <img
            src={current.image}
            alt={current.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-blue-900 shadow-lg"
          />

          {/* Testimonial Text */}
          <blockquote className="text-lg italic text-blue-900 dark:text-blue-100 max-w-xl transition-opacity duration-700 opacity-100">
            “{current.text}”
          </blockquote>

          {/* Customer Name */}
          <p className="mt-2 font-medium text-blue-800 dark:text-blue-200">
            – {current.name}
          </p>
        </div>

        {/* Indicators */}
        <div className="mt-8 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-colors ${
                i === index
                  ? "bg-blue-900 dark:bg-blue-300"
                  : "bg-blue-600 dark:bg-blue-700"
              }`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
