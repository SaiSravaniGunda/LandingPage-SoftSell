import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
