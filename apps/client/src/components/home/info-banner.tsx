"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/icons/delivery-truck.svg",
    title: "Free Shipping",
    description: "Free shipping on all your orders",
  },
  {
    icon: "/icons/headphones.svg",
    title: "Customer Support 24/7",
    description: "Instant access to support",
  },
  {
    icon: "/icons/shopping-bag.svg",
    title: "100% Secure Payment",
    description: "We ensure your money is safe",
  },
  {
    icon: "/icons/package.svg",
    title: "30 Days Money-Back",
    description: "Hassle-free return policy",
  },
];

export const InfoBanner = () => {
  return (
    <div className="bg-white dark:bg-[#0d1f16] mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800 rounded-lg mx-5 p-4 shadow-md">
      {features.map((feature, index) => (
        <Card
          key={index}
          className="flex items-center bg-white dark:bg-transparent border-none shadow-none p-3"
        >
          <CardContent className="flex items-center p-0">
            <div className="mr-3">
              <Image
                src={feature.icon}
                alt={feature.title + " Icon"}
                width={32}
                height={32}
                className="dark:filter dark:brightness-90 dark:saturate-[.25]"
              />
            </div>
            <div>
              <p className="font-bold text-sm md:text-base dark:text-white">
                {feature.title}
              </p>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
