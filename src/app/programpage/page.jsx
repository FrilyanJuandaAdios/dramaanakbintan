"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Data Program
const programs = [
  {
    title: "Program Workshop Film",
    short: "Pelatihan intensif bagi pelajar dan komunitas.",
    goals: ["Mengasah keterampilan teknis", "Meningkatkan kreativitas"],
    activities: ["Workshop penulisan", "Kelas penyutradaraan", "Editing dasar"],
    audience: ["Pelajar", "Komunitas film", "Masyarakat umum"],
    benefits: [
      "Memahami proses produksi film",
      "Kesempatan kolaborasi",
      "Portofolio karya",
    ],
  },
  {
    title: "Program Screening & Diskusi",
    short: "Menonton film bersama lalu membedah makna di baliknya.",
    goals: ["Membangun apresiasi", "Mendorong diskusi kritis"],
    activities: ["Pemutaran film", "Diskusi panel", "Q&A dengan filmmaker"],
    audience: ["Masyarakat umum", "Penggiat budaya", "Mahasiswa"],
    benefits: [
      "Menambah wawasan film",
      "Jaringan komunitas",
      "Inspirasi karya baru",
    ],
  },
];

export default function ProgramPage() {
  const [active, setActive] = useState(0);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      </div>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Our Programs</h1>
        <p className="text-lg md:text-2xl text-gray-300">
          Inisiatif kreatif yang mendukung ekosistem film di Bintan
        </p>
      </section>

      {/* Programs Section */}
      <section className="relative z-10 py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer p-6 rounded-2xl border backdrop-blur-lg transition-all duration-300 ${
                active === i
                  ? "bg-white/20 border-white/40"
                  : "bg-white/10 border-white/20 hover:bg-white/15"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-300">{p.short}</p>
            </div>
          ))}
        </div>

        {/* Detail aktif */}
        <AnimatePresence mode="wait">
          {programs[active] && (
            <motion.div
              key={programs[active].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold mb-4">
                {programs[active].title}
              </h2>
              <p className="text-gray-300 mb-6">{programs[active].short}</p>

              <div className="grid md:grid-cols-2 gap-6 text-gray-200">
                <div>
                  <h4 className="font-semibold mb-2">Tujuan</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {programs[active].goals.map((g, idx) => (
                      <li key={idx}>{g}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Aktivitas</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {programs[active].activities.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Audiens</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {programs[active].audience.map((a, idx) => (
                      <li key={idx}>{a}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Manfaat</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {programs[active].benefits.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
