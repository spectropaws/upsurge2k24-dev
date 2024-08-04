

"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import scrollFunction from './components/scrollFunction';


export default function Timeline() {

    const isScrolling = scrollFunction();
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["0 0.7", "1 0.5"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 1030]);
    


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

    const boxAnimation = {
        initial: { opacity: 0, y: 50 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true, amount: 0.2 },
    };

    return (
        <div className="timeline bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 w-full min-h-full relative ">
            <motion.div 
                className="relative flex items-center justify-center text-5xl text-white h-[250px]" 
                {...blinkingAnimation}
            >
                <p className="absolute">TIMELINE</p>
            </motion.div>

            <div ref={container} className="container relative min-h-screen flex justify-center text-gray-200">
                <div className="flex flex-col items-end pr-[80px] ">
                    <motion.div className="w-[300px] h-[200px] mt-[70px]" {...boxAnimation}>
                        <p>
                            {`DAY 1<br/>08:30 AM: Check-in Time for Teams`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2 "  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
                    </motion.div>
                    <motion.div className="w-[300px] h-[200px] mt-[60px]" {...boxAnimation}>
                        <p>
                            {`DAY 1<br/>12:00 PM: Development to be started <br/> 3:00 PM - 5:00 PM: Idea presentation <br/> Round 1 Shortlisting`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 3.svg" className="w-[300px] mt-2" />
                    </motion.div>
                    <motion.div className="w-[300px] h-[200px] mt-[150px]" {...boxAnimation}>
                        <p>
                            {`DAY 2<br/>7:00 AM- 8:00 AM: Breakfast <br/> 8:30 AM : Final Elimination`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 5.svg" className="w-[300px] mt-2" />
                    </motion.div>
                    <motion.div className="w-[300px] h-[200px] mt-[100px]" {...boxAnimation}>
                        <p>
                            {`DAY 2 <br/> 2:00 PM : Winners to be Announced in the valedictory ceremony`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
                    </motion.div>
                </div>

                <div className="middle-box relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-[1.2rem] w-5 h-5 bg-green-700 rounded-full"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[6px] bg-green-600 "></div>
                    <motion.div
                        style={{ y }}
                        className="absolute top-[-2px] w-[4rem] right-0 z-10"
                    >
                        <Image src="/images/timeline/flag.png" height={64} width={64} className="h-[4rem] w-[4rem]" />
                    </motion.div>
                    <motion.div
                        style={{ y }}
                        className="absolute top-[-25px] w-[13rem] right-[-88px]  z-20"
                    >
                        <Image src={isScrolling ? "/images/timeline/marioRun.gif" : "/images/timeline/mario.png"}  height={96} width={96} className="h-[13rem] w-[13rem] pr-0 z-20" />
                    </motion.div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-8 w-8">
                        <Image src="/images/timeline/singleblock.png" height={32} width={32} className="w-8" />
                    </div>
                </div>

                <div className="flex flex-col items-start mt-[200px]  pl-[80px] ">
                    <motion.div className="w-[300px] h-[200px]" {...boxAnimation}>
                        <p>
                            {`DAY 1<br/>10:00 AM: Problem Statements will be Released<br/>11:30 AM: Teams to Lock and Submit Their Problem Statements`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 4.svg" className="w-[300px] mt-2" />
                    </motion.div>
                    <motion.div className="w-[300px] h-[200px] mt-[180px]" {...boxAnimation}>
                        <p>
                            {`DAY 1<br/>7:30 PM - 8:30 PM: Dinner for teams who have opted for accommodation`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
                    </motion.div>
                    <motion.div className="w-[300px] h-[200px] mt-[50px]" {...boxAnimation}>
                        <p>
                            {`DAY 2<br/>10:00 AM - 12:00 PM: Final Presentation Round 2 Shortlisting<br/>12:00 PM: Top 5 Finalists Declaration`
                                .split("<br/>")
                                .map((text, index) => (
                                    <span key={index} className="flex mt-2 font-bold">
                                        {index > 0 && (
                                            <>
                                                <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
                                                <span className="w-full font-medium">{text}</span>
                                            </>
                                        )}
                                        {index === 0 && text}
                                    </span>
                                ))}
                        </p>
                        <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
                    </motion.div>
                </div>

                <div className="absolute top-[-6rem] left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32} className="w-[90px] h-auto" />
                </div>
                <div className="absolute top-10 right-[15rem] transform -translate-x-1/2 -translate-y-1/2 z-0 ">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[-1rem] left-36 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div> 
                <div className="absolute top-[-5rem] right-10 transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/lgClouds.png" width={150} height={32}  className="w-[150px] h-auto" />
                </div>
                <div className="absolute top-[18rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png"width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[57rem] left-[8rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[38rem] left-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
               
                <div className="absolute top-[30rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[10rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[68rem] right-[3rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
                <div className="absolute top-[50rem] right-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
                </div>
               
            </div>
            <div className="w-full flex flex-col items-center">
                <div className="bg-black">
                    <Image src="/svgs/timeline/largeGround.svg"  width={400} height={400} className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}













// "use client";
// import { useRef, useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// export default function Timeline() {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["0 0.7", "1 0.5"],
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [0, 1060]);
    
//     const [isScrolling, setIsScrolling] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolling(true);
//             clearTimeout(window.scrollTimeout);
//             window.scrollTimeout = setTimeout(() => {
//                 setIsScrolling(false);
//             }, 100);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const blinkingAnimation = {
//         animate: {
//             opacity: [1, 0, 1],
//         },
//         transition: {
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "loop",
//         },
//     };

//     const boxAnimation = {
//         initial: { opacity: 0, y: 50 },
//         whileInView: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 },
//         viewport: { once: true, amount: 0.2 },
//     };

//     return (
//         <div className="timeline bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 w-full min-h-full relative">
//             <motion.div 
//                 className="relative flex items-center justify-center text-5xl text-white h-[250px]" 
//                 {...blinkingAnimation}
//             >
//                 <p className="absolute">TIMELINE</p>
//             </motion.div>

//             <div ref={container} className="container relative min-h-full flex justify-center text-gray-200">
//                 <div className="flex flex-col items-end pr-[80px] ">
//                     <motion.div className="w-[300px] h-[200px] mt-[70px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>08:30 AM: Check-in Time for Teams`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2 "  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[60px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>12:00 PM: Development to be started <br/> 3:00 PM - 5:00 PM: Idea presentation <br/> Round 1 Shortlisting`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 3.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[150px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2<br/>7:00 AM- 8:00 AM: Breakfast <br/> 8:30 AM : Final Elimination`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 5.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[100px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2 <br/> 2:00 PM : Winners to be Announced in the valedictory ceremony`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                 </div>

//                 <div className="middle-box relative">
//                     <div className="absolute left-1/2 transform -translate-x-1/2 -top-[1.2rem] w-5 h-5 bg-green-700 rounded-full"></div>
//                     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[6px] bg-green-600 "></div>
//                     <motion.div
//                         style={{ y }}
//                         className="absolute top-[-2px] w-[4rem] right-0 z-10"
//                     >
//                         <Image src="/images/timeline/flag.png" height={64} width={64} className="h-[4rem] w-[4rem]" />
//                     </motion.div>
//                     <motion.div
//                         style={{ y }}
//                         className="absolute top-[-25px] w-[13rem] right-[-88px]  z-20"
//                     >
//                         <Image src={isScrolling ? "/images/timeline/marioRun.gif" : "/images/timeline/marioStatic.png"} height={96} width={96} className="h-[13rem] w-[13rem] pr-0" />
//                     </motion.div>
//                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-8 w-8">
//                         <Image src="/images/timeline/singleblock.png" height={160} width={160} className="w-8" />
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-start mt-[200px]  pl-[80px] ">
//                     <motion.div className="w-[300px] h-[200px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>10:00 AM: Problem Statements will be Released<br/>11:30 AM: Teams to Lock and Submit Their Problem Statements`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 4.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[180px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>7:30 PM - 8:30 PM: Dinner for teams who have opted for accommodation`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[240px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>09:00 PM: Progress Review- I`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 5.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[100px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2<br/>8:00 AM- 09:00 AM: Breakfast<br/>12:00 PM : Progress Review- II <br/> 1:00 PM: Lunch Break`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                 </div>
//                 <div className="absolute top-[-6rem] left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32} className="w-[90px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-10 right-[15rem] transform -translate-x-1/2 -translate-y-1/2 z-0 ">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[-1rem] left-36 transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div> 
// //                 <div className="absolute top-[-5rem] right-10 transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/lgClouds.png" width={150} height={32}  className="w-[150px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[18rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png"width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[54rem] left-[8rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[38rem] left-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
               
// //                 <div className="absolute top-[30rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[10rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[64rem] right-[3rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
// //                 <div className="absolute top-[45rem] right-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
// //                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
// //                 </div>
               
// //             </div>
// //             <div className="w-full flex flex-col items-center">
// //                 <div className="bg-black">
// //                     <Image src="/svgs/timeline/largeGround.svg"  width={400} height={400} className="w-full h-full" />
// //                 </div>
// //             </div>
//             </div>
//         </div>
//     );
// }










// //final---------------------------------------------
// "use client";
// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";

// export default function Timeline() {
//     const container = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["0 0.7", "1 0.5"],
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [0, 1060]);

//     const blinkingAnimation = {
//         animate: {
//             opacity: [1, 0, 1],
//         },
//         transition: {
//             duration: 1,
//             repeat: Infinity,
//             repeatType: "loop",
//         },
//     };

//     const boxAnimation = {
//         initial: { opacity: 0, y: 50 },
//         whileInView: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 },
//         viewport: { once: true, amount: 0.2 },
//     };

//     return (
//         <div className="timeline bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 w-full min-h-full relative">
//             <motion.div 
//                 className="relative flex items-center justify-center text-5xl text-white h-[250px]" 
//                 {...blinkingAnimation}
//             >
//                 <p className="absolute">TIMELINE</p>
//             </motion.div>

//             <div ref={container} className="container relative min-h-full flex justify-center text-gray-200">
//                 <div className="flex flex-col items-end pr-[80px] ">
//                     <motion.div className="w-[300px] h-[200px] mt-[70px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>08:30 AM: Check-in Time for Teams`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2 "  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[60px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>12:00 PM: Development to be started <br/> 3:00 PM - 5:00 PM: Idea presentation <br/> Round 1 Shortlisting`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 3.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[150px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2<br/>7:00 AM- 8:00 AM: Breakfast <br/> 8:30 AM : Final Elimination`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 5.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[100px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2 <br/> 2:00 PM : Winners to be Announced in the valedictory ceremony`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                 </div>

//                 <div className="middle-box relative">
//                     <div className="absolute left-1/2 transform -translate-x-1/2 -top-[1.2rem] w-5 h-5 bg-green-700 rounded-full"></div>
//                     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[6px] bg-green-600 "></div>
//                     <motion.div
//                         style={{ y }}
//                         className="absolute top-[-2px] w-[4rem] right-0 z-10"
//                     >
//                         <Image src="/images/timeline/flag.png" height={64} width={64} className="h-[4rem] w-[4rem]" />
//                     </motion.div>
//                     <motion.div
//                         style={{ y }}
//                         className="absolute top-0 w-[5rem] right-[-25px]  z-20"
//                     >
//                         <Image src="/images/timeline/mario.png" height={96} width={96} className="h-[6rem] w-[6rem] pr-0" />
//                     </motion.div>
//                     <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-8 w-8">
//                         <Image src="/images/timeline/singleblock.png" height={32} width={32} className="w-8" />
//                     </div>
//                 </div>

//                 <div className="flex flex-col items-start mt-[200px]  pl-[80px] ">
//                     <motion.div className="w-[300px] h-[200px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>10:00 AM: Problem Statements will be Released<br/>11:30 AM: Teams to Lock and Submit Their Problem Statements`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 4.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[180px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 1<br/>7:30 PM - 8:30 PM: Dinner for teams who have opted for accommodation`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2" />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 1.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                     <motion.div className="w-[300px] h-[200px] mt-[50px]" {...boxAnimation}>
//                         <p>
//                             {`DAY 2<br/>10:00 AM - 12:00 PM: Final Presentation Round 2 Shortlisting<br/>12:00 PM: Top 5 Finalists Declaration`
//                                 .split("<br/>")
//                                 .map((text, index) => (
//                                     <span key={index} className="flex mt-2 font-bold">
//                                         {index > 0 && (
//                                             <>
//                                                 <img src="/images/timeline/coin.gif" className="inline h-[20px] w-[20px] mr-2"  />
//                                                 <span className="w-full font-medium">{text}</span>
//                                             </>
//                                         )}
//                                         {index === 0 && text}
//                                     </span>
//                                 ))}
//                         </p>
//                         <Image height={60} width={300} src="/svgs/timeline/brick 2.svg" className="w-[300px] mt-2" />
//                     </motion.div>
//                 </div>

//                 <div className="absolute top-[-6rem] left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32} className="w-[90px] h-auto" />
//                 </div>
//                 <div className="absolute top-10 right-[15rem] transform -translate-x-1/2 -translate-y-1/2 z-0 ">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[-1rem] left-36 transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div> 
//                 <div className="absolute top-[-5rem] right-10 transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/lgClouds.png" width={150} height={32}  className="w-[150px] h-auto" />
//                 </div>
//                 <div className="absolute top-[18rem] left-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png"width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[54rem] left-[8rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[38rem] left-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
               
//                 <div className="absolute top-[30rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[10rem] right-[5rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[64rem] right-[3rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
//                 <div className="absolute top-[45rem] right-[10rem] transform -translate-x-1/2 -translate-y-1/2 z-0">
//                     <Image src="/images/timeline/smClouds.png" width={90} height={32}  className="w-[80px] h-auto" />
//                 </div>
               
//             </div>
//             <div className="w-full flex flex-col items-center">
//                 <div className="bg-black">
//                     <Image src="/svgs/timeline/largeGround.svg"  width={400} height={400} className="w-full h-full" />
//                 </div>
//             </div>
//         </div>
//     );
// }
