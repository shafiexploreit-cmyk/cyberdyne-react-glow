import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "DigiEdu",
    subtitle: "Complete Education Management System",
    description: "Empowering schools and universities with our all-in-one digital education platform.",
    gradient: "from-primary to-accent",
  },
  {
    title: "DigiShop",
    subtitle: "E-Commerce Solutions",
    description: "Launch your online store with our powerful, scalable e-commerce platform.",
    gradient: "from-secondary to-warm-light",
  },
  {
    title: "O'Muhuri",
    subtitle: "Land & Revenue Management",
    description: "Digital transformation for land administration and revenue collection.",
    gradient: "from-accent to-teal",
  },
  {
    title: "DigiFAS",
    subtitle: "Financial Accounting System",
    description: "Comprehensive financial management for modern enterprises.",
    gradient: "from-navy to-primary",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section className="relative overflow-hidden bg-navy min-h-[70vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 75% 75%, hsl(var(--accent)) 0%, transparent 50%)",
        }} />
      </div>

      <div className="container relative z-10 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${slides[current].gradient} text-white mb-4`}>
              {slides[current].subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              {slides[current].title}
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-lg">
              {slides[current].description}
            </p>
            <div className="flex gap-3">
              <Button asChild size="lg">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex items-center gap-4 mt-12">
          <button onClick={prev} className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-secondary" : "w-2 bg-white/30"}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
