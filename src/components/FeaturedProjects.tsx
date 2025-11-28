import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Maximize2, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Green Valley Estates",
    location: "Sector 95, Faridabad",
    price: "₹2,500/sq.ft",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    plotSizes: "150-300 sq.yd",
    status: "Ready to Move",
  },
  {
    id: 2,
    title: "Royal Gardens",
    location: "NH-19, Greater Noida",
    price: "₹3,200/sq.ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    plotSizes: "200-500 sq.yd",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Sunrise Meadows",
    location: "Panchkula Extension",
    price: "₹2,800/sq.ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    plotSizes: "180-400 sq.yd",
    status: "Ongoing",
  },
  {
    id: 4,
    title: "Paradise Heights",
    location: "Sector 89, Gurgaon",
    price: "₹4,500/sq.ft",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    plotSizes: "250-600 sq.yd",
    status: "Ready to Move",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-hover transition-all duration-500 bg-card">
        {/* Image Container */}
        <div className="relative h-72 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="glass-card px-4 py-2 rounded-full text-sm font-semibold text-white">
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            {/* <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3> */}
            <div className="flex items-center text-muted-foreground mb-3">
              {/* <MapPin className="w-4 h-4 mr-2" /> */}
              {/* <span className="text-sm">{project.location}</span> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Starting From</div>
              <div className="text-xl font-bold text-accent">{project.price}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Plot Sizes</div>
              <div className="text-lg font-semibold text-foreground flex items-center">
                <Maximize2 className="w-4 h-4 mr-1" />
                {project.plotSizes}
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full group/btn"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties designed for modern living
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
