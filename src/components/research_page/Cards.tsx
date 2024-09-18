"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Card data with images, titles, and descriptions
const cardData = [
  {
    id: 1,
    image: "/research_page/cards/card1.webp",
    title: "From Start-Up to Global Success",
    category: "Web Design",
    description:
      "Chronicles our journey from a small start-up to a global powerhouse, emphasizing the challenges our founders overcame to achieve success.",
  },
  {
    id: 2,
    image: "/research_page/cards/card2.webp",
    title: "Transforming Customer Experiences",
    category: "Branding & Identity",
    description:
      "Explores the methods we use to enhance customer experiences, through innovation and customer-centric design.",
  },
  {
    id: 3,
    image: "/research_page/cards/card3.webp",
    title: "AI in Modern Software Development",
    category: "Software Development",
    description:
      "Examines how AI is revolutionizing the software development process and enabling more efficient production cycles.",
  },
  {
    id: 4,
    image: "/research_page/cards/card4.webp",
    title: "Building Trust through Branding",
    category: "Branding & Identity",
    description:
      "Focuses on the importance of trust-building and credibility when crafting brand identities that resonate with customers.",
  },
  {
    id: 5,
    image: "/research_page/cards/card5.webp",
    title: "Data-Driven Decision Making",
    category: "Data Science",
    description:
      "Uncovers the role of data in driving smarter, faster decisions and how data analytics enhances business growth.",
  },
  {
    id: 6,
    image: "/research_page/cards/card6.webp",
    title: "Next-Gen Marketing Strategies",
    category: "Digital Marketing & Strategy",
    description:
      "Details how modern marketing strategies are evolving to meet the demands of digital-first consumers.",
  },
];

// Categories available for filtering
const categories = [
  "All",
  "Web Design",
  "Branding & Identity",
  "Software Development",
  "Digital Marketing & Strategy",
];

const Cards = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // InView hook for scrolling and loading animations
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });

  // Filter cards based on active category
  const filteredCards =
    activeCategory === "All"
      ? cardData
      : cardData.filter((card) => card.category === activeCategory);

  return (
    <div className="w-full pt-6 md:pt-8 pb-8 flex flex-col items-center">
      <div className="w-[90%] max-w-7xl">
        {/* Category Sort Buttons */}
        <div className="flex justify-center mb-4 md:mb-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                ref={index === 0 ? ref1 : null}
                initial={{ opacity: 0, y: -50 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full border-[1px] ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#CF71ED] to-[#3335E2] text-white"
                    : "text-black border-gray-300"
                } font-semibold transition duration-300 text-sm flex-shrink-0`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id}
              ref={index === 0 ? ref2 : null}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView2 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              {/* Card Image */}
              <Image
                src={card.image}
                alt={card.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              {/* Card Title */}
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                {card.title}
              </h3>
              {/* Card Description */}
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              {/* Read Article Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-semibold text-black underline transition-all duration-300"
                href="#"
              >
                Read Article
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;