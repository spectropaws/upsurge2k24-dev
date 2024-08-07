"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

import generateStars, { starrySkyStyle } from './generateStars';
const GoogleMaps = dynamic(() => import('./GoogleMaps'), { ssr: false });

const LocateUs = () => {
    const earthRef = useRef(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start({
                rotate: 360,
                x: '-25vw',
                transition: { duration: 1, ease: 'easeInOut' },
            });
            controls.start("visible");
        }
    }, [controls, inView]);

    const circularDivVariants = {
        hidden: { opacity: 0, scale: 0.1, x: 0 },
        visible: {
            display: 'block',
            opacity: 1,
            scale: 1,
            x: '25vw',
            transition: { duration: 1, ease: 'easeInOut' }
        }
    };

    return (
        <div style={starrySkyStyle} className="py-24">
            {generateStars(70)}
            <h1 className="text-center text-white text-5xl py-10">Locate Us</h1>
            <div className="relative flex justify-center items-end mx-5 my-20 md:mx-10">
                <motion.img
                    width={500}
                    height={500}
                    ref={earthRef}
                    src="/images/locateus/pixel-earth-cropped.png"
                    alt="Earth"
                    className="w-[30rem] h-[30rem] transform origin-center"
                    initial={{ rotate: 0, x: 0 }}
                    animate={controls}
                />
                <motion.div
                    ref={ref}
                    className="w-[30rem] h-[30rem] rounded-full absolute opacity-0 overflow-hidden transform-gpu transition-all duration:1000 ease-in-out hover:md:scale-150 hover:rounded-2xl"
                    variants={circularDivVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <GoogleMaps />
                </motion.div>
            </div>

            <div className="text-center text-white text-2xl py-10 flex items-center justify-center">
                <span className="text-wrap">
                    <svg className="w-8 h-8 text-red-600 mr-2 inline font-pressStart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    23rd August 2024, Seminar Hall, CSE building, YCCE campus
                </span>
            </div>
        </div>
    );
};

export default LocateUs;
