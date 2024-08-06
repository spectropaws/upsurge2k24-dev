"use client";

import React from "react";
import TrackCard from "./components/TrackCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Tracks() {
  const sampleTracks = [
    {
      trackIcon: "/images/trackIcons/education1.jpg",
      trackTitle: "Education",
      trackDesc:
        "These projects increase access to educational resources, facilitate learning in the classroom, or generally make acquiring knowledge a more engaging process. Hacks submitted under this category can range from all-encompassing edtech solutions to projects that bring awareness to a specific topic.",
    },
    {
      trackIcon: "/images/trackIcons/health.png",
      trackTitle: "Healthcare",
      trackDesc:
        "These projects take on public health challenges, combat health disparities, or assist with maintaining personal wellness. Hacks submitted under this category can range from digital archives of public health information to apps that track the fitness data of an individual user.",
    },
    {
      trackIcon: "/images/trackIcons/environment2.png",
      trackTitle: "Environment",
      trackDesc:
        "These projects use technology to preserve ecological ecosystems or promote sustainable lifestyles. Hacks submitted under this category can range from sweeping solutions to pertinent environmental crises to apps that encourage small sustainable habits",
    },
    {
      trackIcon: "/images/trackIcons/finance.png",
      trackTitle: "Finance",
      trackDesc:
        "These projects use technology to drive economic growth, generate employment opportunities, attract investments and achieve economic sustainability. Hacks submitted under this category can range from solutions to mitigate risks, revolutionize fintech, make transactions more secure and handle existing financial crisis.",
    },
    {
      trackIcon: "/images/trackIcons/web3.png",
      trackTitle: "Web3",
      trackDesc:
        "These projects use technology to revolutionize the digital landscape, impacting data security with online platforms and building robust decentralized applications. Hacks in this category may address data ownership, privacy, censorship resistance, interoperability, and environmental sustainability.",
    },
    {
      trackIcon: "/images/trackIcons/agriculture2.png",
      trackTitle: "Agriculture",
      trackDesc:
        "These projects use technology to impact various factors, including crop cultivation, livestock management, and agribusiness development. Hacks in this category can address agricultural crises, promote eco-friendly farming techniques, and support sustainable agribusiness practices.",
    },
    {
      trackIcon: "/images/trackIcons/openinnvo2.png",
      trackTitle: "Open Innovation",
      trackDesc:
        "Open innovation projects leverage technology and collaboration to foster innovation across various sectors and industries. Projects submitted under this category can encompass a wide range of initiatives, from open-source software development to collaborative research efforts and ecosystem-building activities.",
    },
  ];

  const blinkingAnimation = {
    animate: {
      opacity: [1, 0, 1],
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  return (
    <>
      <div
        className="w-full h-96"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #000C1F 0% 10%, #011536 10% 20%, #012256 20% 30%, #032F77 30% 40%, #063D98 40% 50%, #0C4AB1 50% 60%, #1556C2 60% 70%, #1F65D8 70% 80%, #2C72E5 80% 90%, #3b82f6 90% 100%)",
        }}
      ></div>
      <div className="relative w-full bg-gradient-to-b from-blue-500 to-blue-400 pb-40">
        {/* headline */}
        <div className="relative flex items-center justify-center text-5xl text-white h-[50px]">
          <motion.div
            className="relative flex items-center justify-center text-5xl text-white h-[50px]"
            {...blinkingAnimation}
          >
            <p className="absolute">TRACKS</p>
          </motion.div>
        </div>

        {/* cards */}
        <div className="flex justify-center items-center lg:mx-32 ">
          <div className="w-full flex flex-wrap justify-center gap-4">
            {sampleTracks.map((item, idx) => (
              <div key={idx} className="mt-16">
                <TrackCard
                  trackTitle={item.trackTitle}
                  trackDesc={item.trackDesc}
                  trackIcon={item.trackIcon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
