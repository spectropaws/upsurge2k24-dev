"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";


const Prize = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef(null);
  const controls = useAnimation();

  const maxScrollDistance = 400;

  const handleScroll = () => {
    if (divRef.current) {
      const divTop = divRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const visibleHeight = windowHeight - divTop;

      const scrollEffectHeight = Math.min(
        maxScrollDistance,
        Math.max(0, visibleHeight)
      );

      setScrollPosition(scrollEffectHeight);

      controls.start({
        y: -scrollEffectHeight,
        transition: { duration: 1.7 },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <div className="relative">
        <div className="bg-[url(/svgs/prize/ground.svg)] bg-cover h-[60vh]"></div>
        <div className="flex gap-10 items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div>
            <a
              href="https://drive.google.com/file/d/1I5dP6EDHEMmjUUjzGsfRF7d3afzNfZg4/view?usp=sharing"
              target="_blank"
              className="text-sm font-semibold bg-[url(https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/btn.png)] px-4 py-5 bg-cover bg-center md:px-7 md:py-7 md:text-lg active:translate-y-1 transition-all duration-100"
              download
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
      <div
        ref={divRef}
        className="bg-[url('https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/new-prize-bg.png')] relative w-full h-full lg:h-[150vh] bg-center bg-no-repeat flex flex-col items-center overflow-hidden"
      >
        <motion.div
          animate={controls}
          className="absolute -bottom-96 transform hidden lg:block -translate-x-1/2 w-full h-96 lg:-bottom-80"
        >
          <img
            src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/minecraft-rise.png"
            alt="Animated"
            className="w-full h-full bottom-0 object-cover object-center"
          />
        </motion.div>

        <div></div>

        <h1 className="text-3xl sm:text-5xl mt-16 text-center text-white font-bold lg:mb-12">
          Cash Prizes
        </h1>
        <div className="flex flex-col gap-6 px-10 lg:flex-row lg:px-24 lg:gap-20 py-32 md:px-24 md:gap-20">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
            <div className="p-10 md:p-14 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/second-prize.png"
                  width={500}
                  height={500}
                  alt="Second Prize"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order-0 md:order-1">
            <div className="p-8 md:p-8 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.8),_rgba(147,_133,_227,_0)_75%)]">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/first-prize.png"
                  width={500}
                  height={500}
                  alt="First Prize"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order-1">
            <div className="p-10 md:p-14 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_60%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
              <motion.div
                animate={{
                  y: [10, -10],
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src="https://upsurge2k24.s3.ap-south-1.amazonaws.com/images/prize/third-prize.png"
                  width={500}
                  height={500}
                  alt="Third Prize"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prize;
