import React from "react";
import { Carousel } from "flowbite-react";

function CarouselLite() {
  return (
    <Carousel className="w-auto h-96" indicators={false}>
      <div className="flex h-full items-center justify-start gap-4 bg-white dark:text-black px-4">
        <div className="w-1/3 h-64 bg-black rounded-lg"></div>
        <div className="w-1/3 h-64 bg-black rounded-lg"></div>
        <div className="w-1/3 h-64 bg-black rounded-lg"></div>
      </div>
      <div className="flex h-full items-center justify-start gap-4 bg-white dark:text-black px-4">
        <div className="w-1/3 h-64 bg-green-500 rounded-lg"></div>
        <div className="w-1/3 h-64 bg-green-500 rounded-lg"></div>
        <div className="w-1/3 h-64 bg-green-500 rounded-lg"></div>
      </div>
      <div className="flex h-full items-center justify-start gap-4 bg-white dark:text-black px-4">
        <div className="w-1/3 h-64 bg-slate-200 rounded-lg"></div>
        <div className="w-1/3 h-64 bg-slate-200 rounded-lg"></div>
        <div className="w-1/3 h-64 bg-slate-200 rounded-lg"></div>
      </div>
    </Carousel>
  );
}

export default CarouselLite;
