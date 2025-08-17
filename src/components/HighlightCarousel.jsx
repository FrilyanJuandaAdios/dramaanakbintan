"use client";
import { useState, useEffect, useRef } from "react";
import filmsData from "@/data/films";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function HighlightCarousel({ onDetailClick }) {
  const [activeFilm, setActiveFilm] = useState(filmsData[0]);
  const swiperRef = useRef(null);

  // Gandakan array supaya infinite
  const films = [...filmsData, ...filmsData];

  // Auto geser
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle loop seamless
  const handleSlideChange = (swiper) => {
    const half = films.length / 2;
    const realIndex = swiper.realIndex % filmsData.length;
    setActiveFilm(filmsData[realIndex]);

    if (swiper.activeIndex >= half + 1) {
      // Lompat ke posisi awal setengah pertama
      swiper.slideTo(swiper.activeIndex - half, 0);
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${activeFilm.background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8">
        {/* Info Film */}
        <div
          key={activeFilm.title}
          className="text-left text-white mb-8 animate-fadeInUp"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {activeFilm.title}
          </h2>
          <p className="mb-6 max-w-2xl text-sm md:text-lg">
            {activeFilm.premis}
          </p>
          <button
            onClick={() => onDetailClick(activeFilm)}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            Detail
          </button>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          speed={800}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          className="w-full"
        >
          {films.map((film, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer transition-transform duration-500 hover:scale-105">
                <img
                  src={film.poster}
                  alt={film.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Animasi */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
}
