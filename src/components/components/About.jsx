import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-b from-black to-blue-900 ml-auto sm:p-8">
      <div className="md:w-full lg:w-1/2 mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            About Me.
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300 text-center">
            Hey! 👋 I'm a seasoned software developer with expertise in TypeScript and JavaScript. I specialize in frameworks like React, Node.js, Next.js, and the stylish Tailwind CSS. I thrive on collaboration to create efficient, scalable, and user-friendly solutions that tackle real-world problems. Let's team up and turn your ideas into reality! 💻✨.
          </p>
        </div>
        <Certificate />
      </div>
    </div>
  );
}

const Certificate = () => {
  const tiltOptions = {
    scale: 1.05,
    transition: { duration: 0.5 },
  };

  const motionOptions = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div className="flex flex-col items-center" {...motionOptions}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {['front-end', 'back-end', 'full-stack'].map((type, index) => (
          <Tilt key={index} options={tiltOptions}>
            <motion.div
              className="w-48 h-48 bg-transparent rounded-0 mb-4 sm:w-64 sm:h-64"
              style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', margin: '10px' }}
            >
              <a
                href={`https://www.credly.com/badges/${getBadgeId(type)}/public_url`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`src/assets/${type}.png`}
                  alt={type}
                  className="w-full h-full object-cover rounded-0"
                />
              </a>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

// Helper function to get badge ID based on type
const getBadgeId = (type) => {
  switch (type) {
    case 'front-end':
      return '40889c1b-7578-4281-931d-0126fb898acc';
    case 'back-end':
      return '760f0e5a-37dd-4d48-9b76-822672e33b24';
    case 'full-stack':
      return '7453f157-ff49-4dc3-92c2-4f53761d4c12';
    default:
      return '';
  }
};
