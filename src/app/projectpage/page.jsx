"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

const highlightProjects = [
  {
    title: "Kasut Untuk Mak Ngah",
    premise: "Sebuah kisah tentang perjalanan budaya yang penuh makna.",
    poster: "/thumbnails/1.png",
  },
  {
    title: "Baju Kurung",
    premise: "Cerita tentang anak pulau yang mencari jati diri.",
    poster: "/thumbnails/2.png",
  },
  {
    title: "Dibalik Luka Lama",
    premise: "Kisah persahabatan yang menghubungkan dua dunia.",
    poster: "/thumbnails/3.png",
  },
  {
    title: "Sssst",
    premise: "Kisah persahabatan yang menghubungkan dua dunia.",
    poster: "/thumbnails/4.png",
  },
  {
    title: "Bapak aku pelaut",
    premise: "Kisah persahabatan yang menghubungkan dua dunia.",
    poster: "/thumbnails/5.png",
  },
  {
    title: "Konde mak cik",
    premise: "Kisah persahabatan yang menghubungkan dua dunia.",
    poster: "/thumbnails/6.JPG",
  },
];

const onGoing = [
  {
    title: "Infidelity",
    premise: "Film tentang perjalanan batin seorang pemuda.",
    poster: "/Poster/1.jpeg",
  },
  {
    title: "Cangkir Terakhir",
    premise: "Drama keluarga dengan latar budaya Melayu.",
    poster: "/Poster/2.jpeg",
  },
  {
    title: "Seuntai Rindu di ujung Waktu",
    premise: "Eksplorasi hubungan manusia dengan laut.",
    poster: "/Poster/3.jpeg",
  },
];

const upcoming = [
  {
    title: "Langit Senja",
    premise: "Sebuah romansa di bawah langit Kepulauan Riau.",
  },
  {
    title: "Jejak Pulau",
    premise: "Menyelami sejarah dan tradisi lewat sinema.",
  },
  { title: "Gelombang", premise: "Drama perjuangan pemuda nelayan." },
  {
    title: "Pelangi Bintan",
    premise: "Film fantasi yang memadukan mitos dan modernitas.",
  },
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);

  // Auto slideshow tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % highlightProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-black -z-20" />

      {/* Glow accents */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/3 w-[400px] h-[400px] 
      bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] 
      bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"
        />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md -z-5" />

      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Projects</h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Cerita-cerita dari Bintan untuk dunia
        </p>
      </section>

      {/* Highlight Project */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-6 px-6 z-10">
        {/* kiri text */}
        <div className="flex-1 text-left space-y-4">
          <motion.h2
            key={highlightProjects[current].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold"
          >
            {highlightProjects[current].title}
          </motion.h2>
          <motion.p
            key={highlightProjects[current].premise}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl"
          >
            {highlightProjects[current].premise}
          </motion.p>
        </div>

        {/* kanan thumbnail 16:9 */}
        <motion.div
          key={highlightProjects[current].poster}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl w-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/10 shadow-lg shadow-red-500/20"
        >
          <div className="relative w-full pt-[56.25%]">
            {/* 56.25% = 9/16 ratio */}
            <Image
              src={highlightProjects[current].poster}
              alt={highlightProjects[current].title}
              fill
              className="absolute top-0 left-0 object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* On Going & Upcoming */}
      <section className="py-20 px-6 flex flex-col md:flex-row gap-12 relative z-10">
        {/* On Going */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold mb-6">On Going Production</h2>
          {onGoing.map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 rounded-2xl 
          bg-white/10 border border-white/20 backdrop-blur-md 
          shadow-md shadow-blue-500/20"
            >
              <div className="relative w-[100px] h-[160px] rounded-lg overflow-hidden">
                <Image
                  src={p.poster}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm">{p.premise}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold mb-6">Upcoming Movies</h2>
          {upcoming.map((p, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl 
          bg-white/10 border border-white/20 backdrop-blur-md 
          shadow-md shadow-red-500/20"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.premise}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
