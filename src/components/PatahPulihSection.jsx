"use client";

import { Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const instagramPosts = [
  {
    label: "Reel 1",
    thumbnail: "/patahpulih/1.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
  {
    label: "Reel 2",
    thumbnail: "/patahpulih/2.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
  {
    label: "Reel 3",
    thumbnail: "/patahpulih/3.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
  {
    label: "Reel 4",
    thumbnail: "/patahpulih/4.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
  {
    label: "Reel 5",
    thumbnail: "/patahpulih/5.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
  {
    label: "Reel 6",
    thumbnail: "/patahpulih/06.png",
    link: "https://www.instagram.com/patah_pulih/reels/",
  },
];

export default function PatahPulihSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background glassmorph */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.15),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
            <Instagram className="h-4 w-4 text-pink-300" />
            Patah Pulih
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Patah Pulih
          </h2>
          <p className="mx-auto max-w-3xl text-base md:text-lg text-gray-300">
            Bagian dari Adab Productions dengan fokus utama konten creation.
            Bawa cerita Anda menjadi visual yang memukau melalui Instagram.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          {/* Nav buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            effect="coverflow"
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={20}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.8, spaceBetween: 30 },
            }}
            className="w-full patah-pulih-swiper"
          >
            {instagramPosts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-red-500/20 transition duration-500 hover:border-red-500/30"
                >
                  <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-red-500/30 via-purple-500/20 to-blue-500/20">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.label}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <span className="text-sm text-white/90 font-medium">
                        View on Instagram
                      </span>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Lihat konten creation terbaru kami di Instagram. Setiap frame
            dirancang dengan teliti, setiap cerita disampaikan dengan cara yang
            unik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/patah_pulih/reels/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              <Instagram className="h-4 w-4" />
              Lihat Reels di Instagram
            </a>
            <a
              href="https://www.instagram.com/patah_pulih/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
            >
              Follow @patah_pulih
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .patah-pulih-swiper :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
        }
        .patah-pulih-swiper :global(.swiper-pagination-bullet-active) {
          background: #ef4444;
        }
        .patah-pulih-swiper :global(.swiper-wrapper) {
          padding-bottom: 40px;
        }
      `}</style>
    </section>
  );
}
