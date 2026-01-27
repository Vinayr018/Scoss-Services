import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Award, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving digital landscape."
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading technology partner for businesses worldwide, known for delivering exceptional software solutions and pioneering digital innovation."
  },
  {
    icon: Heart,
    title: "Values",
    description: "We believe in integrity, innovation, and excellence. Our commitment to quality and customer satisfaction drives everything we do."
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "200+", label: "Projects Delivered" },
  { icon: Rocket, value: "10+", label: "Years Experience" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Park",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SCOSS Services is a leading software and IT company dedicated to helping businesses 
            thrive in the digital age. With years of experience and a passionate team, 
            we deliver solutions that make a difference.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card p-8 h-full text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card p-10 mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary glow-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our talented team of experts brings years of experience and passion for technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card p-6 text-center hover-lift overflow-hidden">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
