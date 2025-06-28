import Link from "next/link";

const categories = [
  { name: "Electronics", slug: "electronics" },
  { name: "Clothing", slug: "clothing" },
  { name: "Home & Kitchen", slug: "home-kitchen" },
];

export default function Categories() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Featured Categories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="bg-rose-50 dark:bg-rose-800 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
            <p className="text-sm text-muted-foreground">
              Shop the best in {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
