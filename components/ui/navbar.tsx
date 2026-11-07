"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Hobbies", href: "/hobbies" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-300 bg-pink-200/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <Code2 className="h-6 w-6 text-pink-700" />
          <span>Suarez Portfolio</span>
        </Link>

        {/* Dynamic Route Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-pink-600 text-white shadow-sm"
                    : "text-pink-950 hover:bg-pink-300/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}