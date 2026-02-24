import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const demos = [
  { title: "DigiEdu", url: "https://digiedu.cyberdynetechnologyltd.com", desc: "Education Management System", status: "Live", gradient: "from-blue-500 to-indigo-600", bg: "bg-blue-500/10", statusColor: "bg-emerald-500" },
  { title: "DigiShop", url: "https://digishop.cyberdynetechnologyltd.com", desc: "E-Commerce Platform", status: "Live", gradient: "from-orange-500 to-amber-500", bg: "bg-orange-500/10", statusColor: "bg-emerald-500" },
  { title: "O'Muhuri", url: "https://omuhuri.cyberdynetechnologyltd.com", desc: "Land & Revenue Management", status: "Live", gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-500/10", statusColor: "bg-emerald-500" },
  { title: "DigiFAS", url: "https://digifas.cyberdynetechnologyltd.com", desc: "Financial Accounting System", status: "Live", gradient: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", statusColor: "bg-emerald-500" },
  { title: "O'Doctors", url: "https://odoctors.cyberdynetechnologyltd.com", desc: "Healthcare Platform", status: "Live", gradient: "from-rose-500 to-pink-500", bg: "bg-rose-500/10", statusColor: "bg-emerald-500" },
  { title: "BDVROMON", url: "https://bdvromon.cyberdynetechnologyltd.com", desc: "Travel & Tourism", status: "Beta", gradient: "from-sky-500 to-cyan-500", bg: "bg-sky-500/10", statusColor: "bg-amber-500" },
  { title: "HRM", url: "https://hrm.cyberdynetechnologyltd.com", desc: "Human Resource Management", status: "Live", gradient: "from-lime-500 to-green-500", bg: "bg-lime-500/10", statusColor: "bg-emerald-500" },
];

const Demo = () => (
  <Layout>
    <section className="bg-navy text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
        }} />
      </div>
      <div className="container relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">Explore</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Product Demos</h1>
          <p className="text-white/60 text-lg">Try out our products live — explore each demo below.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="h-full flex flex-col border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              {/* Gradient top */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${d.gradient}`} />
              {/* Preview area */}
              <div className={`h-32 ${d.bg} flex items-center justify-center relative`}>
                <span className="text-4xl font-display font-bold bg-gradient-to-br bg-clip-text text-transparent" style={{
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}>
                  {d.title.charAt(0)}
                </span>
                <div className="text-4xl font-display font-bold text-foreground/10">{d.title}</div>
                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white shadow-sm`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${d.statusColor}`} />
                    {d.status}
                  </span>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{d.title}</CardTitle>
                <CardDescription>{d.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className={`w-full bg-gradient-to-r ${d.gradient} border-0 shadow-md hover:shadow-lg transition-shadow`}>
                  <a href={d.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Try Demo
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Demo;
