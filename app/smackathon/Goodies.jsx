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
      <h1 className="text-3xl leading-[2.5rem] md:leading-[4rem] sm:text-5xl p-7 pb-16 text-center leading-4 text-white font-bold">
        Exclusive Goodies from Cojag and Unstop
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center px-10 pb-40 lg:flex-row lg:px-16">
        <Image
          src="/images/goodies/goodies-new.png"
          width={500}
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

            <p className="text-justify text-xl md:text-3xl text-white lg:px-2">
            Vouchers for the top three winning teams!
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/goodies/torch-new.gif"
              width={50}
              height={50}
              className="rotate-45 p-4 mr-2 lg:mr-0"
            />
            <p className="text-justify text-xl md:text-3xl text-white lg:px-2">
            Exclusive Goodies for the top two teams!
            </p>
          </div>
          <div className="flex items-center ">
            <Image
              src="/images/goodies/torch-new.gif"
              width={50}
              height={50}
              className="rotate-45 p-4 mr-2 lg:mr-0"
            />
            <p className="text-justify text-xl md:text-3xl text-white lg:px-2">
            Surprise gifts activity during the event!
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
