"use client";

import { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import ControllerScreen from './ControllerScreen';
import { Html } from '@react-three/drei';


export default function Controller({ scale, onClick }) {
    const meshRef = useRef();

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load('/models/controller.glb', (gltf) => {
            const model = gltf.scene;
            model.scale.set(21.5, 20, 20);
            model.rotation.set(0.01, Math.PI, Math.PI);
            meshRef.current.add(gltf.scene);
        });
    }, []);

    return (
        <group ref={meshRef} scale={scale} position={[0, 0, 0]} rotation={[0, 0, 0]} onClick={onClick}>
            <Html position={[0, 0, 0.01]} transform occlude style={{ transition: 'transform 0.5s', transformStyle: 'preserve-3d', transform: "scale(1.25)" }}>
                <div className='w-[1545px] h-[875px]'>
                    <ControllerScreen />
                </div>
            </Html>
        </group>
    );
}
