// Events.jsx

"use client";

import React, { useRef, useEffect } from "react";
import Image from 'next/image';
import gsap from "gsap";
import useHorizontalScroll from './HorizontalScroll';
import Spaceship from './Spaceship';
import StarsBackground from "@/app/components/StarsBackground";
import UFOComponent from "./UFOComponent";
import events from "./eventlist";


export default function Events() {

    const { containerRef, sectionsRef } = useHorizontalScroll();
    const spaceshipRef = useRef(null);
    const projectileRef = useRef(null);
    const bossRef = useRef(null);
    const meteorContainerRef = useRef(null);

    const projectileDistance = 400;
    const projectileDuration = 1;
    const projectileDelayBeforeDisappearing = 1;

    useEffect(() => {
        if (!spaceshipRef.current || !projectileRef.current || !bossRef.current) return;

        const projectile = projectileRef.current;
        const boss = bossRef.current;

        // Define the GSAP animation
        const timeline = gsap.timeline({ repeat: -1 });

        timeline
            .set(projectile, { xPercent: -50, yPercent: -50, opacity: 1, x: 0, y: 0 })
            .fromTo(projectile, { y: '20px' }, {
                duration: projectileDuration,
                y: '20px',
                x: projectileDistance, // Set the distance to move
                ease: "power2.out"
            })
            .to(boss, {
                duration: 0.1,
                rotation: 5,
                yoyo: true,
                repeat: 5,
                ease: "power2.inOut"
            }, 0.5)
            .to(projectile, {
                opacity: 0,
                duration: 0.1,
                delay: projectileDelayBeforeDisappearing // Delay before disappearing
            }, "<");

    }, [projectileDistance, projectileDuration, projectileDelayBeforeDisappearing]);

    useEffect(() => {
        const meteorContainer = meteorContainerRef.current;
        if (!meteorContainer) return;

        const createMeteor = () => {
            const meteor = document.createElement('img');
            meteor.src = '/svgs/home/events/asteroid.svg';
            meteor.style.position = 'absolute';
            meteor.style.width = '50px';
            meteor.style.height = '50px';
            meteor.style.opacity = '0.8';
            meteor.style.transform = `translate(${Math.random() * 100}vw, -100vh)`;
            meteorContainer.appendChild(meteor);

            gsap.to(meteor, {
                y: '100vh',
                duration: Math.random() * 3 + 2, // Random duration between 2 and 5 seconds
                ease: "power1.in",
                onComplete: () => meteor.remove() // Remove meteor after animation
            });
        };        // Create multiple meteors
        for (let i = 0; i < 20; i++) {
            createMeteor();
        }

        // Optionally, you could add a repeating interval for continuous meteor shower
        const intervalId = setInterval(() => {
            createMeteor();
        }, 500); // Create a new meteor every 500ms

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);

    }, []);


    function ScrollContainer({ children, className }) {
        return (
            <div className={`horizontal-scroll-container m-0 p-0 flex relative bg-black h-screen ${className}`} ref={containerRef}>
                {children}
            </div>
        );
    }

    function HorizontalSection({ children, className }) {
        return (
            <div ref={el => sectionsRef.current.push(el)} className={`horizontal-scroll-section m-0 p-0 flex-shrink-0 w-screen h-screen bg-black text-white overflow-y-hidden ${className}`}>
                <StarsBackground>
                    {children}
                </StarsBackground>
            </div>
        );
    }

    return (
        <div className="relative w-screen overflow-x-scroll no-scrollbar" >
            <ScrollContainer>
                <HorizontalSection className="relative">
                    <h1 className="text-center py-20">Events</h1>

                    <Image width={500} height={500} src="/images/home/events/red_planet-transparent.png" className='absolute bottom-0 left-1/4 translate-y-[50%]' alt="red planet" />
                    <UFOComponent event={events[0]} className="absolute top-[-80px] left-0" />
                    <UFOComponent event={events[1]} className="absolute top-[-20px] right-0 translate-x-[-50%]" />
                    <UFOComponent event={events[2]} className="absolute top-[60px] right-1/4 translate-x-[-50%]" />
                </HorizontalSection>

                <HorizontalSection className="relative">
                    <Image width={500} height={500} src="/images/home/events/blue_planet-transparent.png" className='absolute -top-[30%] left-1/2' alt="red planet" />
                    <UFOComponent event={events[3]} className="absolute top-[-100px] left-0" />
                    <UFOComponent event={events[4]} className="absolute top-[45px] left-1/4" />
                    <UFOComponent event={events[5]} className="absolute top-[45px] left-1/2 translate-x-[50%]" />
                </HorizontalSection>

                <HorizontalSection>
                    <div ref={meteorContainerRef}>
                        <Image width={100} height={100} src="/svgs/home/events/asteroid.svg" className="absolute top-1/2 left-1/4" alt="asteroid" />
                        <Image width={100} height={100} src="/svgs/home/events/asteroid.svg" className="absolute top-1/4 left-3/4 translate-x-[-100%]" alt="asteroid" />
                        <Image width={100} height={100} src="/svgs/home/events/asteroid.svg" className="absolute top-3/4 left-1/2" alt="asteroid" />
                        <UFOComponent event={events[6]} className="absolute top-[-100px] left-0" />
                        <UFOComponent event={events[7]} className="absolute top-[45px] left-1/4" />
                        <UFOComponent event={events[8]} className="absolute top-0 right-0 translate-x-[-50%]" />
                    </div>
                </HorizontalSection>

                <HorizontalSection className="relative overflow-hidden">
                    <div ref={projectileRef} className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-blue-600 w-10 h-2 rounded-full" style={{ boxShadow: "0 0 20px 0 #3B82F6" }} />
                    <Spaceship ref={spaceshipRef} className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />

                    <Image width={500} height={500} src="/svgs/home/events/boss.svg" className='absolute top-1/2 left-[100%] translate-y-[-50%] transform translate-x-[-100%]' alt="boss" ref={bossRef} />

                    <UFOComponent event={events[9]} className="absolute top-[-100px] left-0" />
                    <UFOComponent event={events[10]} className="absolute bottom-1/4 left-1/4" />
                </HorizontalSection>
            </ScrollContainer>
        </div >
    );
}
