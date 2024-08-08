"use client";

import React, { useEffect } from "react";

const handleScreenClick = (e) => {
    e.stopPropagation();
    window.parent.postMessage('screenClick', '*');
};

const handleKeyDown = (e) => {
    e.stopPropagation();
    if (e.key == "Escape") {
        window.parent.postMessage("escapeZoom", '*');
    }
}

export default function ScreenEventEmitter({ children }) {
    useEffect(() => {
        // Check if the window object is available
        if (typeof window !== 'undefined') {
            // Add event listeners
            window.addEventListener("click", handleScreenClick);
            window.addEventListener("keydown", handleKeyDown);
            
            // Clean up the event listeners on component unmount
            return () => {
                window.removeEventListener("click", handleScreenClick);
                window.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, []);

    return <div className="w-full h-full m-0 p-0">{children}</div>
}
