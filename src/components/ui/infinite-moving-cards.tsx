"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const InfiniteMovingCards = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
  }[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow" | "super_slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "up" ? "forwards" : "reverse",
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast"
          ? "300s"
          : speed === "normal"
            ? "330s"
            : speed === "slow"
              ? "360s"
              : "390s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 h-full overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)",
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-full gap-[16px] py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <motion.li
            key={item.name}
            className={cn(
              "w-full max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 cursor-pointer transition-transform duration-300",
              activeIndex === idx && "transform scale-105",
            )}
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            onClick={() => handleClick(idx)}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <blockquote>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="w-full h-full grid grid-cols-[25%,75%]">
                  <div className="w-full h-full">
                    <div className="w-full h-full rounded-full relative overflow-hidden">
                      <Image
                        src={item.image}
                        alt="profile image"
                        objectFit="cover"
                        layout="fill"
                        className="absolute inset-0"
                      />
                    </div>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
            </blockquote>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
