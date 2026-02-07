import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, CheckCircle, Sparkles, Shield, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SEO from "@/components/SEO";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);
  
  const project = getProjectById(Number(id));

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <SEO
          title="Project Not Found"
          description="The requested project could not be found. Browse our premium residential plots and properties."
          url={`https://www.arsdevelopers.co.in/project/${id}`}
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </main>
    );
  }

  // Generate structured data for this project
  const projectStructuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": project.name,
    "description": project.description,
    "url": `https://www.arsdevelopers.co.in/project/${project.id}`,
    "image": project.mainImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": project.location,
      "addressCountry": "IN"
    },
    "offers": {
      "@type": "Offer",
      "price": project.startingPrice,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "seller": {
      "@type": "RealEstateAgent",
      "name": "ARS Developers",
      "telephone": "+91-7065389036",
      "url": "https://www.arsdevelopers.co.in"
    },
    "amenityFeature": project.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity
    }))
  };

  return (
    <main className="min-h-screen">
      <SEO
        title={`${project.name} - Premium Plots in ${project.location.split(',')[0]}`}
        description={`${project.description} Plot sizes: ${project.plotSizes.join(', ')}. Starting from ${project.startingPrice}. Contact ARS Developers at +91-7065389036`}
        keywords={`${project.name}, plots in ${project.location.split(',')[0]}, ${project.amenities.slice(0, 5).join(', ')}, ARS Developers, residential plots`}
        url={`https://www.arsdevelopers.co.in/project/${project.id}`}
        image={project.mainImage}
        type="product"
        structuredData={projectStructuredData}
      />
      <Navbar />
      
      {/* Hero Section - Modern Premium Design */}
      <section className="relative min-h-[85vh] overflow-hidden pt-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent z-10" />
          <motion.img
            src={project.mainImage}
            alt={`${project.name} - Premium residential plots by ARS Developers`}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl z-10" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-10" />
        
        <div className="relative z-20 min-h-[85vh] flex flex-col justify-center items-center text-white px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Button
                variant="ghost"
                className="mb-8 text-white/90 hover:text-accent hover:bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </motion.div>
            
            {/* Project badge */}
            {project.highlights && project.highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-full px-4 py-2 mb-6"
              >
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">{project.highlights[0]}</span>
              </motion.div>
            )}
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {project.name.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent">
                {project.name.split(' ').slice(-1)}
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-lg mb-10"
            >
              <MapPin className="w-5 h-5 text-accent" />
              <p className="max-w-3xl text-white/90">
                {project.location}
              </p>
            </motion.div>
            
            {/* Price and Size Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-5 rounded-2xl min-w-[200px] hover:bg-white/15 transition-all duration-300">
                <span className="text-sm text-white/70 uppercase tracking-wider">Plot Sizes</span>
                <p className="text-xl md:text-2xl font-bold mt-1">{project.plotSizes.join(', ')}</p>
              </div>
              <div className="bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-md border border-accent/40 px-8 py-5 rounded-2xl min-w-[200px] hover:from-accent/40 hover:to-accent/20 transition-all duration-300">
                <span className="text-sm text-white/70 uppercase tracking-wider">{project.pricePerUnit ? 'Price' : 'Starting Price'}</span>
                <p className="text-2xl md:text-3xl font-bold mt-1 text-accent">{project.pricePerUnit || project.startingPrice}</p>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - Only show if project has highlights */}
      {project.highlights && project.highlights.length > 1 && (
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {project.highlights.slice(1).map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-foreground font-semibold text-lg">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Project</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
              {project.description}
            </p>
          </motion.div>

          {/* Video Section */}
          {project.video && (
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
                  poster={project.mainImage}
                  aria-label={`${project.name} project walkthrough video`}
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          )}

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full" />
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Amenities</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border hover:border-accent/30 shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl group-hover:from-accent/30 group-hover:to-accent/10 transition-all">
                      <Shield className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{amenity}</span>
                  </motion.div>
                ))}
              </div>
              
              {project.amenitiesImage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-luxury border border-border"
                >
                  <img 
                    src={project.amenitiesImage} 
                    alt={`${project.name} amenities - ${project.amenities.slice(0, 3).join(', ')}`} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Layout Plans */}
          {(project.keyPlanImage || project.plotLayoutImage) && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-gradient-to-b from-accent to-primary rounded-full" />
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Layout</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {project.keyPlanImage && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-3xl overflow-hidden shadow-luxury border border-border hover:shadow-hover transition-all duration-300"
                  >
                    <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
                      <h3 className="text-xl font-bold text-foreground">Key Plan</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <img 
                        src={project.keyPlanImage} 
                        alt={`${project.name} key plan - location map`} 
                        className="w-full rounded-xl" 
                      />
                    </div>
                  </motion.div>
                )}
                
                {project.plotLayoutImage && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-3xl overflow-hidden shadow-luxury border border-border hover:shadow-hover transition-all duration-300"
                  >
                    <div className="p-5 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
                      <h3 className="text-xl font-bold text-foreground">Plot Layout</h3>
                    </div>
                    <div className="p-4 bg-white">
                      <img 
                        src={project.plotLayoutImage} 
                        alt={`${project.name} plot layout - site plan`} 
                        className="w-full rounded-xl" 
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* Booking Plan */}
          {project.bookingPlanImage && (
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
                <img 
                  src={project.bookingPlanImage} 
                  alt={`${project.name} booking and payment plan`} 
                  className="w-full" 
                />
              </div>
            </motion.div>
          )}

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
                src={project.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${project.name} location map`}
              />
            </div>
            
            <div className="mt-6 text-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full"
                onClick={() => window.open(project.mapUrl, "_blank")}
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
            className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 rounded-3xl p-10 md:p-16 text-center text-white"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Star className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Limited Plots Available</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Book Your Dream Plot?
              </h2>
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
                Contact us today to schedule a site visit or get more information about this premium property
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-primary font-bold rounded-full px-8 py-6 text-lg shadow-lg shadow-accent/30"
                  onClick={() => window.location.href = "tel:+917065389036"}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-lg"
                  onClick={() => window.open("https://wa.me/917065389036", "_blank")}
                >
                  Schedule Site Visit
                </Button>
              </div>
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
