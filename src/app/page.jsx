"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import PatahPulihSection from "@/components/PatahPulihSection";
import BintanSection from "@/components/BintanSection";
import Billboard from "@/components/home/Billboard";
import Row from "@/components/home/Row";
import LaylaSpotlight from "@/components/home/LaylaSpotlight";
import FilmModal from "@/components/home/FilmModal";
import { ReleasedPoster, LaylaPoster, SeuntaiPoster } from "@/components/home/Poster";
import films, { latestFilms } from "@/data/films";

const posterWidth = "w-[44vw] max-w-[260px] sm:w-[220px] md:w-[250px] shrink-0 snap-start";

function Badge({ children, tone = "bg-red-600" }) {
  return (
    <span className={`absolute left-0 top-0 z-10 ${tone} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white`}>
      {children}
    </span>
  );
}

export default function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white overflow-x-hidden">
      <Billboard onPlay={setSelectedFilm} paused={!!selectedFilm} />

      <div className="relative z-20 -mt-[10vh] space-y-14 md:space-y-20 pb-24">
        <Row title="Rilisan Terbaru" subtitle="Tonton karya terbaru ADAB Productions">
          {latestFilms.map((film) => (
            <button
              key={film.videoId}
              onClick={() => setSelectedFilm(film)}
              className={`${posterWidth} group relative text-left transition duration-300 hover:-translate-y-1 hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white`}
              aria-label={`Putar ${film.title}`}
            >
              <Badge>Baru</Badge>
              <ReleasedPoster film={film} sizes="260px" />
              <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-black/50 backdrop-blur">
                  <Play className="h-6 w-6 fill-white text-white translate-x-0.5" />
                </span>
              </span>
            </button>
          ))}
        </Row>

        <Row title="Segera Hadir" subtitle="Dua cerita yang sedang kami siapkan untuk layar">
          <Link
            href="/layla"
            className={`${posterWidth} group relative transition duration-300 hover:-translate-y-1 hover:scale-[1.03]`}
            aria-label="Lihat proyek Layla"
          >
            <Badge tone="bg-[#b8962e]">2027</Badge>
            <LaylaPoster sizes="260px" />
          </Link>
          <div className={`${posterWidth} relative`}>
            <Badge tone="bg-white/20 backdrop-blur">Segera</Badge>
            <SeuntaiPoster />
          </div>
        </Row>

        <LaylaSpotlight />

        <Row
          title="Semua Karya"
          subtitle="Film pendek dari Bintan, untuk dunia"
          action={
            <Link
              href="/projectpage"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition"
            >
              Lihat semua <ArrowRight className="h-4 w-4" />
            </Link>
          }
        >
          {films.map((film) => (
            <button
              key={film.videoId}
              onClick={() => setSelectedFilm(film)}
              className="group relative w-[72vw] max-w-[320px] sm:w-[280px] md:w-[320px] shrink-0 snap-start aspect-video overflow-hidden rounded-[3px] bg-white/5 text-left transition duration-300 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              aria-label={`Putar ${film.title}`}
            >
              <Image src={film.poster} alt="" fill sizes="320px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition" />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between gap-3">
                <p className="text-sm font-semibold leading-snug text-white">{film.title}</p>
                <Play className="h-5 w-5 shrink-0 fill-white text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </button>
          ))}
        </Row>
      </div>

      <PatahPulihSection />
      <BintanSection />
      <Footer />

      <AnimatePresence>
        {selectedFilm && <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />}
      </AnimatePresence>
    </main>
  );
}
