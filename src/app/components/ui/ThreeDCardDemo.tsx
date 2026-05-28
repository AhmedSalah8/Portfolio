/* eslint-disable @next/next/no-img-element */
"use client";

import React, { memo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import useRepoData from "./gitubapi";
// import DataApp from "./gitubapi";
// import { FaLocationArrow } from "react-icons/fa";
// import MagicButton from "./MagicButton";
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
  img: React.ReactNode;
  link: string;
  stargazers: number;
}

export const ThreeDCardDemo = memo(
  function ThreeDCardDemo({
    title,
    des,
    img,
    link,
    stargazers,
  }: 
  ThreeDCardDemoProps) {
    const repoData = useRepoData(); // Use the hook

    return (
      <CardContainer className="inter-var">
        <CardBody className="bg-[#020024] border-white/[0.1] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mr-4">
          <CardItem
            translateZ="50"
            className="lg:text-2xl sm:text-xl text-base w-full relative font-bold text-neutral-600 dark:text-white line-clamp-1 "
          >
            {title}
            <div className=" absolute top-0 right-0 flex justify-center items-center">
              <span className="mr-1 text-base"> {stargazers} </span>
              <FaStar className="inline text-yellow-500 text-base" />
            </div>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 lg:text-lg lg:font-normal font-light text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-3"
          >
            {des}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            {img}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="_blank"
            className="flex items-center justify-between w-full mt-4 group"
          >
            <div className="flex items-center">
              <div className="  -ml-2 first:ml-0 w-10 h-10 flex items-center justify-center ">
                <img
                  src={"/next.svg"}
                  alt={`Icon `}
                  className="w-7  rounded-full h-7"
                  onClick={() => console.log(repoData)}
                />
                <img
                  src={"/typescript.svg"}
                  alt={`Icon `}
                  className="w-7 -ml-2 h-7 rounded-full"
                  onClick={() => console.log(repoData)}
                />{" "}
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple hover:text-purple-700 transition-colors">
              <a href={link} target="_blank" className="ml-1">
                {/* <MagicButton
                  title=""
                  icon={<FaLocationArrow />}
                  position="right"
                /> */}
                <button className="px-8 py-2 rounded-md bg-[#103770] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#2875b7]">
                  Check Live Site
                </button>
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
      prevProps.link === nextProps.link
     
    );
  }
);
