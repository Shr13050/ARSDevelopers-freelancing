import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Amenities from "@/components/Amenities";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="ARS Developers | Premium Plots & Properties in Rajasthan & UP | Khatu Shyam, Barsana"
        description="ARS Developers - Your trusted real estate partner. Buy premium residential plots near Khatu Shyam Temple (Sikar), Barsana (Mathura) & more. RERA approved projects with world-class amenities. 500+ acres developed, 2000+ happy families. Call +91-7065389036"
        keywords="ARS Developers, plots in Khatu Shyam, residential plots Sikar, Barsana plots, Shri Shyama Township, Shree Ji Kuteer, farm house Rajasthan, property near Khatu Shyam Temple, plots in Mathura, real estate Faridabad, buy plots Rajasthan, investment plots India"
        url="https://www.arsdevelopers.co.in/"
      />
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Amenities />
      <ContactSection />
      <Footer />
      <FloatingActions />
    </main>
  );
};

export default Index;
