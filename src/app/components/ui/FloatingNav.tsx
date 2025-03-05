/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(navItems[0].name); // Default to the first nav item

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navItems.map(
        (item) => window && window.document.querySelector(item.link)
      );

      let foundActive = false; // Flag to ensure only one item is active

      sectionElements.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (!foundActive && rect.top <= 130 && rect.bottom >= 130) {
            setActiveItem(navItems[index].name);
            foundActive = true; // Prevents multiple items from being active
          }
        }
      });

      // If no section is active, clear the active state
      if (!foundActive) {
        setActiveItem(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems]);

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-none sm:max-w-fit fixed top-0 inset-x-0 mx-auto  border-b rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10   py-1 bg-[#2f313ea0] backdrop-blur-sm border-white/[0.2] items-center justify-around sm:justify-center space-x-4 ",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            `relative dark:text-neutral-50 items-center flex space-x-1
             text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 `
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span
            onScroll={() => setActiveItem(navItem.name)}
            className={`hidden sm:block text-sm py-2 px-4
          ${
            activeItem === navItem.name
              ? "text-white  transition duration-350 ease-in-out  bg-violet-400 rounded-3xl"
              : ""
          }`}
          >
            {navItem.name}
          </span>
        </Link>
      ))}
    </motion.div>
  );
};
