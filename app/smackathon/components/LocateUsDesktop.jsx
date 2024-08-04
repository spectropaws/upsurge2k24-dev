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
                    className="w-96 h-96 transform origin-center"
                />
                <div
                    ref={circularDivRef}
                    className="-top-1/4 w-96 h-96 rounded-full absolute opacity-0 overflow-hidden transform-gpu transition-all duration:1000 ease-in-out hover:scale-150 hover:rounded-2xl"
                    style={{ display: 'none', transform: "scale(0.1)", transition: '0.8s ease-in-out' }}
                >
                    {/* Here you can later integrate Google Maps */}
                    <GoogleMaps />
                </div>
            </div>
        </div>
    );
};

export default LocateUs;
