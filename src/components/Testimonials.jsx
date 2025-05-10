import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "SoftSell made it incredibly easy to sell my unused Adobe license. The process was smooth and I got a great price!",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "IT Manager",
    content: "As a buyer, I appreciate the verification process. I can trust that the licenses I purchase are legitimate.",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Artist",
    content: "The platform is user-friendly and the support team is always helpful. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust SoftSell for their software license trading needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full ring-2 ring-primary-500"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Licenses Traded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 