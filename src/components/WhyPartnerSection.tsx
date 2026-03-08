import { motion } from "framer-motion";
import { MapPin, Languages, Users, Calendar, ArrowRight, Handshake } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const partnerBenefits = [
  {
    icon: MapPin,
    title: "Based in Tumkur",
    description: "Deep understanding of local business environment and industry needs",
    stat: "Local Experts",
  },
  {
    icon: Languages,
    title: "Bilingual Support Team",
    description: "24/7 technical support available in both Kannada and English",
    stat: "24/7 Available",
  },
  {
    icon: Users,
    title: "Regular Client Visits",
    description: "Personal attention with dedicated on-site support and visits",
    stat: "On-Site Support",
  },
];

export const WhyPartnerSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
            >
              <Handshake className="w-4 h-4" />
              YOUR TRUSTED PARTNER
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Why Partner with Us for{" "}
              <span className="text-primary relative">
                Your IT Needs?
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Based in Tumkur, we are a team of dedicated IT professionals committed to 
              delivering high-quality services. Our mission is to help businesses thrive 
              in today's digital era with reliable and innovative IT solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="relative flex items-start gap-5 p-7 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.12)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.12),0_8px_0_-4px_rgba(255,42,42,0.2)] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/5 to-transparent w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110"
                >
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-xl text-foreground">{benefit.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-2">{benefit.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {benefit.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
