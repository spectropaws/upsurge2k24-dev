"use client";

import React, { useEffect, useCallback } from "react";

const ScreenEventEmitter = ({ children }) => {
    const handleScreenClick = useCallback((e) => {
        e.stopPropagation();
        window.parent.postMessage('screenClick', '*');
    }, []);

    const handleKeyDown = useCallback((e) => {
        e.stopPropagation();
        if (e.key === "Escape") {
            window.parent.postMessage("escapeZoom", '*');
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("click", handleScreenClick);
            window.addEventListener("keydown", handleKeyDown);

            return () => {
                window.removeEventListener("click", handleScreenClick);
                window.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [handleScreenClick, handleKeyDown]);

    return <div className="w-full h-full m-0 p-0">{children}</div>
}

export default ScreenEventEmitter;
