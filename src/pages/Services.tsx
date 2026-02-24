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
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-500/10",
    text: "text-blue-600",
    tags: ["Student Mgmt", "Attendance", "Grading", "Online Exams"],
  },
  {
    icon: ShoppingCart,
    title: "DigiShop",
    desc: "Scalable e-commerce platform to launch and grow your online store.",
    details: "Multi-vendor support, inventory management, payment gateway integration, order tracking, analytics dashboard, and mobile-responsive storefronts.",
    gradient: "from-orange-500 to-amber-500",
    bg: "bg-orange-500/10",
    text: "text-orange-600",
    tags: ["Multi-vendor", "Payments", "Analytics", "Mobile-Ready"],
  },
  {
    icon: Landmark,
    title: "O'Muhuri",
    desc: "Digital land administration and revenue management solution.",
    details: "Land record digitization, mutation processing, revenue collection, GIS mapping, citizen portals, and comprehensive reporting tools.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    tags: ["Land Records", "GIS Mapping", "Revenue", "Citizen Portal"],
  },
  {
    icon: Calculator,
    title: "DigiFAS",
    desc: "Comprehensive financial accounting system for enterprises.",
    details: "General ledger, accounts payable/receivable, bank reconciliation, budgeting, multi-currency support, and automated financial reporting.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    text: "text-violet-600",
    tags: ["General Ledger", "Bank Recon", "Budgeting", "Multi-Currency"],
  },
  {
    icon: Stethoscope,
    title: "O'Doctors",
    desc: "Healthcare management platform connecting patients and doctors.",
    details: "Appointment scheduling, patient records, prescription management, telemedicine, billing, and pharmacy integration.",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-500/10",
    text: "text-rose-600",
    tags: ["Appointments", "Telemedicine", "Prescriptions", "Billing"],
  },
  {
    icon: Plane,
    title: "BDVROMON",
    desc: "Travel and tourism management platform for Bangladesh.",
    details: "Tour package management, hotel bookings, transport coordination, guide management, and tourist information systems.",
    gradient: "from-sky-500 to-cyan-500",
    bg: "bg-sky-500/10",
    text: "text-sky-600",
    tags: ["Tour Packages", "Hotel Booking", "Transport", "Guide Mgmt"],
  },
  {
    icon: Users,
    title: "HRM",
    desc: "Human resource management system for modern organizations.",
    details: "Employee database, attendance & leave management, payroll processing, performance evaluation, recruitment, and training modules.",
    gradient: "from-lime-500 to-green-500",
    bg: "bg-lime-500/10",
    text: "text-lime-600",
    tags: ["Payroll", "Leave Mgmt", "Recruitment", "Performance"],
  },
];

const Services = () => (
  <Layout>
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
        }} />
      </div>
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">What We Build</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="text-white/60 text-lg">
            Innovative software solutions tailored to diverse industries across Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container grid gap-8">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="grid md:grid-cols-[auto_1fr] gap-0">
                {/* Icon panel with gradient */}
                <div className={`p-8 flex items-center justify-center md:w-48 bg-gradient-to-br ${svc.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-white/30" />
                    <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border border-white/20" />
                  </div>
                  <svc.icon className="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{svc.title}</CardTitle>
                    <CardDescription className="text-base">{svc.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{svc.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span key={tag} className={`px-2.5 py-1 rounded-full text-xs font-medium ${svc.bg} ${svc.text}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
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
