import Image from "next/image";
import Link from "next/link";

// Import ikon dari react-icons
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-500 text-gray-300 py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center space-x-3 mb-6 md:mb-0">
          <Image src="/ADABLogo.png" alt="Drama Anak Bintan Logo" width={40} height={40} />
          <span className="text-white font-bold text-xl">Drama Anak Bintan</span>
        </div>

        {/* Navigation */}
        <div className="flex space-x-8 text-sm">
          <Link href="#films" className="hover:text-red-500 transition">Film</Link>
          <Link href="#vision" className="hover:text-red-500 transition">Visi Misi</Link>
          <Link href="#roadmap" className="hover:text-red-500 transition">Roadmap</Link>
          <Link href="#contact" className="hover:text-red-500 transition">Kontak</Link>
        </div>

        {/* Sosial Media */}
        <div className="flex space-x-6 text-2xl mt-6 md:mt-0">
          <a
            href="https://instagram.com/dramaanakbintan" // ganti dengan link asli
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@dramaanakbintan" // ganti dengan link asli
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://youtube.com/@dramaanakbintan" // ganti dengan link asli
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Drama Anak Bintan. All rights reserved.
      </div>
    </footer>
  );
}
