// import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <div
            className="lg:py-14 lg:px-12 md:py-8 md:px-6
          py-2 px-1  rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05] my-4"
          >
            <h1 className="pl-2 text-neutral-800 mb-2 dark:text-neutral-200 font-normal ">
              CREATED WEBSITE FOR <span className="text-yellow-400">ENI</span>{" "}
              COMPANY
            </h1>
            <div className="flex justify-between">
              <p className="pl-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                ENI Company
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Mar 2022 - Apr 2022
              </p>
            </div>

            <div className="lg:py-14 lg:px-12 p-4 rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05]">
              <ul className="list-disc pl-5 space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <li>
                  Developed and maintained the front-end of a website for{" "}
                  <span className="text-yellow-400">ENI</span> company.
                </li>
                <li>
                  Used HTML, CSS, JavaScript, and other frameworks to create a
                  visually appealing and user-friendly website.
                </li>
                <li>
                  Worked as part of a team to deliver the website on time.
                </li>
              </ul>
            </div>
          </div>

          <div
            className="lg:py-14 lg:px-12 md:py-8 md:px-6
          py-2 px-1 rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05]"
          >
            <h1 className="pl-2 text-neutral-800 dark:text-neutral-200  font-normal mb-2">
              JAVASCRIPT INSTRUCTOR{" "}
            </h1>
            <div className="flex justify-between">
              <p className="text-neutral-800 pl-2 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                OGS Company
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                Aug 2022 - Sep 2022
              </p>
            </div>
            <div className="lg:py-14 lg:px-12 p-4 rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05]">
              <ul className="list-disc pl-5 space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                <li>
                  Developed and delivered JavaScript lessons to students of all
                  level.
                </li>
                <li>
                  Created and graded assessments to measure student learning.
                </li>
                <li>Helped students to create graduation projects.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div
          className="lg:py-14 lg:px-12 md:py-8 md:px-6
          py-2 px-1 rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05]"
        >
          <h1 className="text-neutral-800 pl-2 dark:text-neutral-200  font-normal mb-2">
            Higher Institute of Management and Computer Studies
          </h1>
          <div className="flex justify-between">
            <p className="pl-2 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Bachelor&apos;s Degree
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              2021 - 2024
            </p>
          </div>
          <div className="lg:py-14 lg:px-12 p-4 rounded-2xl border-[1px] border-[#ffffff0f] bg-[#ffffff05]">
            <ul className="list-disc pl-5 space-y-4 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <li>
                Built a solid foundation in commercial sciences, including
                economics, marketing, accounting, and business management.
              </li>
              <li>
                Gained practical experience in sales, marketing, and business
                administration.
              </li>
              <li>
                Enhanced understanding of organizational operations and
                strategies.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full relative ">
      <Timeline data={data} />
    </div>
  );
}
