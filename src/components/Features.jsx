import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Secure Transactions",
    description: "End-to-end encryption and secure payment processing for all transactions.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Competitive Pricing",
    description: "Set your own prices and get the best value for your software licenses.",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Verified Users",
    description: "All users are verified to ensure a safe and trustworthy marketplace.",
    icon: UserGroupIcon,
  },
  {
    title: "Quick Transfers",
    description: "Fast and efficient license transfer process with automated verification.",
    icon: ClockIcon,
  },
  {
    title: "Legal Protection",
    description: "Comprehensive documentation and legal protection for all transactions.",
    icon: DocumentCheckIcon,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you with any issues.",
    icon: ChatBubbleLeftRightIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SoftSell?</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the most secure and efficient way to buy and sell software licenses
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-600 text-white rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Trading?
            </h3>
            <p className="text-primary-100 mb-6">
              Join thousands of users who trust SoftSell for their software license trading needs.
              Get started in minutes and experience the future of software license trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
              <a
                href="#about"
                className="px-6 py-3 bg-primary-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 