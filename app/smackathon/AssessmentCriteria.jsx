"use client"
import React, { useState, useEffect } from 'react';
import styles from './components/AssessmentCriteria.module.css';
import Image from 'next/image';

const AssessmentCriteria = () => {
    const [index, setIndex] = useState(0);
    const assessmentCriteria = [
        {
            src: "/images/pacman/quality.svg",
            alt: "Quality of work submitted",
            text: "Quality of work submitted",
        },
        {
            src: "/images/pacman/timeManagement.svg",
            alt: "Timeliness of submissions",
            text: "Timeliness of submissions",
        },
        {
            src: "/images/pacman/participation.svg",
            alt: "Participation in discussions",
            text: "Participation in discussions",
        },
        {
            src: "/images/pacman/innovation.svg",
            alt: "Innovation through imagination",
            text: "Innovation through imagination",
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
            return styles.centerSlide;
        }
        if (i === (index - 1 + assessmentCriteria.length) % assessmentCriteria.length) {
            return styles.leftSlide;
        }
        if (i === (index + 1) % assessmentCriteria.length) {
            return styles.rightSlide;
        }
        return styles.hiddenSlide;
    };

    return (<>
        <div className='bg-black pt-64'>
            <h1 className=' text-white text-center text-3xl md:text-5xl mb-12'>Assessment Criteria</h1>
            <div className={`relative w-[80%] h-[350px]  mx-auto overflow-hidden shadow-lg flex justify-center items-center ${styles.sliderContainer}`}>
                {assessmentCriteria.map((slide, i) => (
                    <div
                        key={i}
                        className={`text-center absolute ${getSlideClass(i)} ${styles.slide} flex flex-col justify-center items-center`}
                        aria-label={`Slide ${i + 1}: ${slide.text}`}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            className={`w-[200px] h-[200px] rounded-full ${styles.circularImage}`}
                        />
                        <p className={`text-lg font-semibold mt-4 text-white ${styles.text}`}>{slide.text}</p>
                    </div>
                ))}
                <div className="text-center absolute bottom-1 w-full">
                    {assessmentCriteria.map((_, i) => (
                        <h3
                            key={i}
                            className={`inline-block bg-gray-400 p-1 rounded-full m-1 cursor-pointer ${index === i ? 'bg-white' : ''}`}
                            onClick={() => setIndex(i)}
                            aria-label={`Slide ${i + 1}`}
                        ></h3>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

export default AssessmentCriteria;
