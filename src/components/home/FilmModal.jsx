"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

export default function FilmModal({ film, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-start md:items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-0 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={film.title}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden bg-[#141414] md:rounded-md shadow-2xl"
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/70 text-white hover:bg-black transition"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${film.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={film.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="p-6 md:p-10">
          <h2 className="font-cinema text-3xl md:text-5xl text-white">{film.title}</h2>
          <p className="mt-3 text-sm text-white/45">
            {[film.genre, "Film Pendek", "ADAB Productions"].filter(Boolean).join(" · ")}
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/75">{film.premis}</p>
          <a
            href={film.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
          >
            Buka di YouTube <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
