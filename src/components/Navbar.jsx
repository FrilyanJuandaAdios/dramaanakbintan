"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const menus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projectpage" },
  { name: "Programs", path: "/programpage" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto transition-all duration-500 ease-out ${
          scrolled ? "mt-3 max-w-3xl px-4" : "max-w-none px-0"
        }`}
      >
        {/* Main bar */}
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "bg-black/75 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 shadow-xl shadow-black/40"
              : "bg-transparent px-6 py-5"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/ADABLogoNew.png"
              alt="Drama Anak Bintan"
              width={scrolled ? 84 : 108}
              height={40}
              className="object-contain transition-all duration-500"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === menu.path
                    ? "text-white bg-white/12"
                    : "text-white/55 hover:text-white hover:bg-white/8"
                }`}
              >
                {menu.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-4 py-1.5 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-full transition-colors ${
                pathname === "/contact" ? "bg-red-600" : ""
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/8"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`mt-2 rounded-3xl border border-white/10 backdrop-blur-2xl px-3 py-3 space-y-0.5 ${
              scrolled ? "bg-black/80" : "bg-black/90 mx-2"
            }`}
          >
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className={`flex items-center w-full px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                  pathname === menu.path
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white hover:bg-white/6"
                }`}
              >
                {menu.name}
              </Link>
            ))}
            <div className="pt-1 px-1">
              <Link
                href="/contact"
                className="flex justify-center w-full py-3 rounded-2xl bg-red-500 hover:bg-red-600 text-white text-sm font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
