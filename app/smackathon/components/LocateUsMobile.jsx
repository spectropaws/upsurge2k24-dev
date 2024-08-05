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
                width: "24rem",
                height: "24rem",
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
                width: "24rem",
                height: "24rem",
                transition: { duration: 1, ease: 'easeInOut' }
            });
        }
    }, [circularDivControls, inViewCircularDiv]);

    return (
        <div style={starrySkyStyle} className="h-screen pb-10">
            {generateStars(200)}
            <h1 className="text-center text-white text-5xl">Locate Us</h1>
            <div className="relative flex justify-center items-end mx-5 my-20 md:mx-10">
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

            <div className="text-center text-white text-2xl pb-10 flex items-center justify-center">
                <span className="text-wrap">
                    <svg className="w-6 h-6 text-white mr-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    23rd August 2024, Seminar Hall, CSE building, YCCE campus
                </span>
            </div>
        </div>
    );
};

export default LocateUs;
