"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BintanSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/Drone.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          Bintan, Layar Dunia Baru
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-3xl text-gray-200 text-lg md:text-xl"
        >
          Dari pulau yang indah lahir karya-karya besar. Kami percaya Bintan
          adalah rumah bagi cerita-cerita yang bisa mendunia. Mari bersama-sama
          mendukung dan membangun ekosistem perfilman Bintan yang berkelas
          dunia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Dukung & Kolaborasi Bersama Kami
          </Link>
        </motion.div>
      </div>

      {/* Smooth Transition ke Footer */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
    </section>
  );
}
