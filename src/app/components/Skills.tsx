import React from "react";
import { skills } from "../../../data/index";
import { HoverEffect } from "./ui/card-hover-effect";

function Skills() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
  );
}

export default Skills;
