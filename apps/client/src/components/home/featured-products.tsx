"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const mockProducts = [
  {
    id: 1,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Drone Camera",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
  },
];

export default function FeaturedProducts() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-800 dark:text-blue-100">
        🌟 Featured Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse p-4 rounded-lg bg-white dark:bg-blue-950 border"
              >
                <div className="h-40 bg-blue-100 dark:bg-blue-800 rounded mb-4" />
                <div className="h-4 bg-blue-200 dark:bg-blue-700 w-3/4 mb-2 rounded" />
                <div className="h-4 bg-blue-200 dark:bg-blue-700 w-1/2 rounded" />
              </div>
            ))
          : mockProducts.map((product, index) => (
              <div
                key={product.id}
                className="p-4 rounded-lg bg-white dark:bg-blue-950 border hover:shadow-lg transition"
              >
                <div className="relative w-full aspect-[4/3] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index === 0}
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold text-blue-800 dark:text-blue-100">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground">Top quality</p>
                <p className="font-semibold mt-2 text-blue-700 dark:text-blue-200">
                  ${product.price}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}
