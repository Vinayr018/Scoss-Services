import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Play, Shield, Zap, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroVideo from "@/assets/hero-video.mp4";
import heroBg3 from "@/assets/hero-bg-3.jpg";

const slides = [
  {
    title1: "Leading IT Services",
    title2: "Company in Tumkur",
    tagline: "Digital Transformation Services",
    description: "Transform your business with comprehensive IT services, custom software development, and technology consulting.",
    background: heroBg1,
    type: "image" as const,
  },
  {
    title1: "Digital Marketing",
    title2: "That Delivers Results",
    tagline: "Grow Your Online Presence",
    description: "SEO, social media marketing, PPC campaigns, and content marketing strategies to boost your visibility and revenue.",
    background: heroVideo,
    type: "video" as const,
  },
  {
    title1: "Professional Website",
    title2: "Design & Development",
    tagline: "Custom Solutions for Your Business",
    description: "From business websites to e-commerce platforms, we create digital experiences that convert visitors into customers.",
    background: heroBg3,
    type: "image" as const,
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered", icon: Zap },
  { value: "99%", label: "Client Satisfaction", icon: Users },
  { value: "24/7", label: "Expert Support", icon: Shield },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      {slides.map((s, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1.05 : 1,
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 6, ease: "linear" }
          }}
          className="absolute inset-0"
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          {s.type === "video" ? (
            <video 
              src={s.background} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={s.background} 
              alt={`Background ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          )}
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          {/* Subtle animated grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6 pt-32 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/20 to-primary/10 backdrop-blur-md border border-secondary/30 mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
              <span className="text-sm font-semibold text-white tracking-wide">
                Welcome to <span className="text-secondary font-bold">SCOSS Services</span>
              </span>
            </motion.div>

            {/* Main heading with enhanced styling */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-white drop-shadow-lg"
              >
                {slide.title1}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-clip-text text-transparent"
                style={{ 
                  textShadow: '0 0 60px rgba(234, 179, 8, 0.3)'
                }}
              >
                {slide.title2}
              </motion.span>
            </motion.h1>

            {/* Tagline with accent styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary" />
              <p className="text-xl md:text-2xl text-secondary font-semibold italic">
                "{slide.tagline}"
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
            >
              {slide.description}
            </motion.p>

            {/* CTA Buttons with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-bold shadow-2xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free IT Consultation
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>
              <a href="#services">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="group border-2 border-white/30 bg-white/5 text-white hover:border-secondary hover:bg-secondary/10 px-10 py-7 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2 text-secondary group-hover:scale-110 transition-transform" />
                  <span>Explore Our Services</span>
                </Button>
              </a>
            </motion.div>

            {/* Stats with enhanced design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-wrap gap-6 md:gap-12"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.15, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-black text-secondary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced slide indicator dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-2 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? "w-10 bg-gradient-to-r from-secondary to-yellow-400" 
                : "w-2 bg-white/30 hover:bg-white/50"
            }`}
          >
            {index === currentSlide && (
              <motion.div
                layoutId="slideIndicator"
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.5)' }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 right-8 hidden md:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-secondary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
