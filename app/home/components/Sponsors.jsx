"use client";
import React from 'react';
import Image from 'next/image';
import StarsBackground from './StarsBackground';
import { motion } from 'framer-motion';

const Sponsors = () => {
    const sponsorData = [
        {
            src: "/images/sponsors/gitConsultancy.png",
            alt: "Git Consultancy",
            width: "200"
        },
        {
            src: "/images/sponsors/cojag.png",
            alt: "cojag",
            width: "220"
        },
        {
            src: "/images/sponsors/new-Mk.png",
            alt: "MK",
            width: "150"
        },
        {
            src: "/images/sponsors/unstop-logo.svg",
            alt: "unstop",
            width: "200"
        },
        {
            src: "/images/sponsors/DBMart.png",
            alt: "DB Mart",
            width: "180"
        },
        {
            src: "/images/sponsors/times.png",
            alt: "TIMES",
            width: "180"
        },
        {
            src: "/images/sponsors/brLifeStyle.png",
            alt: "BR Life Styles",
            width: "180"
        },
        {
            src: "/images/sponsors/dahiya.png",
            alt: "Dahiya Momos",
            width: "180"
        },
        {
            src: "/images/sponsors/travosa.png",
            alt: "Travosa",
            width: "200"
        },
    ];

    return (
        <StarsBackground>
            <div className="relative h-[100vh] pb-48">
                {/* Large Planet Image */}
                <div
                    className=" hidden md:block absolute -top-[190px] -left-[150px] w-[380px] h-[380px] -z-10"
                >
                    <Image
                        src="/images/sponsors/bluePlanet.png"
                        alt="Large Planet"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div
                    className="absolute -top-40 md:-top-10 right-[200px] h-32 w-32 md:w-56 md:h-56 -z-10"
                >
                    <Image
                        src="/images/sponsors/planet3.png"
                        alt="Large Planet"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* Glowing Enemy with Bounce Animation */}
                <motion.div
                    className="absolute right-[10%] top-[7%] w-[70px] h-[70px] md:top-[80px] md:left-[8%] md:w-[120px] md:h-[120px] -z-10"
                    animate={{
                        y: [0, '-7.5%', 0], // Move up and back down
                    }}
                    transition={{
                        duration: 1.5, // Duration of one bounce cycle
                        repeat: Infinity, // Repeat infinitely
                        repeatType: "loop", // Loop the animation
                        ease: "easeInOut", // Smooth transition
                    }}
                >
                    <Image
                        src="/images/sponsors/glowingEnemy.png"
                        alt="Glowing Enemy"
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>

                {/* Sponsors content */}
                <div className="relative z-10 h-full">
                    <h1 className="text-white text-center text-3xl md:text-5xl md:mb-10 mt-48">Sponsors</h1>
                    <div className='flex h-full justify-center items-center'>
                        <div className="relative w-[90%] overflow-hidden">
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: '0',
                                    backgroundImage: 'linear-gradient(to right, #090A0F, white, #090A0F)',
                                    opacity: '0',
                                    borderRadius: '0'
                                }}
                            ></div>
                            <motion.div
                                className="flex pt-40"
                                animate={{
                                    x: ["0%", "-100%"], // Scroll left and loop back
                                }}
                                transition={{
                                    duration: 30,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{
                                    display: "flex",
                                    width: `calc(390px * 8.9)`,
                                }}
                            >
                                {sponsorData.concat(sponsorData).map((slide, i) => (
                                    <div
                                        key={i}
                                        className="flex-shrink-0 flex justify-center items-center bg-white w-[250px] h-[250px] mx-[70px] rounded-xl relative"
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            width={slide.width}
                                            height={250}
                                            className="rounded-lg"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </StarsBackground>
    );
};

export default Sponsors;
