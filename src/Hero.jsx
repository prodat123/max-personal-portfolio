import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isSplit, setIsSplit] = useState(false);

  // Navigation links (scroll-to sections)
  const navigation = [
    { title: "About Me", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSplit(true);
      } else {
        setIsSplit(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event, path) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-background">
        {/* Subtle Tech-Inspired Grid with Gradient */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient Definition */}
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#8e3cbe", stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: "#030104", stopOpacity: 0 }} />
              </linearGradient>

              {/* Mask Definition */}
              <mask id="gridMask">
                <rect width="100%" height="100%" fill="white" />
                <pattern id="techGrid" patternUnits="userSpaceOnUse" width="3" height="5">
                  <path d="M 0 0 L 20 0 20 20 0 20 Z" fill="none" stroke="black" strokeWidth="0.3" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#techGrid)" />
              </mask>
            </defs>

            {/* Apply Gradient to Grid via Mask */}
            <rect width="100%" height="100%" fill="url(#gridGradient)" mask="url(#gridMask)" />
          </svg>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left px-6 space-y-8 md:space-y-0 md:space-x-8 lg:ml-24 m-0">
        {/* Text Content */}
        <div className="flex-1 mt-16 md:mt-0">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold mb-4 tracking-wider text-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className='text-primary'>Max</span>
          </motion.h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl font-mono text-text mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I code with
            <span className='text-text font-semibold'> passion, quality, and speed.</span>
          </motion.p>

          {/* Call to Action */}
          <motion.div 
            className="flex space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {navigation.map((item, idx) => (
              <a 
                key={idx} 
                href={item.path} 
                onClick={(e) => scrollToSection(e, item.path)}
                className="px-4 sm:px-6 py-2 sm:py-3 border-primary border hover:bg-primary text-text font-bold rounded-md  duration-300"
              >
                {item.title}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Image of Yourself */}
        <div className="relative h-full flex-1 flex justify-center items-center md:justify-end">
          <motion.img 
            className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto object-cover rounded-full border-4 border-primary shadow-lg drop-shadow-accent"
            src={require('./assets/personalPhoto.jpeg')}
            alt="Your Name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="animate-pulse text-lg text-white">↓ Scroll Down</a>
      </div>
    </section>
  );
}
