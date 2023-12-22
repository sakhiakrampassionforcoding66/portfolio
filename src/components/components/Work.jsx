import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechIcon = ({ photo, percentage, openPopup }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRandomAnimation = () => {
    const animations = ['fadeIn', 'scale', 'rotate', 'flip', 'slide'];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.1, background: 'rgba(0, 0, 0, 0.5)' },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={iconVariants}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => openPopup(photo, percentage)}
      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 flex justify-center items-center relative font-bold border-2 border-goldenrod shadow-md"
    >
      <motion.div
        style={{ position: 'absolute', bottom: '0', width: '100%', textAlign: 'center', color: 'white', zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        {percentage}
      </motion.div>
      <img src={photo} alt="circle" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full" />
    </motion.div>
  );
};

const Work = () => {
  const [photos] = useState([
    'src/assets/tech/html.png',
    'src/assets/tech/css.png',
    'src/assets/tech/javascript.png',
    'src/assets/tech/typescript.png',
    'src/assets/tech/reactjs.png',
    'src/assets/tech/nodejs.png',
    'src/assets/tech/redux.png',
    'src/assets/tech/postgres.png',
    'src/assets/tech/git.png',
    'src/assets/tech/tailwind.png',
  ]);

  const customPercentages = ['100%', '100%', '100%', '65%', '95%', '85%', '56%', '90%', '100%', '67%'];
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [popupText, setPopupText] = useState('');

  const openPopup = (photo, text) => {
    setSelectedPhoto(photo);
    setPopupText(text);
  };

  const closePopup = () => {
    setSelectedPhoto(null);
    setPopupText('');
  };

  const popupVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="flex flex-wrap justify-center p-4">
      {photos.map((photo, index) => (
        <TechIcon key={index} photo={photo} percentage={customPercentages[index]} openPopup={openPopup} />
      ))}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={popupVariants}
            onClick={closePopup}
            className="fixed top-0 left-0 w-full h-full bg-opacity-50 bg-black flex justify-center items-center"
          >
            <motion.img src={selectedPhoto} alt="popup" className="w-48 h-48 sm:w-64 sm:h-64" />
            <motion.p style={{ color: 'white', zIndex: 1 }}>{popupText}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
