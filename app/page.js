import Link from "next/link";
import React from "react";
import Scene from "./components/Scene";

export default function Home() {
    return (
        <>
            { //<Link href="/smackathon" className="text-blue-800 underline text-2xl">Smackathon page</Link> 
            }
            <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
                <Scene />
            </div>
        </>
    );
}
