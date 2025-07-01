"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils"; // utility for conditional classes

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
    <NavigationMenu>
      <NavigationMenuList className="flex flex-wrap gap-4">
        {links.map(({ name, href }) => (
          <NavigationMenuItem key={name}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded transition",
                  isActive(href)
                    ? "bg-white text-green-700 font-semibold"
                    : "text-white hover:text-green-200"
                )}
              >
                {name}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
