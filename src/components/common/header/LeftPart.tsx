"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"; // Import Link for navigation

function LeftPart() {
  return (
    <Link href="http://localhost:3000" passHref>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="cursor-pointer"
      >
        <Image
          src="/logo/synacal_logo.webp"
          alt="Synacal Logo"
          width={148}
          height={20}
        />
      </motion.div>
    </Link>
  );
}

export default LeftPart;
