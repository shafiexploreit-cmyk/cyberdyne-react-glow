import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, Users, Package, Award } from "lucide-react";

const stats = [
  { value: 7, suffix: "+", label: "Years Experience", icon: Clock, gradient: "from-blue-500 to-indigo-600" },
  { value: 200, suffix: "+", label: "Happy Clients", icon: Users, gradient: "from-emerald-500 to-teal-500" },
  { value: 15, suffix: "+", label: "Products", icon: Package, gradient: "from-orange-500 to-amber-500" },
  { value: 50, suffix: "+", label: "Team Members", icon: Award, gradient: "from-violet-500 to-purple-600" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-display font-bold text-white">
      {count}{suffix}
    </div>
  );
};

const IntroSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Subtle background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]" />
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">
          Who We Are
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Welcome to <span className="text-gradient">Cyberdyne Technology LTD</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We are a leading software company based in Dhaka, Bangladesh, dedicated to delivering innovative
          digital solutions that transform businesses. From education to e-commerce, healthcare to financial
          management — we build products that make a difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative text-center p-8 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg overflow-hidden group`}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-white/30" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 rounded-full border border-white/20" />
            </div>
            <stat.icon className="h-8 w-8 text-white/70 mx-auto mb-3" />
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <div className="text-sm text-white/70 mt-2 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
