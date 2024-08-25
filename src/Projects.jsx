import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Your existing projects data
const projects = [
  {
    name: "Cktararasa.com",
    url: "https://cktararasa.com",
  },
  {
    name: "Prodatweb.com",
    url: "https://prodatweb.com",
  },
  {
    name: "Tabeakopi.com",
    url: "https://tabeakopi.com",
  },
  {
    name: "Soulfitfitness.com",
    url: "https://soulfitfitness.com",
  },
  {
    name: "Evalspot.id",
    url: "https://evalspot.id",
  },
  {
    name: "Ampmdancestudio.com",
    url: "https://ampmdancestudio.com",
  },
  {
    name: "Dentalnow.id",
    url: "https://dentalnow.id",
  },
  {
    name: "Ask Yourself (v. alpha)",
    url: "https://darkturquoise-ram-825756.hostingersite.com",
  },
];

export default function AboutUs() {
  // State to track the selected project
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative w-full py-20 bg-background overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row">
        
        {/* Sidebar */}
        <div className="md:w-1/4 w-full bg-background border-accent border-2 p-4 rounded-lg shadow-lg mb-6 md:mb-0">
          <h3 className="text-2xl font-bold text-primary mb-4">Web Projects</h3>
          <ul>
            {projects.map((project, idx) => (
              <li key={idx} className="mb-2">
                <button
                  className={`text-lg font-medium ${
                    selectedProject.name === project.name ? "text-primary" : "text-text"
                  } hover:underline`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="md:w-3/4 w-full md:ml-6">
          {/* Project Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-text mb-6 font-mono lg:text-left text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {selectedProject.name}
          </motion.h2>

          {/* Iframe to display the project */}
          <motion.div
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <iframe
              src={selectedProject.url}
              title={selectedProject.name}
              className="w-full h-[400px] md:h-[600px] border-0"
            ></iframe>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
