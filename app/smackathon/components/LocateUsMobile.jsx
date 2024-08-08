"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

import generateStars, { starrySkyStyle } from './generateStars';
const GoogleMaps = dynamic(() => import('./GoogleMaps'), { ssr: false });

const LocateUs = () => {
    const earthControls = useAnimation();
    const circularDivControls = useAnimation();
    const [earthRef, inViewEarth] = useInView({ triggerOnce: true, threshold: 0.5 });
    const [circularDivRef, inViewCircularDiv] = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inViewEarth) {
            earthControls.start({
                rotate: 360,
                width: "20rem",
                height: "20rem",
                opacity: 0,
                transition: { duration: 2, ease: 'easeInOut' }
            });
        }
    }, [earthControls, inViewEarth]);

    useEffect(() => {
        if (inViewCircularDiv) {
            circularDivControls.start({
                opacity: 1,
                scale: 1,
                width: "20rem",
                height: "20rem",
                transition: { duration: 1, ease: 'easeInOut' }
            });
        }
    }, [circularDivControls, inViewCircularDiv]);

    return (
        <div style={starrySkyStyle} className="py-10 pb-20">
            {generateStars(70)}
            <h1 className="text-center text-white text-5xl py-10">Locate Us</h1>
            <div className="relative flex justify-center items-start mx-5 my-20 md:mx-10">
                <motion.img
                    width={500}
                    height={500}
                    ref={earthRef}
                    src="/images/locateus/pixel-earth-cropped.png"
                    alt="Earth"
                    className="w-24 h-24 transform origin-center"
                    initial={{ rotate: 0, width: "10rem", height: "10rem", opacity: 1 }}
                    animate={earthControls}
                />
                <motion.div
                    ref={circularDivRef}
                    className="w-16 h-16 rounded-full absolute overflow-hidden transition-transform duration-1000 ease-in-out transform hover:md:scale-150 hover:rounded-2xl"
                    initial={{ opacity: 0, scale: 0.1, width: "16rem", height: "16rem" }}
                    animate={circularDivControls}
                >
                    <GoogleMaps />
                </motion.div>
            </div>

            <div className="text-center text-white text-2xl py-10 flex items-center justify-center">
                <Image width={10} height={10} src="svgs/locateus/pixel-pin.svg" alt="pin" className="w-12 h-12 mr-2 inline" />
                <p style={{ textShadow: "0 0 10px white" }} className='inline font-semibold'>23rd August 2024, Seminar Hall, CSE building, YCCE campus</p>
            </div>
        </div>
    );
};

export default LocateUs;
