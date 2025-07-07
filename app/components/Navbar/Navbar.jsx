"use client";

import { nav } from "framer-motion/client";
import Link from "next/link";

export default function Navbar() {
  return(
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#19222D] border-b border-[#C6F10E]/30 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-[#C6F10E] text-2xl font-bold">Dhika Dev</h1>
        <div className="space-x-6 text-white text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}