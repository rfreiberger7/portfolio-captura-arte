import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoHero from "@/components/VideoHero";
import PortfolioHome from "@/components/PortfolioHome";
import Services from "@/components/Services";
import PaymentMethods from "@/components/PaymentMethods";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <VideoHero />
      <PortfolioHome />
      <Services />
      <PaymentMethods />
      <Testimonials />
      <Contact />
      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
