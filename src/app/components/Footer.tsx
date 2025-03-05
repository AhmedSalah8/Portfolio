import React from "react";
import { socialMedia } from "../../../data";

function Footer() {
  return (
    <footer className="bg-[#040832] p-0 text-center w-full h-auto sm:p-4">
      <div className="sm:max-w-[90%] w-full m-auto flex h-full content-between">
        <div className=" h-full w-full">
          <div className="w-full  text-center">
            <h1 className="font-serif font-bold md:text-5xl text-4xl text-white">
              Get In Touch
            </h1>
          </div>
          <div className="flex justify-between items-center w-full my-8">
            <div className=" w-full ">
              <p className="font-sans font-medium text-white-100 text-xl mb-3 ">
                Ready to collaborate or discuss opportunities? <br /> Feel free
                to reach out.
              </p>
              <div className="flex flex-row gap-3 justify-center">
                {socialMedia.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target="/blank"
                    className=" "
                    download={item.download}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white transform hover:scale-110 animation shadow-lg shadow-blue-500/25 hover:opacity-100 transition-opacity ">
                      <img
                        src={item.img}
                        alt={item.alt}
                        className="w-5 h-5 md:w-7 md:h-7"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <span className="my-4 block w-full border-t border-gray-500 border-opacity-50 pt-5">
            © 2025 Ahmed Salah All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
