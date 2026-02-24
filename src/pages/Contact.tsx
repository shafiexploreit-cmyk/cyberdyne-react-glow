import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <Layout>
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
          }} />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg">Have a question or project in mind? Get in touch with us.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container grid md:grid-cols-[1fr_400px] gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-accent" />
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-muted/50 border-0 focus-visible:ring-primary/30"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="bg-muted/50 border-0 focus-visible:ring-primary/30"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="bg-muted/50 border-0 focus-visible:ring-primary/30"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="bg-muted/50 border-0 focus-visible:ring-primary/30 resize-none"
                  />
                  <Button type="submit" disabled={loading} className="w-full shadow-md shadow-primary/20 hover:shadow-primary/30 transition-shadow">
                    <Send className="h-4 w-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: MapPin, label: "Address", value: "House 24, Road 7, Block C, Banasree, Dhaka-1219, Bangladesh", gradient: "from-blue-500 to-indigo-600" },
              { icon: Phone, label: "Phone", value: "+880-1711-221122", gradient: "from-emerald-500 to-teal-500" },
              { icon: Mail, label: "Email", value: "info@cyberdynetechnologyltd.com", gradient: "from-orange-500 to-amber-500" },
              { icon: Clock, label: "Hours", value: "Sun–Thu: 9 AM – 6 PM", gradient: "from-violet-500 to-purple-600" },
            ].map((item) => (
              <Card key={item.label} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map placeholder */}
            <Card className="border-0 shadow-md overflow-hidden">
              <div className="h-48 bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.196762!2d90.4316!3d23.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b0!2sBanasree!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cyberdyne Office Location"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
