"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./components/Scene"), { ssr: false });

export default function Home() {
  return (
    // <<<<<<< HEAD
    <>
      <Link href="/smackathon" className="text-blue-800 underline text-2xl">
        Smackathon page
      </Link>
      // =======
      {
        //<Link href="/smackathon" className="text-blue-800 underline text-2xl">Smackathon page</Link>
      }
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <Scene />
      </div>
    </>
    // >>>>>>> 7d66796b37375ae198e22e6c013d3fd76deccc41
  );
}
