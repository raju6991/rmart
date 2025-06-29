"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-5">
      <div className="bg-slate-100 py-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              Subscribe our Newsletter
            </h3>
            <p className="text-base text-slate-600 max-w-xl">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Input
              placeholder="Your email address"
              className="text-slate-700 border border-slate-200 w-full sm:w-auto"
            />
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
              Subscribe
            </Button>
            <div className="flex items-center gap-3 ml-3 text-slate-500">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-green-600" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-green-600" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-900 w-full text-white">
        <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
            {/* Brand and Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-1">
                <span role="img" aria-label="leaf">
                  🌿
                </span>
                RMart
              </h3>
              <p className="text-white mb-4">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>
              <p className="text-white font-semibold inline">(219) 555-0114</p>{" "}
              <span className="text-white">or</span>{" "}
              <a
                href="mailto:Proxy@gmail.com"
                className="text-green-400 underline"
              >
                Proxy@gmail.com
              </a>
            </div>

            {/* Footer Links */}
            {[
              {
                heading: "My Account",
                links: [
                  "My Account",
                  "Order History",
                  "Shopping Cart",
                  "Wishlist",
                ],
              },
              {
                heading: "Helps",
                links: [
                  "Contact",
                  "FAQs",
                  "Terms & Condition",
                  "Privacy Policy",
                ],
              },
              {
                heading: "Proxy",
                links: ["About", "Shop", "Product", "Track Order"],
              },
              {
                heading: "Categories",
                links: [
                  "Fruit & Vegetables",
                  "Meat & Fish",
                  "Bread & Bakery",
                  "Beauty & Health",
                ],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-white mb-3">
                  {section.heading}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="text-white/80 hover:text-green-400 cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="my-10 bg-white/20" />

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-center items-center text-lg text-white">
            <p>
              RMart eCommerce © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
