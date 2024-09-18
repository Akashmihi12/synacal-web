"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const faqData = [
  {
    question: "How can AI benefit my business?",
    answer:
      "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
  },
  {
    question: "Do you offer custom AI development services?",
    answer:
      "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
  },
  {
    question: "How do you measure the success of an AI project?",
    answer:
      "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
  },
  {
    question: "What is the cost structure for your AI solutions?",
    answer:
      "We work with a variety of industries, including [mention industries, e.g., healthcare, finance, retail, manufacturing, etc.], to provide tailored AI solutions.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [ref1, inView1] = useInView({ triggerOnce: false });

  return (
    <div className="w-full max-w-lg mx-auto h-auto overflow-y-auto p-4">
      {faqData.map((item, index) => (
        <AnimatePresence key={index}>
          <motion.div
            ref={ref1}
            className="p-4 bg-transparent border-b-[0.5px] border-[#ECECEC]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <span
                className={`mr-3 inline-block w-8 h-8 text-center ${
                  openIndex === index
                    ? "text-[#CF71ED]"
                    : "text-[#CF71ED]"
                } flex items-center justify-center`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
              <span
                className={`text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[28px] ${
                  openIndex === index ? "text-[#31323E]" : "text-[#31323E]"
                }`}
              >
                {item.question}
              </span>
            </div>
            {openIndex === index && (
              <motion.div
                ref={ref1}
                className="mt-2 text-[#31323E] text-[14px] md:text-[16px] font-medium leading-[20px] md:leading-[24px] ml-8"
                initial={{ opacity: 0, height: 0 }}
                animate={inView1 ? { opacity: 1, height: "auto" } : {}}
                transition={{ duration: 0.5 }}
              >
                {item.answer}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default FAQComponent;
