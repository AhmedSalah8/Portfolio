"use client";

import React from "react";
import { ThreeDCardDemo } from "./ui/ThreeDCardDemo";
import useRepoData from "./ui/gitubapi";
import RepoImg from "./ui/RepoImg";
function RecentProjects() {
  const repoData = useRepoData(); // Use the hook

  return (
    <div id="projects" className="setion ">
      <h1 className="heading font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold  mb-8 text-[#FFFFFF]">
        Recent Projects
      </h1>
      <div className="flex flex-wrap items-center justify-evenly p-r  gap-y-4 ">
        {repoData.map(
          ({ id, name, description, html_url, stargazers_count }, index) => (
            <div
              key={`${id}-${name}-${index}`}
              className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
            >
              <ThreeDCardDemo
                title={name}
                img={<RepoImg id={id} name={name} />}
                des={description}
                link={html_url}
                stargazers={stargazers_count}
              ></ThreeDCardDemo>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default RecentProjects;
