import Image from "next/image";
import Link from "next/link";
import React from "react";

function ScrollView() {
  return (
    <div className="px-16 pb-7 pt-11 flex justify-between">
      <span>left</span>
      <div className="overflow-hidden flex flex-row items-center justify-center overflow-x-scroll w-full pb-2.5 scroll-smooth space-x-5">
        <Link href={"/"} className="breadcrumb py-6">
          <p className="breadcrumb-txt">all</p>
        </Link>

        <Link href={"/restaurants/masma"} className="breadcrumb py-2">
          <Image
            alt="restaurant-img"
            src={"https://i.ibb.co/9pF53sY/masma-eats.png"}
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="breadcrumb-txt">Masma Eat</p>
        </Link>
        <Link href={"/restaurants/the-gallery-cafe"} className="breadcrumb py-2">
          <Image
            alt="restaurant-img"
            src={"https://i.ibb.co/crSMWnz/gallery-cafe.jpg"}
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="breadcrumb-txt">the gallery cafe</p>
        </Link>
        <Link href={"/restaurants/mr-kottu"} className="breadcrumb py-2">
          <Image
            alt="restaurant-img"
            src={"https://i.ibb.co/s5XmtCk/mrkottu.jpg"}
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="breadcrumb-txt">mr kottu grand</p>
        </Link>
      </div>
      <span>right</span>
    </div>
  );
}

export default ScrollView;
