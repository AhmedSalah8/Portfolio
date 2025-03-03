"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { cn } from "@/lib/utils";
import { certificates } from "../../../../data";

export function CardDemo({
  img,
  title,
  des,
}: {
  img?: string;
  title?: string;
  des?: string;
}) {
  const [open, setOpen] = useState(false);
  const thumbnailsRef = React.useRef(null);

  return (
    <div
      className="w-[60%] sm:h-[400px] md:h-[450px] lg:h-[500px] h-[350px] me-3.5 mb-4 sm:w-[45%] md:w-[45%] lg:w-[30%] 
       group/card"
    >
      <div
        className={cn(
          "cursor-pointer h-[100%] bg-[#121642] border-white/[0.2] rounded-xl border overflow-hidden relative card transition-all   flex flex-col justify-between",
          "",
          "w-full transition-all duration-300 hover:scale-105 "
        )}
      >
        <div className="w-full h-[50%]">
          <img
            src={img}
            alt="img"
            className="w-full h-[100%] rounded-lg transition duration-300 group-hover/card:scale-105"
          />
        </div>
        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"
          onClick={() => {
            setOpen(true);
          }}
        ></div>

        <div className=" w-full h-[50%] mt-2 sm:py-4 md:py-5">
          <h1 className="font-bold text-sm text-center sm:text-base md:text-lg lg:text-xl text-gray-50 relative line-clamp-3 z-10 px-2 sm:px-4">
            {title}
          </h1>
          <p className="lg:py-4 font-normal mt-2 text-xs sm:text-sm md:text-base text-gray-50 relative z-10  pl-3 sm:px-4">
            {des}
          </p>
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
        on={{
          click: () => {
            console.log("Lightbox image clicked!");
          },
        }}
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
    </div>
  );
}
