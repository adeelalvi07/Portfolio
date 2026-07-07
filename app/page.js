import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuroraBackground from "@/components/AuroraBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import AIAssistantButton from "@/components/AIAssistantButton";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <AuroraBackground />
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <FeaturedWork />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <AIAssistantButton />
    </>
  );
}
