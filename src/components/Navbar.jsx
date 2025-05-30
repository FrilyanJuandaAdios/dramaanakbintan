import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src="/ADABLogo.png" alt="Drama Anak Bintan" className="h-10" />

        {/* Menu Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#film" className="text-white hover:text-yellow-300 transition">
            Film
          </Link>
          <Link href="#visimisi" className="text-white hover:text-yellow-300 transition">
            Visi Misi
          </Link>
          <Link href="#roadmap" className="text-white hover:text-yellow-300 transition">
            Roadmap
          </Link>
          <Link href="#layanan" className="text-white hover:text-yellow-300 transition">
            Layanan
          </Link>
          <Link href="#join-community" className="text-white hover:text-yellow-300 transition">
            Komunitas
          </Link>
        </div>
      </div>
    </nav>
  );
}
