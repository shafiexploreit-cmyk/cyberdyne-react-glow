import Layout from "@/components/layout/Layout";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Award, Users, Clock, Globe, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { icon: Clock, value: 7, suffix: "+", label: "Years of Excellence", gradient: "from-blue-500 to-indigo-600" },
  { icon: Users, value: 200, suffix: "+", label: "Happy Clients", gradient: "from-emerald-500 to-teal-500" },
  { icon: Award, value: 15, suffix: "+", label: "Products Delivered", gradient: "from-orange-500 to-amber-500" },
  { icon: Globe, value: 5, suffix: "+", label: "Countries Served", gradient: "from-violet-500 to-purple-600" },
];

const timeline = [
  { year: "2017", title: "Company Founded", desc: "Started our journey in Banasree, Dhaka with a small team of 5." },
  { year: "2018", title: "DigiEdu Launched", desc: "Released our first flagship product — the education management system." },
  { year: "2019", title: "O'Muhuri & DigiFAS", desc: "Expanded into land administration and financial accounting solutions." },
  { year: "2020", title: "100+ Clients", desc: "Crossed the milestone of serving 100 organizations across Bangladesh." },
  { year: "2022", title: "DigiShop & BDVROMON", desc: "Launched e-commerce and tourism platforms to diversify our portfolio." },
  { year: "2024", title: "200+ Clients & Growing", desc: "Now serving over 200 organizations with 15+ products and 50+ team members." },
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
      if (current >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <div ref={ref} className="text-3xl font-display font-bold text-white">{count}{suffix}</div>;
};

const Company = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
        }} />
      </div>
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Story</h1>
          <p className="text-white/60 text-lg">Learn about our journey, mission, and the team behind Cyberdyne Technology.</p>
        </motion.div>
      </div>
    </section>

    {/* Story + Stats */}
    <section className="py-24">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Since 2017</span>
          <h2 className="text-3xl font-display font-bold mb-6">Building Digital Bangladesh</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2017, Cyberdyne Technology Ltd started with a vision to digitize Bangladesh's key industries.
            From education to healthcare, e-commerce to government services, we've built products that serve
            hundreds of organizations nationwide.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team of passionate engineers, designers, and product managers work tirelessly to deliver
            innovative solutions that drive real impact. We believe in quality, reliability, and building
            long-term partnerships with our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${s.gradient} text-center relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-white/30" />
              </div>
              <s.icon className="h-7 w-7 text-white/70 mx-auto mb-2" />
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <div className="text-xs text-white/60 mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Milestones</span>
          <h2 className="text-3xl font-display font-bold">Our Journey</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-0">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-6 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xs shadow-md shadow-primary/20 shrink-0">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-primary/30 to-transparent my-1" />}
              </div>
              <div className="pb-10">
                <h3 className="font-display font-bold text-lg mb-1 flex items-center gap-1">
                  {item.title}
                  <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-24">
      <div className="container grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card border-0 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Target className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower businesses and institutions with cutting-edge digital solutions that
            drive efficiency, growth, and positive transformation across Bangladesh and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-card border-0 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden group"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-teal" />
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Eye className="h-7 w-7 text-accent" />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            To become the leading technology partner in South Asia, recognized for innovation,
            quality, and our commitment to building products that truly make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Company;
