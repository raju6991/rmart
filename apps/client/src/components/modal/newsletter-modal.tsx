"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasHidden = localStorage.getItem("hideNewsletter");
    if (hasHidden) return;

    let triggered = false;

    const showDialog = () => {
      if (!triggered) {
        setOpen(true);
        triggered = true;
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 100) {
        showDialog(); // trigger on scroll down > 100px
      }
    };

    const timer = setTimeout(() => {
      showDialog(); // trigger on 30s timeout
    }, 30000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dontShowAgain) {
      localStorage.setItem("hideNewsletter", "true");
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl p-0">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto">
            <Image
              src="/bannar.png"
              alt="Newsletter"
              fill
              className="object-cover rounded-l-md"
            />
          </div>

          {/* Content section */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 p-6 space-y-4"
          >
            <DialogHeader className="space-y-2">
              <DialogTitle className="text-2xl font-bold">
                Subscribe to Our{" "}
                <span className="text-green-600">Newsletter</span>
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Subscribe to our newsletter and{" "}
                <span className="text-yellow-500 font-semibold">
                  Save your 20% money
                </span>{" "}
                with discount code today.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Subscribe
              </Button>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Checkbox
                id="dont-show"
                checked={dontShowAgain}
                onCheckedChange={(val) => setDontShowAgain(!!val)}
              />
              <Label
                htmlFor="dont-show"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Do not show this window
              </Label>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
