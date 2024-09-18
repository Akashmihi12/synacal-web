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

const duplicateCount = 10000;
const duplicatedImages = Array.from(
  { length: duplicateCount },
  (_, index) => images[index % images.length],
);

function SponsorList() {
  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden relative "
      style={{
        height: "100px",

        maskImage:
          "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)",
      }}
    >
      <ul
        className="flex items-center space-x-8 animate-infinite-scroll whitespace-nowrap"
        style={{ minWidth: `${duplicatedImages.length * 154.54}px` }}
      >
        {duplicatedImages.map((image, index) => (
          <li key={index} className="inline-block">
            <motion.div
              whileTap={{ scale: 1.4 }}
              whileHover={{ scale: 1.4 }}
              transition={{ duration: 2 }}
            >
              <Image
                onClick={() => console.log(index)}
                src={image.src}
                alt={image.alt}
                width={154.54}
                height={50}
                layout="intrinsic"
                className="object-contain"
              />
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SponsorList;
