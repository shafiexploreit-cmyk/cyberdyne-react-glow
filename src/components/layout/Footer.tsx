import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-navy text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <div className="container relative py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-display font-bold text-lg">
              C
            </div>
            <h3 className="font-display text-xl font-bold">Cyberdyne Technology</h3>
          </div>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Providing innovative software solutions since 2017. We build digital products that empower businesses across Bangladesh and beyond.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: Facebook, href: "https://facebook.com/cyberdynetechnologyltd" },
              { icon: Linkedin, href: "https://linkedin.com/company/cyberdynetechnologyltd" },
              { icon: Twitter, href: "https://twitter.com/cyberdynebd" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-white/90">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: "Home", path: "/" },
              { label: "Company", path: "/company" },
              { label: "Services", path: "/services" },
              { label: "Clients", path: "/clients" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-white/40 hover:text-white/80 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-white/90">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/40">
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
              House 24, Road 7, Block C, Banasree, Dhaka-1219
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-primary/70" />
              <a href="tel:+8801711221122" className="hover:text-white/80 transition-colors">+880-1711-221122</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary/70" />
              <a href="mailto:info@cyberdynetechnologyltd.com" className="hover:text-white/80 transition-colors">info@cyberdynetechnologyltd.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display font-semibold mb-4 text-white/90">Stay Updated</h4>
          <p className="text-sm text-white/40 mb-4">Subscribe to our newsletter for the latest updates.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
            className="flex gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
            <Button type="submit" size="sm" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Cyberdyne Technology Ltd. All rights reserved.</span>
          <span>Designed & Developed with ❤️ in Bangladesh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
