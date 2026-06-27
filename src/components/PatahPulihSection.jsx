"use client";

import { Instagram } from "lucide-react";
import { useEffect } from "react";

export default function PatahPulihSection() {
  useEffect(() => {
    // Load Instagram embed script jika belum ada
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Instagram post/reel URLs dari @patah_pulih
  const instagramPosts = [
    "https://www.instagram.com/p/EXAMPLE1/", // Ganti dengan actual post ID
    "https://www.instagram.com/p/EXAMPLE2/",
    "https://www.instagram.com/p/EXAMPLE3/",
    "https://www.instagram.com/p/EXAMPLE4/",
    "https://www.instagram.com/p/EXAMPLE5/",
    "https://www.instagram.com/p/EXAMPLE6/",
  ];

  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background glassmorph */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            <Instagram className="h-4 w-4 text-pink-300" />
            Patah Pulih
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Patah Pulih
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-300">
            Bagian dari Adab Productions dengan fokus utama konten creation. Bawa cerita Anda menjadi visual yang memukau melalui Instagram.
          </p>
        </div>

        {/* Main Carousel Hero Section */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
            {/* Left Side - Large Decorative */}
            <div className="hidden lg:block rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-red-500/20">
              <div className="aspect-square bg-gradient-to-br from-red-500/20 via-purple-500/10 to-transparent flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4 p-6">
                  <Instagram className="h-12 w-12 text-pink-300 mx-auto" />
                  <p className="text-sm text-white/60">@patah_pulih</p>
                </div>
              </div>
            </div>

            {/* Center - Grid of Posts (3 posts visible in center) */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {instagramPosts.slice(0, 6).map((post, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/patah_pulih/reels/"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl overflow-hidden border border-white/10 aspect-square shadow-lg hover:shadow-red-500/20 transition duration-500 hover:scale-105 hover:border-red-500/30"
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-500/30 via-purple-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder dengan ikon Instagram */}
                    <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                      <Instagram className="h-8 w-8 text-pink-200 opacity-50" />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-xs text-white/80">View on Instagram</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Side - Large Decorative */}
            <div className="hidden lg:block rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-red-500/20">
              <div className="aspect-square bg-gradient-to-bl from-red-500/20 via-purple-500/10 to-transparent flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4 p-6">
                  <Instagram className="h-12 w-12 text-pink-300 mx-auto" />
                  <p className="text-sm text-white/60">Follow Kami</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Lihat konten creation terbaru kami di Instagram. Setiap frame dirancang dengan teliti, setiap cerita disampaikan dengan cara yang unik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/patah_pulih/reels/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Instagram className="h-4 w-4" />
              Lihat Reels di Instagram
            </a>
            <a
              href="https://www.instagram.com/patah_pulih/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Follow @patah_pulih
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

