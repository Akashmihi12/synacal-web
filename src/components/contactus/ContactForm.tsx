// src/components/contactus/ContactForm.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  return (
    <motion.div
      className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-[600px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <form>
        {/* First Name and Last Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.input
            ref={ref1}
            type="text"
            placeholder="First Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.input
            ref={ref2}
            type="text"
            placeholder="Last Name"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Email and Phone Number fields */}
        <div className="grid grid-cols-1 gap-4 mt-4">
          <motion.input
            ref={ref3}
            type="email"
            placeholder="Email Address"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.input
            ref={ref4}
            type="tel"
            placeholder="Phone Number"
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <motion.textarea
            ref={ref5}
            placeholder="Leave us a message"
            className="p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-black text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          ></motion.textarea>
        </div>

        {/* Submit Button */}
        <motion.div
          ref={ref6}
          className="mt-4 flex justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={inView6 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.button
            type="submit"
            className="px-6 py-3 rounded-full bg-white font-semibold text-md border-[1px] border-black text-black hover:border-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#CF71ED] to-[#3335E2] transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Send Message
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
