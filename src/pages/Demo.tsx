import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const demos = [
  { title: "DigiEdu", url: "https://digiedu.cyberdynetechnologyltd.com", desc: "Education Management System" },
  { title: "DigiShop", url: "https://digishop.cyberdynetechnologyltd.com", desc: "E-Commerce Platform" },
  { title: "O'Muhuri", url: "https://omuhuri.cyberdynetechnologyltd.com", desc: "Land & Revenue Management" },
  { title: "DigiFAS", url: "https://digifas.cyberdynetechnologyltd.com", desc: "Financial Accounting System" },
  { title: "O'Doctors", url: "https://odoctors.cyberdynetechnologyltd.com", desc: "Healthcare Platform" },
  { title: "BDVROMON", url: "https://bdvromon.cyberdynetechnologyltd.com", desc: "Travel & Tourism" },
  { title: "HRM", url: "https://hrm.cyberdynetechnologyltd.com", desc: "Human Resource Management" },
];

const Demo = () => (
  <Layout>
    <section className="bg-navy text-white py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Product Demos</h1>
          <p className="text-white/70 text-lg">Try out our products live — explore each demo below.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demos.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{d.title}</CardTitle>
                <CardDescription>{d.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
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
