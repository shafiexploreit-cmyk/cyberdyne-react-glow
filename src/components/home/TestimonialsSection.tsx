import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Trusted by 200+ organizations across Bangladesh.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{t.quote}"
                </p>
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
);

export default TestimonialsSection;
