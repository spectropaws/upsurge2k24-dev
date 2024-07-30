"use client"

import React, { useState } from 'react';
import { Canvas} from '@react-three/fiber';
import Controller from './Controller';
import AnimatedCamera from './AnimatedCamera';
import CustomEnvironment from './CustomEnvironment';

export default function MainScene() {
    const [zoomed, setZoomed] = useState(false);

    const handleControllerClick = () => {
        setZoomed(true);
    };

    const handlePointerMissed = () => {
        setZoomed(false);
    };

    return (
        <Canvas style={{ height: '100vh', width: '100vw' }} onPointerMissed={handlePointerMissed}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 30]} intensity={5} />
            <CustomEnvironment /> 
            <Controller onClick={handleControllerClick} />
            <AnimatedCamera zoomed={zoomed} />
        </Canvas>
    );
}

// Known issue: When clicked before the component remounts, the animation misbehaves.
// TODO fix this issue
