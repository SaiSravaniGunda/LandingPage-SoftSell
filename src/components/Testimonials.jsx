import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "SoftSell made it incredibly easy to sell my unused Adobe license. The process was smooth and I got a great price!",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "IT Manager",
    content: "As a buyer, I appreciate the verification process. I can trust that the licenses I purchase are legitimate.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Artist",
    content: "The platform is user-friendly and the support team is always helpful. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=3"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Users Say
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 