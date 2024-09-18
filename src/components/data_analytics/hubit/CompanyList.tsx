"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/logo/british.webp", alt: "British council" },
  { src: "/logo/linkedin.webp", alt: "Linkedin" },
  { src: "/logo/whatsapp.webp", alt: "whatsapp" },
  { src: "/logo/yamaha.webp", alt: "Yamaha" },
  { src: "/logo/redbull.webp", alt: "Red Bull" },
];

const duplicateCount = 1000;
const duplicatedImages = Array.from(
  { length: duplicateCount },
  (_, index) => images[index % images.length],
);

function CompanyList() {
  return (
    <div className="w-full h-full flex flex-col gap-1 md:gap-0">
      <div className="w-full h-full hidden md:flex">
        <div className="w-full flex justify-center overflow-hidden   h-full">
          <ul
            className="flex items-center space-x-16 md:space-x-16 lg:space-x-16 animate-infinite-scroll hover:animate-pause whitespace-nowrap"
            style={{ minWidth: `${duplicatedImages.length * 100}px` }}
          >
            {duplicatedImages.map((image, index) => (
              <li key={index} className="inline-block">
                <motion.div
                  initial={{ scale: 2 }}
                  whileTap={{ scale: 2.5 }}
                  whileHover={{ scale: 2.5 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    onClick={() => console.log(index)}
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={30}
                    layout="intrinsic"
                    className="object-contain w-20 h-12 md:w-32 md:h-16 lg:w-48 lg:h-24"
                  />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center overflow-hidden  h-full">
        <ul
          className="flex items-center space-x-16 md:space-x-16 lg:space-x-16 animate-infinite-scroll_2 hover:animate-pause whitespace-nowrap"
          style={{ minWidth: `${duplicatedImages.length * 100}px` }}
        >
          {duplicatedImages.map((image, index) => (
            <li key={index} className="inline-block">
              <motion.div
                initial={{ scale: 2 }}
                whileTap={{ scale: 2.5 }}
                whileHover={{ scale: 2.5 }}
                transition={{ duration: 1 }}
              >
                <Image
                  onClick={() => console.log(index)}
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={30}
                  layout="intrinsic"
                  className="object-contain w-20 h-12 md:w-32 md:h-16 lg:w-48 lg:h-24"
                />
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyList;
