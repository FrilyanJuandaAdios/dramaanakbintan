"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Film, Users, Clapperboard, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const programs = [
  {
    number: "01",
    Icon: Film,
    title: "Workshop Film",
    tagline: "Belajar membuat film bersama",
    desc: "Kami sedang menyiapkan workshop film perdana kami bekerja sama dengan Puskesmas Teluk Sasah. Ini adalah langkah kecil yang berarti buat kami — berbagi apa yang kami tahu tentang pembuatan film kepada peserta yang belum pernah menyentuh kamera sebelumnya. Sederhana, tapi tulus.",
    activities: [
      "Pengenalan dasar kamera dan komposisi gambar",
      "Penulisan cerita pendek untuk divisualisasikan",
      "Praktik langsung merekam dan memotret",
      "Mini project bersama sebagai penutup",
    ],
    benefits: [
      "Pengalaman langsung membuat konten visual",
      "Kenal dengan komunitas film lokal",
      "Portofolio sederhana dari mini project",
      "Membuka jalan untuk terlibat di proyek berikutnya",
    ],
    audience: "Peserta dari lingkungan Puskesmas Teluk Sasah dan masyarakat sekitar yang penasaran dengan dunia film.",
    chips: ["Kolaborasi Lokal", "Pemula", "Gratis"],
    featured: false,
  },
  {
    number: "02",
    Icon: Users,
    title: "Screening",
    tagline: "Nonton bareng film yang kami buat sendiri",
    desc: "Kami berencana mengadakan screening sederhana untuk film-film pendek dan menengah yang sudah kami kerjakan. Bukan festival besar, bukan acara mewah — hanya kami, karya kami, dan siapapun yang mau datang nonton dan ngobrol bareng setelahnya. Karena setiap film butuh penonton yang mau merasakannya.",
    activities: [
      "Pemutaran film pendek dan menengah karya DAB",
      "Diskusi santai pasca-nonton bersama tim",
      "Sesi tanya jawab terbuka untuk penonton",
      "Obrolan ringan tentang proses produksi di balik layar",
    ],
    benefits: [
      "Nonton film lokal yang jarang ada di platform besar",
      "Kenal langsung dengan orang-orang di balik filmnya",
      "Dapat perspektif baru tentang cara bercerita lewat gambar",
      "Jadi bagian dari komunitas yang sedang bertumbuh",
    ],
    audience: "Siapapun yang penasaran dengan film buatan anak lokal. Tidak perlu latar belakang apapun.",
    chips: ["Terbuka untuk Umum", "Komunitas", "Gratis"],
    featured: false,
  },
  {
    number: "03",
    Icon: Clapperboard,
    title: "Ikut Produksi Film",
    tagline: "Terlibat langsung dalam proses pembuatan film kami",
    desc: "Kalau kamu penasaran rasanya berada di balik layar sebuah film, ini kesempatannya. Kami membuka ruang bagi orang-orang yang mau belajar sambil terlibat langsung di produksi film Drama Anak Bintan — mulai dari tahap awal hingga selesai. Kami bukan studio besar, tapi kami serius dengan setiap karya yang kami buat. Selain film, kamu juga bisa terlibat di produksi konten Patah Pulih — konten kreasi kami yang berfokus pada storytelling visual di media sosial.",
    activities: [
      "Pra-Produksi: bantu persiapan naskah, lokasi, dan kebutuhan syuting",
      "Produksi: hadir di set dan ambil bagian sesuai kemampuan",
      "Pasca-Produksi: ikut proses editing dan finishing sesuai kebutuhan",
      "Konten Patah Pulih: terlibat di produksi konten video dan reels",
    ],
    benefits: [
      "Pengalaman nyata di set produksi film independen",
      "Nama masuk di credit film jika terlibat penuh",
      "Belajar langsung dari teman-teman yang sudah lebih dulu berproses",
      "Kesempatan jadi bagian tetap dari tim DAB ke depannya",
    ],
    audience: "Siapapun yang serius mau belajar dan tidak takut tangan kotor. Tidak harus punya pengalaman.",
    chips: ["Hands-on", "Credit Film", "Patah Pulih"],
    featured: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ProgramPage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-700 rounded-full mix-blend-screen filter blur-[120px] opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-900 rounded-full mix-blend-screen filter blur-[100px] opacity-15" />
      </div>

      {/* Hero */}
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
          Program <span className="text-red-500">Kami</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
        >
          Kami masih kecil, tapi kami bergerak. Tiga program yang kami jalankan
          dengan sungguh-sungguh — untuk belajar bersama dan tumbuh pelan-pelan.
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

      {/* Programs */}
      <section className="relative z-10 px-6 pb-32 max-w-5xl mx-auto space-y-8">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`relative rounded-3xl border p-8 md:p-12 overflow-hidden transition-all duration-300 ${
              p.featured
                ? "bg-white/8 border-red-500/50 shadow-[0_0_60px_rgba(239,68,68,0.12)]"
                : "bg-white/5 border-white/10 hover:border-white/20"
            }`}
          >
            {/* Featured badge */}
            {p.featured && (
              <div className="absolute top-6 right-6 md:top-8 md:right-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/40 px-3 py-1 text-xs font-semibold text-red-400 uppercase tracking-widest">
                  Unggulan
                </span>
              </div>
            )}

            {/* Top row */}
            <div className="flex items-start gap-5 mb-8">
              <div
                className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${
                  p.featured ? "bg-red-500/20 text-red-400" : "bg-white/8 text-gray-300"
                }`}
              >
                <p.Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className={`text-xs font-mono font-bold ${p.featured ? "text-red-500" : "text-gray-600"}`}>
                    {p.number}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">{p.title}</h2>
                </div>
                <p className={`text-sm mt-1 ${p.featured ? "text-red-400" : "text-gray-500"}`}>
                  {p.tagline}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-10 md:text-lg max-w-3xl">
              {p.desc}
            </p>

            {/* Activities + Benefits grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">Apa yang Kamu Lakukan</p>
                <ul className="space-y-3">
                  {p.activities.map((a, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${p.featured ? "bg-red-500" : "bg-gray-600"}`} />
                      <span className="text-gray-300 text-sm leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-semibold">Yang Kamu Dapatkan</p>
                <ul className="space-y-3">
                  {p.benefits.map((b, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <CheckCircle2 className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-red-400" : "text-gray-500"}`} />
                      <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Audience */}
            <p className="text-xs text-gray-500 mb-8 leading-relaxed max-w-2xl">
              <span className="font-semibold text-gray-400">Untuk siapa? </span>
              {p.audience}
            </p>

            {/* Bottom row: chips + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {p.chips.map((chip, j) => (
                  <span
                    key={j}
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${
                      p.featured
                        ? "bg-red-500/10 border-red-500/30 text-red-400"
                        : "bg-white/5 border-white/15 text-gray-400"
                    }`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition shrink-0 ${
                  p.featured
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                }`}
              >
                Daftar Sekarang
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA bottom */}
      <section className="relative z-10 pb-32 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-500 text-sm mb-4">Masih ada pertanyaan?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hubungi kami langsung.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 text-sm font-bold hover:bg-gray-100 transition"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
