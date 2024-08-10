"use client";

import ScreenEventEmitter from "@/app/components/ScreenEventEmitter";
import Events from "./components/events/Events";



export default function Home() {
    return (
        <ScreenEventEmitter>
            <div className="w-screen h-screen"><h1>Coming soon...</h1></div>

            <Events />

            < div className="h-screen text-black flex items-center justify-center" >
                <h1>Next Section Content Here</h1>
            </div >
        </ScreenEventEmitter>
    );
}
