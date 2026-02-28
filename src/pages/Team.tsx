import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { User, Phone, Mail, Linkedin } from "lucide-react";

const leadership = [
  {
    name: "MAJOR GENERAL AMSA AMIN ndc, psc (retd)",
    role: "Chairman",
    description: "Former Ambassador to Russia, Brazil & Jordan",
    quote: "We are all constantly challenged to seek success in our ever-growing world of business, to make the world a better place. Our Core Values which focus on meeting the Customer's expectations will continue to create, innovate and sustain a genuine legacy.",
    image: "https://www.cyberdynetechnologyltd.com/public/dist/about_image/612264b232e17.jpg",
    email: "info@cyberdynetechnologyltd.com",
    phone: "+88 01748 715 715",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Md. Ruhul Kuddus Mondol",
    role: "Managing Director",
    description: "Ex. System Analyst S/W & H/W (Reform Project of Bangladesh Railway), Ex. Broadcast Engineer (different Satellite TV Channel), Ex. Software Engineer (different Software Company)",
    quote: "It is indeed a matter of great satisfaction that by the grace of Almighty Allah, Cyberdyne Technology Ltd. over a period of time has shown tremendous progress in the field of Software development. It has designed and developed a variety of state-of-the-art software solutions.",
    image: "https://www.cyberdynetechnologyltd.com/public/dist/about_image/6122688aac7bb.jpg",
    email: "md@cyberdynetechnologyltd.com",
    phone: "+88 01715 317 133",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const management = [
  { name: "Nurul Islam", role: "General Manager (GM)", initials: "NI", color: "bg-violet-500" },
];

const teamMembers = [
  { name: "Shafi UL Islam", role: "Developer", initials: "SI", color: "bg-blue-500" },
  { name: "Taufique Islam", role: "Developer", initials: "TI", color: "bg-emerald-500" },
  { name: "Nazmul Islam", role: "Developer", initials: "NI", color: "bg-orange-500" },
  { name: "Tushar", role: "Developer", initials: "T", color: "bg-rose-500" },
];

const supportTeam = [
  { name: "Imrul Kawsar", role: "Support", initials: "IK", color: "bg-sky-500" },
  { name: "Ferdous Islam", role: "Support", initials: "FI", color: "bg-amber-500" },
  { name: "Ali", role: "Support", initials: "A", color: "bg-purple-500" },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            background: "radial-gradient(circle at 30% 50%, hsl(220 70% 45% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(170 60% 40% / 0.2) 0%, transparent 50%)",
          }} />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 mb-4 uppercase tracking-wider">Our People</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Team</h1>
            <p className="text-white/60 text-lg">
              Meet the visionary leaders and dedicated professionals driving innovation at Cyberdyne Technology Limited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl font-display font-bold">Executive Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl border-0 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${leader.gradient}`} />
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-auto relative bg-muted">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        style={leader.role === "Managing Director" ? { objectPosition: "right" } : undefined}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <User className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-lg font-bold font-display text-primary mb-1">{leader.name}</h3>
                    <div className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">{leader.role}</div>

                    <p className="text-sm text-foreground/70 mb-3 italic leading-relaxed">"{leader.quote}"</p>
                    <p className="text-xs text-muted-foreground mb-5">{leader.description}</p>

                    <div className="mt-auto space-y-2 text-sm text-foreground/60">
                      <a href={`mailto:${leader.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Mail className="w-4 h-4 text-primary/60" />
                        <span>{leader.email}</span>
                      </a>
                      <a href={`tel:${leader.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-primary/60" />
                        <span>{leader.phone}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Management</span>
            <h2 className="text-2xl font-display font-bold">Management Team</h2>
          </motion.div>
          <div className="flex justify-center">
            {management.map((manager) => (
              <motion.div
                key={manager.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border-0 shadow-md text-center w-full max-w-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-24 h-24 ${manager.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg`}>
                  {manager.initials}
                </div>
                <h3 className="text-lg font-bold font-display mb-1">{manager.name}</h3>
                <p className="text-sm text-muted-foreground">{manager.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Developers</span>
            <h2 className="text-2xl font-display font-bold">Development Team</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-2xl border-0 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-20 h-20 ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold font-display shadow-lg group-hover:scale-110 transition-transform`}>
                  {member.initials}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 uppercase tracking-wider">Support</span>
            <h2 className="text-2xl font-display font-bold">Support Team</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {supportTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-2xl border-0 shadow-md text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 ${member.color} rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold font-display shadow-lg group-hover:scale-110 transition-transform`}>
                  {member.initials}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
