// UFOComponent.jsx

"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from './UFOComponent.module.css';
import EventCardMobile from "./EventCardMobile";
import events from "./eventlist";

const UFOComponent = ({ event, className, style }) => {
    const ufoRef = useRef(null);
    const cardRef = useRef(null);
    const beamRef = useRef(null);

    useEffect(() => {
        if (!beamRef.current) return;

        // Create the beam animation using GSAP and ScrollTrigger
        gsap.fromTo(beamRef.current,
            {
                y: -300, // Start position
            },
            {
                y: 0, // End position
                duration: 1, // Duration of the animation
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ufoRef.current,
                    start: "right center",
                    end: "right center",
                    scrub: false,
                }
            }
        );

        gsap.fromTo(cardRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1,
                delay: 0.7,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ufoRef.current,
                    start: "right right",
                    end: "right center",
                    scrub: false,
                }
            }
        );

    }, []);

    return (
        <div className={className} style={style}>
            <div className={styles.container}>
                <div className={styles.movingDiv}>
                    <div className={styles.ufo} ref={ufoRef} style={{ transform: "scale(0.3)" }}>
                        <div className={styles.ufoUnderside}></div>
                        <div className={styles.centerDot}></div>
                        <div className={styles.ufoTop}></div>
                    </div>
                    <div className={styles.beamContainer}>
                        <div ref={beamRef} className={styles.beam}></div>
                    </div>
                </div>
                <div ref={cardRef} className={styles.cardContainer}>
                    <EventCardMobile
                        title={event.title}
                        description={event.description}
                        image={event.image}
                    />
                </div>
            </div>
        </div>
    );
};

export default UFOComponent;
