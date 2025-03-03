import React from "react";
import { projects } from "../../../data";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";

function RecentProjects() {
  return (
    <div id="projects" className="py-20 ">
      <h1 className="heading">
        a small seleciton of {` `}
        <span className="text-purple"> Recent Projects</span>
      </h1>{" "}
      <div className="flex flex-wrap items-center justify-evenly p-r gap-x-4 gap-y-4 mt-20">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <ThreeDCardDemo
              title={title}
              img={img}
              des={des}
              link={link}
              iconLists={iconLists}
            ></ThreeDCardDemo>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentProjects;
