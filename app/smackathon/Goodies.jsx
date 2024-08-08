"use client";
import React from "react";
import Image from "next/image";

export default function Goodies() {
  return (
    <div
      style={{
        boxShadow: "0px 26px 26px 0px rgba(0,0,0,0.75) inset",
      }}
      className="relative bg-[url('/images/goodies/goodies-bg.png')] w-full bg-cover bg-center py-8"
    >
      <h1 className="text-3xl sm:text-5xl p-7 pb-16 text-center text-white font-bold">
        Exclusive Goodies from GFG
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center px-10 pb-40 lg:flex-row lg:px-16">
        <Image
          src="/images/goodies/goodies.png"
          width={400}
          height={403}
          className="bg-[radial-gradient(circle,_rgba(68,_89,_149,_1),_rgba(68,_89,_149,_0)_65%)] p-4 rounded-lg shadow-lg ml-0 lg:p-10"
        />
        <div className="flex flex-col mb-10 lg:m-10">
          <div className="flex items-center ">
            <Image
              src="/images/goodies/torch-new.gif"
              width={50}
              height={50}
              className="rotate-45 p-4 mr-2 lg:mr-0"
            />

            <p className="text-justify text-white lg:px-2">
              GFG Kits to the top 3 winners of the Hackathon.
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/goodies/torch-new.gif"
              width={50}
              height={50}
              className="rotate-45 p-4 mr-2 lg:mr-0"
            />
            <p className="text-justify text-white lg:px-2">
              GFG Discount coupons worth Rs 2000 for winners.
            </p>
          </div>
          <div className="flex items-center ">
            <Image
              src="/images/goodies/torch-new.gif"
              width={50}
              height={50}
              className="rotate-45 p-4 mr-2 lg:mr-0"
            />
            <p className="text-justify text-white lg:px-2">
              GFG Discount coupons worth Rs 300 for all participants.
            </p>
          </div>
        </div>
      </div>

      <img
        src="/images/goodies/character.png"
        className="absolute bottom-0 -left-5 h-56"
        alt="Character"
      />
    </div>
  );
}
