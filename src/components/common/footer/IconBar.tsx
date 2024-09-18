"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type IconBarProps = {
  icon: string;
  text: string;
};

function IconBar({ icon, text }: IconBarProps) {
  return (
    <div className="w-full h-full grid grid-cols-[20%,80%] items-center">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
          y: [0, -5, 0],
        }}
        whileHover={{
          scale: 1.5,
          rotate: 5,
          y: -10,
          transition: { type: "spring", stiffness: 400 },
        }}
        whileTap={{
          scale: 0.8,
          rotate: -10,
          y: 10,
          transition: { type: "spring", stiffness: 400 },
        }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{ fontSize: "2rem" }}
        className="w-[70%] h-[70%] relative cursor-pointer"
      >
        <Image
          src={icon}
          alt="company logo"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
      <div className="text-[16px] leading-[24px] font-medium">{text}</div>
    </div>
  );
}

export default IconBar;
