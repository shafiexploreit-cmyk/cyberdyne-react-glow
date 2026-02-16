import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Brand */}
      <div>
        <h3 className="font-display text-xl font-bold mb-3">Cyberdyne Technology Ltd</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Providing innovative software solutions since 2017. We build digital products that empower businesses across Bangladesh and beyond.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {[
            { label: "Home", path: "/" },
            { label: "Company", path: "/company" },
            { label: "Services", path: "/services" },
            { label: "Clients", path: "/clients" },
            { label: "Contact", path: "/contact" },
          ].map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="text-muted-foreground hover:text-primary-foreground transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-display font-semibold mb-3">Contact Us</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            House 24, Road 7, Block C, Banasree, Dhaka-1219
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            +880-1711-221122
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            info@cyberdynetechnologyltd.com
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-navy-light">
      <div className="container py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cyberdyne Technology Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
