"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const photos = [
  { src: "/BS1.jpg", alt: "Behind 1" },
  { src: "/BS2.jpg", alt: "Behind 2" },
  { src: "/BS3.jpg", alt: "Behind 3" },
  { src: "/BS4.jpg", alt: "Behind 4" },
  { src: "/BS5.jpg", alt: "Behind 5" },
  { src: "/BS6.jpg", alt: "Behind 6" },
];

export default function BehindTheScene() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[200vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Glassmorph + Glow */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/50 z-0">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-red-500/40 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/30 rounded-full blur-[180px]" />
      </div>

      {/* Sticky Title di belakang frame */}
      <div className="sticky top-1/2 z-0">
        <h2 className="text-white/20 text-[10vw] md:text-[8vw] font-bold text-center">
          Behind the Scene
        </h2>
      </div>

      {/* Floating Photos */}
      <div className="absolute inset-0 flex flex-col justify-center gap-[3vh] pointer-events-none z-10">
        {photos.map((photo, i) => {
          const isLeft = i % 2 === 0;
          const yRange = useTransform(
            scrollYProgress,
            [0, 1],
            [80 * (i + 1), -80 * (i + 1)]
          );

          return (
            <motion.div
              key={i}
              style={{ y: yRange }}
              className={`relative ${
                isLeft ? "self-start ml-8" : "self-end mr-8"
              } w-80 h-52 md:w-[480px] md:h-[320px] shadow-lg rounded-xl overflow-hidden border border-white/20`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={500}
                className="object-cover w-full h-full filter grayscale"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
