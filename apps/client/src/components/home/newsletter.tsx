"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <section
      className="relative m-5 bg-cover bg-center bg-no-repeat h-[328px] flex items-center justify-end px-6 md:px-12 rounded-2xl overflow-hidden"
      style={{ backgroundImage: "url('/newsletter.png')" }}
    >
      {/* Dark overlay with matching rounded corners */}
      <div className="absolute inset-0 bg-black/50 z-0 rounded-2xl" />

      {/* Right-aligned content */}
      <div className="relative z-10 max-w-md flex flex-col justify-center items-start text-white">
        <p className="text-md font-semibold mb-2 uppercase">Summer Sale</p>
        <h2 className="mb-4 text-4xl font-bold">
          <span className="text-amber-500">35%</span> OFF
        </h2>
        <p className="text-sm font-semibold mb-6">
          Free on all your order, Free Shipping and 30 days money-back guarantee
        </p>

        <Button
          asChild
          variant="default"
          className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-3xl font-semibold transition"
        >
          <Link href="/shop">Shop now →</Link>
        </Button>
      </div>
    </section>
  );
}
