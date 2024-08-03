import React from "react";
import Scene from "./components/Scene";

export default function Home() {
    return (
        <> 
            <div className="w-screen h-screen relative hidden md:block">
                <Scene />
            </div>
            <div className="w-screen h-screen md:hidden">
                <iframe src="/smackathon" className="w-full h-full border-0" />
            </div>
        </>
    );
}
