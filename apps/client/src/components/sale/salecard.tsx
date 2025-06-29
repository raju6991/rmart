"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SaleCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      <SaleOfMonthCard />
      <FreeProductCard />
      <OfferProductCard />
    </div>
  );
}

function SaleOfMonthCard() {
  return (
    <div className="w-full h-[536px] relative overflow-hidden">
      <Image
        src="/sale/banner1.png"
        alt="Sale Banner"
        fill
        className="object-cover"
      />
      <Card className="absolute top-0 left-0 w-full h-full bg-black/30 text-white flex items-center justify-start !rounded-none">
        <CardContent className="text-center space-y-4 px-4">
          <p className="uppercase tracking-widest text-sm font-semibold text-white/80">
            Best Deals
          </p>
          <h1 className="text-3xl font-bold">Sale of the Month</h1>

          <div className="flex justify-center gap-4 text-white text-lg font-medium">
            <TimeBox label="Days" value="00" />
            <span>:</span>
            <TimeBox label="Hours" value="02" />
            <span>:</span>
            <TimeBox label="Mins" value="18" />
            <span>:</span>
            <TimeBox label="Secs" value="46" />
          </div>

          <Button
            variant="ghost"
            className="text-green-500 text-lg font-semibold hover:underline"
          >
            Shop Now <span className="ml-1">→</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function FreeProductCard() {
  return (
    <div className="w-full h-[536px] relative overflow-hidden">
      <Image
        src="/sale/banner2.png"
        alt="Sale Banner"
        fill
        className="object-cover"
      />
      <Card className="absolute top-0 left-0 w-full h-full bg-black/30 text-white flex items-center justify-start !rounded-none">
        <CardContent className="text-center space-y-4 px-4">
          <p className="uppercase tracking-widest text-sm font-semibold text-white">
            85% off
          </p>
          <h1 className="text-3xl font-bold">Low-fate Meat</h1>
          <p className="uppercase tracking-widest text-sm font-semibold text-white">
            Started at{" "}
            <span className="font-bold text-amber-600/80">$79.99</span>
          </p>
          <Button
            variant="ghost"
            className="text-green-500 text-lg font-semibold hover:underline"
          >
            Shop Now <span className="ml-1">→</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

function OfferProductCard() {
  return (
    <div className="w-full h-[536px] relative overflow-hidden">
      <Image
        src="/sale/banner3.png"
        alt="Sale Banner"
        fill
        className="object-cover"
      />
      <Card className="absolute top-0 left-0 w-full h-full bg-black/30 text-white flex items-center justify-start !rounded-none">
        <CardContent className="text-center space-y-4 px-4">
          <p className="uppercase tracking-widest text-sm font-semibold text-white">
            Summer Sale
          </p>
          <h1 className="text-3xl font-bold text-black/80">100% Fresh Fruit</h1>
          <p className="uppercase tracking-widest text-sm font-semibold text-white">
            up to{" "}
            <span className="font-bold bg-black/80 m-2 p-2"> 65% off</span>
          </p>
          <Button
            variant="ghost"
            className="bg-white text-green-500 text-md font-semibold hover:bg-green-900/80 hover:text-white"
          >
            Shop Now <span className="ml-1">→</span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Timer Box component
function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs uppercase tracking-wide text-white/70">
        {label}
      </div>
    </div>
  );
}
