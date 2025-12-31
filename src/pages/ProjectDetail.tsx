import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SEO from "@/components/SEO";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
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
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
        <motion.img
          src={project.mainImage}
          alt={`${project.name} - Premium residential plots by ARS Developers`}
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
              {project.name.split(' ').slice(0, -1).join(' ')} <span className="text-accent">{project.name.split(' ').slice(-1)}</span>
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-lg mb-6">
              <MapPin className="w-5 h-5 text-accent" />
              <p className="max-w-3xl">
                {project.location}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-sm text-white/80">Plot Sizes</span>
                <p className="text-xl font-bold">{project.plotSizes.join(', ')}</p>
              </div>
              <div className="glass-card px-6 py-3 rounded-full">
                <span className="text-sm text-white/80">{project.pricePerUnit ? 'Price' : 'Starting Price'}</span>
                <p className="text-xl font-bold text-accent">{project.pricePerUnit || project.startingPrice}</p>
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
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Premium <span className="text-gradient">Amenities</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.amenities.map((amenity, index) => (
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
              
              {project.amenitiesImage && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-luxury"
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
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Site <span className="text-gradient">Layout</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {project.keyPlanImage && (
                  <div className="bg-card rounded-2xl overflow-hidden shadow-luxury">
                    <div className="p-4 bg-primary/10 border-b border-border">
                      <h3 className="text-xl font-bold text-foreground">Key Plan</h3>
                    </div>
                    <img 
                      src={project.keyPlanImage} 
                      alt={`${project.name} key plan - location map`} 
                      className="w-full" 
                    />
                  </div>
                )}
                
                {project.plotLayoutImage && (
                  <div className="bg-card rounded-2xl overflow-hidden shadow-luxury">
                    <div className="p-4 bg-primary/10 border-b border-border">
                      <h3 className="text-xl font-bold text-foreground">Plot Layout</h3>
                    </div>
                    <img 
                      src={project.plotLayoutImage} 
                      alt={`${project.name} plot layout - site plan`} 
                      className="w-full" 
                    />
                  </div>
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
