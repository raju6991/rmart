export default function Newsletter() {
  return (
    <section className="py-12 px-6 text-center bg-white dark:bg-blue-900">
      <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
      <p className="mb-4">Subscribe to our newsletter for the latest offers</p>
      <form className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md border w-64 dark:bg-blue-800"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
