"use client";
import { Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projectpage" },
  { name: "Programs", path: "/programpage" },
  { name: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-red-600 rounded-full blur-3xl opacity-25 pointer-events-none" />

      {/* Nav row */}
      <div className="relative z-10 w-full px-6 md:px-16 py-5 border-b border-white/10">
        <nav className="flex flex-wrap justify-end items-center gap-5 text-sm font-medium text-white">
          {links.map((l) => (
            <Link key={l.name} href={l.path} className="hover:text-red-400 transition-colors">
              {l.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-1.5 bg-red-600 hover:bg-red-700 rounded-full transition text-white text-sm font-semibold"
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Bottom */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-16 py-10 gap-8">
        {/* Logo */}
        <div className="flex items-end">
          <Image
            src="/ADABLogoNew.png"
            alt="Drama Anak Bintan"
            width={320}
            height={320}
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col md:items-end gap-4 text-white">
          <div className="flex gap-4">
            <a href="https://youtube.com/@adabproductions" target="_blank" rel="noopener noreferrer">
              <Youtube size={24} className="hover:text-red-500 transition" />
            </a>
            <a href="https://instagram.com/patah_pulih" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-red-500 transition" />
            </a>
          </div>

          <div className="text-sm text-gray-400 md:text-right space-y-1">
            <p>dramaanakbintan@gmail.com</p>
            <p>+62 858 9388 3536</p>
            <p>Bintan, Kepulauan Riau, Indonesia</p>
          </div>

          <div className="text-xs text-gray-600 md:text-right space-y-0.5 mt-2">
            <p>© Drama Anak Bintan 2025. All rights reserved.</p>
            <p className="text-gray-500">Experience by Frilyan Juanda Adios</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
