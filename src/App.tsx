import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { Recognition } from "./components/Recognition";
import { Stack } from "./components/Stack";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { useSplash } from "./components/Splash";

export default function App() {
  const splash = useSplash();

  return (
    <div className="relative bg-background min-h-screen">
      {/* Subtle noise overlay */}
      <div className="noise-overlay" />
      {splash}

      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Process />
        <Portfolio />
        <Recognition />
        <Stack />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
