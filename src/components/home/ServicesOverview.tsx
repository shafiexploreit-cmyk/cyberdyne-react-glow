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
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "DigiEdu", desc: "Complete education management system for schools, colleges & universities." },
  { icon: ShoppingCart, title: "DigiShop", desc: "Scalable e-commerce platform to launch and grow your online store." },
  { icon: Landmark, title: "O'Muhuri", desc: "Digital land administration and revenue management solution." },
  { icon: Calculator, title: "DigiFAS", desc: "Comprehensive financial accounting system for enterprises." },
  { icon: Stethoscope, title: "O'Doctors", desc: "Healthcare management platform connecting patients and doctors." },
  { icon: Plane, title: "BDVROMON", desc: "Travel and tourism management platform for Bangladesh." },
  { icon: Users, title: "HRM", desc: "Human resource management system for modern organizations." },
];

const ServicesOverview = () => (
  <section className="py-20 bg-muted/50">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We offer a suite of innovative digital products tailored to diverse industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{svc.title}</CardTitle>
                <CardDescription>{svc.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" asChild className="p-0">
                  <Link to="/services">Learn More →</Link>
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
