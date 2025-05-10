import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Predefined responses for common questions
const predefinedResponses = {
  greeting: "Hello! I'm your SoftSell assistant. How can I help you today?",
  error: "I apologize, but I'm currently experiencing technical difficulties. Please try again in a few moments or contact our support team directly.",
  help: "I can help you with:\n• Buying and selling software licenses\n• Platform features and pricing\n• License transfer process\n• Account management\n• General inquiries",
  fallback: "I'm not sure I understand. Could you please rephrase your question? You can ask me about buying or selling licenses, platform features, or general inquiries."
};

// Initial questions for users to click
const initialQuestions = [
  "How do I sell my software license?",
  "How do I buy a license?",
  "What are your fees?",
  "Is SoftSell safe to use?",
  "How can I contact support?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: predefinedResponses.greeting
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi')) {
      return predefinedResponses.greeting;
    }
    
    if (input.includes('help') || input.includes('what can you do')) {
      return predefinedResponses.help;
    }
    
    if (input.includes('sell') || input.includes('selling')) {
      return "To sell your license:\n1. Create an account\n2. List your license with details\n3. Set your price\n4. Wait for a buyer\n5. Complete the transfer";
    }
    
    if (input.includes('buy') || input.includes('buying')) {
      return "To buy a license:\n1. Browse available licenses\n2. Select the one you want\n3. Complete the purchase\n4. Receive the license transfer";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('fee')) {
      return "Our platform charges a small commission on successful sales. The exact fee depends on the license value and type. Contact our support team for specific details.";
    }
    
    if (input.includes('safe') || input.includes('security')) {
      return "Yes, SoftSell is completely safe. We verify all licenses, handle secure payments, and ensure proper transfer documentation. Your security is our top priority.";
    }
    
    if (input.includes('contact') || input.includes('support')) {
      return "You can reach our support team through:\n• Email: support@softsell.com\n• Phone: 1-800-SOFTSEL\n• Live chat (available 24/7)";
    }
    
    return predefinedResponses.fallback;
  };

  const handleQuestionClick = (question) => {
    setInput(question);
    handleSubmit(new Event('submit'), question);
  };

  const handleSubmit = async (e, questionText = null) => {
    e.preventDefault();
    const textToProcess = questionText || input;
    if (!textToProcess.trim() || isLoading) return;

    // Add user message
    const userMessage = { role: 'user', content: textToProcess };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = {
        role: 'assistant',
        content: getResponse(textToProcess)
      };
      
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: predefinedResponses.error
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors"
      >
        <ChatBubbleLeftIcon className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 w-96 bg-white dark:bg-gray-900 rounded-lg shadow-xl"
          >
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Initial Questions */}
            {messages.length === 1 && (
              <div className="px-4 pb-4 space-y-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">Choose a question to get started:</p>
                <div className="flex flex-wrap gap-2">
                  {initialQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={isLoading}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 