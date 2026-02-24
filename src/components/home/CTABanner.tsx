import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const CTABanner = () => (
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/[0.03]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.02]" />
        </div>

        <div className="container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-8">
                    <Sparkles className="h-4 w-4 text-secondary" />
                    Let's Build Something Great
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    Ready to Transform{" "}
                    <span className="bg-gradient-to-r from-secondary to-warm-light bg-clip-text text-transparent">
                        Your Business?
                    </span>
                </h2>
                <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                    Join 200+ organizations that trust Cyberdyne Technology to power their digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="group shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow text-base px-8">
                        <Link to="/contact">
                            Start Your Project
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm text-base px-8">
                        <Link to="/demo">View Live Demos</Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    </section>
);

export default CTABanner;
