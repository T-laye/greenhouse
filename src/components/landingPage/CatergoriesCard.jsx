import React from "react";
import Image from "next/image";

export default function CategoriesCard({ image, text }) {
  return (
    // <section className="relative w-[189px] h-[231px] md:w-[200px] md:h-[250px] lg:w-[389px] lg:h-[304px] rounded-lg overflow-hidden">
    <section className="relative w-full max-w-[389px] min-w-[200px] h-full rounded-lg overflow-hidden">
      <Image
        height={700}
        width={700}
        src={image}
        alt="picture of the product"
        className="w-full h-full object-cover rounded-[10px]"
      />
      <div className="absolute bottom-0 left-0 flex items-center">
        <div className="bg-forest-green-700 p-2 rounded-sm w-[160px] h-[48px] flex items-center">
          <h1 className="text-[16px] text-white whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
