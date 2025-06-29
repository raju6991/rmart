"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Clothing", href: "/categories/clothing" },
  { name: "Home & Kitchen", href: "/categories/home-kitchen" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "My Account", href: "/account" },
  { name: "Cart", href: "/cart" },
];

export default function NavMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex flex-wrap gap-4">
      {links.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={`text-sm font-medium px-3 py-2 rounded transition ${
            isActive(href)
              ? "bg-white text-green-700 font-semibold"
              : "text-white hover:text-green-200"
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
