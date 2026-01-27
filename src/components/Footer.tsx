import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Zap, Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Cloud Solutions", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  support: [
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Status", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "mailto:info@scoss.com", label: "Email" },
];

export const Footer = forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="relative pt-20 pb-10 overflow-hidden" {...props}>
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="/"
              className="flex items-center gap-2 group mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                SC<span className="text-primary">OSS</span>
              </span>
            </motion.a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Your trusted partner for software development, IT solutions, and digital transformation. 
              Building the future of technology, one innovation at a time.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@scoss.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@scoss.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Tech Street, Innovation City</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCOSS Services. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
