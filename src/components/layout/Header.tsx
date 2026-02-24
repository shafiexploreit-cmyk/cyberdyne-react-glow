import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Company", path: "/company" },
  { label: "Services", path: "/services" },
  { label: "Clients", path: "/clients" },
  { label: "Team", path: "/team" },
  { label: "Demo", path: "/demo" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground text-sm py-2.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+8801711221122" className="flex items-center gap-1.5 hover:text-white/90 transition-colors">
              <Phone className="h-3 w-3" /> +880-1711-221122
            </a>
            <a href="mailto:info@cyberdynetechnologyltd.com" className="hidden sm:flex items-center gap-1.5 hover:text-white/90 transition-colors">
              <Mail className="h-3 w-3" /> info@cyberdynetechnologyltd.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-white/20"
          : "bg-white/70 backdrop-blur-lg border-b border-white/20"
        }`}>
        <div className={`container flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground font-display font-bold text-lg shadow-md shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
              C
            </div>
            <span className="font-display font-bold text-lg text-foreground hidden sm:block">
              Cyberdyne Technology Limited
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl"
            >
              <nav className="flex flex-col p-4 gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
