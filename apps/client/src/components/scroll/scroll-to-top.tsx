"use client";

export default function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
    >
      {/* Up Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
