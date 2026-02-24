import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
];

const TestimonialsSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/[0.02] blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/[0.02] blur-[80px]" />
    </div>

    <div className="container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Trusted by 200+ organizations across Bangladesh.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
          >
            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              {/* Left accent border */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${t.color}`} />
              <CardContent className="pt-8 pl-8">
                {/* Star rating */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-8 leading-relaxed text-[15px]">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
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
);

export default TestimonialsSection;
