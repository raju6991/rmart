"use client";

import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-300 bg-white text-sm text-gray-600 py-2 px-6 md:px-10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Left Side: Location */}
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-gray-500" />
          <span className="text-gray-600">
            Store Location: Brisbane City 4000, QLD, AU
          </span>
        </div>

        {/* Right Side: Language, Currency, Sign In */}
        <div className="flex items-center gap-4 text-gray-600">
          <Button
            variant="ghost"
            className="px-1 h-auto text-gray-600 hover:text-black"
          >
            ENG ▾
          </Button>
          <Button
            variant="ghost"
            className="px-1 h-auto text-gray-600 hover:text-black"
          >
            AUD ▾
          </Button>

          <Separator orientation="vertical" className="h-4" />

          <Button
            variant="ghost"
            className="px-1 h-auto text-gray-600 hover:text-black"
          >
            Sign In / Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
