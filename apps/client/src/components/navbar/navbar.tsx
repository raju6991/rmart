"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import NavMenu from "./nav-menu";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="w-full">
      {/* Top Logo + Search + Phone */}
      <div className="bg-white dark:bg-[#0d1f16] border-b dark:border-green-900 px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 ">
        <Link
          href="/"
          className="text-2xl font-bold text-green-700 dark:text-green-300"
        >
          🌿 RMart
        </Link>

        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-300" />
          <Input
            placeholder="Search for products..."
            className="pl-10 w-full bg-gray-100 dark:bg-[#12291c] text-green-900 dark:text-white placeholder:text-green-900 dark:placeholder:text-green-400"
          />
        </div>

        <div className="text-sm text-gray-700 dark:text-white whitespace-nowrap">
          📞 <strong>(+61) 466 066 068</strong>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 dark:bg-[#102418] px-10 py-3 text-white flex flex-wrap gap-4 text-sm font-medium">
        <NavMenu />
        {mounted && (
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="ml-auto px-3 py-1 rounded-md bg-gray-700 dark:bg-gray-900 hover:bg-green-500/50 dark:hover:bg-gray-700 transition"
          >
            {currentTheme === "dark" ? "☀️ " : "🌙 "}
          </button>
        )}
      </nav>
    </header>
  );
}
