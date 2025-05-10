import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section-padding pt-32 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Resell Your Software Licenses with Confidence
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto"
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
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#contact" className="btn-primary inline-block text-center">
                Get Started
              </a>
              <a href="#features" className="btn-secondary inline-block text-center">
                Learn More
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Licenses Sold</div>
              </div>
              <div className="text-center col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-primary-600">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Floating Bubbles - Only visible on large screens */}
            <div className="hidden lg:block">
              {/* Top Row */}
              <div className="absolute -top-6 right-1/4 w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -top-12 right-1/3 w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-8 right-1/5 w-20 h-20 bg-primary-300 dark:bg-primary-600 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* Middle Row */}
              <div className="absolute top-1/4 right-1/3 w-16 h-16 bg-primary-200 dark:bg-primary-700 rounded-full opacity-40 animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-primary-300 dark:bg-primary-600 rounded-full opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 right-1/5 w-12 h-12 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2.5s' }}></div>
              
              {/* Bottom Row */}
              <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-primary-300 dark:bg-primary-600 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-6 right-1/3 w-28 h-28 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -bottom-12 right-1/5 w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Additional Small Bubbles */}
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary-200 dark:bg-primary-700 rounded-full opacity-30 animate-float" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-primary-300 dark:bg-primary-600 rounded-full opacity-25 animate-float" style={{ animationDelay: '1.2s' }}></div>
              <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-primary-400 dark:bg-primary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.8s' }}></div>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800">
              {/* Fallback background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[size:40px_40px]"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-16 h-16 md:w-24 md:h-24 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 