"use client"

import React, { useState } from 'react';
import { Canvas} from '@react-three/fiber';
import Controller from './Controller';
import AnimatedCamera from './AnimatedCamera';
import CustomEnvironment from './CustomEnvironment';

export default function MainScene() {
    const [zoomed, setZoomed] = useState(false);

    const handleControllerClick = () => {
        setZoomed((zoomed) => !zoomed);
    };

    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 30]} intensity={5} />
            <CustomEnvironment /> 
            <Controller onClick={handleControllerClick} />
            <AnimatedCamera zoomed={zoomed} />
        </Canvas>
    );
}

// fixed issue: When clicked before the component remounts, the animation misbehaves.
// NOTE: issue still persists if click is spammed
// TODO fix this issue
