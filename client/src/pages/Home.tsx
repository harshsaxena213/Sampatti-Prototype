import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Calculators from "@/components/Calculators";
import Education from "@/components/Education";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Calculators />
        <Education />
        <About />
        <Pricing />
        <FAQ />
        <WaitlistForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
