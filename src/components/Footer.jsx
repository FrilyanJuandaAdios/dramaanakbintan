"use client";
import { Youtube, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[50vh] bg-black/50 backdrop-blur-lg border-t border-white/10 overflow-hidden">
      {/* Bulatan merah blur di belakang */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-40" />

      {/* Bagian atas: Navigation */}
      <div className="w-full px-6 md:px-16 py-6 border-b border-white/10 relative z-10">
        <nav className="flex flex-wrap justify-end gap-6 text-white font-bold text-lg">
          <a href="#home" className="hover:text-red-500">
            Home
          </a>
          <a href="#about" className="hover:text-red-500">
            About Us
          </a>
          <a href="#projects" className="hover:text-red-500">
            Projects
          </a>
          <a href="#programs" className="hover:text-red-500">
            Programs
          </a>
          <a href="#contact" className="hover:text-red-500">
            Contact Us
          </a>
          <a href="#komunitas" className="hover:text-red-500">
            Komunitas
          </a>
          <a
            href="#join"
            className="px-4 py-1 bg-red-600 rounded-md hover:bg-red-700 transition"
          >
            Join Now
          </a>
        </nav>
      </div>

      {/* Bagian bawah: Logo & Info */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-16 py-10 h-full">
        {/* Logo besar */}
        <div className="flex-1 flex items-end">
          <Image
            src="/ADABLogoNew.png" // ganti dengan logo besar kamu
            alt="Drama Anak Bintan"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Informasi kanan */}
        <div className="flex-1 flex flex-col justify-center md:items-end space-y-4 text-white">
          {/* Social Media */}
          <div className="flex gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={28} className="hover:text-red-500 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={28} className="hover:text-red-500 transition" />
            </a>
            {/* <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTok size={28} className="hover:text-red-500 transition" />
            </a> */}
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-300">
            <p>Email: dramaanakbintan@gmail.com</p>
            <p>Telp: +62 812 3456 7890</p>
            <p>Alamat: Bintan, Kepulauan Riau, Indonesia</p>
          </div>

          {/* Copyright */}
          <div className="mt-4 text-sm md:text-right">
            <p>© Drama Anak Bintan 2025. All rights reserved.</p>
            <p className="font-bold text-white">
              Experience by Frilyan Juanda Adios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
