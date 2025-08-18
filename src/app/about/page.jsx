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

// Ornamen Songket (SVG Pattern)
const songketPattern = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 100 100'%3E%3Cpath d='M50 0 L60 20 L80 20 L65 35 L70 55 L50 45 L30 55 L35 35 L20 20 L40 20 Z' fill='%23ff0000'/%3E%3C/svg%3E")`,
  backgroundSize: "120px 120px",
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
      <section className="relative py-20 px-6 md:px-12 bg-black">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
        <div className="relative max-w-6xl mx-auto space-y-12 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Visi</h3>
            <p className="text-gray-300">
              Menjadi pusat kreativitas film di Bintan yang mendunia.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              "Mengembangkan talenta lokal",
              "Mempromosikan budaya Bintan",
              "Menghasilkan karya berkualitas",
            ].map((misi, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg"
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  Misi {i + 1}
                </h4>
                <p className="text-gray-300">{misi}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative py-20 px-6 md:px-12">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div
          className="absolute inset-0 opacity-5 mix-blend-overlay"
          style={songketPattern}
        />
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">
            Roadmap
          </h2>
          <div className="flex items-center text-white justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-red-500" />
            {[
              {
                year: "2020",
                desc: "Berdiri di Bintan sebagai komunitas film",
              },
              { year: "2021", desc: "Produksi film pendek pertama" },
              {
                year: "2023",
                desc: "Berpartisipasi di festival internasional",
              },
            ].map((milestone, i) => (
              <div key={i} className="relative text-center w-1/3">
                <div className="w-6 h-6 bg-red-500 rounded-full mx-auto mb-4" />
                <h4 className="font-bold">{milestone.year}</h4>
                <p className="text-gray-400 text-sm">{milestone.desc}</p>
              </div>
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
            href="/komunitas"
            className="inline-block px-10 py-4 text-white bg-red-600 rounded-full font-semibold hover:bg-red-500 transition"
          >
            Gabung Komunitas
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
