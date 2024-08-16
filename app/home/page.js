"use client";

import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";
import Hero from "./components/Hero";
import Events from "./components/events/Events";
import EventsMobile from "./components/events/EventsMobile";
import Smackathon from "./components/smackathon/Smackathon";
import Sponsors from "./components/Sponsors";
import Schedule from "./components/Schedule";
import MainContainer from "../components/MainContainer";

export default function Home() {
    return (
        <MainContainer>
            <ScreenEventEmitter>
                <div className="bg-black">
                    <div className="w-screen h-screen">
                        <Hero />
                    </div>
                    <Smackathon />
                    <Sponsors />
                    <div className="w-full h-full hidden md:block">
                        <Events />
                    </div>
                    <div className="w-full h-full block md:hidden">
                        <EventsMobile />
                    </div>

                    <Schedule />

                </div>
            </ScreenEventEmitter>
        </MainContainer>
    );
}
