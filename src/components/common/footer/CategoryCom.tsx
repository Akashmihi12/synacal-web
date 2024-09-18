"use client";
import React from "react";
import { motion } from "framer-motion";

type CategoryComProps = {
  Category: string;
  part1?: string;
  part2?: string;
  part3?: string;
  part4?: string;
  part5?: string;
  part6?: string;
};

function CategoryCom({
  Category,
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
}: CategoryComProps) {
  const eventHandle = (part: string) => {
    alert(`Event triggered: ${part}`);
    console.log("Event triggered:", part);
  };
  return (
    <div className="h-full w-full">
      <motion.h1
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -2, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-[16px] font-medium leading-[24px] mb-4"
      >
        {Category}
      </motion.h1>

      {part1 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part1)}
        >
          {part1}
        </p>
      )}
      {part2 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part2)}
        >
          {part2}
        </p>
      )}
      {part3 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part3)}
        >
          {part3}
        </p>
      )}
      {part4 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part4)}
        >
          {part4}
        </p>
      )}
      {part5 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part5)}
        >
          {part5}
        </p>
      )}
      {part6 && (
        <p
          className="mb-2 text-[14px] font-normal leading-[24px] cursor-pointer"
          onClick={() => eventHandle(part6)}
        >
          {part6}
        </p>
      )}
    </div>
  );
}

export default CategoryCom;
