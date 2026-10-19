"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { LaylaPoster } from "@/components/home/Poster";
import { hook, sponsorship, getScheduleStatus } from "@/data/layla";

// Ringkasan jadwal produksi (lihat `schedule` di data/layla.js)
const phases = [
  { label: "Pra-Produksi", period: "Okt–Des 2026", start: "2026-10-04", end: "2026-12-31" },
  { label: "Produksi", period: "Jan–Mar 2027", start: "2027-01-01", end: "2027-03-31" },
  { label: "Pasca-Produksi", period: "Apr–Jun 2027", start: "2027-04-01", end: "2027-06-30" },
  { label: "Screening", period: "Jul–Agu 2027", start: "2027-07-01", end: "2027-08-31" },
];

export default function LaylaSpotlight() {
  // Dibaca di client agar tahap aktif mengikuti tanggal hari ini, bukan waktu build
  const [now, setNow] = useState(null);
  useEffect(() => setNow(new Date()), []);

  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-12">
      <div className="relative overflow-hidden rounded-md border border-white/10 bg-black">
        <div className="absolute inset-y-0 right-0 w-full md:w-2/3">
          <Image src="/Layla/Layla.png" alt="" fill sizes="70vw" className="object-cover object-[70%_40%] opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        <div className="relative grid md:grid-cols-[minmax(0,300px)_1fr] gap-10 md:gap-14 p-6 md:p-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-[70%] max-w-[300px] mx-auto md:w-full shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]"
          >
            <Link href="/layla" aria-label="Lihat proyek Layla">
              <LaylaPoster sizes="300px" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              <span className="inline-block h-4 w-[3px] bg-red-500" />
              Spotlight · Proyek Kami Saat Ini
            </p>
            <h2 className="font-cinema text-4xl md:text-6xl leading-none text-white">
              Layla <span className="text-white/50">— Dosa dan Luka</span>
            </h2>
            <p className="mt-3 text-sm text-white/50">
              Drama · Thriller · Film Pendek 25–30 menit · Sebuah film oleh Frilyan Juanda Adios
            </p>
            <p className="mt-6 max-w-2xl font-cinema italic text-xl md:text-2xl leading-snug text-white/85">{hook}</p>

            <ol className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 max-w-3xl">
              {phases.map((p) => {
                const status = getScheduleStatus(p, now);
                return (
                  <li key={p.label}>
                    <div className="h-[3px] rounded-full bg-white/15 overflow-hidden">
                      <div
                        className={`h-full ${
                          status === "done" ? "w-full bg-white/60" : status === "current" ? "w-1/2 bg-red-500" : "w-0"
                        }`}
                      />
                    </div>
                    <p className={`mt-3 text-sm font-semibold ${status === "upcoming" ? "text-white/45" : "text-white"}`}>
                      {p.label}
                    </p>
                    <p className="text-xs text-white/40">
                      {status === "current" ? <span className="text-red-400">Sedang berjalan</span> : p.period}
                    </p>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/layla"
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-white/80 transition"
              >
                <Info className="h-4 w-4" /> Lihat Proyek
              </Link>
              <a
                href={sponsorship.proposalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded bg-white/15 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/25 transition"
              >
                Proposal Sponsorship <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
