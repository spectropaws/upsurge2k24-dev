"use client";
import React from "react";
import Image from "next/image";

export default function Goodies() {
  return (
    <div className="relative bg-[url('/images/goodies/gfg-final.png')] w-full bg-cover bg-center py-20">
      <h1 className="text-4xl p-6 pb-12 text-center text-white font-bold">
        Exclusive Goodies from GFG
      </h1>
      <div className="flex flex-col gap-5 items-center px-16 pb-40 lg:flex-row">
        <Image
          src="/images/goodies/goodies.png"
          width={378}
          height={403}
          className="bg-[radial-gradient(circle,_rgba(255,_215,_0,_0.7),_rgba(255,_215,_0,_0)_70%)] p-6 rounded-lg shadow-lg ml-0 lg:ml-32"
        />
        <div className="flex flex-col gap-8 lg:m-10">
          <div className="flex items-center ">
            <Image src="/images/goodies/heart.png" width={50} height={50} className="lg:mt-1"/>
            {/* <Image src="/images/goodies/gold.png" width={30} height={30} className="mx-2 lg:mt-1"/> */}
            <span className="text-lg text-white lg:text-xl">
              GFG Kits to the top 3 winners of the Hackathon.
            </span>
          </div>
          <div className="flex items-center ">
            <Image src="/images/goodies/heart.png" width={50} height={50} />
            {/* <Image src="/images/goodies/gold.png" width={30} height={30} className="mx-2 lg:mt-1"/> */}
            <span className="text-lg text-white lg:text-xl">
              GFG Discount coupons worth Rs 2000 for winners.
            </span>
          </div>
          <div className="flex items-center ">
            <Image src="/images/goodies/heart.png" width={50} height={50} />
            {/* <Image src="/images/goodies/gold.png" width={30} height={30} className="mx-2 lg:mt-1"/> */}
            <span className="text-lg text-white lg:text-xl">
              GFG Discount coupons worth Rs 300 for all participants.
            </span>
          </div>
        </div>
      </div>

      <img
        src="/images/goodies/character.png"
        className="absolute bottom-0 left-0 h-56"
        alt="Character"
      />
    </div>
  );

}