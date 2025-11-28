import { motion } from "framer-motion";
import { Phone, MessageCircle, Navigation, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActions = () => {
  const actions = [
    {
      icon: Phone,
      label: "Call",
      href: "tel:+917065389036",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/919053425711",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: Navigation,
      label: "Directions",
      href: "https://maps.google.com",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      icon: Calendar,
      label: "Site Visit",
      href: "#contact",
      color: "bg-accent hover:bg-accent/90",
    },
  ];

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
    >
      <div className="bg-white/95 backdrop-blur-lg border-t border-border shadow-2xl">
        <div className="flex items-center justify-around p-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={index}
                href={action.href}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1"
              >
                <div className={`w-12 h-12 rounded-full ${action.color} flex items-center justify-center text-white shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium text-foreground">{action.label}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingActions;
