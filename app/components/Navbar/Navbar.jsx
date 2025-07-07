"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#19222D] border-b border-[#C6F10E]/30 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-[#C6F10E] text-2xl font-bold">Dhika Dev</h1>
        <div className="flex items-center gap-6 text-black dark:text-white text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <button
            onClick={toggleTheme}
            className="text-sm px-3 py-1 bg-[#C6F10E] text-black rounded-md font-semibold"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
