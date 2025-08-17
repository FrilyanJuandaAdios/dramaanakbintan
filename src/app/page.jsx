"use client";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionMission from "@/components/VisionMission";
import Roadmap from "@/components/Roadmap";
import JoinComunity from "@/components/JoinComunity";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import HighlightCarousel from "@/components/HighlightCarousel";
import FilmDetailModal from "@/components/FilmDetailModal";
import { useState } from "react";
import HeroSectionPhoto from "@/components/HeroSectionPhoto";
import BehindTheScene from "@/components/BehindTheScene";
import ComingSoonAndLatest from "@/components/ComingSoonAndLatest";
import BintanSection from "@/components/BintanSection";

export default function Home() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  return (
    <main className="min-h-screen bg-black">
      <HeroSectionPhoto />
      <>
        <HighlightCarousel onDetailClick={(film) => setSelectedFilm(film)} />
        {selectedFilm && (
          <FilmDetailModal
            film={selectedFilm}
            onClose={() => setSelectedFilm(null)}
          />
        )}
      </>
      <ComingSoonAndLatest />
      <BintanSection />
      <Footer />
    </main>
  );
}
