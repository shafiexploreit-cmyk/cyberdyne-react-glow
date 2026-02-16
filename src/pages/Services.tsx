import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  {
    icon: GraduationCap,
    title: "DigiEdu",
    desc: "Complete education management system for schools, colleges & universities.",
    details: "Features include student management, attendance tracking, grade management, online exams, fee collection, library management, and parent communication portals.",
  },
  {
    icon: ShoppingCart,
    title: "DigiShop",
    desc: "Scalable e-commerce platform to launch and grow your online store.",
    details: "Multi-vendor support, inventory management, payment gateway integration, order tracking, analytics dashboard, and mobile-responsive storefronts.",
  },
  {
    icon: Landmark,
    title: "O'Muhuri",
    desc: "Digital land administration and revenue management solution.",
    details: "Land record digitization, mutation processing, revenue collection, GIS mapping, citizen portals, and comprehensive reporting tools.",
  },
  {
    icon: Calculator,
    title: "DigiFAS",
    desc: "Comprehensive financial accounting system for enterprises.",
    details: "General ledger, accounts payable/receivable, bank reconciliation, budgeting, multi-currency support, and automated financial reporting.",
  },
  {
    icon: Stethoscope,
    title: "O'Doctors",
    desc: "Healthcare management platform connecting patients and doctors.",
    details: "Appointment scheduling, patient records, prescription management, telemedicine, billing, and pharmacy integration.",
  },
  {
    icon: Plane,
    title: "BDVROMON",
    desc: "Travel and tourism management platform for Bangladesh.",
    details: "Tour package management, hotel bookings, transport coordination, guide management, and tourist information systems.",
  },
  {
    icon: Users,
    title: "HRM",
    desc: "Human resource management system for modern organizations.",
    details: "Employee database, attendance & leave management, payroll processing, performance evaluation, recruitment, and training modules.",
  },
];

const Services = () => (
  <Layout>
    <section className="bg-navy text-white py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-white/70 text-lg">
            Innovative software solutions tailored to diverse industries across Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[auto_1fr] gap-0">
                <div className="p-8 flex items-center justify-center bg-primary/5 md:w-48">
                  <svc.icon className="h-16 w-16 text-primary" />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{svc.title}</CardTitle>
                    <CardDescription className="text-base">{svc.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{svc.details}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
