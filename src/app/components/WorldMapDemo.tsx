"use client";
import { WorldMap } from "./ui/world-map";
// import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto text-center">
        {/* <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p> */}
        {/* <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p> */}
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // Port Said (Egypt)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -50.8919 }, // Brazil (Brasília)
          },
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: {
              lat: 15.2703,
              lng: 32.30848,
            }, // New Delhi
            end: { lat: 8.266906, lng: 45.107849 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
