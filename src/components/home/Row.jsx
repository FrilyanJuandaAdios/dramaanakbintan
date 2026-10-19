"use client";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Baris horizontal ala layanan streaming, dengan tombol geser di desktop
export default function Row({ title, subtitle, action, children }) {
  const scroller = useRef(null);
  const scroll = (dir) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="group/row relative">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 mb-4 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold text-white">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-white/45">{subtitle}</p>}
        </div>
        {action}
      </div>

      <div className="relative">
        <div
          ref={scroller}
          className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-12 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {children}
        </div>
        <button
          onClick={() => scroll(-1)}
          aria-label="Geser ke kiri"
          className="hidden md:grid absolute left-0 top-2 bottom-6 w-12 place-items-center bg-gradient-to-r from-[#0b0b0b] to-transparent text-white opacity-0 group-hover/row:opacity-100 transition"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Geser ke kanan"
          className="hidden md:grid absolute right-0 top-2 bottom-6 w-12 place-items-center bg-gradient-to-l from-[#0b0b0b] to-transparent text-white opacity-0 group-hover/row:opacity-100 transition"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
