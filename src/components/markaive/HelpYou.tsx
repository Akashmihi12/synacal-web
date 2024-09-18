"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HelpYou = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // InView hooks for animation
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [imageRef, inViewImage] = useInView({ triggerOnce: false });

  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
        {/* Left Form Section */}
        <div className="flex flex-col justify-center">
          <motion.h2
            className="text-3xl font-semibold text-black mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let us know if we can help you
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Let’s Talk About Your Query, Don’t hesitate to reach out via email -{" "}
            <span className="text-blue-500">hello@synacal.com</span>
          </motion.p>

          {/* Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <motion.input
              ref={ref1}
              type="text"
              placeholder="First Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-black"
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.input
              ref={ref2}
              type="text"
              placeholder="Last Name"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-black"
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <motion.input
            ref={ref3}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.input
            ref={ref4}
            type="text"
            placeholder="Phone Number"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-black"
            initial={{ opacity: 0, y: 50 }}
            animate={inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
          <motion.textarea
            ref={ref5}
            placeholder="Leave us a message"
            className="p-3 mb-4 rounded-md border border-gray-300 w-full focus:ring-2 focus:ring-black focus:border-black focus:outline-none text-black"
            rows={4}
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          ></motion.textarea>

          {/* Checkbox and Text */}
          <motion.div
            className="flex items-center mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView5 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div
              className={`w-5 h-5 rounded-md border-2 border-black flex items-center justify-center cursor-pointer ${
                isChecked ? "bg-black" : "bg-white"
              }`}
              onClick={handleCheckboxChange}
            >
              {isChecked && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-white font-bold"
                >
                  ✓
                </motion.div>
              )}
            </div>
            <p className="ml-2 text-gray-600">
              You agree to our friendly{" "}
              <span className="text-blue-500 underline">privacy policy</span>
            </p>
          </motion.div>

          {/* Send Message Button with Animation and Style */}
          <motion.div
            className="mt-4 flex justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 rounded-full bg-white font-semibold text-md border-[1px] border-black text-black hover:border-main-gradient text-main-gradient hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#CF71ED] hover:to-[#3335E2] transition duration-300"
            >
              Send Message
            </motion.button>
          </motion.div>
        </div>

        {/* Right Image Section with Animation */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: 100 }}
          animate={inViewImage ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <Image
            src="/markaive/MarkAIve_Help_You.webp" // Path to the image in the public folder
            alt="Help You"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HelpYou;
