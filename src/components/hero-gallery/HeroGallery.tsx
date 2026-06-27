"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import { reelsData } from "./galleryData";

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(2); // Start from middle card
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reelsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlay(false);
  const handleMouseLeave = () => setIsAutoPlay(true);

  // Get position for each card
  const getPosition = (index: number) => {
    const positions = [
      "far-left",
      "left",
      "center",
      "right",
      "far-right",
    ] as const;
    const offset = (index - activeIndex + reelsData.length) % reelsData.length;
    return positions[offset];
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    const item = reelsData[index];
    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Patah Pulih
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Konten creation dari Adab Productions yang membawa cerita visual ke
            level berikutnya
          </p>
        </motion.div>

        {/* 3D Gallery Container */}
        <motion.div
          className="relative h-[500px] flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            perspective: "1200px",
          }}
        >
          {/* Large Left Card */}
          <motion.div
            className="absolute -left-20 w-[320px] h-[420px] hidden lg:block"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              rotateY: [25, 30, 25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className="w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-white/5 shadow-2xl shadow-black/40" />
          </motion.div>

          {/* Center Gallery Cards */}
          <motion.div
            className="relative w-full h-full max-w-5xl"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {reelsData.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                isActive={index === activeIndex}
                position={getPosition(index)}
                onClick={() => handleCardClick(index)}
              />
            ))}
          </motion.div>

          {/* Large Right Card */}
          <motion.div
            className="absolute -right-20 w-[320px] h-[420px] hidden lg:block"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              rotateY: [-25, -30, -25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className="w-full h-full rounded-3xl border border-white/10 overflow-hidden bg-white/5 shadow-2xl shadow-black/40" />
          </motion.div>
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          className="flex gap-3 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {reelsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-red-500 w-8" : "bg-white/30"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* CTA Text */}
        <motion.p
          className="text-center text-gray-400 text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Klik card untuk melihat reel di Instagram • Otomatis berganti setiap 3 detik
        </motion.p>
      </div>
    </section>
  );
}
