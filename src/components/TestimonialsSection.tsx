import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Import client logos
import questAllianceLogo from "@/assets/clients/quest-alliance.png";
import agritechLogo from "@/assets/clients/agritech.jpg";
import anonLogo from "@/assets/clients/anon.jpg";
import codeeasyLogo from "@/assets/clients/codeeasy.png";
import goasLogo from "@/assets/clients/goas.webp";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Quest Alliance",
    content: "SCOSS delivered an exceptional web platform that transformed our digital presence. Their attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    logo: questAllianceLogo,
  },
  {
    name: "Michael Chen",
    role: "CTO, AgriTech Solutions",
    content: "The mobile app SCOSS developed for us has revolutionized how we manage farm operations. Outstanding work from start to finish!",
    rating: 5,
    logo: agritechLogo,
  },
  {
    name: "Emily Rodriguez",
    role: "Director, Anon Technologies",
    content: "Their cybersecurity team identified vulnerabilities we never knew existed. SCOSS has been instrumental in protecting our digital assets.",
    rating: 5,
    logo: anonLogo,
  },
];

const clients = [
  { name: "Quest Alliance", logo: questAllianceLogo },
  { name: "AgriTech", logo: agritechLogo },
  { name: "Anon", logo: anonLogo },
  { name: "CodeEasy", logo: codeeasyLogo },
  { name: "GOAS", logo: goasLogo },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-lg border border-border relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted flex items-center justify-center p-2">
                  <img 
                    src={testimonial.logo} 
                    alt={testimonial.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-8 text-foreground">
            Trusted by <span className="text-primary">Leading Companies</span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-4 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 md:h-16 w-auto object-contain max-w-[120px] md:max-w-[150px]"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
