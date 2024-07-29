"use client";

import Link from "next/link";
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('./components/Scene'), { ssr: false });

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
