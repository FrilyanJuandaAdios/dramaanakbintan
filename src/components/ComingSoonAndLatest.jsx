"use client";
import Image from "next/image";

const postersComing = [
  { id: 1, src: "/Poster/1.jpeg", title: "Coming Soon 1" },
  { id: 2, src: "/Poster/2.jpeg", title: "Coming Soon 2" },
  { id: 3, src: "/Poster/3.jpeg", title: "Coming Soon 3" },
];

const postersLatest = [
  { id: 1, src: "/Poster/1.jpeg", title: "Film Terbaru 1" },
  { id: 2, src: "/Poster/2.jpeg", title: "Film Terbaru 2" },
  { id: 3, src: "/Poster/3.jpeg", title: "Film Terbaru 3" },
];

export default function ComingSoonAndLatest() {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden">
      {/* Background glassmorph */}
      <div className="absolute inset-0 backdrop-blur-md bg-black/30" />
      {/* Red accent glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto space-y-32">
        {/* Coming Soon */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Left */}
          <div className="text-left space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent stroke-text">
              COMING SOON
            </h2>
            <p className="text-gray-300 text-lg">
              Nantikan film terbaru kami yang akan segera tayang.
            </p>
          </div>
          {/* Posters Right */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {postersComing.map((film) => (
              <Image
                key={film.id}
                src={film.src}
                alt={film.title}
                width={200}
                height={280}
                className="object-cover w-[160px] h-[230px] rounded-lg transition-transform duration-500 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/* Film Terbaru */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Posters Left */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
            {postersLatest.map((film) => (
              <Image
                key={film.id}
                src={film.src}
                alt={film.title}
                width={200}
                height={280}
                className="object-cover w-[160px] h-[230px] rounded-lg transition-transform duration-500 hover:scale-105"
              />
            ))}
          </div>
          {/* Text Right */}
          <div className="text-right space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent stroke-text">
              FILM TERBARU
            </h2>
            <p className="text-gray-300 text-lg">
              Tonton rilisan terbaru kami yang sudah bisa dinikmati.
            </p>
          </div>
        </div>
      </div>

      {/* Outline text effect */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px white;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
