"use client";
import React from "react";
import Image from "next/image";
import IconBar from "./IconBar";
import CategoryCom from "./CategoryCom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="w-full h-auto flex justify-center py-8 md:py-0 mb-12">
      <div className="w-[90%] md:w-[79%]">
        <div className="w-full h-auto">
          <div
            style={{
              backgroundImage: `url('/footer/footerbackground.webp')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            className="relative rounded-2xl p-4 md:p-0"
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-y-6">
              {/* Left Side */}
              <div className="w-full flex justify-center items-center">
                <div className="w-[90%] md:w-[445px] h-auto md:h-[136px] mt-4 md:mt-[44px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[100px] md:w-[148px] h-[20px] relative overflow-hidden"
                  >
                    <Image
                      src="/footer/company_logo.webp"
                      alt="company logo"
                      layout="fill"
                      objectFit="contain"
                      className="absolute"
                    />
                  </motion.div>
                  <div className="mt-4 md:mt-4">
                    <span className="font-normal text-[14px] leading-[24px] text-[#DCDCDC]">
                      At Synacal, we&apos;re dedicated to helping businesses like yours achieve their digital transformation goals.
                    </span>
                  </div>
                  <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-2">
                    <IconBar icon="/footer/whatsapp.webp" text="+94 70 457 5691" />
                    <IconBar icon="/footer/email.webp" text="hello@synacal.ai" />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[64px]">
                  <CategoryCom Category="Company" part1="Client" part2="About us" part3="Our Story" />
                  <CategoryCom Category="Careers" part1="Culture" part2="Team" part3="Hiring process" part4="Openings" />
                  <CategoryCom Category="Insights" part1="Blog" part2="Research" part3="Case studies" />
                  <CategoryCom Category="Work" part1="Services" part2="Products" />
                  <CategoryCom Category="Content" part1="Blog" part2="Research" part3="Case studies" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full mt-4">
          <span
            className="block text-center text-[14px] leading-[24px] font-normal"
            style={{
              backgroundImage: "linear-gradient(90deg, #CF71ED, #3335E2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            © 2024 SYNACAL. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
