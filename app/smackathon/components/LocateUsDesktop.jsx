"use client"

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import generateStars, { starrySkyStyle } from './generateStars';
const GoogleMaps = dynamic(() => import('./GoogleMaps'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const LocateUs = () => {
    const earthRef = useRef(null);
    const circularDivRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: earthRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onEnter: () => {
                    gsap.to(earthRef.current, {
                        duration: 1,
                        rotation: 360,
                        x: '-20vw',
                        ease: 'power1.inOut',
                    });
                    gsap.set(circularDivRef.current, { display: 'block' });
                    gsap.to(circularDivRef.current, {
                        duration: 1,
                        x: '20vw',
                        top: 0,
                        scale: 1,
                        opacity: 1,
                        transitionDuration: '0.4s',
                        transition: '0.4s ease-in-out',
                        ease: 'power1.inOut',
                    }, 0);
                },
            },
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, []);

    return (
        <div style={starrySkyStyle} className="py-10">
            {generateStars(200)}
            <h1 className="text-center text-white text-5xl pt-10">Locate Us</h1>
            <div className="relative flex justify-center items-end mx-5 my-20 md:mx-10">
                <Image
                    width={500}
                    height={500}
                    ref={earthRef}
                    src="/images/locateus/pixel-earth-cropped.png"
                    alt="Earth"
                    className="w-[30rem] h-[30rem] transform origin-center"
                />
                <div
                    ref={circularDivRef}
                    className="-top-1/4 w-[30rem] h-[30rem] rounded-full absolute opacity-0 overflow-hidden transform-gpu transition-all duration:1000 ease-in-out hover:md:scale-150 hover:rounded-2xl"
                    style={{ display: 'none', transform: "scale(0.1)", transition: '0.8s ease-in-out' }}
                >
                    {/* Here you can later integrate Google Maps */}
                    <GoogleMaps />
                </div>
            </div>

            <div className="text-center text-white text-2xl pb-10 flex items-center justify-center">
                <span className="text-wrap">
                    <svg className="w-6 h-6 text-white mr-2 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                23rd August 2024, Seminar Hall, CSE building, YCCE campus</span>
            </div>

        </div>
    );
};

export default LocateUs;
