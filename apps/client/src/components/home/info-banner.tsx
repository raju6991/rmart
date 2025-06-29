"use client";
import Image from "next/image";

export const InfoBanner = () => {
  return (
    <div className="bg-white dark:bg-[#0d1f16] mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-gray-800 shadow-md rounded-lg mx-5 p-4">
      {/* Free Shipping */}
      <div className="flex items-center p-3">
        <div className="mr-3 text-gray-800 dark:text-green-700">
          <Image
            src="/icons/delivery-truck.svg"
            alt="Free Shipping Icon"
            width={32}
            height={32}
            className="dark:filter dark:brightness-90 dark:saturate-[.25]"
          />
        </div>
        <div>
          <p className="font-bold text-sm md:text-base dark:text-white">
            Free Shipping
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            Free shipping on all your orders
          </p>
        </div>
      </div>

      {/* Customer Support */}
      <div className="flex items-center p-3">
        <div className="mr-3 text-gray-800 dark:text-green-700">
          <Image
            src="/icons/headphones.svg"
            alt="24/7 Support Icon"
            width={32}
            height={32}
            className="dark:filter dark:brightness-90 dark:saturate-[.25]"
          />
        </div>
        <div>
          <p className="font-bold text-sm md:text-base dark:text-white">
            Customer Support 24/7
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            Instant access to support
          </p>
        </div>
      </div>

      {/* Secure Payment */}
      <div className="flex items-center p-3">
        <div className="mr-3 text-gray-800 dark:text-green-700">
          <Image
            src="/icons/shopping-bag.svg"
            alt="Secure Payment Icon"
            width={32}
            height={32}
            className="dark:filter dark:brightness-90 dark:saturate-[.25]"
          />
        </div>
        <div>
          <p className="font-bold text-sm md:text-base dark:text-white">
            100% Secure Payment
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            We ensure your money is safe
          </p>
        </div>
      </div>

      {/* Money-Back Guarantee */}
      <div className="flex items-center p-3">
        <div className="mr-3 text-gray-800 dark:text-green-700">
          <Image
            src="/icons/package.svg"
            alt="Money-Back Guarantee Icon"
            width={32}
            height={32}
            className="dark:filter dark:brightness-90 dark:saturate-[.25]"
          />
        </div>
        <div>
          <p className="font-bold text-sm md:text-base dark:text-white">
            30 Days Money-Back
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
            Hassle-free return policy
          </p>
        </div>
      </div>
    </div>
  );
};
