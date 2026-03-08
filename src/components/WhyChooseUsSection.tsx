import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, Server, Shield, Megaphone, CheckCircle2, TrendingUp, Clock, Award } from "lucide-react";
import { Button } from "./ui/button";
import { WarmBackground } from "./WarmBackground";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Server,
    title: "Comprehensive IT Solutions",
    description: "End-to-end technology services tailored to your unique business requirements",
    highlight: "500+ Projects",
  },
  {
    icon: Shield,
    title: "IT Infrastructure & Security",
    description: "Enterprise-grade cloud solutions and cybersecurity that keeps your data safe",
    highlight: "99.9% Uptime",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Excellence",
    description: "Data-driven marketing strategies that deliver measurable ROI and growth",
    highlight: "3x ROI Average",
  },
];

const stats = [
  { end: 500, suffix: "+", label: "Projects Delivered", icon: TrendingUp },
  { end: 99, suffix: "%", label: "Client Satisfaction", icon: Award },
  { end: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { end: 24, suffix: "/7", label: "Expert Support", icon: CheckCircle2 },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const WhyChooseUsSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        {/* Animated Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 overflow-hidden group"
              style={{
                boxShadow: `0 8px 32px -8px rgba(0,0,0,0.08), 0 4px 0 0 rgba(255,42,42,0.15)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-black text-foreground mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              <Award className="w-4 h-4" />
              Leading IT Services Company in Tumkur
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground leading-tight">
              Transform Your Business with{" "}
              <span className="text-primary relative">
                Digital Excellence
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
              Transform your business with our comprehensive IT services, custom software 
              development, and technology consulting. Get expert solutions tailored to your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact">
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                >
                  Get a Free IT Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="#services">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground/20 hover:border-primary/40 hover:bg-primary/5 rounded-full px-8 py-6 text-base font-medium"
                >
                  Explore Our Services
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Us?</span>
            </h3>
            
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="relative flex items-start gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.12)] hover:shadow-[0_12px_40px_-4px_rgba(0,0,0,0.12),0_8px_0_-4px_rgba(255,42,42,0.2)] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-primary/5 to-transparent w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-bold text-lg text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{feature.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    {feature.highlight}
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
