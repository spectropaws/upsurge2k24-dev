"use client";

import React from 'react';
import { Canvas} from '@react-three/fiber';
import Controller from './Controller';
import AnimatedCamera from './AnimatedCamera';
import CustomEnvironment from './CustomEnvironment';

export default function MainScene() {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }} pixelRatio={window.devicePixelRatio} gl={{ antialias: true, logarithmicDepthBuffer: true }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 30]} intensity={5} />
            <CustomEnvironment /> 
            <Controller/>
            <AnimatedCamera />
        </Canvas>
    );
}
