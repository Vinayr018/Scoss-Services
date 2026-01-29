import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Server, Cloud, Shield, Megaphone } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  {
    icon: Server,
    title: "Comprehensive IT Solutions",
    description: "Tailored to Your Needs"
  },
  {
    icon: Shield,
    title: "Expertise in IT Infrastructure",
    description: "Cloud Solutions and Cybersecurity"
  },
  {
    icon: Megaphone,
    title: "Affordable and Scalable",
    description: "Digital Marketing Services"
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Leading IT Services Company in Tumkur
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transform Your Business with{" "}
              <span className="text-primary">Digital Excellence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Transform your business with our comprehensive IT services, custom software 
              development, and technology consulting. Get expert solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button 
                size="lg"
                className="group bg-primary hover:bg-primary/90"
              >
                Get a Free IT Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-8">
              Why Choose <span className="text-primary">Us?</span>
            </h3>
            
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            <Button 
              variant="link" 
              className="text-primary mt-4 p-0"
            >
              Schedule a Free IT Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
