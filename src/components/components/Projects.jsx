import React from 'react'
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div>
     <Card title="CourseCrafter" imageSrc="src/assets/coming.png" subText="CourseCrafter is an innovative online learning platform designed to empower individuals to expand their knowledge and skills. With a wide range of courses from industry professionals, CourseCrafter offers a unique learning experience tailored to your needs. After our upcoming launch, we're excited to offer free access to all courses for the first 6 months. Join us in this learning journey and craft your future with CourseCrafter." /> 
     <Card title="BlogBeacon" imageSrc="src/assets/coming.png" subText="BlogBeacon is a revolutionary AI-powered blogging platform. It's designed to provide readers with engaging and insightful content across a wide range of topics. The unique aspect of BlogBeacon is that it's 100% managed by AI. From content creation to moderation, every aspect is handled by advanced AI algorithms. This ensures a constant stream of fresh content, tailored to the interests of our readers. Experience the future of blogging with BlogBeacon"/>
     <Card title="SocialSphere" imageSrc="src/assets/coming.png" subText="SocialSphere is a next-generation social media platform, inspired by the concept of threads. It takes the best aspects of thread-based conversations and enhances them with a suite of powerful, user-friendly features. With SocialSphere, you can engage in deep, meaningful discussions, connect with like-minded individuals, and discover new ideas. Our platform offers a seamless, intuitive user experience, with advanced features that put you in control of your social media interactions. Experience the future of threaded conversations with SocialSphere."/>
    </div>
  
  )
}

export default Projects

const Card = ({ title, imageSrc, subText }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const imageVariants = {
    hover: { scale: 1.1 },
    initial: { rotateY: 0, rotateX: 0, rotateZ: 0 },
    hover3d: { rotateY: 10, rotateX: 10, rotateZ: 5, transition: { duration: 0.5 } },
  };

  return (
    <motion.section

      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      <motion.div
        className="m-4 mx-auto max-w-screen-lg rounded-md border border-white-100 text-white-600 shadow-md"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative flex h-full flex-col text-white-600 md:flex-row">
          <div className="relative p-8 md:w-4/6">
            <div className="flex flex-col md:flex-row">
              <motion.h2
                className="mb-2 text-2xl font-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            </div>
            <motion.p
              className="mt-3 font-sans text-base tracking-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subText}
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <motion.button
                className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-purple-500 hover:text-white"
                whileHover={{ scale: 1.05 }}
              >
                Preview
              </motion.button>
            </div>
          </div>
          <motion.div
            className="mx-auto flex items-center px-5 pt-1 md:p-8"
            variants={imageVariants}
            whileHover="hover3d"
          >
            <motion.img
              className="block h-auto max-w-full rounded-md shadow-lg"
              src={imageSrc}
              alt="Coming Soon"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

