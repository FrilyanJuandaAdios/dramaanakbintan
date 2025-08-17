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

  // Hero Title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -150]);

  // Short About
  const aboutOpacity = useTransform(
    scrollYProgress,
    [0.2, 0.35, 0.45, 0.55],
    [0, 1, 1, 0]
  );
  const lineWidth = useTransform(scrollYProgress, [0.25, 0.35], ["0%", "100%"]);

  // Photo
  const photoOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.55, 0.75], [1.1, 1]);

  return (
    <section ref={ref} className="h-[500vh] bg-black text-white relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          {/* Glow Merah */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/30 rounded-full blur-3xl"
          />
          {/* Glow Biru / Ungu */}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"
          />
        </div>

        {/* Title */}
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-6xl md:text-8xl font-extrabold text-center relative z-10 tracking-tight"
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
          style={{ opacity: aboutOpacity }}
          className="absolute text-center max-w-xl px-6 z-10"
        >
          <p className="text-lg md:text-2xl text-gray-200">
            Komunitas kreatif yang menghubungkan tradisi dengan film modern.
          </p>
          <motion.div
            style={{ width: lineWidth }}
            className="h-1 bg-red-500 mt-4 mx-auto rounded-full"
          />
        </motion.div>

        {/* Fullscreen Photo */}
        <motion.div
          style={{ opacity: photoOpacity, scale: photoScale }}
          className="absolute inset-0"
        >
          <Image
            src="/FrontCover.png"
            alt="Team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-semibold text-center px-6"
            >
              Kami merangkul anak-anak muda untuk berkreasi
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Outline Text Style */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px white;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
