import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Building2, Users } from "lucide-react";

const clients = [
  "Ministry of Land", "ABC School & College", "Fashion Hub BD", "Health Corp Ltd",
  "Dhaka City Corp", "National University", "Travel BD", "Green Bank Ltd",
  "Metro Hospital", "Tech Solutions Inc", "EduFirst Academy", "Smart Retail Co",
];

const testimonials = [
  {
    name: "Md. Rahman",
    title: "Principal, ABC School",
    quote: "DigiEdu has completely transformed how we manage our institution. Attendance, grading, everything is seamless now.",
    rating: 5,
    initials: "MR",
    color: "bg-blue-500",
  },
  {
    name: "Sarah Akter",
    title: "CEO, Fashion Hub",
    quote: "DigiShop helped us go online quickly and our sales have grown 3x since launching the platform.",
    rating: 5,
    initials: "SA",
    color: "bg-orange-500",
  },
  {
    name: "Dr. Kamal",
    title: "Director, Health Corp",
    quote: "O'Doctors made our patient management incredibly efficient. The team at Cyberdyne is exceptional.",
    rating: 5,
    initials: "DK",
    color: "bg-emerald-500",
  },
  {
    name: "Rafiq Uddin",
    title: "Collector, Dhaka District",
    quote: "O'Muhuri has digitized our land records and made the mutation process much more transparent.",
    rating: 5,
    initials: "RU",
    color: "bg-violet-500",
  },
];

const Clients = () => (
  <Layout>
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
        }} />
      </div>
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">Partners</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Clients</h1>
          <p className="text-white/60 text-lg">
            Trusted by organizations across industries throughout Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { icon: Building2, value: "200+", label: "Organizations" },
            { icon: Users, value: "50K+", label: "End Users" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Client list */}
    <section className="py-24">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Partners</span>
          <h2 className="text-2xl font-display font-bold">Organizations We Work With</h2>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border-0 bg-card shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Building2 className="h-6 w-6 text-primary/50 group-hover:text-primary/70 transition-colors" />
              </div>
              <span className="text-xs text-center font-medium text-muted-foreground">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-muted/30">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Reviews</span>
          <h2 className="text-2xl font-display font-bold">What They Say</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${t.color}`} />
                <CardContent className="pt-6 pl-8">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-display font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.title}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
