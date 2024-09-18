// src/components/contactus/QuickContacts.tsx

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const QuickContacts = () => {
  // Using useInView hook to trigger animation when in view (on scroll)
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  return (
    <motion.div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-[600px]">
      {/* Title with animation on scroll */}
      <motion.h2
        ref={ref1} // Attach the ref for scroll detection
        className="text-2xl font-semibold text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Quick Contacts
      </motion.h2>

      {/* Paragraphs with animation on scroll */}
      <motion.p
        ref={ref2} // Attach the ref for scroll detection
        className="mt-4 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        At Synacal, we’re dedicated to helping businesses like yours achieve their digital transformation goals. Whether you’re looking to build a new software product, improve your IT strategy, or streamline your operations with AI and data analytics, our team of specialists is here to help.
      </motion.p>

      <motion.p
        ref={ref3} // Attach the ref for scroll detection
        className="mt-4 text-black"
        initial={{ opacity: 0, y: -50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        We understand that every business is unique, and that’s why we offer personalized consultations to discuss your specific needs and goals.
      </motion.p>

      {/* Contact Information with animation on scroll */}
      <div className="mt-6 space-y-4">
        <motion.div
          ref={ref4} // Attach the ref for scroll detection
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView4 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/call.webp" alt="Phone Icon" fill objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">+94 70 457 5691</p>
        </motion.div>

        <motion.div
          ref={ref5} // Attach the ref for scroll detection
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView5 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/email.webp" alt="Email Icon" fill objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">hello@synacal.ai</p>
        </motion.div>

        <motion.div
          ref={ref6} // Attach the ref for scroll detection
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -100 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              y: [0, -5, 0],
            }}
            whileHover={{
              scale: 1.5,
              rotate: 5,
              y: -10,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{
              scale: 0.8,
              rotate: -10,
              y: 10,
              transition: { type: "spring", stiffness: 400 },
            }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="w-[40px] h-[40px] relative cursor-pointer"
          >
            <Image src="/logo/map.webp" alt="Map Icon" fill objectFit="contain" />
          </motion.div>
          <p className="text-black font-medium">Address Here</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuickContacts;
