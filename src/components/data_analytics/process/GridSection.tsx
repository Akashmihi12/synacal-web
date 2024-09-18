"use client";
import TopServicesBlock from "@/components/topServices/TopServicesBlock";
import React from "react";
import Block from "./Block";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type GridSectionProps = {
  gridData: string[];
};

function GridSection() {
  const [ref1, inView1] = useInView({ triggerOnce: false });
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full grid grid-rows-2 gap-[32px] ">
        <div className="w-full h-full grid grid-cols-3 gap-[32px] ">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-full "
          >
            <Block
              imageUrl="/process/Icon1.webp"
              title="Uncover Insights Hidden in Your Data"
              description="We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage."
            />
          </motion.div>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-full h-full "
          >
            <Block
              imageUrl="/process/Icon2.webp"
              title="Transform Data into Quality Insights"
              description="We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage."
            />
          </motion.div>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-full h-full "
          >
            <Block
              imageUrl="/process/Icon3.webp"
              title="Extracting Value from Data"
              description="We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage."
            />
          </motion.div>
        </div>
        <div className="w-full h-full grid grid-cols-3 gap-[32px] ">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.6 }}
            className="w-full h-full "
          >
            <Block
              imageUrl="/process/Icon4.webp"
              title="Anticipate Future Trends"
              description="We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage."
            />
          </motion.div>
          <motion.div
            ref={ref1}
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.9 }}
            className="w-full h-full "
          >
            <Block
              imageUrl="/process/Icon5.webp"
              title="Continuously Enhance Your Analytics"
              description="We will work with you to understand your business, data sources, and objectives, and identify data that can be leveraged to improve decision-making and create a competitive advantage."
            />
          </motion.div>
          <div className="w-full h-full "></div>
        </div>
      </div>
    </div>
  );
}

export default GridSection;
