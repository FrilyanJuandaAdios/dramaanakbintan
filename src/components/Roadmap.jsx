"use client";
import { motion } from "framer-motion";
import { Rocket, Film, Users, Lightbulb } from "lucide-react";

const roadmapData = [
  {
    icon: <Rocket size={40} />,
    title: "Launching Komunitas",
    description: "Membentuk komunitas kreatif di Bintan untuk eksplorasi lokasi sinematik.",
  },
  {
    icon: <Film size={40} />,
    title: "Produksi Film Berkala",
    description: "Rilis film pendek setiap 2 bulan tentang keindahan lokal.",
  },
  {
    icon: <Users size={40} />,
    title: "Kolaborasi & Pelatihan",
    description: "Workshop sinematografi dan editing untuk anggota komunitas.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Ekspansi & Inovasi",
    description: "Menggandeng lebih banyak lokasi dan teknologi seperti drone, 360°, dll.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-12">Roadmap Kami</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {roadmapData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="text-red-600 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
