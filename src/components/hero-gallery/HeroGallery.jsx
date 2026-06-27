"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { reelsData } from "./galleryData";

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const navigate = (index) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 180);
  };

  const prev = () =>
    navigate((current - 1 + reelsData.length) % reelsData.length);
  const next = () =>
    navigate((current + 1) % reelsData.length);

  const item = reelsData[current];

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-24 items-center">

          {/* ── Teks kiri ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-5 h-px bg-red-500 shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-red-400 font-medium">
                Bagian dari ADAB Productions
              </span>
            </div>

            {/* Judul + deskripsi */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
                Patah Pulih
              </h2>
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed max-w-[340px]">
                Sayap konten dari ADAB Productions yang bergerak di dunia
                Gen-Z. Kami percaya setiap cerita anak muda — sekecil apa
                pun — layak untuk hidup di layar.
              </p>
            </div>

            {/* Divider tipis */}
            <span className="w-12 h-px bg-white/10" />

            {/* Navigasi */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Sebelumnya"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <span className="text-white/30 text-xs tabular-nums tracking-widest">
                {String(current + 1).padStart(2, "0")}
                &thinsp;/&thinsp;
                {String(reelsData.length).padStart(2, "0")}
              </span>

              <button
                onClick={next}
                aria-label="Berikutnya"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all duration-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {reelsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-red-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Link Instagram */}
            <a
              href="https://www.instagram.com/patah_pulih/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs text-white/35 hover:text-white/70 transition-colors w-fit"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@patah_pulih</span>
            </a>
          </div>

          {/* ── Kartu kanan ── */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div
              className={`relative w-full max-w-[460px] aspect-[3/4] rounded-2xl overflow-hidden transition-opacity duration-[180ms] ${
                fading ? "opacity-0" : "opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
                onError={(e) => {
                  e.currentTarget.src = "/FrontCover.png";
                  e.currentTarget.onerror = null;
                }}
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <p className="text-white text-sm font-medium leading-snug group-hover:text-white/80 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-white/40 text-xs mt-1.5 group-hover:text-white/60 transition-colors">
                    Lihat di Instagram →
                  </p>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
