"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { useState } from "react";
import Member from "@/components/Member";
import AboutHero from "@/components/AboutHero";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <main className="min-h-screen bg-black">
      <AboutHero />

      {/* Our Story */}
      <section className="relative py-24 px-6 md:px-12 bg-black text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold">
              Our <span className="text-red-500">Story</span>
            </h2>
            <p className="text-gray-300">
              Cerita singkat bagaimana{" "}
              <span className="text-red-400 font-semibold">
                Drama Anak Bintan
              </span>{" "}
              berdiri dan berkembang.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 transition rounded-full font-semibold"
            >
              Learn More
            </button>
          </motion.div>

          {/* Image side */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/BS4.jpg"
              alt="Our Story"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-5xl w-full bg-black rounded-2xl p-8 overflow-y-auto max-h-[85vh]"
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>

            <h3 className="text-3xl font-bold mb-6 text-white">
              Our <span className="text-red-500">Story</span>
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-gray-300">
              {/* Kiri: Teks */}
              <div className="space-y-4">
                <p>
                  Semua berawal ketika Rafly Safriansyah dan Frillyan Juanda
                  Adios bertemu di sebuah perusahaan bernama PT Esco Bintan.
                  Keduanya masuk sebagai karyawan baru dan mengikuti training
                  bersama...
                </p>
                <p>
                  Dalam obrolan itu, Rafly bertanya:{" "}
                  <span className="italic text-red-400">
                    “Bang Juan, suka bikin cinematic nggak?”
                  </span>
                </p>
                <p>
                  Pertanyaan itu membuka cerita panjang. Frillyan menjelaskan
                  perjalanan kariernya, prestasi, dan pengalaman di dunia
                  editing dan DOP. Sementara Rafly bercerita tentang passion-nya
                  di dunia akting serta ide-ide cerita yang sudah lama
                  tersimpan...
                </p>
                <p>
                  Dari situlah keduanya sadar bahwa mereka saling melengkapi,
                  lalu melahirkan film pertama{" "}
                  <span className="italic">“Langit dan Laut”</span>, disusul{" "}
                  <span className="italic">“Baju Kurung”</span> yang menembus 34
                  ribu penonton.
                </p>
                <p>
                  Seiring waktu, tim semakin berkembang hingga lahirlah Rumah
                  Produksi Drama Anak Bintan yang terus berkarya hingga
                  sekarang.
                </p>
              </div>

              {/* Kanan: Foto besar */}
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/Member/JuanRaply.jpeg"
                  alt="Our Story Photo"
                  fill
                  className="object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Visi & Misi */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Visi & <span className="text-red-500">Misi</span>
          </motion.h2>

          {/* Visi Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="mb-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-widest text-red-500 mb-4 font-semibold">Visi</p>
            <p className="text-white text-lg md:text-xl leading-relaxed border-l-2 border-red-500 pl-6">
              Menjadi rumah produksi kreatif yang mendorong pertumbuhan perfilman Indonesia melalui karya berkualitas, pengembangan talenta, dan ekosistem kreatif yang inklusif serta berdaya saing di tingkat nasional maupun internasional.
            </p>
          </motion.div>

          {/* Misi Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10"
          >
            <p className="text-xs uppercase tracking-widest text-red-500 mb-8 font-semibold">Misi</p>
            <ol className="space-y-5">
              {[
                "Menghasilkan karya film dan audiovisual yang kuat secara cerita, visual, dan emosional dengan standar produksi profesional.",
                "Membangun wadah bagi talenta kreatif untuk berkembang, berkolaborasi, dan menemukan ruang dalam industri perfilman.",
                "Mengembangkan potensi sineas muda dan kreator lokal agar mampu bersaing dalam industri kreatif nasional maupun global.",
                "Menciptakan ekosistem perfilman yang lebih merata dengan membuka peluang berkarya di luar pusat industri yang selama ini terpusat di kota-kota besar.",
                "Membawa karya-karya autentik Indonesia kepada audiens yang lebih luas melalui berbagai platform, festival, dan jaringan distribusi.",
                "Membangun kolaborasi strategis dengan berbagai pihak untuk memperkuat industri kreatif dan perfilman Indonesia.",
              ].map((item, i) => (
                <li key={i} className="flex gap-5 items-start">
                  <span className="text-red-500 text-xs font-mono mt-[3px] shrink-0 font-bold">
                    0{i + 1}
                  </span>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 px-6 md:px-12 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Road<span className="text-red-500">map</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                year: "2026",
                subtitle: "Membangun Fondasi",
                note: "Memperkuat identitas dan sistem produksi",
                items: [
                  "Menghasilkan 3–5 karya audiovisual",
                  "Membangun tim inti kreatif",
                  "Membentuk 10+ portofolio karya",
                  "Mengikuti 2+ festival/kompetisi film",
                  "Membangun jaringan dengan 10+ kreator lewat Patah Pulih",
                ],
              },
              {
                year: "2027",
                subtitle: "Pengembangan & Perluasan",
                note: "Meningkatkan kualitas dan memperluas jaringan",
                items: [
                  "Menghasilkan 5–10 karya profesional",
                  "Menjalin kerja sama dengan 10+ mitra/brand/institusi",
                  "Membuka program pengembangan talenta",
                  "Membina 50+ talenta kreatif",
                  "Memperluas kolaborasi ke berbagai kota di Indonesia",
                ],
              },
              {
                year: "2028",
                subtitle: "Ekspansi & Pengakuan Industri",
                note: "Membawa karya menuju tingkat nasional dan internasional",
                items: [
                  "Mengembangkan proyek film skala lebih besar",
                  "Membawa karya ke festival nasional & internasional",
                  "Menjangkau 10+ kota melalui kolaborasi",
                  "Membangun ekosistem perfilman yang berkelanjutan",
                  "Menjadi wadah lahirnya filmmaker baru",
                ],
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-7 flex flex-col"
              >
                <p className="text-red-500 text-xs font-mono font-bold mb-1">{phase.year}</p>
                <h3 className="text-white font-bold text-base mb-2">{phase.subtitle}</h3>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed">{phase.note}</p>
                <ul className="space-y-3 mt-auto">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span className="text-gray-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scene */}
      <Member />

      {/* Join With Us */}
      <section className="relative py-24 px-6 md:px-12 text-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="relative max-w-3xl mx-auto space-y-10"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold">
            Join With Us
          </h2>
          <p className="text-gray-300">
            Bergabunglah dengan komunitas kami dan wujudkan karya bersama untuk
            menginspirasi dunia.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 text-white bg-red-600 rounded-full font-semibold hover:bg-red-500 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
