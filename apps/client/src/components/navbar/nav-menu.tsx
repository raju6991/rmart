"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const categories = [
  { name: "Electronics", href: "/categories/electronics" },
  { name: "Clothing", href: "/categories/clothing" },
  { name: "Home & Kitchen", href: "/categories/home-kitchen" },
  { name: "Offers", href: "/offers" },
];

export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-3 p-4">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={cat.href}
                      className="block text-sm font-medium text-blue-600 hover:text-blue-900 transition"
                    >
                      {cat.name}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Info</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="block text-sm text-muted-foreground hover:text-blue-600"
                  >
                    About Us
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="block text-sm text-muted-foreground hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faq"
                    className="block text-sm text-muted-foreground hover:text-blue-600"
                  >
                    FAQ
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/account"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-blue-600"
            >
              My Account
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/cart"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-blue-600"
            >
              Cart
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
