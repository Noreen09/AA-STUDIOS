'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasPopupShown = localStorage.getItem('popupShown');
    if (!hasPopupShown) {
      setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Popup delay after 1 second
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('popupShown', 'true'); // Set to local storage
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => {
            setIsOpen(false);
            localStorage.setItem('popupShown', 'true');
          }, 1500);
        } else {
          console.error('Failed to subscribe.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Content */}
          <motion.div
            className="bg-[#111111] text-white rounded-lg shadow-lg p-8 w-[90%] max-w-md"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <h2 className="text-2xl font-bold text-[#48CAE4] mb-4 text-center">
              Subscribe!! Subscribe!! Subscribe!! 
            </h2>
            <p className="text-center mb-6">
              Get the latest updates and news directly in your inbox!
            </p>

            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-full bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 text-black font-semibold py-2 rounded-full"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <p className="text-center text-[#48CAE4] font-semibold">
                Thank you for subscribing!
              </p>
            )}

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white text-lg hover:text-[#48CAE4]"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailPopup;
