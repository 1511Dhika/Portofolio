'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white dark:bg-[#19222D] border-b border-[#C6F10E]/30 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[#C6F10E] text-2xl font-bold">Dhika Dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-black dark:text-white text-lg font-medium">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>

        {/* Light Mode button - Always Visible */}
        <button
          onClick={toggleTheme}
          className="text-sm px-3 py-1 bg-[#C6F10E] text-black rounded-md font-semibold ml-4"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden text-black dark:text-white ml-4 z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu (slide down) */}
      <div
        className={`md:hidden bg-white dark:bg-[#19222D] overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-base font-medium text-black dark:text-white">
          <Link href="#about" onClick={toggleMenu}>About</Link>
          <Link href="#projects" onClick={toggleMenu}>Projects</Link>
          <Link href="#contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
