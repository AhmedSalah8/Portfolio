import React from "react";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { CardDemo } from "./ui/CardDemo";
import { certificates } from "../../../data";

const CertificatesGallery = () => {
  return (
    <div id="certificates" className="container mx-auto px-4 setion">
      <div className="w-full flex justify-center align-center text-center">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-[#FFFFFF]">
          Certificates
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <CardDemo
            key={index}
            img={cert.src}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesGallery;
