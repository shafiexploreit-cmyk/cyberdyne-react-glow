import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { User, Phone, Mail } from "lucide-react";

const leadership = [
  {
    name: "MAJOR GENERAL AMSA AMIN ndc, psc (retd)",
    role: "Chairman",
    description: "Former Ambassador to Russia, Brazil & Jordan",
    quote: "We are all constantly challenged to seek success in our ever-growing world of business, to make the world a better place. Our Core Values which focus on meeting the Customer's expectations will continue to create, innovate and sustain a genuine legacy.",
    image: "https://www.cyberdynetechnologyltd.com/public/dist/about_image/612264b232e17.jpg",
    email: "info@cyberdynetechnologyltd.com",
    phone: "+88 01748 715 715"
  },
  {
    name: "Md. Ruhul Kuddus Mondol",
    role: "Managing Director",
    description: "Ex. System Analyst S/W & H/W (Reform Project of Bangladesh Railway), Ex. Broadcast Engineer (different Satellite TV Channel), Ex. Software Engineer (different Software Company)",
    quote: "It is indeed a matter of great satisfaction that by the grace of Almighty Allah, Cyberdyne Technology Ltd. over a period of time has shown tremendous progress in the field of Software development. It has designed and developed a variety of state-of-the-art software solutions.",
    image: "https://www.cyberdynetechnologyltd.com/public/dist/about_image/6122688aac7bb.jpg",
    email: "md@cyberdynetechnologyltd.com",
    phone: "+88 01715 317 133",
    imageClass: "object-right"
  }
];

const management = [
  {
    name: "Nurul Islam",
    role: "General Manager (GM)",
    image: null
  }
];

const teamMembers = [
  { name: "Shafi UL Islam", role: "Team Member" },
  { name: "Taufique Islam", role: "Team Member" },
  { name: "Nazmul Islam", role: "Team Member" },
  { name: "Tushar", role: "Team Member" }
];

const supportTeam = [
  { name: "Imrul Kawsar", role: "Support" },
  { name: "Ferdous islam", role: "Support" },
  { name: "Ali", role: "Support" }
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Team</h1>
            <p className="text-white/70 text-lg">
              Meet the visionary leaders and dedicated professionals driving innovation at Cyberdyne Technology Limited.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-auto relative bg-muted">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className={`w-full h-full object-cover ${leader.imageClass || ""}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        <User className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:w-2/3 flex flex-col justify-center">
                    <h3 className="text-xl font-bold font-display text-primary mb-1">{leader.name}</h3>
                    <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">{leader.role}</div>

                    <p className="text-sm text-foreground/80 mb-4 italic">"{leader.quote}"</p>
                    <p className="text-xs text-muted-foreground mb-6">{leader.description}</p>

                    <div className="mt-auto space-y-2 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>{leader.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{leader.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-display font-bold mb-12 text-center">Management</h2>
          <div className="flex justify-center">
            {management.map((manager, index) => (
              <motion.div
                key={manager.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-xl border border-border text-center w-full max-w-xs"
              >
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                   <User className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-bold font-display mb-1">{manager.name}</h3>
                <p className="text-sm text-muted-foreground">{manager.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-2xl font-display font-bold mb-12 text-center">Team Members</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl border border-border text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-xl">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-display font-bold mb-12 text-center">Support Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {supportTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto mb-3 flex items-center justify-center text-accent font-bold text-lg">
                  {member.name.charAt(0)}
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
