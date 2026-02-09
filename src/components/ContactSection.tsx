import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, Headphones } from "lucide-react";
import { Button } from "./ui/button";

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 91130 30506",
    sub: "+91 89714 17455",
    href: "tel:+919113030506",
    color: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "scossservices@gmail.com",
    sub: "Quick response within 24hrs",
    href: "mailto:scossservices@gmail.com",
    color: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Tumkur, Karnataka",
    sub: "SLN Krupa, Mahalakshmi Nagar",
    href: "/contact",
    color: "from-primary/20 to-secondary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Let's Build Something <span className="text-primary">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let's start your digital journey today.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group block rounded-2xl p-6 bg-gradient-to-br ${card.color} border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 overflow-hidden`}
            >
              {/* Hover shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]" style={{ transition: 'transform 0.8s ease' }} />

              <div className={`w-14 h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{card.title}</h3>
              <p className="text-foreground font-medium text-sm">{card.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{card.sub}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-foreground via-foreground/95 to-foreground/90 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 -translate-y-1/2 translate-x-1/3 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 translate-y-1/2 -translate-x-1/3 blur-2xl" />

            <div className="relative z-10 flex items-center gap-5">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0"
              >
                <Headphones className="w-8 h-8 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-background mb-1">
                  Start Your Digital Journey Today
                </h3>
                <p className="text-background/70 text-sm md:text-base">
                  Book a free consultation and discover how we can help your business grow.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex gap-3 flex-shrink-0">
              <a href="/contact">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
