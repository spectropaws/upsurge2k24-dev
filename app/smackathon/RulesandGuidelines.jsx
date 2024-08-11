// PacmanGame.jsx
"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PacmanHeading from './components/PacmanHeading';

const RulesAndGuidelines = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after visibility is detected
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is visible
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const rules = [
        {
            content: "Team must consist of minimum 3 and a maximum of 5 members.",
            icon: "/images/pacman/blue.svg",
        },
        {
            content: "Team access pass will be distributed to the team upon registration, which will be used for further references.",
            icon: "/images/pacman/green.svg",
        },
        {
            content: "The ideas presented by the teams should be original and not protected by means of patents, copyrights, or technical publications by anyone.",
            icon: "/images/pacman/lemon.svg",
        },
        {
            content: "All official communication will be conducted through the Smackathon email (smackathon@upsurge2k24.tech). Participants must monitor all folders in their email account.",
            icon: "/images/pacman/pink.svg",
        },
        {
            content: "Registrations must be completed through the Upsurge 2k24 website by 21st August 2024 to secure a spot.",
            icon: "/images/pacman/red.svg",
        },
        {
            content: "No responsibility will be held by the Smackathon team for any late, loss, or mis-directed entries.",
            icon: "/images/pacman/skyBlue.svg",
        },
        {
            content: "Problem statements will be provided on the day the Hackathon starts.",
            icon: "/images/pacman/teal.svg",
        },
        {
            content: "The team must commit to the given Git repository every hour during the course of Hackathon.",
            icon: "/images/pacman/yellow.svg",
        },
        {
            content: "A minimum of 2 members must be present at the allotted table for the given team at all times during Smackathon.",
            icon: "/images/pacman/red.svg",
        },
        {
            content: "Participants must not engage in any malicious or harmful activities. Any damage to college property will lead to strict disciplinary action and disqualification.",
            icon: "/images/pacman/green.svg",
        },
        {
            content: "Meals and rest areas will be provided on site only if  food coupon and accomodation is opted for. Only 1 accomodation ticket will be provided for each team which will include 2 beds.",
            icon: "/images/pacman/blue.svg",
        },
        {
            content: "According to YCCE Policy, no female participants are allowed to stay overnight. After 8 pm, they must leave the campus but can rejoin at 6 am the next day. Those from outside Nagpur will stay at YCCE girls hostel, and the organizing team will manage their accomodation.",
            icon: "/images/pacman/teal.svg",
        },
        {
            content: "The rules and guidelines are subjected to change as per the Smackathon organising team.",
            icon: "/images/pacman/pink.svg",
        },
    ];

    return (
        <motion.div
            className='flex flex-col items-center bg-black pt-56 text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
            ref={ref}
        >
                <div className='flex justify-center mb-10 md:mb-16'><PacmanHeading></PacmanHeading></div>
            <div className='w-full md:block hidden mb-24'><Image src={"/images/pacman/downwalls.svg"} className='scale-y-[-1] scale-x-[-1] w-full' width={500} height={500}></Image></div>
            <div className='w-[90%]'>
                <h1 className='text-center text-3xl md:text-5xl mb-8 md:mb-16 mt-24 md:mt-0'>
                    Rules and Guidelines
                </h1>
                <motion.div
                    className='flex flex-col md:flex-row justify-center items-center'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 1.5 }} // Increased duration for rules and guidelines
                >

                    <motion.div
                        className='w-4/5 md:w-[30%]'
                        initial={{ x: -50, opacity: 0 }} // Start with opacity 0 and slide from the left
                        animate={{ x: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }} // Smooth fade-in and sliding effect
                    >
                        <img src="/images/pacman/pacmanGameplay.gif" className='w-full hidden md:block' alt="Pacman Gameplay" />
                    </motion.div>
                    <motion.div
                        className='w-full md:w-3/5 md:ps-12 mt-4 md:mt-0'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        transition={{ duration: 2 }} // Increased duration for rules and guidelines
                    >
                        <div className='px-5 md:ps-7 leading-6'>
                            {
                                rules.map((rule, idx) => {
                                    return (
                                        <motion.div
                                            key={idx}
                                            className='flex items-start my-5 text-justify'
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                                            transition={{ duration: 0.5, delay: idx * 0.15 }} // Adjusted timing
                                        >
                                            <Image src={rule.icon} className='w-5 h-5 mr-4' width={20} height={20} alt="Rule Icon" />
                                            <p>{rule.content}</p>
                                        </motion.div>
                                    );
                                })}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default RulesAndGuidelines;
