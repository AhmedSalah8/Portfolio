import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import { BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../../../data";

const MemoizedBentoGridItem = React.memo(BentoGridItem);

const GridComponent = () => {
  const columnCount = 3; // Adjust based on your layout
  const rowCount = Math.ceil(gridItems.length / columnCount);

  const renderItem = ({
    columnIndex,
    rowIndex,
    style,
  }: {
    columnIndex: number;
    rowIndex: number;
    style: React.CSSProperties;
  }) => {
    const index = rowIndex * columnCount + columnIndex;
    const item = gridItems[index];
    if (!item) return null;

    return (
      <div style={style}>
        <MemoizedBentoGridItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
        />
      </div>
    );
  };

  return (
    <section id="about">
      <Grid
        columnCount={columnCount}
        columnWidth={300} // Adjust based on your item width
        height={600} // Adjust based on your container height
        rowCount={rowCount}
        rowHeight={200} // Adjust based on your item height
        width={900} // Adjust based on your container width
      >
        {renderItem}
      </Grid>
    </section>
  );
};

export default GridComponent;
