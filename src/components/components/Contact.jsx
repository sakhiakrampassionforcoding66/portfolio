import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kt4dm4m', 'template_afn930b', e.target, 'vSGnmxHCyVrSSRFPU')
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
        }
      );
  };

  const handleDismiss = () => {
    setIsSent(false);
  };

  return (
    <div className="flex flex-col items-center">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="max-w-md w-full mt-8 p-6 bg-white rounded-md shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </motion.form>

      {isSent && (
        <>
          <div className="fixed top-0 right-0 left-0 bg-green-500 p-4 text-black">
            <p className="text-black">Message sent successfully!</p>
            <button className="absolute top-2 right-2 text-white" onClick={handleDismiss}>
              X
            </button>
          </div>
          <div>
            <LinkComponent />
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;



