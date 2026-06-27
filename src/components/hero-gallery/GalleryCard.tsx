"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReelItem } from "./galleryData";

interface GalleryCardProps {
  item: ReelItem;
  isActive: boolean;
  position: "far-left" | "left" | "center" | "right" | "far-right";
  onClick: () => void;
}

const getTransformConfig = (
  position: "far-left" | "left" | "center" | "right" | "far-right",
  isActive: boolean
) => {
  const configs = {
    "far-left": {
      rotateY: 35,
      translateX: -250,
      scale: 0.75,
      opacity: 0.45,
      zIndex: 1,
    },
    left: {
      rotateY: 20,
      translateX: -120,
      scale: 0.95,
      opacity: 0.8,
      zIndex: 2,
    },
    center: {
      rotateY: 0,
      translateX: 0,
      translateZ: 80,
      scale: 1.15,
      opacity: 1,
      zIndex: 5,
    },
    right: {
      rotateY: -20,
      translateX: 120,
      scale: 0.95,
      opacity: 0.8,
      zIndex: 2,
    },
    "far-right": {
      rotateY: -35,
      translateX: 250,
      scale: 0.75,
      opacity: 0.45,
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
}: GalleryCardProps) {
  const config = getTransformConfig(position, isActive);

  return (
    <motion.div
      onClick={onClick}
      className="absolute w-[280px] h-[360px] cursor-pointer"
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
