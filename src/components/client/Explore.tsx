// src/components/client_page/Explore.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "Technology",
    description:
      "We develop custom solutions using AI/ML to automate operations and enhance customer experience.",
    icon: "/client/technology.webp",
  },
  {
    id: 2,
    title: "Entertainment",
    description:
      "We help businesses make informed decisions and drive growth through actionable insights.",
    icon: "/client/entertainment.webp",
  },
  {
    id: 3,
    title: "Education",
    description:
      "We help businesses make informed decisions and drive growth through actionable insights.",
    icon: "/client/education.webp",
  },
  {
    id: 4,
    title: "Finance",
    description:
      "We develop custom solutions using AI/ML to automate operations and enhance customer experience.",
    icon: "/client/finance.webp",
  },
  {
    id: 5,
    title: "Retail",
    description:
      "We help businesses make informed decisions and drive growth through actionable insights.",
    icon: "/client/retail.webp",
  },
  {
    id: 6,
    title: "Healthcare",
    description:
      "We help businesses make informed decisions and drive growth through actionable insights.",
    icon: "/client/healthcare.webp",
  },
];

const Explore = () => {
  return (
    <div className="flex flex-col items-center py-8 md:py-16 w-full px-4">
      <motion.div
        className="text-center mb-8 md:mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-4 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Industry Highlights
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Showcasing key achievements and innovations across leading industries, highlighting trends that shape the future.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl w-full">
        {industries.map((industry) => (
          <motion.div
            key={industry.id}
            className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4">
              <Image
                src={industry.icon}
                alt={industry.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-black mb-2">
              {industry.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{industry.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
