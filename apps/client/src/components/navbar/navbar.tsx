"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="bg-white dark:bg-blue-950 border-b border-blue-200 dark:border-blue-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-800 dark:text-blue-200"
        >
          🛒 RMart
        </Link>

        <NavMenu />

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 w-40 md:w-60 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
            />
          </div>

          {mounted && (
            <button
              onClick={() =>
                setTheme(currentTheme === "dark" ? "light" : "dark")
              }
              className="ml-4 px-3 py-1 rounded-md bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-blue-100 hover:bg-blue-200 transition"
            >
              {currentTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
