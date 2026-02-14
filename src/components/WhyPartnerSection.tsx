import { motion } from "framer-motion";
import { MapPin, Languages, Users, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

const partnerBenefits = [
  {
    icon: MapPin,
    title: "Based in Tumkur",
    description: "Understanding of local business environment"
  },
  {
    icon: Languages,
    title: "Bilingual Support Team",
    description: "24/7 technical support in Kannada and English"
  },
  {
    icon: Users,
    title: "Regular Client Visits",
    description: "Personal attention and on-site support"
  },
];

export const WhyPartnerSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
              // Your Trusted Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Partner with Us for{" "}
              <span className="text-primary">Your IT Needs?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Based in Tumkur, we are a team of dedicated IT professionals committed to 
              delivering high-quality services. Our mission is to help businesses thrive 
              in today's digital era with reliable and innovative IT solutions.
            </p>

            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 rounded-full"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Consultation
            </Button>
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
                className="flex items-start gap-4 p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
