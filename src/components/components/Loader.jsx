import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Change the delay time as per your requirement

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setPercentage((prevPercentage) => {
          if (prevPercentage < 100) {
            return prevPercentage + 10;
          } else {
            clearInterval(interval);
            return prevPercentage;
          }
        });
      }, 200); // Change the interval time as per your requirement
    }
  }, [loading]);

  const variants = {
    initial: {
      scaleY: 0.5,
      opacity: 0,
    },
    animate: {
      scaleY: 1,
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "circIn",
      },
    },
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: loading ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom, blue, purple, black)', // Change the background gradient here
      zIndex: 9999,
    }}>
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
          style={{ scaleY: percentage / 100 }}
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
          style={{ scaleY: percentage / 100 }}
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
          style={{ scaleY: percentage / 100 }}
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
          style={{ scaleY: percentage / 100 }}
        />
        <motion.div
          variants={variants}
          className="h-12 w-2 bg-white"
          style={{ scaleY: percentage / 100 }}
        />
      </motion.div>
      <div>{percentage}%</div>
    </div>
  )
}

export default Loader
