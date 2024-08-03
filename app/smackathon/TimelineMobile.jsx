

"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function TimelineMobile() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 0.5", "1 0.5"],
  });

  // Set the y value for Mario and the flag
  const y = useTransform(scrollYProgress, [0, 1], [0, 1640]);

  // Blinking animation for TIMELINE text
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

  // Animation for boxes appearing on scroll
  const boxAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.2 },
  };

  return (
    <div className="timeline bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 w-full min-h-full relative">
      <motion.div
        className="relative flex justify-center text-5xl text-white h-[250px] top-10"
        {...blinkingAnimation}
      >
        <p className="absolute">TIMELINE</p>
      </motion.div>
      

      <div
        ref={container}
        className="container relative min-h-full flex justify-center gap-14 text-gray-200 sm: gap-12 pl-14"
      >
        <div className="relative flex justify-center items-center left-[1rem]">
          {/* Dark Green Circle */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-[1.2rem] w-5 h-5 bg-green-700 rounded-full"></div>

          {/* Central Line */}

          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[6px] bg-green-600 z-0"></div>
          {/* Mario and Flag */}
          <motion.div
            style={{ y }}
            className="absolute top-[-1px] w-[3rem] right-0"
          >
            <Image height={48} width={48} src="/images/timeline/flag.png" className="h-[3rem] w-[3rem]" />
          </motion.div>

          
          <motion.div
            style={{ y }}
            className="absolute top-2 h-[7rem] w-[4rem] right-[-19px] z-10"
          >
            <Image height={70} width={70} src="/images/timeline/mario.png" className=" h-[5rem] w-[6rem]" />
          </motion.div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-6 w-6">
                    <Image height={32} width={32} src="/images/timeline/singleblock.png" className="w-8" />
              </div>
          
        </div>
        
        <div className="flex flex-col items-end sm: pr-0">
          <motion.div
            className="w-[270px] h-[200px] mt-[70px]"
            {...boxAnimation}
          >
            <p>
                            {`DAY 1<br/>08:30 AM: Check-in Time for Teams`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1"  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
            
          </motion.div>


          <motion.div className="w-[270px] h-[200px] " {...boxAnimation}>
          <p>
                            {`DAY 1<br/>10:00 AM: Problem Statements will be Released<br/>11:30 AM: Teams to Lock and Submit Their Problem Statements`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="//images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 4.svg" className="w-[300px] mt-2" />
          </motion.div>
          <motion.div
            className="w-[270px] h-[200px] mt-[60px]"
            {...boxAnimation}
          >
            <p>
                            {`DAY 1<br/>12:00 PM: Development to be started <br/> 3:00 PM - 5:00 PM: Idea presentation <br/> Round 1 Shortlisting`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 3.svg" className="w-[300px] mt-2" />
          </motion.div>

          <motion.div
            className="w-[270px] h-[200px] mt-[70px]"
            {...boxAnimation}
          >
            <p>
                            {`DAY 1<br/>7:30 PM - 8:30 PM: Dinner for teams who have opted for accommodation`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
          </motion.div>
          <motion.div
            className="w-[270px] h-[200px] mt-[50px]"
            {...boxAnimation}
          >
            <p>
                            {`DAY 2<br/>7:00 AM- 8:00 AM: Breakfast <br/> 8:30 AM : Final Elimination`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1"/>
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 5.svg" className="w-[300px] mt-2" />
          </motion.div>
          <motion.div className="w-[270px] h-[200px] " {...boxAnimation}>
          <p>
                            {`DAY 2<br/>10:00 AM - 12:00 PM: Final Presentation Round 2 Shortlisting<br/>12:00 PM: Top 5 Finalists Declaration`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1"  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
          </motion.div>
          <motion.div
            className="w-[270px] h-[200px] mt-[70px]"
            {...boxAnimation}
          >
            <p>
                            {`DAY 2 <br/> 2:00 PM : Winners to be Announced in the valedictory ceremony`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[19px] w-[15px] mr-2 pt-1" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <img src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-40 left-14 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <img src="/images/timeline/smClouds.png" className="w-[80px] h-auto" />
      </div>
      <div className="absolute top-56 right-10 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <img src="/images/timeline/lgClouds.png" className="w-[150px] h-auto" />
      </div>
      <div className="absolute top-40 right-4 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <img src="/images/timeline/smClouds.png" className="w-[80px] h-auto" />
      </div>

     
      <div className="relative w-full flex flex-col items-center">
      
                <div className="bg-black">
                    <img src="/svgs/timeline/smallGround.svg" className="w-full" />
                </div>
            </div>
    </div>
  );
}

