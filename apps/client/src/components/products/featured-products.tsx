import Link from "next/link";
import { ArrowRight, Star, ShoppingBag } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    originalPrice: 20.99,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: 20.0,
    originalPrice: null,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Chinese cabbage",
    price: 12.0,
    originalPrice: null,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 9.0,
    originalPrice: null,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Eggplant",
    price: 34.0,
    originalPrice: null,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <Link
          href="/products"
          className="flex items-center text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 transition-colors"
        >
          View All
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map(({ id, name, price, originalPrice, rating, image }) => (
          <div
            key={id}
            className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:shadow-green-500/30"
          >
            <Link href={`/products/${id}`} className="block">
              <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="font-semibold text-sm group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-1">
                {name}
              </h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    ${price.toFixed(2)}
                  </span>
                  {originalPrice && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      ${originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-green-200 transition-colors">
                  <Image
                    src="/icons/shopping-bag.svg"
                    alt="Secure Payment Icon"
                    width={32}
                    height={32}
                    className="dark:filter dark:brightness-90 dark:saturate-[.25]"
                  />
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
