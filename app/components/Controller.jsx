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
            const scale = controller.model.scale;
            const rotation = controller.model.rotation;

            const model = gltf.scene;
            model.scale.set(scale.X, scale.Y, scale.Z);
            model.rotation.set(rotation.X, rotation.Y, rotation.Z);
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
            <Html position={controller.screen.POSITION} transform occlude width={controller.screen.WIDTH} height={controller.screen.HEIGHT} 
                style={{ 
                    transition: 'transform 0.5s', 
                    transformStyle: 'preserve-3d', 
                    transform: `scale(${controller.screen.SCALE})`,
                    backfaceVisibility: 'hidden'
                }}>
                <div className={`w-[${controller.screen.WIDTH}px] h-[${controller.screen.HEIGHT}px]`}>
                    <ControllerScreen />
                </div>
            </Html>
        </group>
    );
}
