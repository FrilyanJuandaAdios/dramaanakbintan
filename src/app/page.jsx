import HeroSection from "@/components/HeroSection";
import FilmSection from "@/components/FilmSection";
import VisionMission from "@/components/VisionMission";
import Roadmap from "@/components/Roadmap";
import JoinComunity from "@/components/JoinComunity";
import Services from "@/components/Services";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <FilmSection />
      <VisionMission />
      <Roadmap />
      <JoinComunity />
      <Services />
      <Footer />

    </main>
  );
}
