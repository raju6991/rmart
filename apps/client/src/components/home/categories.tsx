import Link from "next/link";
import { Cpu, Shirt, Home } from "lucide-react";

const categories = [
  { name: "Electronics", slug: "electronics", icon: Cpu },
  { name: "Clothing", slug: "clothing", icon: Shirt },
  { name: "Home & Kitchen", slug: "home-kitchen", icon: Home },
];

export default function Categories() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map(({ slug, name, icon: Icon }) => (
          <Link
            key={slug}
            href={`/categories/${slug}`}
            className="bg-blue-50 dark:bg-blue-800 p-6 rounded-lg shadow hover:bg-blue-100/80 transition flex items-start gap-4"
          >
            <Icon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            <div>
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground">
                Shop the best in {name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
