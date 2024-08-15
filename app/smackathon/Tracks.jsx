"use client";

import React from "react";
import TrackCard from "./components/TrackCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Tracks() {
  const sampleTracks = [
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/education1.jpg",
      trackTitle: "Education",
      trackDesc:
        "This category focuses on enhancing access to educational resources, improving classroom learning, and facilitating a more engaging knowledge acquisition process. Submissions can include solutions that raise awareness about educational issues.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/health.png",
      trackTitle: "Healthcare",
      trackDesc:
        "This category focuses to address public health challenges, reduce health disparities, or promote personal wellness. Submissions can range from digital archives of public health data to fitness tracking apps, all with the goal of improving health outcomes.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/environment2.png",
      trackTitle: "Environment",
      trackDesc:
        "This category focuses on projects that leverage technology to preserve ecological ecosystems or promote sustainable practices. Submissions might include solutions for reducing environmental impacts or developing sustainable habits.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/finance.png",
      trackTitle: "Finance",
      trackDesc:
        "This category focuses on using technology to stimulate economic growth, create employment opportunities, attract investments, and ensure economic sustainability. Submissions might include solutions for financial risk mitigation, innovative fintech ideas, or secure transaction handling.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/web3.png",
      trackTitle: "Web3",
      trackDesc:
        "This category focuses on projects that aim to revolutionize the digital landscape, enhance data security, and address decentralized applications. Submissions can vary from enhancing digital privacy to promoting environmental sustainability through technological innovation.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/agriculture2.png",
      trackTitle: "Agriculture",
      trackDesc:
        "This category focuses on technology to influence various aspects of agriculture, from crop cultivation and network management to agribusiness development. Submissions might include solutions for agricultural sustainability or efficiency improvements in farming practices.",
    },
    {
      trackIcon: "https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/trackIcons/openinnvo2.png",
      trackTitle: "Open Innovation",
      trackDesc:
        "This category focuses on leveraging technological advancements and collaborative efforts to foster innovation across multiple sectors. Submissions might include open-source software developments, ecosystem-building activities, or collaborative research initiatives.",
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
        className="w-full h-[30rem]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #0e121a 0% 8%, #000C1F 8% 16%, #081229 16% 24%, #011536 24% 32%, #012256 32% 40%, #032F77 40% 48%, #063D98 48% 56%, #0C4AB1 56% 64%, #1556C2 64% 72%, #1F65D8 72% 80%, #2C72E5 80% 89%, #3b82f6 89% 100%)",
        }}
      ></div>
      <div className="relative w-full bg-gradient-to-b from-blue-500 to-blue-400 pb-40 overflow-x-hidden">
        {/* headline */}
        <div className="relative flex items-center justify-center text-3xl md:text-5xl text-white h-[100px]">
          <h1 className="absolute text-3xl md:text-5xl">Tracks</h1>
        </div>

        {/* cards */}
        <div className="flex justify-center items-center lg:mx-32">
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
