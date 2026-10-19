"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Footer from "@/components/Footer";
import {
  hook,
  tagline,
  overview,
  synopsis,
  characters,
  visualLanguage,
  whyItMatters,
  director,
  producers,
  schedule,
  scheduleNote,
  audiences,
  distribution,
  sponsorship,
  crew,
  contact,
  getScheduleStatus,
} from "@/data/layla";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease } },
};

// Durasi film (±27 menit) dipetakan ke progres scroll, ditampilkan sebagai timecode 24fps
const RUNTIME_FRAMES = 27 * 60 * 24;

function toTimecode(progress) {
  const frames = Math.round(Math.min(Math.max(progress, 0), 1) * RUNTIME_FRAMES);
  const pad = (n) => String(n).padStart(2, "0");
  const f = frames % 24;
  const s = Math.floor(frames / 24) % 60;
  const m = Math.floor(frames / 1440) % 60;
  const h = Math.floor(frames / 86400);
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

function Timecode() {
  const { scrollYProgress } = useScroll();
  const tc = useTransform(scrollYProgress, toTimecode);
  return (
    <div className="pointer-events-none fixed bottom-5 right-6 z-40 hidden md:flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-white/35">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
      <span>TC</span>
      <motion.span className="tabular-nums">{tc}</motion.span>
    </div>
  );
}

function Viewfinder() {
  const corner = "absolute w-5 h-5 border-white/40";
  return (
    <div className="pointer-events-none absolute inset-3 z-20">
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

function Portrait({ person, sizes }) {
  return (
    <div className="group relative aspect-[707/1000] overflow-hidden bg-[#050b0e]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(56,178,172,0.28),transparent_65%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
      <Image
        src={person.photo}
        alt={person.name}
        fill
        sizes={sizes}
        className="object-cover object-top grayscale contrast-125 brightness-90 transition-all duration-[1400ms] ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      <Viewfinder />
    </div>
  );
}

// Wipe dari bawah. Observer dipasang di wrapper karena elemen yang ter-clip penuh tidak memicu whileInView
function WipeReveal({ children, from = "bottom", delay = 0 }) {
  const hidden = from === "left" ? "inset(0% 100% 0% 0%)" : "inset(100% 0% 0% 0%)";
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
      <motion.div
        variants={{
          hidden: { clipPath: hidden },
          show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.6, ease, delay } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Bio({ paragraphs }) {
  const [open, setOpen] = useState(false);
  const [first, ...rest] = paragraphs;
  return (
    <div className="text-sm md:text-[15px] leading-relaxed text-white/55">
      <p className={open ? "" : "line-clamp-3"}>{first}</p>
      <div
        className={`grid transition-all duration-700 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {rest.map((p, i) => (
            <p key={i} className="mt-4">
              {p}
            </p>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-teal-200/80 hover:text-teal-100 transition"
      >
        <span className={`h-px bg-current transition-all duration-500 ${open ? "w-4" : "w-8"}`} />
        {open ? "Tutup" : "Baca Selengkapnya"}
      </button>
    </div>
  );
}

function SectionLabel({ children, className = "text-teal-200/70", line = "bg-teal-300/60" }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className={`h-px w-10 ${line}`} />
      <span className={`text-[11px] uppercase tracking-[0.5em] ${className}`}>{children}</span>
    </div>
  );
}

function SectionHeading({ label, children }) {
  return (
    <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16 md:mb-20">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="font-cinema text-5xl md:text-7xl font-light leading-none">{children}</h2>
    </motion.div>
  );
}

// Kartu judul layar penuh, seperti intertitle di film
function TitleCard({ eyebrow, children }) {
  return (
    <section className="relative z-10 min-h-[90svh] flex items-center justify-center px-6 py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(20,90,100,0.18),transparent_60%)]" />
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <p className="text-[11px] uppercase tracking-[0.6em] text-[#ecd568]/70 mb-10">{eyebrow}</p>
        <p className="font-cinema text-3xl md:text-5xl font-light leading-[1.3] text-white/90">{children}</p>
        <div className="mx-auto mt-14 h-16 w-px bg-gradient-to-b from-teal-200/50 to-transparent" />
      </motion.div>
    </section>
  );
}

// Satu siklus pembukaan (detik). Setelah selesai, sequence diulang dari layar hitam.
const CYCLE = 19.5;

// Muncul, bertahan, lalu hilang dalam satu rentang waktu
function Beat({ delay, duration, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ delay, duration, times: [0, 0.3, 0.75, 1], ease: "easeInOut" }}
      className={`absolute inset-0 z-20 flex items-center justify-center px-6 text-center ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Pembukaan seperti film: logo ADAB, "mempersembahkan", lalu logo LAYLA dan gambar fade in, kemudian berulang.
// Dengan prefers-reduced-motion, langsung tampil frame akhir tanpa loop.
function OpeningHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [mode, setMode] = useState(null);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMode(reduce ? "static" : "loop");
  }, []);

  useEffect(() => {
    if (mode !== "loop") return;
    const timer = setTimeout(() => setCycle((c) => c + 1), CYCLE * 1000);
    return () => clearTimeout(timer);
  }, [mode, cycle]);

  const isStatic = mode === "static";
  // Keyframe [masuk, tahan, keluar]; pada mode statis cukup tampil tanpa animasi
  const stay = (delay, duration, times) =>
    isStatic ? { duration: 0 } : { delay, duration, times, ease: "easeInOut" };

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-black">
      {mode && (
        <div key={cycle} className="absolute inset-0">
          {!isStatic && (
            <>
              <Beat delay={0.8} duration={3.2}>
                <Image
                  src="/LogoADAB-White.png"
                  alt="ADAB Productions"
                  width={11344}
                  height={2660}
                  priority
                  className="w-[60vw] max-w-[360px] h-auto"
                />
              </Beat>
              <Beat delay={4.2} duration={3}>
                <p className="font-cinema italic text-3xl md:text-5xl font-light tracking-wide text-white/85">
                  mempersembahkan
                </p>
              </Beat>
            </>
          )}

          <motion.div style={{ y: imageY }} className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: isStatic ? 1 : [0, 1, 1, 0], scale: 1 }}
              transition={{
                ...stay(8.4, 10.6, [0, 0.28, 0.88, 1]),
                scale: isStatic ? { duration: 0 } : { delay: 8.4, duration: 11, ease: "easeOut" },
              }}
              className="absolute inset-0"
            >
              <Image src="/Layla/Layla.png" alt="" fill priority sizes="100vw" className="object-cover object-[65%_30%]" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.8)_100%)]" />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, filter: "blur(14px)" }}
              animate={
                isStatic
                  ? { opacity: 1, filter: "blur(0px)" }
                  : {
                      opacity: [0, 1, 1, 0],
                      filter: ["blur(14px)", "blur(0px)", "blur(0px)", "blur(8px)"],
                    }
              }
              transition={stay(7.6, 11.4, [0, 0.2, 0.88, 1])}
              className="w-[82vw] max-w-[600px] drop-shadow-[0_0_40px_rgba(0,0,0,0.7)]"
            >
              <h1 className="sr-only">Layla — Dosa dan Luka, sebuah film oleh Frilyan Juanda Adios</h1>
              <Image src="/Layla/LaylaLogo.png" alt="" width={1052} height={372} priority className="w-full h-auto" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isStatic ? 1 : [0, 1, 1, 0] }}
              transition={stay(10.2, 8.8, [0, 0.18, 0.85, 1])}
              className="mt-10 font-cinema italic text-xl md:text-2xl text-white/80 max-w-xl"
            >
              {tagline}
            </motion.p>
          </motion.div>
        </div>
      )}

      {/* Bilah bawah tetap tampil di luar loop agar link selalu bisa diklik */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.4 }}
        className="absolute bottom-12 inset-x-0 z-30 px-6 md:px-14 flex items-end justify-center md:justify-between text-[10px] uppercase tracking-[0.35em] text-white/45"
      >
        <span className="hidden md:inline">Drama · Thriller &nbsp;—&nbsp; 2027</span>
        <span className="hidden md:flex flex-col items-center gap-3">
          Gulir
          <span className="block h-10 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </span>
        <a href="#sponsorship" className="inline-flex items-center gap-2 text-[#ecd568]/90 hover:text-[#ecd568] transition">
          Terbuka untuk Sponsorship <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}

export default function LaylaPage() {
  // Dibaca di client agar status jadwal mengikuti tanggal hari ini, bukan waktu build
  const [now, setNow] = useState(null);
  useEffect(() => setNow(new Date()), []);

  const billedCrew = crew.filter((c) => c.role);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden selection:bg-teal-300/30">
      <div className="film-grain" aria-hidden />
      <Timecode />

      {/* ── HERO ── */}
      <OpeningHero />

      {/* ── LOGLINE ── */}
      <TitleCard eyebrow="Dosa dan Luka">{hook}</TitleCard>

      {/* ── SELAYANG PANDANG ── */}
      <section className="relative z-10 px-6 md:px-14 pb-36 max-w-7xl mx-auto">
        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-2 md:grid-cols-5 border-y border-white/10"
        >
          {overview.map((item, i) => (
            <motion.div
              key={item.label}
              variants={reveal}
              className={`py-8 md:py-10 px-4 md:px-6 ${i > 0 ? "md:border-l border-white/10" : ""} ${
                i === overview.length - 1 ? "col-span-2 md:col-span-1 border-t md:border-t-0 border-white/10" : ""
              }`}
            >
              <dt className="text-[10px] uppercase tracking-[0.45em] text-white/35 mb-3">{item.label}</dt>
              <dd className="font-cinema text-xl md:text-2xl text-white/90 leading-snug">{item.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </section>

      {/* ── SINOPSIS ── */}
      <section className="relative z-10 px-6 md:px-14 pb-40 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
          <div className="md:col-span-5">
            <WipeReveal from="left">
              <div className="relative aspect-[1122/1402] overflow-hidden">
                <Image src="/Layla/Layla.png" alt="Ilustrasi Layla" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <Viewfinder />
              </div>
            </WipeReveal>
          </div>

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-7">
            <SectionLabel>Sinopsis</SectionLabel>
            <h2 className="font-cinema text-5xl md:text-7xl font-light leading-none mb-12">
              Kisah <span className="italic text-teal-100">Layla</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-white/65">
              {synopsis.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "first-letter:font-cinema first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-[#ecd568]"
                      : ""
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── KARAKTER ── */}
      <section className="relative z-10 py-36 border-t border-white/5">
        <div className="px-6 md:px-14 max-w-7xl mx-auto">
          <SectionHeading label="Para Karakter">
            Dua Jiwa, <span className="italic text-teal-100">Satu Luka</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {characters.map((c, i) => (
              <motion.article
                key={c.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.3, ease, delay: i * 0.2 }}
                className="relative bg-black p-8 md:p-12 flex gap-6 md:gap-10 overflow-hidden"
              >
                <span
                  className="font-cinema italic text-5xl sm:text-7xl md:text-8xl leading-none text-[#ecd568] [writing-mode:vertical-rl] rotate-180 select-none"
                  aria-hidden
                >
                  {c.name}
                </span>
                <div className="flex-1">
                  <h3 className="sr-only">{c.name}</h3>
                  <p className="font-cinema text-2xl md:text-3xl text-white/90 leading-snug mb-6">{c.intro}</p>
                  <div className="space-y-4 text-sm md:text-[15px] leading-relaxed text-white/55">
                    {c.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                  <p className="mt-8 font-cinema italic text-lg text-[#ecd568]/80">{c.traits.join(" · ")}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BAHASA VISUAL ── */}
      <section className="relative z-10 py-36 overflow-hidden">
        <div className="px-6 md:px-14 max-w-7xl mx-auto">
          <SectionHeading label="Bahasa Visual">
            Dari Hangat <span className="italic text-teal-100">ke Sunyi</span>
          </SectionHeading>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease }}
            className="origin-left h-40 md:h-56 bg-gradient-to-r from-[#b8743d] via-[#4d4a45] to-[#0f3b48] relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,200,140,0.25),transparent_50%)]" />
            <div className="absolute inset-0 flex items-end justify-between p-5 md:p-8 text-[10px] md:text-[11px] uppercase tracking-[0.4em]">
              <span className="text-white/80">Hangat · Natural · Intimate</span>
              <span className="text-white/60 text-right">Sunyi · Dingin · Berjarak</span>
            </div>
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-14 max-w-3xl font-cinema text-2xl md:text-3xl font-light leading-relaxed text-white/80"
          >
            {visualLanguage}
          </motion.p>
        </div>
      </section>

      {/* ── KENAPA CERITA INI PENTING ── */}
      <div className="border-t border-white/5">
        <TitleCard eyebrow="Kenapa Cerita Ini Penting">{whyItMatters.question}</TitleCard>
      </div>
      <section className="relative z-10 pb-36">
        <div className="relative px-6 md:px-14 max-w-3xl mx-auto">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-base md:text-lg leading-relaxed text-white/60"
          >
            {whyItMatters.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{whyItMatters.closing}</p>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="mt-12 font-cinema italic text-2xl md:text-3xl text-white/90">{tagline}</p>
            <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-white/30 leading-relaxed">
              Catatan konten: film ini mengangkat tema kekerasan seksual dan bunuh diri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── THE TEAM ── */}
      <section className="relative z-10 px-6 md:px-14 py-36 max-w-7xl mx-auto border-t border-white/5">
        <SectionHeading label="The Team Behind Layla">
          Di Balik <span className="italic text-teal-100">Layar</span>
        </SectionHeading>

        {/* Director */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center mb-28">
          <div className="md:col-span-6 lg:col-span-5">
            <WipeReveal>
              <Portrait person={director} sizes="(min-width: 768px) 45vw, 100vw" />
            </WipeReveal>
          </div>

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-6 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.5em] text-white/40 mb-4">A Film By</p>
            <h3 className="font-cinema text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05]">
              Frilyan
              <br />
              Juanda <span className="italic">Adios</span>
            </h3>
            <div className="mt-8 mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-[#ecd568]/60" />
              <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#ecd568]/90">{director.role}</span>
            </div>
            <div className="max-w-xl">
              <Bio paragraphs={director.bio} />
            </div>
          </motion.div>
        </div>

        {/* Producers */}
        <div className="grid sm:grid-cols-2 gap-14 md:gap-16 max-w-5xl md:ml-auto items-start">
          {producers.map((person, i) => (
            <div key={person.name} className={i === 1 ? "sm:mt-24" : ""}>
              <WipeReveal delay={i * 0.2}>
                <Portrait person={person} sizes="(min-width: 640px) 40vw, 100vw" />
              </WipeReveal>
              <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.45em] text-teal-200/70 mb-2">{person.role}</p>
                <h3 className="font-cinema text-3xl md:text-4xl font-light">{person.name}</h3>
                {person.alsoRoles && (
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/35">{person.alsoRoles}</p>
                )}
                <div className="mt-6">
                  <Bio paragraphs={person.bio} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── JADWAL PRODUKSI ── */}
      <section className="relative z-10 py-36 border-t border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-teal-700/10 blur-[140px]" />
        <div className="relative px-6 md:px-14 max-w-6xl mx-auto">
          <SectionHeading label="Project Timeline">
            Jadwal <span className="italic text-teal-100">Produksi</span>
          </SectionHeading>

          <ol className="relative">
            <span className="absolute left-[7px] md:left-[calc(12rem+7px)] top-2 bottom-2 w-px bg-white/10" aria-hidden />
            {schedule.map((item, i) => {
              const status = getScheduleStatus(item, now);
              return (
                <motion.li
                  key={`${item.period}-${item.stage}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease, delay: Math.min(i, 3) * 0.08 }}
                  className="relative grid md:grid-cols-[12rem_1fr] gap-2 md:gap-12 pl-10 md:pl-0 py-7 border-b border-white/5 last:border-b-0"
                >
                  <p
                    className={`font-mono text-xs md:text-sm md:pt-1 ${
                      status === "current" ? "text-teal-200" : status === "done" ? "text-white/30" : "text-white/50"
                    }`}
                  >
                    {item.period}
                  </p>

                  <span
                    className={`absolute left-0 md:left-[12rem] top-8 md:top-[2.1rem] w-[15px] h-[15px] rounded-full border flex items-center justify-center transition-all duration-700 ${
                      status === "done"
                        ? "bg-teal-200/80 border-teal-200/80"
                        : status === "current"
                        ? "bg-black border-teal-200 shadow-[0_0_0_6px_rgba(94,234,212,0.12),0_0_24px_rgba(94,234,212,0.6)]"
                        : "bg-black border-white/25"
                    }`}
                    aria-hidden
                  >
                    {status === "done" && <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />}
                  </span>

                  <div className="md:pl-12">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                      <h3 className={`font-cinema text-2xl md:text-3xl ${status === "done" ? "text-white/45" : "text-white"}`}>
                        {item.stage}
                      </h3>
                      {status === "current" && (
                        <span className="text-[10px] uppercase tracking-[0.35em] text-teal-200">Sedang Berjalan</span>
                      )}
                    </div>
                    <p className={`text-sm md:text-[15px] leading-relaxed max-w-2xl ${status === "done" ? "text-white/30" : "text-white/50"}`}>
                      {item.activity}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>

          <p className="mt-12 text-xs italic text-white/30 max-w-3xl leading-relaxed">Catatan: {scheduleNote}</p>
        </div>
      </section>

      {/* ── MENUJU LAYAR ── */}
      <section className="relative z-10 py-36 border-t border-white/5">
        <div className="px-6 md:px-14 max-w-7xl mx-auto">
          <SectionHeading label="Strategi Distribusi">
            Menuju <span className="italic text-teal-100">Layar</span>
          </SectionHeading>

          <div className="grid md:grid-cols-12 gap-16">
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-5">
              <h3 className="font-cinema italic text-2xl md:text-3xl text-[#ecd568]/90 mb-8">Untuk Siapa</h3>
              <ul className="flex flex-wrap gap-2.5">
                {audiences.map((a) => (
                  <li
                    key={a}
                    className="border border-white/15 px-4 py-2 text-xs md:text-sm text-white/65 hover:border-teal-200/50 hover:text-white transition"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="md:col-span-7">
              <motion.h3
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="font-cinema italic text-2xl md:text-3xl text-[#ecd568]/90 mb-8"
              >
                Distribusi Tayangan
              </motion.h3>
              <ol className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                {distribution.map((d, i) => (
                  <motion.li
                    key={d.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease, delay: i * 0.12 }}
                    className="bg-black p-7"
                  >
                    <p className="font-mono text-xs text-white/30 mb-4">{String(i + 1).padStart(2, "0")}</p>
                    <h4 className="text-[11px] uppercase tracking-[0.35em] text-teal-100 mb-3">{d.title}</h4>
                    <p className="text-sm leading-relaxed text-white/50">{d.desc}</p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── SPONSORSHIP ── */}
      <section id="sponsorship" className="relative z-10 scroll-mt-20 py-36 border-t border-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(236,213,104,0.07),transparent_55%)]" />
        <div className="relative px-6 md:px-14 max-w-7xl mx-auto grid md:grid-cols-12 gap-14 md:gap-16">
          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-6">
            <SectionLabel className="text-[#ecd568]/80" line="bg-[#ecd568]/60">
              Open for Sponsorship
            </SectionLabel>
            <h2 className="font-cinema text-5xl md:text-7xl font-light leading-[1.02]">
              Jadilah Bagian dari <span className="italic text-[#ecd568]">Perjalanan Layla</span>
            </h2>
            <p className="mt-8 text-lg text-white/60 max-w-md leading-relaxed">{sponsorship.intro}</p>
          </motion.div>

          <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-6 md:pt-16">
            <p className="text-[15px] leading-relaxed text-white/60">{sponsorship.body}</p>

            <ul className="mt-10 border-t border-white/10">
              {sponsorship.benefits.map((b, i) => (
                <li key={b} className="flex gap-5 py-4 border-b border-white/10 text-[15px] text-white/80">
                  <span className="font-mono text-xs text-white/30 pt-1">{String(i + 1).padStart(2, "0")}</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={sponsorship.proposalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ecd568] text-black px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-[#f5e48f] transition"
              >
                Lihat Proposal Digital
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contact.email}?subject=${encodeURIComponent("Sponsorship Film Layla")}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-white/80 transition"
              >
                Hubungi Tim Produksi
              </a>
            </div>
            <p className="mt-5 text-xs text-white/35">
              Proposal (PDF) berisi rincian paket sponsorship dan bentuk kerja sama in-kind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BILLING BLOCK ── */}
      <section className="relative z-10 py-40 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src="/Layla/Layla.png" alt="" fill sizes="100vw" className="object-cover object-[70%_60%] blur-sm" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          <Image
            src="/Layla/LaylaLogo.png"
            alt="Layla — Dosa dan Luka"
            width={1052}
            height={372}
            className="w-full max-w-md h-auto mx-auto mb-14"
          />
          <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] leading-[2.4] text-white/55">
            ADAB Productions <span className="text-white/25">mempersembahkan</span> &nbsp;·&nbsp; sebuah film{" "}
            <span className="text-white/25">oleh</span> Frilyan Juanda Adios
            {billedCrew.map((c) => (
              <span key={c.role}>
                {" "}
                &nbsp;·&nbsp; <span className="text-white/25">{c.role}</span> {c.names.join(", ")}
              </span>
            ))}
          </p>
          <p className="font-cinema italic text-2xl md:text-3xl text-[#ecd568]/90 mt-14 mb-12">Segera di layar · 2027</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-xs text-white/40">
            <a
              href={`https://instagram.com/${contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              @{contact.instagram}
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-white transition">
              {contact.email}
            </a>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              {contact.website}
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
