import { motion } from "framer-motion";
import { ArrowRight, Rocket, Star, Calendar, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";

export const CTASection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-12 md:p-20 text-center overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1),0_8px_0_-4px_rgba(255,179,71,0.12)]">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-secondary/20 rounded-br-3xl" />
            
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />

            {/* Content */}
            <div className="relative">
              {/* Floating icons */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 left-1/4 text-primary/20"
              >
                <Star className="w-10 h-10" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 right-1/4 text-secondary/25"
              >
                <Rocket className="w-12 h-12" />
              </motion.div>
              <motion.div
                animate={{ y: [-8, 8, -8], x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-2 text-primary/15"
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>

              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20"
              >
                <Rocket className="w-4 h-4" />
                READY TO GET STARTED?
              </motion.span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
                Start Your{" "}
                <span className="text-primary relative">
                  Digital Journey
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>{" "}
                Today
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how we can help you achieve your technology goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button 
                    size="lg" 
                    className="group bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold rounded-full shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a href="tel:+919113030506">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-foreground/20 hover:border-primary/40 hover:bg-primary/5 px-10 py-7 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Contact Sales
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
