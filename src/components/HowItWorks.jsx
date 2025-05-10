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
    description: "Enter your license details and set your price. Our system verifies the authenticity of your license.",
    color: "bg-blue-100 dark:bg-blue-900"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Get Paid",
    description: "Once a buyer is found, we handle the secure payment process and ensure you receive your funds.",
    color: "bg-green-100 dark:bg-green-900"
  },
  {
    icon: CheckCircleIcon,
    title: "Transfer License",
    description: "We facilitate the secure transfer of your license to the new owner, with all necessary documentation.",
    color: "bg-purple-100 dark:bg-purple-900"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your software license is simple and secure with our three-step process
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                    <step.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start mb-2">
                      <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Start Selling Now
          </a>
        </motion.div>
      </div>
    </section>
  );
} 