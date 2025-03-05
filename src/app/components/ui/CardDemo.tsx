/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { cn } from "@/lib/utils";
import { certificates } from "../../../../data";
import { motion } from "framer-motion";

export function CardDemo({
  img,
  title,
  index: cardIndex,
  issuer,
  date,
}: {
  img?: string;
  title?: string;
  des?: string;
  index?: number;
  issuer?: string;
  date?: string;
}) {
  const [open, setOpen] = useState(false);
  const thumbnailsRef = React.useRef(null);
  const [index, setIndex] = useState(cardIndex || 0); // Initialize with cardIndex
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-[#121642] rounded-xl shadow-lg  hover:shadow-xl transition-shadow border-white/[0.2] border relative "
    >
      <div
        className={cn(
          "cursor-pointer bg-[#121642]  h-full  overflow-hidden relative card  rounded-xl  transition-all flex flex-col    items-center mb-4",
          ""
        )}
      >
        <div className="bg-blue-100 p-2 rounded-lg h-48 w-full overflow-hidden">
          <img
            src={img}
            alt="img"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div
          className="absolute w-full h-full top-0 left-0 "
          onClick={() => {
            setIndex(cardIndex || 0); // Set index to cardIndex when clicked
            setOpen(true);
          }}
        ></div>

        <div className=" w-full h-[50%]  sm:py-4 px-2 sm:px-4">
          <h1 className="font-bold text-sm mt-2 sm:text-base md:text-lg lg:text-xl text-gray-50  line-clamp-3  ">
            {title}
          </h1>

          <p className="tracking-[1px] font-normal mt-2 text-xs sm:text-sm md:text-base text-gray-50  ">
            {issuer}
          </p>
          <span className="text-sm text-white-200">{date}</span>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={certificates.map((cert) => ({
          src: cert.src,
          title: cert.title,
        }))}
        plugins={[Zoom, Thumbnails]}
        index={index}
        zoom={{
          scrollToZoom: true,
          maxZoomPixelRatio: 2,
        }}
        thumbnails={{
          ref: thumbnailsRef,
          position: "bottom",
          width: 120,
          height: 80,
          border: 1,
          borderRadius: 4,
          padding: 4,
          gap: 16,
          imageFit: "contain",
          vignette: true,
        }}
      />
    </motion.div>
  );
}
