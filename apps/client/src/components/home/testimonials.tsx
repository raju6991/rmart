"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
  {
    id: 4,
    name: "Fresh Buyer 🌟",
    text: "The UI is simple, fast, and intuitive. Love shopping from here.",
    image:
      "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 5,
    name: "Eco Buyer 🌿",
    text: "Their packaging and product variety is top-notch. Highly reliable.",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=80&h=80&q=80",
  },
  {
    id: 6,
    name: "Repeat Buyer 🔄",
    text: "Consistently amazing experience. Wouldn’t shop anywhere else!",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328fddb7?auto=format&fit=crop&w=80&h=80&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Paginate in chunks of 3
  const pages = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    pages.push(testimonials.slice(i, i + 3));
  }

  return (
    <section className="py-12 px-6 bg-gray-100 dark:bg-green-900 mb-20 transition-colors duration-300 rounded-2xl mx-5">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mb-8 text-green-900 dark:text-green-100">
          Client Testimonials
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-opacity duration-500">
          {pages[index].map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-green-800 rounded-xl shadow p-6 flex flex-col justify-between text-left transition"
            >
              <div>
                <Image
                  src="/icons/testimonials.svg"
                  alt="Quote icon"
                  width={24}
                  height={24}
                  className="mb-2"
                />
                <blockquote className="text-sm italic text-green-900 dark:text-green-100 mb-4">
                  {testimonial.text}
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-white dark:border-green-700 shadow"
                />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-200">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-green-300">
                    Customer
                  </p>
                </div>
                <div className="ml-auto flex gap-1 text-orange-400 text-sm">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-6 gap-2">
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + pages.length) % pages.length)
            }
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-green-700 hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % pages.length)}
            className="w-10 h-10 rounded-full bg-gray-200 dark:bg-green-700 hover:bg-green-500 hover:text-white transition-colors duration-300 flex items-center justify-center"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
