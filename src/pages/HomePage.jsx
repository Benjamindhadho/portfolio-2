import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Work from "../components/sections/Work";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />

      <Contact />
      <Footer />
    </main>
  );
}
