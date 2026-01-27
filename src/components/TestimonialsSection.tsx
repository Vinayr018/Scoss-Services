import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Jennifer Morrison",
    role: "CEO",
    company: "TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    content: "SCOSS transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale 10x while reducing costs by 40%. Absolutely exceptional team!",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    company: "FinanceHub",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    content: "The mobile app they developed exceeded all our expectations. Clean code, beautiful design, and they delivered ahead of schedule. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Director of IT",
    company: "SecureNet Corp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    content: "Their cybersecurity audit uncovered vulnerabilities we never knew existed. SCOSS's proactive approach to security has made us sleep better at night.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    role: "Founder",
    company: "E-Shop Pro",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    content: "Our e-commerce platform needed a complete overhaul. SCOSS delivered a stunning, fast, and conversion-optimized website that doubled our sales.",
    rating: 5,
  },
];

const clients = [
  { name: "TechCorp", logo: "TC" },
  { name: "FinanceHub", logo: "FH" },
  { name: "CloudNine", logo: "C9" },
  { name: "SecureNet", logo: "SN" },
  { name: "DataPro", logo: "DP" },
  { name: "InnovateTech", logo: "IT" },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift relative">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-10 h-10" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-8 uppercase tracking-widest text-sm">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
                className="glass-card px-8 py-4 hover-lift group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    {client.logo}
                  </div>
                  <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                    {client.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
