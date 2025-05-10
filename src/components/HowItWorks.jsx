import { motion } from 'framer-motion';
import { 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: DocumentTextIcon,
    title: "List Your License",
    description: "Enter your license details and set your price. Our system verifies the authenticity of your license."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Get Paid",
    description: "Once a buyer is found, we handle the secure payment process and ensure you receive your funds."
  },
  {
    icon: CheckCircleIcon,
    title: "Transfer License",
    description: "We facilitate the secure transfer of your license to the new owner, with all necessary documentation."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <step.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 