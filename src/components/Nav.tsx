"use client";

import React, { useState } from "react";
import { CircleX, Text } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";

const navigation = [
  { title: "خانه", href: "/" },
  { title: "محصولات", href: "/products" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 px-8 py-4 sm:px-16 bg-neutral-100 text-black flex items-center justify-between relative">
      {/* Mobile Menu Button */}
      <div className="md:hidden relative flex items-center">
        <button className="mx-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <CircleX /> : <Text />}
        </button>
        {menuOpen && (
          <ul className="absolute top-8 right-2 w-48 bg-white shadow-lg rounded-md z-50">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="border-b text-sm border-neutral-200 px-4 py-3 hover:bg-neutral-100"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logo */}
      <div>
        <Logo className="w-auto h-auto" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {navigation.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="hover:text-blue-600"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Call-to-Action Button */}
      <div className="text-blue-600 text-sm md:rounded-full md:text-white md:bg-blue-800 md:px-4 md:py-1.5 hover:bg-blue-700 transition">
        <Link href="/">شروع</Link>
      </div>
    </nav>
  );
}

export default Nav;
