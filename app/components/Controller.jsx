"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { useLoader } from '@react-three/fiber';
import ControllerScreen from './ControllerScreen';
import { Html, Text } from '@react-three/drei';
import Arrow from './Arrow';

export default function Controller() {
    const meshRef = useRef();
    const [interacted, setInteracted] = useState(false);
    const [font, setFont] = useState(null);

    // Load font using useMemo
    useMemo(() => {
        const loader = new FontLoader();
        loader.load('/fonts/Orbitron_Bold.json', (loadedFont) => {
            setFont(loadedFont);
        }, undefined, (error) => {
            console.error('Error loading font:', error);
        });
    }, []);

    // Load model using useEffect
    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/models/controller.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(21.5, 20, 20);
            model.rotation.set(0.01, Math.PI, Math.PI);
            meshRef.current.add(model);
        });
    }, []);

    // Handle click event using useCallback
    const handleClick = useCallback((e) => {
        e.stopPropagation();
        const event = new Event('controllerClick');
        window.dispatchEvent(event);
        setInteracted(true);
    }, []);

    return (
        <group ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} onClick={handleClick}>
            <Html position={[0, 0, 0.01]} transform occlude width={1536} height={864} scale={1.25}
                style={{
                    transition: 'transform 0.5s',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                }}>
                <div className='w-[1536px] h-[864px]'>
                    <ControllerScreen />
                </div>
            </Html>
            {!interacted && <>
                <Text
                    position={[-3, 23, 0]}
                    fontSize={4}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    maxWidth={200}
                >
                    Click the Controller to Begin
                </Text>
                <Arrow />
            </>}
        </group>
    );
}
