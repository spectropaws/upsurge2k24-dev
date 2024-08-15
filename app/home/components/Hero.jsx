import StarsBackground from "@/app/components/StarsBackground";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function Hero() {
    const rocketRef = useRef(null);
    const enemiesRef = useRef(null);
    const projectileRef = useRef(null);
    const blastRef = useRef(null);
    const smokeRef = useRef(null);
    const divRef = useRef(null);
    const presentsRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        gsap.set(containerRef.current, { opacity: 0 });

        // Make container visible and start animations
        tl.to(containerRef.current, { opacity: 1, duration: 0.1 });

        // Rocket coming from bottom
        tl.fromTo(
            rocketRef.current,
            { y: '100vh', opacity: 1 },
            { y: '-40vh', duration: 2, ease: 'power1.inOut' },
            0
        )
            .set(projectileRef.current, { opacity: 0 }, 0);

        // Enemies coming from top
        tl.fromTo(
            enemiesRef.current,
            { y: '-10vh', opacity: 1 },
            { y: '0vh', duration: 3, ease: 'power1.inOut' },
            0 // Start at the same time as rocket animation
        );

        // Delayed appearance of the projectile
        tl.to(projectileRef.current, { opacity: 1, duration: 0.1 }, 4) // Starts 1 second after enemies animation ends

        // Blue projectile animation (long and thin, slow movement)
        tl.fromTo(
            projectileRef.current,
            { x: '25px', y: '20vh', opacity: 1, scaleX: 1 }, // Long and thin shape
            { x: '0', y: '50vh', duration: 1, ease: 'power1.inOut', scaleX: 1 }, // Slow motion
            4 // Start after rocket and enemies animations are underway
        );

        // Projectile hits the rocket
        tl.to(
            projectileRef.current,
            { opacity: 0, duration: 0.1 },
            4.8
        )
            .to(
                rocketRef.current,
                { opacity: 0, duration: 0.1 },
                4.8
            )
            .to(enemiesRef.current, { opacity: 0, duration: 1 }, 4.8)
            .to(projectileRef.current, { opacity: 0, duration: 0.1 }, 4.8)

            .set(blastRef.current, { opacity: 1 }, 4.8)
            .to(blastRef.current, { opacity: 0, duration: 1 });

        // smoke animation
        tl.set(smokeRef.current, { opacity: 0, scale: 0.5 }, 0)
            .to(smokeRef.current, { opacity: 1, scale: 2, rotateZ: '180deg', duration: 3, ease: 'power1.in' }, 4)
            .to(smokeRef.current, { opacity: 0, rotateZ: '360deg', duration: 5 });

        // Final div slam from z-axis (scaling effect)
        tl.fromTo(
            divRef.current,
            { scale: 2, opacity: 0 }, // Start big
            { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out' }, 6
        )
            .to(
                divRef.current,
                { x: '-10px', yoyo: true, repeat: 5, duration: 0.1 }, 6.5
            )
            .to(
                divRef.current,
                { x: '0', duration: 0.1 }, 6.6
            );

        tl.to(presentsRef.current, { opacity: 1, duration: 1 }, 7.5);

    }, []);
    return (
        <StarsBackground>
            <div ref={containerRef} className="w-full h-full flex items-center justify-center relative opacity-0">
                <div ref={rocketRef} className={`absolute bottom-0 z-10 w-[100px] h-[100px]`}>
                    <Image src="/images/home/hero/rocket.svg" alt="Rocket" width={100} height={100} objectFit="contain" />
                </div>
                <div ref={enemiesRef} className={`absolute top-0 z-10`}>
                    <Image src="/images/home/hero/enemies.png" alt="Enemies" width={500} height={100} className="h-[20vh] w-full md:h-full" objectFit="cover" />
                </div>
                <div ref={projectileRef} className={`absolute top-0 opacity-0 left-1/2 transform -translate-x-1/2`}
                style={{ boxShadow: "0 0 20px 0 #3B82F6" }}
                >
                    <div className="w-1 h-8 bg-blue-500"></div>
                </div>
                <div ref={blastRef} className={`absolute opacity-0 w-[200px] h-[200px]`}>
                    <Image src="/images/home/hero/blast.gif" alt="Blast" layout="fill" objectFit="contain" />
                </div>
                <div ref={smokeRef} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] opacity-0`}>
                    <Image src="/images/home/hero/smoke.png" alt="Smoke" layout="fill" className="w-full h-full" objectFit="contain" />
                </div>

                <div ref={divRef} className={`w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}>

                <div ref={presentsRef} className="text-white z-10 flex flex-col items-center absolute -top-[4rem] md:-top-[2rem] left-1/2 transform -translate-x-1/2 opacity-0">
                    <h3 className="inline text-3xl md:text-5xl">YCCE Techfest</h3>
                    <h3 className="inline">Presents</h3>
                </div>

                    <Image width={500} height={500} className="w-full h-full relative" src="/images/upsurge_logo_transparent.png" alt="Logo" />
                </div>
            </div>
        </StarsBackground>
    );
}
