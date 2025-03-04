/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./Gradient";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../../../data/confetti.json";

import MagicButton from "./MagicButton";
import { FaCopy } from "react-icons/fa";
import { styleText } from "util";
import Skills from "../Skills";
// import { WorldMapDemo } from "../WorldMapDemo";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      id="about"
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setcopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sabaayahmed@gmail.com");
    setcopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black  justify-between flex flex-col space-y-4 border border-white/[0.1] overflow-hidden",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(99,69,99,1) 42%, rgba(126,77,126,1) 61%, rgba(247,7,242,0.7343312324929971) 100%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 && `flex justify-center text-center`}  h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center rounded-3xl"
              )}
            />
          )}
        </div>
        <div
          className={` absolute right-0 -bottom-5 ${
            id === 5 && `w-full opacity-80`
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            className,
            "group-hover/bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 py-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg lg:text-3xl  md:text-4xl max-w-96 z-10">
            {title}
          </div>
          <div className="font-sans font-normal  text-(#c1c2d3) text-base md:text-base lg:text-lg z-10">
            {description}
          </div>
          {/* {id === 2 && <WorldMapDemo />} */}
          {id === 3 && (
            <div className="flex gap-1 justify-center items-center w-full h-full lg:gap-5 ">
              {/* <div className="flex flex-col gap-3  ">
                <span className="py-4 px-3 rounded-lg text-center  " />
                <span className="py-4 px-3 rounded-lg text-center" />

                {["Tailwind CSS", "Bootstrap", "Git"].map((item) => (
                  <span
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3   ">
                <span className="py-4 px-3 rounded-lg text-center " />
                {["JavaScript", "CSS", "HTML"].map((item) => (
                  <span
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3   ">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center" />
                <span className="py-4 px-3 rounded-lg text-center" />
              </div> */}
              <Skills />
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-20 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidyMid slice" },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my Email"}
                icon={<FaCopy />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
