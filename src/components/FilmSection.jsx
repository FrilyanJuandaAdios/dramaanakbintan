"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const films = [
  {
    title: "Kasut Untuk Mak Ngah",
    thumbnail: "/thumbnails/1.png",
    youtubeId: "uUGi6uewrDc&t=10s",
  },
  {
    title: "Baju Kurung",
    thumbnail: "/thumbnails/2.png",
    youtubeId: "qX2PZhwS8Mk&t=11s",
  },
  {
    title: "Dibalik Luka Lama",
    thumbnail: "/thumbnails/3.png",
    youtubeId: "46DEVBiWbmc",
  },
  {
    title: "Sssst!",
    thumbnail: "/thumbnails/4.png",
    youtubeId: "6sbGrUXYSFA",
  },
  {
    title: "Bapak Aku Pelaut",
    thumbnail: "/thumbnails/5.png",
    youtubeId: "EjzFkVyJ91Q",
  },
  {
    title: "Konde Mak Cik",
    thumbnail: "/thumbnails/6.JPG",
    youtubeId: "EjzFkVyJ91Q",
  },
  {
    title: "Ketika Kita Tidak lagi Sendiri",
    thumbnail: "/thumbnails/7.JPG",
    youtubeId: "-q_wSLbXhIE",
  },
];

// Slot order relative to activeIndex (offset 0 = center, 1 = right, etc.)
const SLOT_ORDER = [
  "center",
  "right",
  "far-right",
  "off-right",
  "off-left",
  "far-left",
  "left",
];

const CONFIGS = {
  center: { rotateY: 0, x: 0, z: 60, scale: 1.05, opacity: 1, zIndex: 5 },
  left: { rotateY: 22, x: -210, z: 0, scale: 0.87, opacity: 0.9, zIndex: 3 },
  "far-left": {
    rotateY: 60,
    x: -440,
    z: 0,
    scale: 1.15,
    opacity: 0.72,
    zIndex: 2,
  },
  right: { rotateY: -22, x: 210, z: 0, scale: 0.87, opacity: 0.9, zIndex: 3 },
  "far-right": {
    rotateY: -60,
    x: 440,
    z: 0,
    scale: 1.15,
    opacity: 0.72,
    zIndex: 2,
  },
  "off-left": { rotateY: 82, x: -640, z: 0, scale: 0.7, opacity: 0, zIndex: 0 },
  "off-right": {
    rotateY: -82,
    x: 640,
    z: 0,
    scale: 0.7,
    opacity: 0,
    zIndex: 0,
  },
};

export default function FilmSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % films.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const getPosition = (index) => {
    const offset = (index - activeIndex + films.length) % films.length;
    return SLOT_ORDER[offset];
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      window.open(
        `https://www.youtube.com/watch?v=${films[index].youtubeId}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      setActiveIndex(index);
    }
  };

  const activeFilm = films[activeIndex];

  return (
    <section
      id="film"
      className="relative w-full py-24 overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Ambient glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 50% 60%, rgba(239,68,68,0.08) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 60%, rgba(239,68,68,0.14) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 60%, rgba(239,68,68,0.08) 0%, transparent 55%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            🎞️ Drama Anak Bintan
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Film Kami
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg text-gray-400">
            Karya-karya terbaik Drama Anak Bintan yang mengangkat cerita dan
            budaya Bintan.
          </p>
        </motion.div>

        {/* 3D Fan Carousel */}
        <div
          className="relative h-[480px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative h-full w-[900px] max-w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {films.map((film, index) => {
              const position = getPosition(index);
              const cfg = CONFIGS[position];
              const isCenter = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[300px] md:w-[240px] md:h-[320px] lg:w-[260px] lg:h-[340px] cursor-pointer"
                  animate={{
                    rotateY: cfg.rotateY,
                    x: cfg.x,
                    z: cfg.z,
                    scale: cfg.scale,
                    opacity: cfg.opacity,
                    zIndex: cfg.zIndex,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  whileHover={{ scale: cfg.scale * 1.04, y: -6 }}
                >
                  <div
                    className={`relative w-full h-full rounded-3xl overflow-hidden border transition-all duration-300 ${
                      isCenter
                        ? "border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.5)]"
                        : "border-white/20 shadow-2xl shadow-black/40"
                    }`}
                  >
                    <Image
                      src={film.thumbnail}
                      alt={film.title}
                      fill
                      className="object-cover"
                      priority={isCenter}
                      onError={(e) => {
                        e.currentTarget.src = "/FrontCover.png";
                        e.currentTarget.onerror = null;
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
                        isCenter ? "opacity-40" : "opacity-70"
                      }`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <motion.div
                        animate={{ opacity: isCenter ? 1 : 0.65 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-sm md:text-base font-semibold text-white leading-snug">
                          {film.title}
                        </h3>
                        {isCenter && (
                          <span className="text-xs text-red-400 mt-1 block">
                            ▶ Tonton sekarang
                          </span>
                        )}
                      </motion.div>
                    </div>
                    {isCenter && (
                      <motion.div
                        className="absolute -inset-4 bg-red-500/15 rounded-3xl blur-2xl -z-10"
                        animate={{ opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Film Title */}
        <motion.div
          key={activeFilm.title}
          className="text-center mt-8"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-white font-semibold text-lg">{activeFilm.title}</p>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex gap-3 justify-center mt-4">
          {films.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-red-500 w-8" : "bg-white/30 w-2"
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href={`https://www.youtube.com/watch?v=${activeFilm.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-100 transition"
          >
            ▶ Tonton Sekarang
          </a>
          <a
            href="https://www.youtube.com/@adabproductions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5 transition"
          >
            Semua Film
          </a>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          Klik kartu untuk navigasi · Klik tengah untuk menonton di YouTube
        </p>
      </div>
    </section>
  );
}
