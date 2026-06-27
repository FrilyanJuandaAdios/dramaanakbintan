"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const completedFilms = [
  { title: "Kasut Untuk Mak Ngah", premise: "Sebuah kisah tentang perjalanan budaya yang penuh makna.", poster: "/thumbnails/1.png" },
  { title: "Baju Kurung", premise: "Anak pulau yang mencari jati diri di tengah dua dunia.", poster: "/thumbnails/2.png" },
  { title: "Dibalik Luka Lama", premise: "Persahabatan yang menyembuhkan luka yang tak pernah terucap.", poster: "/thumbnails/3.png" },
  { title: "Sssst!", premise: "Ketika diam lebih berbicara dari seribu kata.", poster: "/thumbnails/4.png" },
  { title: "Bapak Aku Pelaut", premise: "Rindu seorang anak pada bapak yang selalu pergi.", poster: "/thumbnails/5.png" },
  { title: "Konde Mak Cik", premise: "Tradisi yang bertahan di tengah zaman yang berubah.", poster: "/thumbnails/6.JPG" },
];

const onGoing = [
  {
    number: "01",
    title: "Menata Kala",
    teaser: "Waktu tidak pernah bisa diputar ulang. Tapi ada kalanya, ia memberimu satu kesempatan untuk menata ulang segalanya.",
    genre: "Drama",
    status: "Post Produksi",
    percent: 65,
  },
  {
    number: "02",
    title: "Layla",
    teaser: "Satu nama yang membawa seribu cerita. Tentang cinta, kehilangan, dan hal-hal yang tidak pernah sempat terucap.",
    genre: "Drama · Romansa",
    status: "Pra Produksi",
    percent: 20,
  },
  {
    number: "03",
    title: "Seuntai Rindu di Ujung Waktu",
    teaser: "Ketika detik terakhir tiba, yang tersisa bukan kenangan — melainkan rindu yang tidak tahu ke mana harus pergi.",
    genre: "Drama",
    status: "Pra Produksi",
    percent: 20,
  },
];

const upcoming = [
  {
    number: "01",
    title: "Menata Kala",
    teaser: "Perjalanan tentang waktu, kehilangan, dan satu kesempatan yang tidak boleh terlewat.",
    label: "Segera Tayang",
    featured: true,
  },
  {
    number: "02",
    title: "Cangkir Terakhir",
    teaser: "Di ujung percakapan terakhir, selalu ada hal yang tidak pernah terucap.",
    label: "Coming Soon",
    featured: false,
  },
  {
    number: "03",
    title: "Layla",
    teaser: "Satu nama. Seribu cerita. Segera hadir.",
    label: "Coming Soon",
    featured: false,
  },
  {
    number: "04",
    title: "Seuntai Rindu di Ujung Waktu",
    teaser: "Ketika rindu tidak tahu ke mana harus pergi.",
    label: "Coming Soon",
    featured: false,
  },
  {
    number: "05",
    title: "DOSS Festival Comedy Film",
    teaser: "Karena tawa pun bisa jadi karya yang bermakna.",
    label: "Coming Soon",
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-700 rounded-full mix-blend-screen filter blur-[120px] opacity-15" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-900 rounded-full mix-blend-screen filter blur-[100px] opacity-10" />
      </div>

      {/* ── HERO ── */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-red-500 mb-6 font-semibold"
        >
          Drama Anak Bintan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Karya <span className="text-red-500">Kami</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Setiap film lahir dari satu pertanyaan sederhana — cerita apa yang
          harus dunia dengar hari ini?
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* ── FILM KAMI (COMPLETED) ── */}
      <section className="relative z-10 px-6 pb-32 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3 font-semibold">Karya Selesai</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Film <span className="text-red-500">Kami</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {completedFilms.map((film, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative rounded-2xl overflow-hidden aspect-[2/3] cursor-pointer border border-white/10 hover:border-white/25 transition-all duration-300"
            >
              <Image
                src={film.poster}
                alt={film.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm md:text-base font-bold text-white leading-snug">{film.title}</h3>
                <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed line-clamp-2">
                  {film.premise}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── ONGOING ── */}
      <section className="relative z-10 px-6 pb-32 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3 font-semibold">Dalam Produksi</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Ongoing <span className="text-red-500">Production</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Tiga cerita yang sedang kami bentuk. Belum bisa kami tunjukkan semuanya — tapi rasa ingin tahumu sudah boleh dimulai.
          </p>
        </motion.div>

        <div className="space-y-4">
          {onGoing.map((film, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-7 md:p-9 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">{film.status}</span>
                    </span>
                    <span className="text-xs text-gray-600 border border-white/10 rounded-full px-2 py-0.5">{film.genre}</span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-xs font-mono text-gray-600">{film.number}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{film.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed md:text-lg max-w-2xl">{film.teaser}</p>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/10 relative overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-red-500/30 rounded-full"
                    style={{ width: `${film.percent}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 font-mono w-8 text-right">{film.percent}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── UPCOMING ── */}
      <section className="relative z-10 px-6 pb-32 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500 mb-3 font-semibold">Yang Akan Datang</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Upcoming <span className="text-red-500">Movies</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Catat namanya. Simpan rasa penasaranmu. Mereka akan segera hadir.
          </p>
        </motion.div>

        {/* Menata Kala — featured full-width */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative rounded-3xl border border-red-500/40 bg-white/8 p-7 md:p-10 mb-4 shadow-[0_0_40px_rgba(239,68,68,0.08)]"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 border border-red-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-400 mb-5">
            {upcoming[0].label}
          </span>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xs font-mono text-gray-600">{upcoming[0].number}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{upcoming[0].title}</h3>
          </div>
          <p className="text-gray-400 leading-relaxed max-w-xl">{upcoming[0].teaser}</p>
        </motion.div>

        {/* 4 film lainnya — 2×2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {upcoming.slice(1).map((film, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-between min-h-[180px] hover:border-white/20 transition-all duration-300"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-white/5 border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                  {film.label}
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono text-gray-600">{film.number}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white">{film.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{film.teaser}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 pb-32 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-500 text-sm mb-4">Tertarik terlibat?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Jadilah bagian dari karya berikutnya.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-sm font-bold transition"
          >
            Hubungi Kami
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
