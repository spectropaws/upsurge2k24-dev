
"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import useScrollFunction from './components/scrollFunction';


export default function Timeline() {

    const isScrolling = useScrollFunction();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 0.7", "1 0.5"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 1160]);
    const x = 4 - Math.random()*2;

    const boxAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true, amount: 0.2 },
    };

    return (
        <>
            <div className="timeline bg-gradient-to-b from-blue-400 via-blue-400 to-blue-300 min-h-full gap-10 relative">
                <div className="relative flex items-center justify-center text-5xl text-white h-[250px]">
                    <h1 className="absolute text-5xl">Timeline</h1>
                </div>
    
                <div ref={container} className="container w-[80%] relative min-h-screen w-full flex justify-center gap-20  text-gray-200 lg: w-[100%]">
                    {/* Left container */}
                    <div className="relative flex flex-col items-end w-[400px] gap-[10rem] text-lg mr-28 mb-[10rem]">
                        <motion.div className="relative w-full mb-10" {...boxAnimation}>
                            
                                {`DAY 1<br/>08:30 AM: Check-in Time for Teams`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif" alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                        <motion.div className="relative w-full mb-10" {...boxAnimation}>
                            
                                {`DAY 1<br/>12:00 PM: Development to be started <br/> 3:00 PM - 5:00 PM: Idea presentation <br/> Round 1 Shortlisting`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 3.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                        <motion.div className="relative w-full mb-10" {...boxAnimation}>
                            
                                {`DAY 2<br/>7:00 AM- 8:00 AM: Breakfast <br/> 8:30 AM : Final Elimination`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium  text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 5.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                        <motion.div className="relative w-full" {...boxAnimation}>
                            
                                {`DAY 2 <br/> 2:00 PM : Winners to be Announced in the valedictory ceremony`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                    </div>
    
                    <div className="middle-box relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -top-[1.2rem] w-6 h-6 bg-green-700 rounded-full"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[9px] bg-green-600"></div>
                        <motion.div
                            style={{ y }}
                            className="absolute top-[-2px] w-[5rem] right-0 z-10"
                        >
                            <Image src="/images/timeline/flag.png"  alt="flag" height={64} width={64} className="h-[5rem] w-[5rem]" />
                        </motion.div>
                        <motion.div
                            style={{ y }}
                            className="absolute top-[-30px] w-[16rem] right-[-110px] z-20"
                        >
                            <Image src={isScrolling ? "/images/timeline/marioRun.gif" : "/images/timeline/mario.png"} height={96} width={96} className="h-[16rem] w-[16rem] pr-0 z-20" alt="mario" unoptimized />
                        </motion.div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[3rem] w-[3rem]">
                            <Image src="/images/timeline/singleblock.png" alt="block" height={32} width={32} className="w-[3rem]" />
                        </div>
                    </div>
    
                    {/* Right container */}
                    <div className="relative flex flex-col items-start w-[400px] gap-[10rem] ml-28 mb-[10rem] mt-20">
                        <motion.div className="relative w-full mb-10" {...boxAnimation}>
                            
                                {`DAY 1<br/>10:00 AM: Problem Statements will be Released<br/>11:30 AM: Teams to Lock and Submit Their Problem Statements`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                        
                            <Image height={60} width={300} src="/svgs/timeline/brick 4.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                        <motion.div className="relative w-full mb-10 mt-[5rem]" {...boxAnimation}>
                            
                                {`DAY 1<br/>7:30 PM - 8:30 PM: Dinner for teams who have opted for accommodation`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                        <motion.div className="relative w-full" {...boxAnimation}>
                            
                                {`DAY 2<br/>10:00 AM - 12:00 PM: Final Presentation Round 2 Shortlisting<br/>12:00 PM: Top 5 Finalists Declaration`
                                    .split("<br/>")
                                    .map((text, index) => (
                                        <h3 key={index} className="flex mt-2 font-bold text-2xl mb-4 mt-2">
                                            {index > 0 && (
                                                <>
                                                    <img src="/images/timeline/coin.gif"  alt="coin" className="inline pt-[6px] h-[25px] w-[20px] mr-2" />
                                                    <p className="w-full font-medium text-2xl">{text}</p>
                                                </>
                                            )}
                                            {index === 0 && text}
                                        </h3>
                                    ))}
                            
                            <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" alt="bricks" className="absolute w-full" />
                        </motion.div>
                    </div>


                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[-10rem] left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32} className="w-[110px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-3 right-[15rem] transform -translate-x-1/2 -translate-y-1/2 z-0 ">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[-8rem] right-10 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/bigCloud.png" alt="cloud" width={150} height={32}  className="w-[150px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[14rem] left-[7rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />        
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[40rem] left-[20rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[30rem] right-[20rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[50rem] right-[3rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />
                    </motion.div>
                    <motion.div animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}} className="absolute top-[60rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <Image src="/images/timeline/pixelatedCloud.png" alt="cloud" width={90} height={32}  className="w-[110px] h-auto" />
                    </motion.div>
                </div>

                <div className="w-full flex flex-col items-center">
                <div className="bg-black">
                     <Image src="/svgs/timeline/largeGround.svg" alt="large ground"  width={400} height={400} className="w-full h-full" />
                 </div>             </div>
            </div>
        </>
    );
}


