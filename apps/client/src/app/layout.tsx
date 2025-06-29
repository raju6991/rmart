// apps/client/app/layout.tsx
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTopButton from "@/components/scroll/scroll-to-top";
import TopBar from "@/components/navbar/topbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground",
          inter.className
        )}
      >
        <ThemeProvider>
          <TopBar />
          <Navbar />
          <main className="min-h-[80vh] px-4 py-6">{children}</main>
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
