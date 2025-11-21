import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Amenities from "@/components/Amenities";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <main className="min-h-screen">
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
