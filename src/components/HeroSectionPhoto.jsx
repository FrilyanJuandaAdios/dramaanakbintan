"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSequence() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // About
  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);
  const aboutOut = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);

  // Photo
  const photoOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.55, 0.8], [1.1, 1]);

  return (
    <section ref={ref} className="h-[400vh] bg-black text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-red-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Title */}
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-6xl md:text-8xl font-extrabold text-center z-10"
        >
          Drama Anak Bintan
        </motion.h1>

        {/* Arrow Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 text-3xl z-10 opacity-80"
        >
          ↓
        </motion.div>

        {/* Short About */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY, scale: aboutOut }}
          className="absolute text-center max-w-xl px-6 z-10"
        >
          <p className="text-lg md:text-2xl text-gray-200">
            Komunitas kreatif yang menghubungkan tradisi dengan film modern.
          </p>
          <div className="h-1 bg-red-500 mt-4 mx-auto rounded-full w-3/4" />
        </motion.div>

        {/* Fullscreen Photo (Grayscale) */}
        <motion.div
          style={{ opacity: photoOpacity, scale: photoScale }}
          className="absolute inset-0"
        >
          <Image
            src="/FrontCover.png"
            alt="Team"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-3xl md:text-5xl font-semibold text-center px-6">
              Kami merangkul anak-anak muda untuk berkreasi
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
