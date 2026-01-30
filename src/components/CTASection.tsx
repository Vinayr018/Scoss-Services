import { motion } from "framer-motion";
import { ArrowRight, Rocket, Star, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { GlowingOrb } from "./GlowingOrb";

export const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background orbs */}
      <GlowingOrb 
        className="absolute -top-20 -left-20 w-[500px] h-[500px] opacity-30" 
        color="primary"
        delay={0}
      />
      <GlowingOrb 
        className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-20" 
        color="secondary"
        delay={1}
      />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-[-100%] bg-gradient-conic from-primary via-secondary via-primary to-primary animate-spin-slow opacity-20" />
            </div>
            <div className="absolute inset-[1px] rounded-2xl bg-card" />

            {/* Content */}
            <div className="relative">
              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 left-1/4 text-primary/30"
              >
                <Star className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-1/4 text-secondary/30"
              >
                <Rocket className="w-10 h-10" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Start Your <span className="text-primary">Digital Journey</span> Today
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help you achieve your technology goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-semibold glow-primary"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-muted-foreground/30 hover:border-primary/50 hover:bg-primary/5 px-10 py-7 text-lg font-semibold"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
