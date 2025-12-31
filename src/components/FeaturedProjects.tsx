import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Maximize2, ArrowRight } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { projects as projectsData } from "@/data/projects";
import projectMainImage from "@/assets/project-main.jpg";
import project2MainImage from "@/assets/project2-main.jpg";
const projects = [{
  id: 1,
  title: projectsData[0].name,
  location: projectsData[0].location,
  price: projectsData[0].startingPrice,
  image: projectMainImage,
  plotSizes: projectsData[0].plotSizes.join(', '),
  status: "Available"
}, {
  id: 2,
  title: projectsData[1].name,
  location: projectsData[1].location,
  price: projectsData[1].pricePerUnit || projectsData[1].startingPrice,
  image: project2MainImage,
  plotSizes: projectsData[1].plotSizes.join(', '),
  status: "New Launch"
}];
const ProjectCard = ({
  project,
  index
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const navigate = useNavigate();
  return <motion.div ref={ref} initial={{
    opacity: 0,
    y: 50
  }} animate={isInView ? {
    opacity: 1,
    y: 0
  } : {
    opacity: 0,
    y: 50
  }} transition={{
    duration: 0.6,
    delay: index * 0.1
  }} className="group h-full">
      <div className="relative overflow-hidden rounded-3xl shadow-luxury hover:shadow-hover transition-all duration-500 bg-card flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <motion.img src={project.image} alt={project.title} className="w-full h-full object-contain bg-white" whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.6
        }} />
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-20">
            
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex items-start text-muted-foreground mb-3">
              <span className="text-sm line-clamp-2">{project.location}</span>
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

          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full group/btn" onClick={() => navigate(`/project/${project.id}`)}>
            View Details
            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>;
};
const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="projects" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties designed for modern living
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>

        {/* View All Button */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white px-8">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default FeaturedProjects;