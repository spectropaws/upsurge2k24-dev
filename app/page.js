"use client";

import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Function to check if the device is mobile
        const handleResize = () => {
            if (window.innerWidth <= 768) { // Define your mobile breakpoint
                setIsMobile(true);
                router.push('/home'); // Redirect to /home for mobile devices
            } else {
                setIsMobile(false);
            }
        };

        // Initial check
        handleResize();

        // Listen for resize events
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router]);

    if (isMobile) {
        return null; // Optionally, you could display a loading spinner or similar
    }

    return (
        <>
            <div className="w-screen h-screen relative hidden md:block">
                <Scene />
            </div>
        </>
    );
}
