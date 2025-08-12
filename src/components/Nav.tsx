"use client";

import React, { useState } from "react";
import { CircleX, Text } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { title: "خانه", href: "/" },
  { title: "دروس کتاب", href: "/lists" },
  { title: "مشارکت", href: "/participation" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 px-6 sm:px-16 py-4 bg-neutral-100/90 backdrop-blur-sm shadow-sm z-50 text-black flex items-center justify-between">
      <div className="md:hidden relative flex items-center">
        <button
          className="p-2 rounded-lg hover:bg-neutral-200 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CircleX size={22} /> : <Text size={22} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-10 right-2 w-64 border-1 border-gray bg-white shadow-xl rounded-lg overflow-hidden border border-neutral-200"
            >
              {navigation.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 text-sm hover:bg-neutral-100 transition-colors duration-150"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0">
        <Logo className="w-auto h-auto" />
      </div>

      <div className="hidden md:flex gap-8 text-sm font-medium">
        {navigation.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative hover:text-blue-600 transition-colors duration-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            {item.title}
          </Link>
        ))}
      </div>

      <Link
        href="/1"
        className="text-blue-600 text-sm md:rounded-full md:text-white md:bg-blue-800 md:px-5 md:py-2 hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        درس یک
      </Link>
    </nav>
  );
}

export default Nav;
