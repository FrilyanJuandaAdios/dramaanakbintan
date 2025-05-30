"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-red-500 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/ADABLogo.png" alt="Logo" width={40} height={40} />
          <span className="text-white text-lg font-bold">Drama Anak Bintan</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#film" className="hover:text-gray-300 transition">Film</a>
          <a href="#vision" className="hover:text-gray-300 transition">Visi</a>
          <a href="#roadmap" className="hover:text-gray-300 transition">Roadmap</a>
          <a href="#komunitas" className="hover:text-gray-300 transition">Komunitas</a>
        </div>
      </div>
    </nav>
  );
}
