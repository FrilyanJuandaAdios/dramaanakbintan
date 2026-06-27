"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const getTransformConfig = (position, isActive) => {
  const configs = {
    "far-left": {
      rotateY: 28,
      translateX: -220,
      scale: 0.72,
      opacity: 0.4,
      zIndex: 1,
    },
    left: {
      rotateY: 14,
      translateX: -100,
      scale: 0.9,
      opacity: 0.8,
      zIndex: 2,
    },
    center: {
      rotateY: 0,
      translateX: 0,
      translateZ: 60,
      scale: 1.05,
      opacity: 1,
      zIndex: 5,
    },
    right: {
      rotateY: -14,
      translateX: 100,
      scale: 0.9,
      opacity: 0.8,
      zIndex: 2,
    },
    "far-right": {
      rotateY: -28,
      translateX: 220,
      scale: 0.72,
      opacity: 0.4,
      zIndex: 1,
    },
  };

  return configs[position];
};

export default function GalleryCard({
  item,
  isActive,
  position,
  onClick,
}) {
  const config = getTransformConfig(position, isActive);

  return (
    <motion.div
      onClick={onClick}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[300px] md:w-[240px] md:h-[320px] lg:w-[260px] lg:h-[340px] cursor-pointer"
      animate={{
        rotateY: config.rotateY,
        x: config.translateX,
        scale: config.scale,
        opacity: config.opacity,
        zIndex: config.zIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        scale: config.scale * 1.05,
        y: -8,
      }}
    >
      <div
        className={`relative w-full h-full rounded-3xl overflow-hidden border transition-all duration-300 ${
          isActive
            ? "border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.6)]"
            : "border-white/20 shadow-2xl shadow-black/40"
        }`}
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority={isActive}
        />

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          animate={{
            opacity: isActive ? 0.3 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.div
            animate={{
              opacity: isActive ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          </motion.div>
        </div>

        {/* Active Glow Background */}
        {isActive && (
          <motion.div
            className="absolute -inset-4 bg-red-500/20 rounded-3xl blur-2xl -z-10"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
