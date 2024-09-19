// src/components/client_page/OurProject.tsx

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Actionable Insights for Informed Decision Making",
    category: "Web Design",
    description:
      "Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth.",
    image: "/projects/project1.png",
  },
  {
    id: 2,
    title: "Actionable Insights for Informed Decision Making",
    category: "Branding & Identity",
    description:
      "Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth.",
    image: "/projects/project2.png",
  },
  {
    id: 3,
    title: "Actionable Insights for Informed Decision Making",
    category: "Software Development",
    description:
      "Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth.",
    image: "/projects/project3.png",
  },
  {
    id: 4,
    title: "Actionable Insights for Informed Decision Making",
    category: "Digital Marketing & Strategy",
    description:
      "Our data analytics service provides you with actionable insights that help you make informed decisions, optimize operations, and drive business growth.",
    image: "/projects/project4.png",
  },
];

const categories = [
  "All",
  "Web Design",
  "Branding & Identity",
  "Software Development",
  "Digital Marketing & Strategy",
];

const OurProject = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="w-full py-8 md:py-12 flex flex-col items-center">
      <div className="w-full max-w-7xl text-center px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold mb-6 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Projects
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full border-[1px] ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#CF71ED] to-[#3335E2] text-white"
                  : "text-black border-gray-300"
              } font-semibold transition duration-300 text-sm md:text-base flex-shrink-0`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full h-[200px] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex justify-end items-end p-4">
                  <motion.button
                    className="w-10 h-10 bg-white border-[1px] border-black rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-black">&rarr;</span>
                  </motion.button>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProject;
