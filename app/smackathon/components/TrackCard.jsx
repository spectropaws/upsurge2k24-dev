"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image'; // If using Next.js
import { color, motion } from 'framer-motion';
import { Shadow } from '@react-three/drei';

export default function TrackCard({ trackTitle, trackDesc, trackIcon }) {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setInView(true);
        setHasAnimated(true); // Ensure animation runs only once
      }
    }, {
      threshold: 0.1 // Trigger when 10% of the component is visible
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const customShadow = {
    boxShadow: '8px 0 16px rgba(30, 58, 138, 0.3), -8px 0 6px rgba(30, 58, 138, 0.3)'
  } ;

  const x = 4 - Math.random()*2;
  console.log()

  return (
    <motion.div
    animate={{x:[10, -10], transition:{repeat:Infinity, repeatType:"reverse", duration:x}}}
    className="flex flex-col items-center overflow-hidden pt-10 w-[360px] md:w-[360px] relative ">
      {/* Cloud Image */}
      <div className="relative mt-64 z-20 w-[350px] md:w-[360px] h-20 ">
        <Image 
          src="/images/trackIcons/pixelCloud.png" 
          alt="Cloud" 
          layout="fill"
        />
      </div>

      {/* Card Component */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }} // Initial state: invisible and moved down
        animate={ inView && { opacity: 1, y: 0 }} // Animate based on `inView`
        transition={ inView && { duration: 0.8, delay:0.1, ease: "easeOut" }} // Duration and easing for smooth transition
        className="absolute flex flex-col w-80 h-80 pb-16 z-10 bg-slate-200 shadow-lg shadow-indigo-900 bg-opacity-[0.35] rounded-lg"
        style={customShadow}
      >
        <div className="flex flex-col justify-center items-center mb-2 -mt-10">
          <Image 
            src={trackIcon} 
            alt={trackTitle} // Providing descriptive alt text
            width={500} 
            height={500}
            className="border-[3px] border-yellow-300 h-20 w-20 rounded-full"
          />
          <h3 className="text-xl font-bold text-blue-700 ml-2">{trackTitle}</h3>
        </div>
        <p className="text-sm px-6 text-white font-medium hyphens-auto text-justify" >
          {trackDesc}
        </p>
      </motion.div>
    </motion.div>
  );
}
