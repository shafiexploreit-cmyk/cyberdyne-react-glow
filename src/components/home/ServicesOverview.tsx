import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  ShoppingCart,
  Landmark,
  Calculator,
  Stethoscope,
  Plane,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "DigiEdu", desc: "Complete education management system for schools, colleges & universities.", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-500/10", text: "text-blue-600" },
  { icon: ShoppingCart, title: "DigiShop", desc: "Scalable e-commerce platform to launch and grow your online store.", gradient: "from-orange-500 to-amber-500", bg: "bg-orange-500/10", text: "text-orange-600" },
  { icon: Landmark, title: "O'Muhuri", desc: "Digital land administration and revenue management solution.", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-500/10", text: "text-emerald-600" },
  { icon: Calculator, title: "DigiFAS", desc: "Comprehensive financial accounting system for enterprises.", gradient: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", text: "text-violet-600" },
  { icon: Stethoscope, title: "O'Doctors", desc: "Healthcare management platform connecting patients and doctors.", gradient: "from-rose-500 to-pink-500", bg: "bg-rose-500/10", text: "text-rose-600" },
  { icon: Plane, title: "BDVROMON", desc: "Travel and tourism management platform for Bangladesh.", gradient: "from-sky-500 to-cyan-500", bg: "bg-sky-500/10", text: "text-sky-600" },
  { icon: Users, title: "HRM", desc: "Human resource management system for modern organizations.", gradient: "from-lime-500 to-green-500", bg: "bg-lime-500/10", text: "text-lime-600" },
];

const ServicesOverview = () => (
  <section className="py-24 bg-muted/30 relative">
    {/* Subtle background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/[0.03] blur-[80px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/[0.03] blur-[80px]" />
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          We offer a suite of innovative digital products tailored to diverse industries.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border-0 shadow-md relative">
              {/* Gradient top border */}
              <div className={`h-1 w-full bg-gradient-to-r ${svc.gradient}`} />
              <CardHeader className="pb-3">
                <div className={`w-14 h-14 rounded-xl ${svc.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <svc.icon className={`h-7 w-7 ${svc.text}`} />
                </div>
                <CardTitle className="text-lg">{svc.title}</CardTitle>
                <CardDescription className="leading-relaxed">{svc.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0 group/btn">
                  <Link to="/services" className="flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
