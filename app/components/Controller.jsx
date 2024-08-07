"use client";

import { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ControllerScreen from './ControllerScreen';
import { Html } from '@react-three/drei';
import { controller } from "./three-config";


export default function Controller() {
    const meshRef = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/models/controller.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(21.5, 20, 20);
            model.rotation.set(0.01, Math.PI, Math.PI);
            meshRef.current.add(model);
        });
    }, []);

    const handleClick = (e) => {
        e.stopPropagation();
        const event = new Event('controllerClick');
        window.dispatchEvent(event);
    };

    return (
        <group ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]} onClick={handleClick}>
            <Html position={[0, 0, 0.01]} transform occlude width={1536} height={864} 
                style={{ 
                    transition: 'transform 0.5s', 
                    transformStyle: 'preserve-3d', 
                    transform: "scale(1.25)",
                    backfaceVisibility: 'hidden'
                }}>
                <div className='w-[1536px] h-[864px]'>
                    <ControllerScreen />
                </div>
            </Html>
        </group>
    );
}
