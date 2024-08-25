import AboutUs from "./AboutUs"
import Hero from "./Hero"
import Projects from "./Projects"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MiniMeAvatar from "./MiniMeAvatar";
import Testimonials from "./Testimonials";
import Contact from "./Contact";




export default function App() {
  const [isSplit, setIsSplit] = useState(false);

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

  return (
    <div>
      <Hero />
      <Testimonials />
      <AboutUs />
      <Projects />
      <Contact />
      <MiniMeAvatar />
    </div>
  )
}

