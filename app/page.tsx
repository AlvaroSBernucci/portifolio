import { Box } from "@mui/material";
import ThemeProvider from "@/components/portfolio/ThemeProvider";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Technologies from "@/components/portfolio/Technologies";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import CustomCursor from "@/components/portfolio/CustomCursor";
import ParticleBackground from "@/components/portfolio/ParticleBackground";

export default function Portfolio() {
  return (
    <ThemeProvider>
      <Box sx={{ bgcolor: "#000", minHeight: "100vh", position: "relative" }}>
        <CustomCursor />
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
