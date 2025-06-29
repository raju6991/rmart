"use client";

import { MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-300 bg-white text-sm text-gray-600 py-2 px-10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Left Side: Location */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-600">
            Store Location: Brisbane City 4000, QLD, AU
          </span>
        </div>

        {/* Right Side: Language, Currency, Sign In */}
        <div className="flex items-center gap-6 text-gray-600">
          <span className="cursor-pointer">ENG ▾</span>
          <span className="cursor-pointer">AUD ▾</span>
          <span className="border-l pl-4 cursor-pointer">
            Sign In / Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
