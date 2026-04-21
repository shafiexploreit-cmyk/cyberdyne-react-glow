import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import VibrantBackground from "./VibrantBackground";

const slides = [
  {
    title: "DigiEdu",
    subtitle: "Complete Education Management System",
    description: "Empowering schools and universities with our all-in-one digital education platform.",
    gradient: "from-primary to-accent",
    accentColor: "hsl(220, 70%, 45%)",
  },
  {
    title: "DigiShop",
    subtitle: "E-Commerce Solutions",
    description: "Launch your online store with our powerful, scalable e-commerce platform.",
    gradient: "from-secondary to-warm-light",
    accentColor: "hsl(35, 90%, 55%)",
  },
  {
    title: "O'Muhuri",
    subtitle: "Land & Revenue Management",
    description: "Digital transformation for land administration and revenue collection.",
    gradient: "from-accent to-teal",
    accentColor: "hsl(170, 60%, 40%)",
  },
  {
    title: "DigiFAS",
    subtitle: "Financial Accounting System",
    description: "Comprehensive financial management for modern enterprises.",
    gradient: "from-navy to-primary",
    accentColor: "hsl(220, 30%, 10%)",
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
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <VibrantBackground />

      <div className="container relative z-10 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${slides[current].gradient} text-white mb-6 shadow-lg`}
            >
              {slides[current].subtitle}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
              {slides[current].description}
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg" className="group relative overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 bg-white text-black hover:bg-white/90 backdrop-blur-sm">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex items-center gap-4 mt-16">
          <button onClick={prev} className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === current ? "w-10 bg-gradient-to-r from-primary to-accent" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-2.5 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
