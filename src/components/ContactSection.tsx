import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Headphones, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 91130 30506",
    sub: "+91 89714 17455",
    href: "tel:+919113030506",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "scossservices@gmail.com",
    sub: "Quick response within 24hrs",
    href: "mailto:scossservices@gmail.com",
    color: "from-secondary/15 to-secondary/5",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    value: "+91 91130 30506",
    sub: "Message us on WhatsApp",
    href: "https://wa.me/919113030506?text=Hello%20SCOSS%20Services",
    color: "from-primary/15 to-primary/5",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "SLN Krupa, Mahalakshmi Nagar",
    sub: "Batawadi, Tumkur - 572103",
    href: "/contact",
    color: "from-secondary/15 to-secondary/5",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            <Sparkles className="w-4 h-4" />
            GET IN TOUCH
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
            Let's Build Something{" "}
            <span className="text-primary relative">
              Amazing
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Ready to transform your business? Reach out and let's start your digital journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left: Contact cards + CTA */}
          <div className="flex flex-col gap-4">
            {contactCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="relative flex items-center gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.12),0_6px_0_-3px_rgba(255,42,42,0.15)] transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="relative z-10 w-13 h-13 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                  style={{ width: '3.25rem', height: '3.25rem' }}
                >
                  <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                <div className="relative z-10 flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-foreground mb-0.5">{card.title}</h3>
                  <p className="text-foreground font-semibold text-sm truncate">{card.value}</p>
                  <p className="text-muted-foreground text-xs">{card.sub}</p>
                </div>
                <ArrowRight className="relative z-10 w-4 h-4 text-muted-foreground group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0" />
              </motion.a>
            ))}

            {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden flex-1 min-h-[140px]"
            >
              <div className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90 p-7 h-full flex items-center gap-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 translate-y-1/2 -translate-x-1/3 blur-3xl" />

                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/10"
                >
                  <Headphones className="w-8 h-8 text-primary" />
                </motion.div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-black text-white mb-1">
                    Start Your Digital Journey
                  </h3>
                  <p className="text-white/50 text-sm mb-3">
                    Book a free consultation today
                  </p>
                  <a href="/contact">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300 rounded-full px-6"
                    >
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/60 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)] relative group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.5598!2d77.1267164!3d13.3254536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f1f67bd60167d69%3A0x50d617767a87848!2sSCOSS%20SERVICES!5e0!3m2!1sen!2sin!4v1708627200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SCOSS Services Location - Tumkur"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between border border-white/60 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                  <MapPin className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold text-foreground">SCOSS Services, Tumkur</span>
              </div>
              <a
                href="https://maps.google.com/?q=SLN+Krupa+Mahalakshmi+Nagar+Tumkur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors p-2 rounded-lg hover:bg-primary/10"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
