"use client";

import React, { useEffect } from "react";
import useHorizontalScroll from './HorizontalScroll';
import Spaceship from './Spaceship';
import { generateStars } from "./generateStars";
import StarsBackground from "../StarsBackground";


export default function Events() {

    const { containerRef, sectionsRef } = useHorizontalScroll();

    function ScrollContainer({ children, className }) {
        return (
            <div className={`horizontal-scroll-container m-0 p-0 flex relative bg-black ${className}`} ref={containerRef}>
                {children}
            </div>
        );
    }

    function HorizontalSection({ children, className }) {
        return (
            <div ref={el => sectionsRef.current.push(el)} className={`horizontal-scroll-section m-0 p-0 flex-shrink-0 w-screen h-screen bg-black text-white ${className}`}>
                {children}
            </div>
        );
    }

    useEffect(() => {
        if (sectionsRef.current) {
            generateStars(sectionsRef.current[0], 300, 100);
        }
    }, [sectionsRef]);

    return (
        <div className="relative" >
            <ScrollContainer>
                <HorizontalSection>
                    <StarsBackground>
                        <Spaceship />
                    </StarsBackground>
                </HorizontalSection>

                <HorizontalSection>
                    <StarsBackground>
                        <h1>Event 2</h1>
                    </StarsBackground>
                </HorizontalSection>

                <HorizontalSection className="-ml-[1px]">
                    <StarsBackground>
                        <h1>Event 3</h1>
                    </StarsBackground>
                </HorizontalSection>
            </ScrollContainer >
        </div >
    );
}
