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
                        duration: 2,
                        rotation: 360,
                        width: "24rem",
                        height: "24rem",
                        opacity: 0,
                        ease: 'power1.inOut',
                    });
                    gsap.set(circularDivRef.current, { display: 'block', autoAlpha: 0 });
                    gsap.to(circularDivRef.current, {
                        duration: 2,
                        width: "24rem",
                        height: "24rem",
                        autoAlpha: 1,
                        ease: 'power1.inOut',
                    });
                },
            },
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
        };
    }, []);

    return (
        <div style={starrySkyStyle} className="h-screen py-10">
            {generateStars(200)}
            <h1 className="text-center text-white text-5xl">Locate Us</h1>
            <div className="relative flex justify-center items-end mx-5 my-32 md:mx-10">
                <Image
                    width={500}
                    height={500}
                    ref={earthRef}
                    src="/images/locateus/pixel-earth-cropped.png"
                    alt="Earth"
                    className="w-24 h-24 transform origin-center"
                />
                <div
                    ref={circularDivRef}
                    className="w-16 h-16 rounded-full absolute opacity-0 overflow-hidden transition-transform duration-500 ease-in-out transform hover:md:scale-150 hover:rounded-2xl"
                    style={{ display: 'none' }}
                >
                    {/* Here you can later integrate Google Maps */}
                    <GoogleMaps />
                </div>
            </div>
        </div>
    );
};

export default LocateUs;
