"use client";
import { motion } from "framer-motion";
import { Eye, Target, Film, Users, Heart } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section id="visimisi" className="bg-gray-50 py-20 px-6 md:px-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16"
      >
        Visi & Misi Kami
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* VISI */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center mb-4 text-red-600">
            <Eye size={32} className="mr-3" />
            <h3 className="text-2xl font-semibold">Visi</h3>
          </div>
          <p className="text-gray-700 text-lg">
            Menjadi wadah kreatif yang mengangkat potensi lokal Bintan melalui film dan visual sinematik berkualitas.
          </p>
        </motion.div>

        {/* MISI */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center mb-4 text-red-600">
            <Target size={32} className="mr-3" />
            <h3 className="text-2xl font-semibold">Misi</h3>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg">
            <li className="flex items-start gap-2">
              <Film size={20} className="mt-1 text-red-500" />
              Memproduksi film pendek yang mengangkat cerita lokal dan keindahan Bintan.
            </li>
            <li className="flex items-start gap-2">
              <Users size={20} className="mt-1 text-red-500" />
              Membangun komunitas kreatif muda yang solid dan berdaya saing.
            </li>
            <li className="flex items-start gap-2">
              <Heart size={20} className="mt-1 text-red-500" />
              Menyampaikan pesan positif dan menginspirasi lewat karya visual sinematik.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
