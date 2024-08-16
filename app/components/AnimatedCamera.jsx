"use client";

import React, { useRef, useEffect, useState, useMemo, useCallback } from "react";
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { motion } from 'framer-motion-3d';
import { useAnimation } from "framer-motion";

export default function AnimatedCamera() {
    const groupRef = useRef();
    const invisibleObjectRef = useRef();
    const { camera } = useThree();
    const [isZoomed, setIsZoomed] = useState(false);
    const [prevRotationY, setPrevRotationY] = useState(Math.PI / 4);
    const [transitionComplete, setTransitionComplete] = useState(true);
    const [hasLerped, setHasLerped] = useState(false);

    const groupControls = useAnimation();
    const objectControls = useAnimation();

    const vector = useMemo(() => new Vector3(), []);

    const handleEscape = useCallback((e) => {
        if (e.key === "Escape") setIsZoomed(false);
    }, []);

    const handleMessage = useCallback((e) => {
        if (e.data === "screenClick") setIsZoomed(true);
        else if (e.data === "escapeZoom") setIsZoomed(false);
    }, []);

    const handleControllerClick = useCallback(() => {
        setIsZoomed((prevZoomed) => !prevZoomed);
    }, []);

    // set isZoomed state based on event listener
    useEffect(() => {
        window.addEventListener('controllerClick', handleControllerClick);
        window.addEventListener("keydown", handleEscape);
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('controllerClick', handleControllerClick);
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener('message', handleMessage);
        };
    }, [handleControllerClick, handleEscape, handleMessage]);

    // Zoom in or out based on state
    useEffect(() => {
        if (isZoomed) {
            setPrevRotationY(groupRef.current.rotation.y);
            groupControls.start({
                rotateY: 0,
                transition: { duration: 1, ease: 'easeInOut' }
            });
            objectControls.start({
                x: 0,
                y: 0,
                z: 19,
                transition: { duration: 1, ease: 'easeInOut' }
            });
            setTransitionComplete(false);
            setHasLerped(false);
        } else {
            objectControls.start({
                x: 0,
                y: 30,
                z: 70,
                transition: { duration: 1, ease: 'easeInOut' }
            });
            groupControls.start({
                rotateY: prevRotationY,
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                    onComplete: () => setHasLerped(true)
                }
            });
        }
    }, [isZoomed, groupControls, objectControls, prevRotationY]);

    // Lerp rotation
    useEffect(() => {
        if (hasLerped) {
            const duration = (((Math.PI / 4) - Math.abs(prevRotationY)) * 40) / Math.PI;
            groupControls.start({
                rotateY: (Math.abs(prevRotationY) / prevRotationY) * Math.PI / 4,
                transition: {
                    duration: duration, ease: 'easeInOut',
                    onComplete: () => {
                        setPrevRotationY(groupRef.current.rotation.y);
                        setTransitionComplete(true);
                        setHasLerped(false);
                    }
                },
            });
        }
    }, [hasLerped, prevRotationY, groupControls]);

    useEffect(() => {
        if (transitionComplete) {
            groupControls.start({
                rotateY: [prevRotationY, -(Math.abs(prevRotationY) / prevRotationY) * Math.PI / 4],
                transition: { duration: 20, ease: 'easeInOut', yoyo: true, repeat: Infinity, repeatType: 'reverse' }
            });
        }
    }, [transitionComplete, prevRotationY, groupControls]);

    useFrame(() => {
        if (invisibleObjectRef.current) {
            invisibleObjectRef.current.getWorldPosition(vector);
            camera.position.copy(vector);
            camera.lookAt(0, 0, 0);
        }
    });

    return (
        <motion.group ref={groupRef} animate={groupControls}>
            <motion.mesh
                ref={invisibleObjectRef}
                position={[50, 50, 100]}
                visible={false}
                animate={objectControls}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial transparent opacity={0} />
            </motion.mesh>
        </motion.group>
    );
}
