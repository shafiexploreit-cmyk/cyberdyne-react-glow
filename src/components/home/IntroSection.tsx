import { motion } from "framer-motion";

const IntroSection = () => (
  <section className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Welcome to <span className="text-gradient">Cyberdyne Technology LTD</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We are a leading software company based in Dhaka, Bangladesh, dedicated to delivering innovative 
          digital solutions that transform businesses. From education to e-commerce, healthcare to financial 
          management — we build products that make a difference.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { value: "7+", label: "Years Experience" },
          { value: "200+", label: "Happy Clients" },
          { value: "15+", label: "Products" },
          { value: "50+", label: "Team Members" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-xl bg-card border border-border"
          >
            <div className="text-3xl font-display font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
