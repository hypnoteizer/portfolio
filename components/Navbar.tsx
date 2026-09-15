"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/", available: true },
  { label: "About", href: "/about", available: true },
  { label: "Projects", href: "/projects", available: true },
  { label: "Research", href: "/research", available: true },
  { label: "CAD Portfolio", href: "/cad", available: true },
  { label: "Notebook", href: "/notebook", available: true },
  { label: "Blog", href: "/blog", available: true },
  { label: "Resume", href: "/resume", available: true },
  { label: "Contact", href: "/contact", available: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-200">
      <div className="flex items-center justify-between px-8 py-4">
        <span className="font-semibold text-lg">Orkan Selcuk</span>

        {/* Masaüstü menü */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.available ? (
                <Link href={item.href} className="text-sm hover:text-blue-600">
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-zinc-400 cursor-not-allowed">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobil hamburger butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
          aria-label="Menüyü aç/kapat"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobil açılır menü */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-4">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.available ? (
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-zinc-400 cursor-not-allowed">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}