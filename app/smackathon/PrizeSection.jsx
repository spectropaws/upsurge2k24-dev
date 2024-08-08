"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "./components/hero.module.css";

const Prize = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const divRef = useRef(null);
  const controls = useAnimation();

  // Define the maximum scroll distance for the image to move up
  const maxScrollDistance = 400;

  // Handle scroll events
  const handleScroll = () => {
    if (divRef.current) {
      const divTop = divRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Calculate how much of the div is visible
      const visibleHeight = windowHeight - divTop;

      // Determine the scroll effect value, clamping to the max scroll distance
      const scrollEffectHeight = Math.min(
        maxScrollDistance,
        Math.max(0, visibleHeight)
      );

      // Update scroll position
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
        <div className="flex absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <button className={styles.btnfinale}>Download Brochure</button>
        </div>
      </div>
      <div
        ref={divRef}
        className="bg-[url('/images/prize/new-prize-bg.png')] relative w-full h-full lg:h-[150vh] bg-center bg-no-repeat flex flex-col items-center overflow-hidden"
      >
        <motion.div
          animate={controls}
          className="absolute -bottom-96 transform hidden lg:block -translate-x-1/2 w-full h-96 lg:-bottom-80"
        >
          <img
            src="/images/prize/minecraft-rise.png"
            alt="Animated"
            className="w-full h-full bottom-0 object-cover object-center"
          />
        </motion.div>

        <div></div>

        <h1 className="text-3xl sm:text-5xl mt-16 text-center text-white font-bold">
          Cash Prizes
        </h1>
        <div className="flex flex-col gap-5 px-12 lg:flex-row lg:px-24 lg:gap-20 py-32 md:px-24 md:gap-20">
          <div className="flex flex-col items-center gap-10 order-1 md:order-0">
            <div className="p-14 sm:p-10 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
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
                  src="/images/prize/second-prize.png"
                  width={338}
                  height={397}
                  alt="Second Prize"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order-0 md:order-1">
            <div className="p-14 sm:p-10 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_75%)]">
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
                  src="/images/prize/first-prize.png"
                  width={430}
                  height={442}
                  alt="First Prize"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 order-1">
            <div className="p-16 sm:p-12 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_60%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
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
                  src="/images/prize/third-prize.png"
                  width={338}
                  height={397}
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

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";
// import styles from "./components/hero.module.css";

// const Prize = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const divRef = useRef(null);
//   const controls = useAnimation();

//   // Handle scroll events
//   const handleScroll = () => {
//     if (divRef.current) {
//       const divTop = divRef.current.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       // Calculate how much of the div is visible
//       const visibleHeight = windowHeight - divTop;

//       // Update scroll position
//       setScrollPosition(Math.max(0, visibleHeight));

//       // Trigger animation based on scroll position
//       controls.start({
//         y: Math.min(0, -visibleHeight),
//         transition: { duration: 0.5 },
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Trigger scroll check on mount

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [controls]);
//   return (
//     <>
//       <div ref={divRef} className="relative overflow-hidden">
//         <motion.div
//           animate={controls}
//           className="absolute bottom-0 self-center transform -translate-x-1/2"
//         >
//           <img
//             src="images/prize/minecraft-rise.png"
//             alt="Animated"
//             className="w-[100%]"
//           />
//         </motion.div>

//         <div className="bg-[url(/svgs/prize/ground.svg)] bg-cover h-[60vh]"></div>
//         <div className="flex absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
//           <button className={styles.btnfinale}>Download Brochure</button>
//         </div>
//       </div>
//       <div
//         style={{
//           boxShadow: "0px 25px 80px #000000 inset",
//         }}
//         className="bg-[url('/images/prize/new-prize-bg.png')] w-full bg-center flex flex-col items-center"
//       >
//         <h1 className="text-5xl mt-16 text-center text-white font-bold">
//           Cash Prizes
//         </h1>
//         <div className="flex flex-col gap-6 px-12 lg:flex-row lg:px-24 lg:gap-20 py-32 md:px-24 md:gap-20">
//           <div className="flex flex-col items-center gap-10 order-1 md:order-0">
//             <div className="p-14 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_72%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
//               <motion.div
//                 animate={{
//                   y: [10, -10],
//                   transition: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     duration: 1,
//                     // delay: 1,
//                   },
//                 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <Image
//                   src="/images/prize/second-prize.png"
//                   width={338}
//                   height={397}
//                 />
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center gap-10 order:0 md:order-1">
//             <div className="bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_75%)] p-14">
//               <motion.div
//                 animate={{
//                   y: [10, -10],
//                   transition: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     duration: 1,
//                     delay: 1,
//                   },
//                 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <Image
//                   src="/images/prize/first-prize.png"
//                   width={430}
//                   height={442}
//                 />
//               </motion.div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center gap-10 order-1">
//             <div className="p-16 bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.4),_rgba(147,_133,_227,_0)_60%)] lg:bg-[radial-gradient(circle,_rgba(147,_133,_227,_0.6),_rgba(147,_133,_227,_0)_75%)]">
//               <motion.div
//                 animate={{
//                   y: [10, -10],
//                   transition: {
//                     repeat: Infinity,
//                     repeatType: "reverse",
//                     duration: 1,
//                     // delay: 1,
//                   },
//                 }}
//                 whileHover={{ scale: 1.1 }}
//               >
//                 <Image
//                   src="/images/prize/third-prize.png"
//                   width={338}
//                   height={397}
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Prize;
