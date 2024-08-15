"use client";

import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";
import Hero from "./components/Hero";
import Events from "./components/events/Events";
import EventsMobile from "./components/events/EventsMobile";
import Sponsors from "./components/Sponsors";


export default function Home() {
    return (
        <ScreenEventEmitter>
            <div className="w-screen h-screen">
                <Hero />
            </div>
           
            <Sponsors />
            <div className="w-full h-full hidden md:block">
                <Events />
            </div>
            <div className="w-full h-full block md:hidden">
                <EventsMobile />
            </div>

            < div className="h-screen text-black flex items-center justify-center" >
                <h1>Next Section Content Here</h1>
            </div >
        </ScreenEventEmitter>
    );
}
