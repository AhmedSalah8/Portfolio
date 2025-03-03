import React from "react";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { CardDemo } from "./ui/CardDemo";
import { certificates } from "../../../data";

const CertificatesGallery = () => {
  return (
    <div id="certificates" className="container mx-auto px-4">
      <div className="w-full flex justify-center align-center text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold m-10 sm:m-12 md:m-20 text-[#FFFFFF]">
          Certificates
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-4">
        {certificates.map((cert, index) => (
          <CardDemo
            key={index}
            img={cert.src}
            title={cert.title}
            des={cert.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesGallery;
