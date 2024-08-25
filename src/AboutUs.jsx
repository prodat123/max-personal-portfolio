import { motion } from 'framer-motion';

const skills = [
  "JavaScript",
  "Java",
  "Python",
  "HTML & CSS",
  "React",
  "React Native",
  "Node.js",
  "Tailwind CSS",
  "Firebase",
  "MySQL",
  "Git & GitHub",
];

export default function AboutUs() {
  return (
    <section id="about" className="relative w-full py-20 bg-background overflow-hidden">
      
      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 text-center md:text-left z-20">
        
        {/* Text Section */}
        <div className="col-span-2 md:col-span-2 lg:col-span-2 mb-8 lg:mb-0">
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-mono text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            | About Me
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-text leading-relaxed mb-6 md:mb-10 max-w-full md:max-w-2xl text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Being the first in my family to develop a passion for programming, I dedicated countless hours to honing my skills and creating websites for friends and family. I firmly believe that consistent, small improvements can lead to significant progress. While financial rewards are important, my true motivation lies in the opportunity to learn, grow, and evolve as a developer.
          </motion.p>
        </div>

        {/* Image Sections */}
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-accent lg:col-span-3 col-span-2">
          <img
            src={require('./assets/about1.jpg')}
            alt="Main Image"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-accent col-span-2 lg:col-span-1">
          <img
            src={require('./assets/about4.jpg')}
            alt="Side Image 1"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-accent col-span-2 lg:col-span-1">
          <img
            src={require('./assets/about3.jpg')}
            alt="Side Image 2"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-accent col-span-2 md:col-span-2 lg:col-span-3">
          <img
            src={require('./assets/about5.jpg')}
            alt="Bottom Image"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-accent col-span-1 lg:col-span-2">
          <img
            src={require('./assets/about7.jpg')}
            alt="Bottom Image"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
        
      </div>
      
      {/* Skills List */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text mb-4 font-mono">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-lg md:text-xl text-text">
          {skills.map((skill, idx) => (
            <span key={idx} className="bg-secondary border-2 border-accent text-text py-2 px-4 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
