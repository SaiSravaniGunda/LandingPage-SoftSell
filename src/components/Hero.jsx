import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resell Your Software Licenses with Confidence
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The secure marketplace for buying and selling software licenses. Get the best value for your unused licenses.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#contact" className="btn-primary inline-block">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 