import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Clock, Globe } from "lucide-react";

const stats = [
  { icon: Clock, value: "7+", label: "Years of Excellence" },
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Products Delivered" },
  { icon: Globe, value: "5+", label: "Countries Served" },
];

const Company = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-navy text-white py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
          <p className="text-white/70 text-lg">
            Learn about our journey, mission, and the team behind Cyberdyne Technology.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
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
              className="p-6 rounded-xl bg-card border border-border text-center"
            >
              <s.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-bold text-primary">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-muted/50">
      <div className="container grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border"
        >
          <Target className="h-10 w-10 text-primary mb-4" />
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
          className="p-8 rounded-xl bg-card border border-border"
        >
          <Eye className="h-10 w-10 text-accent mb-4" />
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
