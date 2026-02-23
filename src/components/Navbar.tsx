import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import scossLogo from "@/assets/scoss-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "Website Design & Development", href: "/services/website-design-services-tumkur" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "IT Infrastructure", href: "/services/it-infrastructure" },
      { name: "All Services", href: "/services" },
    ]
  },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Internship", href: "/internship" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Facebook", icon: "f", href: "#" },
  { name: "LinkedIn", icon: "in", href: "#" },
  { name: "Instagram", icon: "ig", href: "#" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top bar - Dark with company info and social */}
      <div className="dark-navbar">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Company tagline */}
            <div className="hidden md:flex items-center gap-2 text-white/90">
              <span className="font-medium">SCOSS Services</span>
              <span className="text-white/50">•</span>
              <span className="text-secondary italic">"Elevating Business through Technology"</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 ml-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xs font-bold text-white">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation - White/Light */}
      <nav
        className={cn(
          "transition-all duration-300 bg-background border-b",
          isScrolled 
            ? "shadow-lg border-border" 
            : "border-transparent"
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={scossLogo} 
                alt="SCOSS Services Logo" 
                className="h-20 w-auto object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        activeDropdown === link.name && "rotate-180"
                      )} />
                    )}
                  </a>
                  
                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-lg shadow-xl py-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact info + CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Phone */}
              <a href="tel:+919113030506" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm">
                  <div className="text-primary font-semibold">Call Us</div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">9113030506</div>
                </div>
              </a>

              <a href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6">
                  Get Quote
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ 
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0 
            }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-2 border-t border-border">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className="block text-foreground hover:text-primary hover:bg-muted transition-colors py-3 px-4 rounded-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-muted-foreground hover:text-primary py-2 px-4 text-sm"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile contact */}
              <div className="pt-4 border-t border-border space-y-3 px-4">
                <a href="tel:+919113030506" className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">9113030506</span>
                </a>
                <a href="/contact" className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Quote
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};
