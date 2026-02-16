import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Building2 } from "lucide-react";

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
  },
  {
    name: "Sarah Akter",
    title: "CEO, Fashion Hub",
    quote: "DigiShop helped us go online quickly and our sales have grown 3x since launching the platform.",
  },
  {
    name: "Dr. Kamal",
    title: "Director, Health Corp",
    quote: "O'Doctors made our patient management incredibly efficient. The team at Cyberdyne is exceptional.",
  },
  {
    name: "Rafiq Uddin",
    title: "Collector, Dhaka District",
    quote: "O'Muhuri has digitized our land records and made the mutation process much more transparent.",
  },
];

const Clients = () => (
  <Layout>
    <section className="bg-navy text-white py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Clients</h1>
          <p className="text-white/70 text-lg">
            Trusted by organizations across industries throughout Bangladesh.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Client logos */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-2xl font-display font-bold text-center mb-10">Organizations We Work With</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <Building2 className="h-8 w-8 text-primary/40" />
              <span className="text-xs text-center font-medium text-muted-foreground">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-2xl font-display font-bold text-center mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{t.quote}"</p>
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.title}</div>
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
