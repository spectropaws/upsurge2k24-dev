"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Sponsors = () => {
    const [index, setIndex] = useState(0);
    const assessmentCriteria = [
        {
            src: "/images/sponsors/webgurukul.png",
            alt: "Quality of work submitted",
            height:"",
            width:"250"
        },
        {
            src: "/images/sponsors/cojag.png",
            alt: "Timeliness of submissions",
            height:"",
            width:"250"
        },
        {
            src: "/images/sponsors/Gfg+White.png",
            alt: "Participation in discussions",
            height:"",
            width:"250"
        },
        {
            src: "/images/sponsors/new-Mk.png",
            alt: "Innovation through imagination",
            height:"",
            width:"200"
        },
        {
            src: "/images/sponsors/unstop-logo.svg",
            alt: "Innovation through imagination",
            height:"",
            width:"250"
        },
    ];

    useEffect(() => {
        const changeSlide = () => {
            setIndex((prevIndex) => (prevIndex + 1) % assessmentCriteria.length);
        };

        const interval = setInterval(changeSlide, 3000); // Change slide every 3 seconds

        return () => {
            clearInterval(interval);
        };
    }, [assessmentCriteria.length]);

    const getSlideClass = (i) => {
        if (i === index) {
            return 'scale-125 opacity-100 z-10'; // Center slide: larger and fully visible
        }
        if (i === (index - 1 + assessmentCriteria.length) % assessmentCriteria.length) {
            return 'translate-x-[-200%] scale-75 opacity-30'; // Left slide: smaller and partially visible
        }
        if (i === (index + 1) % assessmentCriteria.length) {
            return 'translate-x-[200%] scale-75 opacity-30'; // Right slide: smaller and partially visible
        }
        return 'hidden'; // Hidden slide
    };

    return (
        <div className='bg-black pt-64'>
            <h1 className='text-white text-center text-3xl md:text-5xl'>Sponsors</h1>
            <div className='relative h-[350px] mx-auto overflow-hidden shadow-lg flex justify-center items-center '>
                {assessmentCriteria.map((slide, i) => (
                    <div
                        key={i}
                        className={`absolute flex flex-col justify-center items-center text-center transition-transform duration-500 w-[200px] ease-in-out ${getSlideClass(i)}`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={500}
                            height={500}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;
