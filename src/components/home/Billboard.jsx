"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Info, ExternalLink } from "lucide-react";
import { latestFilms, upcomingFilms } from "@/data/films";
import { ReleasedPoster } from "@/components/home/Poster";

const SLIDE_MS = 9000;

const layla = upcomingFilms[0];

const slides = [
  {
    key: "layla",
    kicker: "Dalam Produksi",
    image: "/Layla/Layla.png",
    position: "70% 30%",
    meta: [layla.genre, "Film Pendek", layla.release],
    premis: layla.premis,
  },
  ...latestFilms.map((film) => ({
    key: film.videoId,
    kicker: "Rilisan Terbaru",
    image: film.background,
    position: "center",
    meta: [film.genre, "Film Pendek", "Tayang di YouTube"],
    premis: film.premis,
    film,
  })),
];

const ease = [0.22, 1, 0.36, 1];

export default function Billboard({ onPlay, paused = false }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [index, paused]);

  return (
    <section className="relative h-[88svh] md:h-[100svh] min-h-[560px] overflow-hidden bg-[#0b0b0b]">
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: SLIDE_MS / 1000 + 1.5, ease: "linear" }}
            className="absolute inset-0"
          >
            {/* Thumbnail film punya teks bawaan, jadi dipakai sebagai latar blur; posternya tampil tajam di kanan */}
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              style={{ objectPosition: slide.position }}
              className={slide.film ? "object-cover blur-2xl scale-125 opacity-60 saturate-[0.8]" : "object-cover"}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Gradasi ala billboard streaming: gelap di kiri dan menyatu ke latar di bawah */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent md:via-black/45 md:to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/60 to-transparent" />

      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-12 flex items-end justify-between gap-12 pb-[18vh] md:pb-[22vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-xl"
          >
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="inline-block h-4 w-[3px] bg-red-500" />
              {slide.kicker}
            </p>

            {slide.film ? (
              <h1 className="font-cinema text-5xl md:text-7xl leading-[0.95] text-white">{slide.film.title}</h1>
            ) : (
              <h1>
                <span className="sr-only">Layla — Dosa dan Luka</span>
                <Image
                  src="/Layla/LaylaLogo.png"
                  alt=""
                  width={1052}
                  height={372}
                  priority
                  className="w-[78vw] max-w-[440px] h-auto"
                />
              </h1>
            )}

            <p className="mt-5 text-sm text-white/60">{slide.meta.join("  ·  ")}</p>
            <p className="mt-4 text-[15px] md:text-lg leading-relaxed text-white/85 line-clamp-3">{slide.premis}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              {slide.film ? (
                <>
                  <button
                    onClick={() => onPlay(slide.film)}
                    className="inline-flex items-center gap-2 rounded bg-white px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-black hover:bg-white/80 transition"
                  >
                    <Play className="h-5 w-5 fill-black" /> Putar
                  </button>
                  <a
                    href={slide.film.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-white/20 px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white backdrop-blur hover:bg-white/30 transition"
                  >
                    <ExternalLink className="h-5 w-5" /> YouTube
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href="/layla"
                    className="inline-flex items-center gap-2 rounded bg-white px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-black hover:bg-white/80 transition"
                  >
                    <Info className="h-5 w-5" /> Lihat Proyek
                  </Link>
                  <Link
                    href="/layla#sponsorship"
                    className="inline-flex items-center gap-2 rounded bg-white/20 px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold text-white backdrop-blur hover:bg-white/30 transition"
                  >
                    Peluang Sponsorship
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {slide.film && (
            <motion.button
              key={slide.key}
              onClick={() => onPlay(slide.film)}
              aria-label={`Putar ${slide.film.title}`}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.8, ease }}
              className="hidden md:block shrink-0 w-[clamp(220px,20vw,320px)] -mb-[6vh] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.95)] transition-transform duration-300 hover:scale-[1.02]"
            >
              <ReleasedPoster film={slide.film} sizes="320px" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Indikator slide */}
      <div className="absolute z-10 bottom-[12vh] md:bottom-[15vh] left-6 md:left-12 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.key}
            onClick={() => setIndex(i)}
            aria-label={`Tampilkan slide ${i + 1}`}
            className="relative h-[3px] w-8 md:w-12 overflow-hidden rounded-full bg-white/25"
          >
            {i === index && (
              <motion.span
                key={`${s.key}-${paused}`}
                initial={{ width: paused ? "100%" : "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: paused ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                className="absolute inset-y-0 left-0 bg-white"
              />
            )}
            {i < index && <span className="absolute inset-0 bg-white/60" />}
          </button>
        ))}
      </div>
    </section>
  );
}
