import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Services from "@/components/portfolio/Services";
import Projects from "@/components/portfolio/Projects";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import SmoothScroll from "@/components/portfolio/SmoothScroll";
import CustomCursor from "@/components/portfolio/CustomCursor";
import ShaderBackground from "@/components/portfolio/ShaderBackground";
import Marquee from "@/components/portfolio/Marquee";

const Index = () => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        <ShaderBackground />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default Index;
