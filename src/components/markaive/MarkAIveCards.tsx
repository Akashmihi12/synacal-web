"use client";
import React from "react";
import Image from "next/image"; // Import Image for Next.js optimization
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    id: 1,
    title: "Feature 1",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Feature 2",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
  {
    id: 3,
    title: "Feature 3",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
  {
    id: 4,
    title: "Feature 4",
    description: "Bring your product ideas to life with MarkAIve's text to UI generator.",
    isHighlighted: false,
  },
];

const MarkAIveCards = () => {
  // Using useInView hook to trigger animation on scroll
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });
  const [ref3, inView3] = useInView({ triggerOnce: false });
  const [ref4, inView4] = useInView({ triggerOnce: false });

  return (
    <div className="relative w-full py-12 bg-cover bg-center">
      {/* Background Image with wave effect */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/markaive/markaive_cards_section_bg.webp')`,
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 50%", "0% 100%", "100% 50%", "0% 0%"] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Cards Section */}
      <div className="relative z-10 w-[85%] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            ref={index === 0 ? ref1 : index === 1 ? ref2 : index === 2 ? ref3 : ref4}
            initial={{ opacity: 0, y: 50 }}
            animate={inView1 || inView2 || inView3 || inView4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-md border transition-all duration-300 ${
              card.isHighlighted ? "bg-purple-100 border-transparent" : "bg-white"
            }`}
          >
            {/* Card Icon */}
            <div className="w-8 h-8 mb-4">
              <div className={`w-full h-full rounded-full ${card.isHighlighted ? "bg-purple-500" : "bg-gray-300"}`}></div>
            </div>
            {/* Card Title */}
            <h3 className={`text-lg font-semibold ${card.isHighlighted ? "text-purple-500" : "text-black"}`}>
              {card.title}
            </h3>
            {/* Card Description */}
            <p className="text-gray-600 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Hero Image below cards with hover zoom effect */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full flex justify-center mt-8"
      >
        <Image
          src="/markaive/markaive_cards_section.webp"
          alt="MarkAIve Hero Image"
          width={1200}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default MarkAIveCards;
