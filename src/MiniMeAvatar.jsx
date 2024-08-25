import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import avatarImage from './assets/mini-me.png'; // Replace with your avatar image path

const landmarks = [
    {
        id: 'hero', 
        messages: [
          "Welcome to my small portfolio!",
          "I'm here to guide you through what I've made.",
          "Without further a do, let's start scrolling!",
        ],
        position: { bottom: '20%', left: '10%' },
        delayBetweenMessages: 3000, // 3 seconds between messages
    },
    {
        id: 'testimonials', 
        messages: [
          "Here are what my clients have told me before",
        ],
        position: { bottom: '30%', left: '10%' },
        delayBetweenMessages: 3000, // 3 seconds between messages
    },
    
    {
        id: 'about', 
        messages: [
        "Welcome to my About section!",
        "You can read the short paragraph first.",
        "I picked out some random pictures.",
        "Most of the best memories I have are with friends and family.",
        "They support me every step of the way.",
        "Give me confidence.",
        "Most importantly, they have made me who I am today.",
        ],
        position: { bottom: '10%', right: '10%' },
        delayBetweenMessages: 4000, // 3 seconds between messages
    },
    {
        id: 'skills', 
        messages: ["Here are some of my skills!"],
        position: { bottom: '20%', right: '10%' },
    },
    {
        id: 'projects', 
        messages: ["Check out some of my projects!"],
        position: { bottom: '80%', right: '10%' },
    },
    {
        id: 'contact',
        messages: [
            "That marks the end of this portfolio.",
            "If you have any questions,",
            "just message me and I'm happy to answer.",
            "Thank you for reading and have a pleasant rest of your day :)"
        ],
        position: { bottom: '10%', right: '10%'},
        delayBetweenMessages: 3000,

    }
];

export default function MiniMeAvatar() {
  const [currentLandmark, setCurrentLandmark] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const newLandmarkIndex = landmarks.findIndex((landmark) => {
        const element = document.getElementById(landmark.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            scrollPosition >= rect.top + window.scrollY &&
            scrollPosition < rect.bottom + window.scrollY
          );
        }
        return false;
      });

      if (newLandmarkIndex !== -1 && newLandmarkIndex !== currentLandmark) {
        setCurrentLandmark(newLandmarkIndex);
        setCurrentMessageIndex(0); // Reset message index when landmark changes
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLandmark]);

  useEffect(() => {
    const landmark = landmarks[currentLandmark];
    if (landmark.messages.length > 1) {
      const timer = setInterval(() => {
        setCurrentMessageIndex((prevIndex) =>
          prevIndex < landmark.messages.length - 1 ? prevIndex + 1 : 0
        );
      }, landmark.delayBetweenMessages || 5000); // Default to 5 seconds if not specified

      return () => clearInterval(timer);
    }
  }, [currentLandmark]);

  const { messages, position } = landmarks[currentLandmark];
  const message = messages[currentMessageIndex];

  return (
    <motion.div
      className="fixed z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        bottom: position.bottom, 
        left: position.left || 'auto', 
        right: position.right || 'auto'
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.img
        src={avatarImage}
        alt="Mini Me"
        className="w-16 h-16 rounded-full shadow-lg"
      />
      <motion.div
        className="bg-white text-black p-3 rounded-lg shadow-lg mt-2 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ minWidth: '150px' }} // Add minWidth to prevent shrinking
      >
        {message}
      </motion.div>
    </motion.div>
  );
}
