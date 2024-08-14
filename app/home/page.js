"use client";

import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";
import Hero from "./components/hero/Hero";
import Events from "./components/events/Events";
import Sponsors from "./components/Sponsors";
import EventsMobile from "./components/events/EventsMobile";


export default function Home() {
    return (
        <ScreenEventEmitter>
            <div className="w-screen h-screen">
                <Hero />
            </div>

            <Events />
            <Sponsors></Sponsors>
            <EventsMobile></EventsMobile>
            < div className="h-screen text-black flex items-center justify-center" >
                <h1>Next Section Content Here</h1>
            </div >
        </ScreenEventEmitter>
    );
}
