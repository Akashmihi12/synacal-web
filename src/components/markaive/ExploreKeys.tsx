"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ExploreKeys = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });
  const [ref5, inView5] = useInView({ triggerOnce: false });
  const [ref6, inView6] = useInView({ triggerOnce: false });

  return (
    <div className="w-full py-12 flex justify-center">
      <div className="w-[85%] max-w-7xl text-center">
        {/* Title and subtitle */}
        <motion.h2
          className="text-3xl font-semibold text-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Exploring the Key Benefits for You
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform your business into a future-proof, agile, and efficient
          organization with our digital transformation services. Gain a
          competitive edge, improve customer experience, and unlock new growth
          opportunities with our expertise and innovative solutions.
        </motion.p>

        {/* Grid Section */}
        <div className="flex flex-wrap justify-between gap-4">
          {/* Card 1 */}
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, x: -100 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gray-100 rounded-lg h-80"
            style={{ width: "390px" }}
          ></motion.div>

          {/* Card 2 */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -100 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-gray-100 rounded-lg h-80"
            style={{ width: "390px" }}
          ></motion.div>

          {/* Card 3 */}
          <motion.div
            ref={ref3}
            initial={{ opacity: 0, x: 100 }}
            animate={inView3 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-purple-100 rounded-lg h-80"
            style={{ width: "450px" }}
          ></motion.div>

          {/* Card 4 */}
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: -100 }}
            animate={inView4 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-gray-100 rounded-lg h-80"
            style={{ width: "340px" }}
          ></motion.div>

          {/* Card 5 */}
          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: 100 }}
            animate={inView5 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="bg-orange-100 rounded-lg h-80"
            style={{ width: "550px" }}
          ></motion.div>

          {/* Card 6 */}
          <motion.div
            ref={ref6}
            initial={{ opacity: 0, x: -100 }}
            animate={inView6 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="bg-gray-100 rounded-lg h-80"
            style={{ width: "340px" }}
          ></motion.div>
        </div>

        {/* Comment: You can adjust the "width" values above to match the Figma design more closely. */}
      </div>
    </div>
  );
};

export default ExploreKeys;
