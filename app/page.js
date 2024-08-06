import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

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
