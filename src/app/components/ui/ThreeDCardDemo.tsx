/* eslint-disable @next/next/no-img-element */
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./MagicButton";

// Dynamically import heavy components
const CardContainer = dynamic(
  () => import("../ui/3d-card").then((mod) => mod.CardContainer),
  { ssr: false }
);
const CardBody = dynamic(
  () => import("../ui/3d-card").then((mod) => mod.CardBody),
  { ssr: false }
);
const CardItem = dynamic(
  () => import("../ui/3d-card").then((mod) => mod.CardItem),
  { ssr: false }
);

interface ThreeDCardDemoProps {
  title: string;
  des: string;
  img: string;
  link: string;
  iconLists: string[];
}

export const ThreeDCardDemo = memo(
  function ThreeDCardDemo({
    title,
    des,
    img,
    link,
    iconLists,
  }: ThreeDCardDemoProps) {
    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-[#020024] border-white/[0.1] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mr-4">
          <CardItem
            translateZ="50"
            className="lg:text-2xl sm:text-xl text-base font-bold text-neutral-600 dark:text-white line-clamp-1 font-bold"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 lg:text-lg lg:font-normal font-light text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
          >
            {des}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={img}
              height={600}
              width={600}
              priority={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={`Thumbnail for ${title}`}
            />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="flex items-center justify-between w-full mt-4 group"
          >
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full -ml-2 first:ml-0 w-10 h-10 flex items-center justify-center group-hover:border-purple-500 transition-colors"
                >
                  <img
                    src={icon}
                    alt={`Icon ${index + 1}`}
                    className="w-6 h-6"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-purple hover:text-purple-700 transition-colors">
              <a href="#about" className="ml-1">
                <MagicButton
                  title="Check Live Site"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return (
      prevProps.title === nextProps.title &&
      prevProps.des === nextProps.des &&
      prevProps.img === nextProps.img &&
      prevProps.link === nextProps.link &&
      JSON.stringify(prevProps.iconLists) ===
        JSON.stringify(nextProps.iconLists)
    );
  }
);
