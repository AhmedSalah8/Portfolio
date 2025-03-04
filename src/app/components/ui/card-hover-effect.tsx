"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    img: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 py-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.img}
          className="relative group block p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImg src={item.img} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0c0a2c] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex h-24 w-28  flex-col items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-3 text-center",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardImg = ({
  className,
  src,
  alt,
}: {
  className?: string;
  src?: string;
  alt?: string;
}) => {
  return (
    <img
      className={cn("w-8 h-8 object-cover mb-4", className)}
      src={src}
      alt={alt}
    />
  );
};
