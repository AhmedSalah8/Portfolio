"use client";
import { WorldMap } from "./ui/world-map";
// import { motion } from "motion/react";

export function WorldMapDemo() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto text-center"></div>
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
