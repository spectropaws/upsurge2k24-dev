"use client";

import Navbar from "./Navbar";

export default function MainContainer({ children }) {
    return <div>
        <Navbar />
        {children}
    </div>;
}
