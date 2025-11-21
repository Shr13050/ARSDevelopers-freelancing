import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Droplets,
  Zap,
  Trees,
  ShieldCheck,
  Dumbbell,
  Users,
  Car,
} from "lucide-react";

const amenities = [
  {
    icon: Home,
    title: "Clubhouse",
    description: "Modern clubhouse with premium facilities",
  },
  {
    icon: Droplets,
    title: "Swimming Pool",
    description: "Olympic-size swimming pool with kids section",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Fully equipped gym with modern equipment",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Landscaped gardens and walking trails",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "CCTV surveillance and gated community",
  },
  {
    icon: Zap,
    title: "Power Backup",
    description: "Uninterrupted power supply",
  },
  {
    icon: Users,
    title: "Community Hall",
    description: "Spacious hall for events and gatherings",
  },
  {
    icon: Car,
    title: "Parking",
    description: "Ample covered and open parking space",
  },
];

const AmenityCard = ({ amenity, index }: { amenity: typeof amenities[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = amenity.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="glass-card rounded-2xl p-8 shadow-luxury hover:shadow-hover transition-all duration-300 h-full">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 group-hover:from-accent group-hover:to-accent/70 transition-all"
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {amenity.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {amenity.description}
        </p>
      </div>
    </motion.div>
  );
};

const Amenities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
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
            World-Class <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience luxury living with our comprehensive range of modern facilities
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
