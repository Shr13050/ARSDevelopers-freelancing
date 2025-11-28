import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Maximize2, Phone, Download, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import projectMainImage from "@/assets/project-main.jpg";
import amenitiesImage from "@/assets/amenities.jpg";
import keyPlanImage from "@/assets/key-plan.png";
import plotLayoutImage from "@/assets/plot-layout.jpg";
import bookingPlanImage from "@/assets/booking-plan.jpg";
import projectVideo from "@/assets/project-video.mp4";

const ProjectDetail = () => {
  const navigate = useNavigate();

  const amenitiesList = [
    "Boundary wall",
    "Main entrance gate",
    "CCTV camera",
    "Water supply",
    "24 Hours security",
    "40 Feet wide road",
    "Street lights",
    "Greenery"
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <motion.img
          src={projectMainImage}
          alt="Shri Shyama Township"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button
              variant="ghost"
              className="mb-6 text-white hover:text-accent hover:bg-white/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Button>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Shri Shyama <span className="text-accent">Township</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-lg mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <p className="max-w-3xl">
                Located on Khatu Road near the famous Khatu Shyam Temple, Shri Madhopur, Sikar District, Rajasthan – 332715
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-sm text-white/80">Plot Size</span>
                <p className="text-xl font-bold">100 sq. Yard</p>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-sm text-white/80">Starting Price</span>
                <p className="text-xl font-bold text-accent">₹3,000/sq.yd</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              About the <span className="text-gradient">Project</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to a well-planned residential project located in the peaceful surroundings of Shri Madhopur City, 
              close to the divine Khatu Shyam Temple. Designed for comfort, safety, and modern living, this property 
              offers everything you need for a secure and premium lifestyle.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Project <span className="text-gradient">Walkthrough</span>
            </h2>
            <div className="rounded-3xl overflow-hidden shadow-luxury">
              <video 
                controls 
                className="w-full"
                poster={projectMainImage}
              >
                <source src={projectVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Premium <span className="text-gradient">Amenities</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenitiesList.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{amenity}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-luxury"
              >
                <img src={amenitiesImage} alt="Amenities" className="w-full h-full object-cover" />
              </motion.div>
            </div>
          </motion.div>

          {/* Layout Plans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Site <span className="text-gradient">Layout</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl overflow-hidden shadow-luxury">
                <div className="p-4 bg-primary/10 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">Key Plan</h3>
                </div>
                <img src={keyPlanImage} alt="Key Plan" className="w-full" />
              </div>
              
              <div className="bg-card rounded-2xl overflow-hidden shadow-luxury">
                <div className="p-4 bg-primary/10 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">Plot Layout</h3>
                </div>
                <img src={plotLayoutImage} alt="Plot Layout" className="w-full" />
              </div>
            </div>
          </motion.div>

          {/* Booking Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Booking & <span className="text-gradient">Payment Plan</span>
            </h2>
            
            <div className="bg-card rounded-2xl overflow-hidden shadow-luxury max-w-2xl">
              <img src={bookingPlanImage} alt="Booking Plan" className="w-full" />
            </div>
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Location <span className="text-gradient">Map</span>
            </h2>
            
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <iframe
                src="https://maps.google.com/maps?q=Khatu%20Shyam%20Temple,%20Shri%20Madhopur,%20Sikar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="mt-6 text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full"
                onClick={() => window.open("https://maps.app.goo.gl/2wqRriEjYPfQWait6", "_blank")}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Open in Google Maps
              </Button>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Dream Plot?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to schedule a site visit or get more information
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full"
                onClick={() => window.location.href = "tel:+917065389036"}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary rounded-full"
                onClick={() => window.open("https://wa.me/917065389036", "_blank")}
              >
                Schedule Site Visit
              </Button>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
      <FloatingActions />
    </main>
  );
};

export default ProjectDetail;