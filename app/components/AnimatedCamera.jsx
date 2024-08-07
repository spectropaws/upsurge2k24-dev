"use client";

import React, { useRef, useEffect, useState } from "react";
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { motion } from 'framer-motion-3d';
import { useAnimation } from "framer-motion";
import { cameraConf } from "./three-config"; 

export default function AnimatedCamera() {
    // config
    const fakeObjAnimation = cameraConf.fakeObj.animation;

    const groupRef = useRef();
    const invisibleObjectRef = useRef();
    const { camera } = useThree();
    const [isZoomed, setIsZoomed] = useState(false);
    const [prevRotationY, setPrevRotationY] = useState(fakeObjAnimation.INITIAL_ROTATION);
    const [transitionComplete, setTransitionComplete] = useState(true);
    const [hasLerped, setHasLerped] = useState(false);

    const groupControls = useAnimation();
    const objectControls = useAnimation();


    // set isZoomed state based on event listener
    useEffect(() => {
        const handleEscape = ((e) => {
            if (e.key == "Escape")
                setIsZoomed((prevState) => prevState & false)
        });

        const handleControllerClick = () => {
            setIsZoomed((prevZoomed) => !prevZoomed);
        };

        window.addEventListener('controllerClick', handleControllerClick);
        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener('controllerClick', handleControllerClick);
            window.removeEventListener("keydown", handleEscape);
        };
    }, []);

    // Zoom in or out based on state
    useEffect(() => {
        if (isZoomed) {
            setPrevRotationY(groupRef.current.rotation.y);
            groupControls.start({
                rotateY: 0,
                transition: { duration: fakeObjAnimation.ZOOM_DURATION, ease: 'easeInOut' }
            });
            objectControls.start({
                x: fakeObjAnimation.TARGET_POSITION.X,
                y: fakeObjAnimation.TARGET_POSITION.Y,
                z: fakeObjAnimation.TARGET_POSITION.Z,
                transition: { duration: fakeObjAnimation.ZOOM_DURATION, ease: 'easeInOut' }
            });
            setTransitionComplete(false);
            setHasLerped(false);
        } else { 
            objectControls.start({
                x: fakeObjAnimation.INITIAL_POSITION.X,
                y: fakeObjAnimation.INITIAL_POSITION.Y,
                z: fakeObjAnimation.INITIAL_POSITION.Z,
                transition: { duration: fakeObjAnimation.ZOOM_DURATION, ease: 'easeInOut' }
            });
            groupControls.start({
                rotateY: prevRotationY,
                transition: {
                    duration: fakeObjAnimation.ZOOM_DURATION,
                    ease: 'easeInOut',
                    onComplete: () => setHasLerped(true)
                }
            });
        }
    }, [isZoomed, groupControls, objectControls, prevRotationY, fakeObjAnimation.ZOOM_DURATION, fakeObjAnimation.INITIAL_POSITION.X, fakeObjAnimation.INITIAL_POSITION.Y, fakeObjAnimation.INITIAL_POSITION.Z, fakeObjAnimation.TARGET_POSITION.X, fakeObjAnimation.TARGET_POSITION.Y, fakeObjAnimation.TARGET_POSITION.Z]);

    // Lerp rotation
    useEffect(() => {
        if (hasLerped) {
            const duration = ((fakeObjAnimation.INITIAL_ROTATION - Math.abs(prevRotationY)) * fakeObjAnimation.OSCILLATION_DURATION) / (2 * fakeObjAnimation.INITIAL_ROTATION);
            groupControls.start({
                rotateY: (Math.abs(prevRotationY) / prevRotationY) * fakeObjAnimation.INITIAL_ROTATION,
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
    }, [hasLerped, prevRotationY, groupControls, fakeObjAnimation.INITIAL_ROTATION, fakeObjAnimation.OSCILLATION_DURATION]);


    useEffect(() => {
        if (transitionComplete) {
            groupControls.start({
                rotateY: [prevRotationY, -(Math.abs(prevRotationY) / prevRotationY) * fakeObjAnimation.INITIAL_ROTATION],
                transition: { duration: fakeObjAnimation.OSCILLATION_DURATION, ease: 'easeInOut', yoyo: true, repeat: Infinity, repeatType: 'reverse' }
            });
        }
    }, [transitionComplete, prevRotationY, groupControls, fakeObjAnimation.INITIAL_ROTATION, fakeObjAnimation.OSCILLATION_DURATION]);

    useFrame(() => {
        if (invisibleObjectRef.current) {
            const worldPosition = new Vector3();
            invisibleObjectRef.current.getWorldPosition(worldPosition);
            camera.position.copy(worldPosition);
            camera.lookAt(0, 0, 0);
        }
    });

    return (
        <motion.group ref={groupRef} animate={groupControls}>
            <motion.mesh
                ref={invisibleObjectRef}
                position={cameraConf.fakeObj.POSITION}
                visible={false}
                animate={objectControls}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial transparent opacity={0} />
            </motion.mesh>
        </motion.group>
    );
}
