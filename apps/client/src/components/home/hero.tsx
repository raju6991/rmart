export default function Hero() {
  return (
    <section
      className="relative h-[400px] w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative bg-white/90 dark:bg-blue-950/80 p-8 rounded-lg text-center max-w-xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-white mb-4">
          Welcome to RMart 🛒
        </h1>
        <p className="text-lg mb-6 text-blue-700 dark:text-blue-300">
          Discover unbeatable deals on your favorite products.
        </p>
        <a
          href="/categories"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Start Shopping
        </a>
      </div>
    </section>
  );
}
