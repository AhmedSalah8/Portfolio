import { FaFileDownload } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { BackgroundBeams } from "./ui/background-beams";
function Hero() {
  return (
    <div
      id="home"
      className="setion pt-36   relative flex flex-col items-center justify-center antialiased "
    >
      <BackgroundBeams />
      <div className="flex justify-center relative lg:my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-primary">
            Hello, my name is
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words=" Ahmed Salah"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-primary">
            Frontend Developer with a passion for building beautiful and
            functional user interfaces.
          </p>
          <a
            href="/Ahmed-Salah-FrontEnd-Developer.pdf"
            className="md:mt-10"
            download={true}
          >
            <MagicButton
              title="Downloa My Resume"
              icon={<FaFileDownload className="w-[20px] h-[20px]" />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
