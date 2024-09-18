"use client";
import React from "react";
import DocumentAssistanceText from "./DocumentAssistanceText";
import ImageSection from "./ImageSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function DocumentAssistance() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  const [ref2, inView2] = useInView({ triggerOnce: false });

  const data = [
    {
      title: "Discover DOXPLORE Your Intelligent Document Assistant",
      description:
        "Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets.",
      dataContent: [
        "Quickly find relevant information within large document sets.",
        "Gain deeper understanding with context-aware analysis.",
        "Receive concise summaries of lengthy documents.",
      ],
    },
    {
      title: "Discover MarkAIve Your Intelligent Document Assistant",
      description:
        "Unlock intelligent information retrieval with Doxplore, our AI-powered software that revolutionizes exploring and extracting insights from large document sets.",
      dataContent: [
        "Quickly find relevant information within large document sets.",
        "Gain deeper understanding with context-aware analysis.",
        "Receive concise summaries of lengthy documents.",
      ],
    },
  ];

  return (
    <div className="w-full h-auto flex flex-col gap-10 md:gap-y-[113.29px]">
      {/* First Section - DOXPLORE */}
      <div className="md:flex md:flex-row-reverse md:items-center md:gap-[0.8%]">
        {/* Image Section */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: -200 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[45%] h-full rounded-2xl mb-6 md:mb-0"
          style={{
            backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
          }}
        >
          <ImageSection />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-[45%] flex justify-center md:ml-[10%]">
          <div className="w-[90%] md:w-full h-full">
            <DocumentAssistanceText
              title={data[0].title}
              content={data[0].description}
              dataContent={data[0].dataContent}
            />
          </div>
        </div>
      </div>

      {/* Second Section - MarkAIve */}
      <div className="md:flex md:flex-row md:items-center md:gap-[0.8%]">
        {/* Image Section */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 200 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-[45%] h-full rounded-2xl order-2 md:order-1"
          style={{
            backgroundImage: "linear-gradient(180deg, #EFD7EB, #B8D5FB)",
          }}
        >
          <ImageSection />
        </motion.div>

        {/* Text Section */}
        <div className="w-full md:w-[45%] flex justify-center md:ml-[10%] order-1 md:order-2">
          <div className="w-[90%] md:w-full h-full">
            <DocumentAssistanceText
              title={data[1].title}
              content={data[1].description}
              dataContent={data[1].dataContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentAssistance;
