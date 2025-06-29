"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-4 py-8 mx-5 bg-white dark:bg-[#0d1f16] dark:rounded-3xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden">
          <Image
            src="/bannar.png"
            alt="Main Banner"
            width={872}
            height={600}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60 flex flex-col justify-center px-10 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fresh & Healthy
              <br />
              Organic Food
            </h2>
            <div className="text-left border-l-2 border-green-300 pl-4 h-15">
              <p className="text-lg mb-2 tracking-wide leading-relaxed">
                <span className="text-gray-300 font-bold">Sale up to </span>
                <span className="bg-yellow-600 font-bold px-2 rounded">
                  30% OFF
                </span>
              </p>
              <p className="text-sm mb-6 tracking-wide leading-relaxed">
                Free shipping on all your order.
              </p>
            </div>
            <div className="my-8">
              <Link
                href="/shop"
                className="bg-white hover:bg-gray-100 text-green-900 px-6 py-3 rounded-3xl w-max font-semibold"
              >
                Shop now →
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative rounded-3xl overflow-hidden h-full aspect-auto">
            <Image
              src="/banner2.png"
              alt="Summer Sale"
              width={423}
              height={288}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-start justify-start p-8 text-white">
              <p className="text-sm uppercase">Summer Sale</p>
              <h3 className="text-2xl font-bold">75% OFF</h3>
              <p className="text-sm">Only Fruit & Vegetable</p>
              <Link href="/shop" className="text-green-300 font-bold mt-2">
                Shop Now →
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-full">
            <Image
              src="/banner3.png"
              alt="Best Deal"
              width={423}
              height={288}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/50 flex flex-col justify-center items-center p-6 text-white">
              <p className="text-sm uppercase">Best Deal</p>
              <h3 className="text-2xl font-bold">Deal of the Month</h3>
              <Link href="/shop" className=" text-green-300 mt-1">
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
