"use client";
import React from 'react';
import Image from 'next/image';
import StarsBackground from './StarsBackground';

const Sponsors = () => {
    const assessmentCriteria = [
        {
            src: "/images/sponsors/webgurukul.png",
            alt: "Quality of work submitted",
            width: "250"
        },
        {
            src: "/images/sponsors/cojag.png",
            alt: "Timeliness of submissions",
            width: "250"
        },
        {
            src: "/images/sponsors/Gfg+White.png",
            alt: "Participation in discussions",
            width: "250"
        },
        {
            src: "/images/sponsors/new-Mk.png",
            alt: "Innovation through imagination",
            width: "200"
        },
        {
            src: "/images/sponsors/unstop-logo.svg",
            alt: "Innovation through imagination",
            width: "250"
        },
        {
            src: "/images/sponsors/webgurukul.png",
            alt: "Quality of work submitted",
            width: "250"
        },
        {
            src: "/images/sponsors/cojag.png",
            alt: "Timeliness of submissions",
            width: "250"
        },
        {
            src: "/images/sponsors/Gfg+White.png",
            alt: "Participation in discussions",
            width: "250"
        },
        {
            src: "/images/sponsors/new-Mk.png",
            alt: "Innovation through imagination",
            width: "200"
        },
        {
            src: "/images/sponsors/unstop-logo.svg",
            alt: "Innovation through imagination",
            width: "250"
        },
        
    ];

    return (
        <StarsBackground>
            <div className='pt-64'>
                <h1 className='text-white text-center text-3xl md:text-5xl mb-10'>Sponsors</h1>
                <div className='relative overflow-hidden'>
                    <div className='flex animate-scroll'>
                        {/* Duplicate the content twice to ensure seamless looping */}
                        {assessmentCriteria.concat(assessmentCriteria).map((slide, i) => (
                            <div
                                key={i}
                                className='flex-shrink-0 flex justify-center items-center w-[250px] h-[250px] mx-[100px] md:w-[200px] rounded-lg'
                            >
                                <Image
                                    src={slide.src}
                                    alt={slide.alt}
                                    width={slide.width}
                                    height={250}
                                    className='rounded-lg'
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-scroll {
                        animation: scroll 30s linear infinite;
                        display: flex;
                        width: calc(450px * 8.9); /* 5 items, duplicated */
                    }
                `}</style>
            </div>
        </StarsBackground>
    );
};

export default Sponsors;
