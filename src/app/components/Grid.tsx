import React from "react";
import { gridItems } from "../../../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function Grid() {
  return (
    <BentoGrid className=" mx-auto setion">
      {gridItems.map((item) => (
        <BentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
