"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // 🔥 pakai icon lucide

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkText, setDarkText] = useState(false);
  const [open, setOpen] = useState(false); // 🔥 state menu mobile
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const theme = entry.target.getAttribute("data-theme");
          if (entry.isIntersecting) {
            setDarkText(theme === "light");
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll("section").forEach((sec) => {
      observer.observe(sec);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Programs", path: "/programs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Komunitas", path: "/komunitas" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-red-500 bg-opacity-40 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/ADABLogoNew.png"
            alt="Drama Anak Bintan"
            width={132}
            height={80}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex items-center space-x-8 font-medium ${
            darkText ? "text-gray-900" : "text-white"
          }`}
        >
          {menus.map((menu) => (
            <div key={menu.name} className="relative">
              <Link href={menu.path} className="hover:text-red-300 transition">
                {menu.name}
              </Link>
              {pathname === menu.path && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full transition-opacity duration-300"></span>
              )}
            </div>
          ))}

          {/* Join Now button */}
          <Link
            href="/join"
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`md:hidden flex flex-col items-center space-y-6 py-6 bg-black/90 backdrop-blur-md font-medium ${
            darkText ? "text-gray-900" : "text-white"
          }`}
        >
          {menus.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className="hover:text-red-400 transition"
              onClick={() => setOpen(false)}
            >
              {menu.name}
            </Link>
          ))}
          <Link
            href="/join"
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={() => setOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
}
