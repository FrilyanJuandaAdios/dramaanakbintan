"use client";
import { useEffect, useState } from "react";
import { X, Play } from "lucide-react";

export default function FilmModal({ film, onClose }) {
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    if (!film) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    const timer = setTimeout(() => {
      setShowPoster(true);
    }, 20000);

    return () => {
      window.removeEventListener("keydown", handleEsc);
      clearTimeout(timer);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black animate-fadeIn">
      {/* Tombol Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-black/60 rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Video / Poster */}
      <div className="w-full h-full relative">
        {!showPoster ? (
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${film.videoId}?autoplay=1&mute=1&start=0&end=20&controls=0&modestbranding=1&showinfo=0`}
            title={film.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <img
            src={film.background}
            alt={film.title}
            className="w-full h-full object-cover animate-fadeInPoster"
          />
        )}

        {/* Overlay tipis */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 md:p-12 text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{film.title}</h2>
          <p className="text-sm text-gray-200 mb-2">
            {film.year} • {film.genre} • {film.duration}
          </p>
          <p className="max-w-3xl text-white/90 mb-6">{film.premis}</p>

          {/* Tombol Tonton Sekarang */}
          <a
            href={`https://www.youtube.com/watch?v=${film.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors"
          >
            <Play className="w-5 h-5" />
            Tonton Sekarang
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeInPoster {
          from {
            opacity: 0;
            transform: scale(1.05);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fadeInPoster {
          animation: fadeInPoster 1s ease-out;
        }
      `}</style>
    </div>
  );
}
