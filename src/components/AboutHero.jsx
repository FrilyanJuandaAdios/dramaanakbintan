"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function StoryScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Section ranges
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -80]);

  const aboutOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const aboutY = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);
  const aboutOut = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);

  const pillarsOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const pillarsY = useTransform(scrollYProgress, [0.35, 0.55], [50, 0]);
  const pillarsOut = useTransform(scrollYProgress, [0.55, 0.65], [1, 0]);

  const missionOpacity = useTransform(scrollYProgress, [0.6, 0.75], [0, 1]);
  const missionY = useTransform(scrollYProgress, [0.6, 0.75], [40, 0]);
  const missionOut = useTransform(scrollYProgress, [0.75, 0.85], [1, 0]);

  const photoOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const photoScale = useTransform(scrollYProgress, [0.85, 1], [1.1, 1]);

  // Variants untuk animasi stagger
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="h-[600vh] bg-black text-white relative font-[Geist]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Hero: Logo Only */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute text-center z-10"
        >
          <Image
            src="/ADABLogoNew.png"
            alt="ADAB Logo"
            width={400}
            height={150}
            className="mx-auto"
          />
          <p className="text-lg md:text-2xl text-gray-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Sebuah <span className="text-white font-semibold">studio film</span>{" "}
            dari Bintan, lahir untuk{" "}
            <span className="text-white font-semibold">bercerita</span> dengan
            nilai dan budaya.
          </p>
        </motion.div>

        {/* Kenapa ADAB */}
        <motion.div
          style={{ opacity: aboutOpacity, y: aboutY, scale: aboutOut }}
          className="absolute text-center max-w-2xl px-6 z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ADAB bukan sekadar nama.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            ADAB adalah singkatan dari{" "}
            <span className="text-white font-semibold">Drama Anak Bintan</span>,
            sekaligus lambang{" "}
            <span className="text-white font-semibold">etika</span>,
            penghormatan, dan cara kami berkarya.
          </p>
        </motion.div>

        {/*Pilar*/}
        <motion.div
          style={{ opacity: pillarsOpacity, y: pillarsY, scale: pillarsOut }}
          className="absolute text-center max-w-3xl px-6 space-y-6 z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Tiga Pilar ADAB
          </h2>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {[
              {
                title: "Adab pada Cerita",
                desc: "Menghidupkan kisah dari masyarakat pulau, tradisi Melayu, dan imajinasi anak daerah.",
              },
              {
                title: "Adab pada Penonton",
                desc: "Memberikan film yang bukan hanya tontonan, tapi juga pengalaman bermakna.",
              },
              {
                title: "Adab pada Proses",
                desc: "Menumbuhkan kreativitas bersama, dengan integritas dan kebersamaan.",
              },
            ].map((pillar, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.8 }}
              >
                <span className="font-semibold text-white">{pillar.title}</span>{" "}
                – {pillar.desc}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Misi */}
        <motion.div
          style={{ opacity: missionOpacity, y: missionY, scale: missionOut }}
          className="absolute text-center max-w-2xl px-6 z-10"
        >
          <p className="text-2xl md:text-3xl italic font-medium text-gray-200">
            Kami percaya film adalah jembatan antara{" "}
            <span className="text-white">akar budaya Melayu</span> Kepulauan
            Riau dan <span className="text-white">bahasa sinema universal</span>
            .
          </p>
        </motion.div>

        {/* Photo + Tagline with dark overlay */}
        <motion.div
          style={{ opacity: photoOpacity, scale: photoScale }}
          className="absolute inset-0"
        >
          <Image
            src="/FrontCover.png"
            alt="Studio"
            fill
            className="object-cover grayscale"
          />
          {/* Overlay lebih gelap biar teks kebaca */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-wide text-white text-center px-6">
              ADAB – <span className="text-red-500">Berkarya dengan nilai</span>
              , <span className="text-white">bercerita untuk dunia</span>.
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
