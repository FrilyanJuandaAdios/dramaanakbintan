"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// ============================
// MAIN SWITCHER (lebih clean)
// ============================
export default function HeroSequence() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);

    const listener = (e) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isDesktop ? <HeroSequenceDesktop /> : <HeroSequenceMobile />;
}

// ============================
// DESKTOP VERSION (SCROLL SEQUENCE)
// ============================
function HeroSequenceDesktop() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  const aboutOpacity = useTransform(scrollYProgress, [0.25, 0.5], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.25, 0.5], [50, 0]);

  const photoOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.55, 0.8], [1.05, 1]);

  return (
    <section ref={ref} className="h-[300vh] bg-black text-white relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Title */}
        <motion.h1
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-6xl md:text-8xl font-extrabold text-center"
        >
          Drama Anak Bintan
        </motion.h1>

        {/* About */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY }}
          className="absolute text-center max-w-xl px-6"
        >
          <p className="text-lg md:text-2xl text-gray-200">
            Komunitas kreatif yang menghubungkan tradisi dengan film modern.
          </p>
        </motion.div>

        {/* Photo */}
        <motion.div
          style={{ opacity: photoOpacity, scale: photoScale }}
          className="absolute inset-0"
        >
          <Image
            src="/FrontCover.png"
            alt="Team"
            fill
            priority
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

// ============================
// MOBILE VERSION (SUPER OPTIMIZED)
// ============================
function HeroSequenceMobile() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl font-extrabold mb-6">Drama Anak Bintan</h1>

      <p className="text-base text-gray-300 mb-8 max-w-md">
        Komunitas kreatif yang menghubungkan tradisi dengan film modern.
      </p>

      <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden">
        <Image
          src="/FrontCover.png"
          alt="Team"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
          <p className="text-lg font-semibold">
            Kami merangkul anak-anak muda untuk berkreasi
          </p>
        </div>
      </div>
    </section>
  );
}
