"use client";

import React, { useRef, useState, useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { Vector3 } from 'three';

export default function AnimatedCamera({ zoomed }) {
    const groupRef = useRef();
    const invisibleObjectRef = useRef();
    const { camera } = useThree();
    const [prevRotationY, setPrevRotationY] = useState(0);

    const tl = useRef(gsap.timeline({ repeat: -1, yoyo: true }));

    useGSAP((context, contextSafe) => {
        const oscillate = contextSafe(() => {
            const timeline = tl.current;

            if (groupRef.current) {
                timeline.to(groupRef.current.rotation, { y: Math.PI / 4, duration: 20, ease: 'power2.inOut' });
                timeline.to(groupRef.current.rotation, { y: -Math.PI / 4, duration: 20, ease: 'power2.inOut' });
            }

            return () => timeline.kill();
        });
        if (groupRef.current) oscillate();
    }, { scope: groupRef });

    useGSAP((context, contextSafe) => {
        if (!groupRef.current && !invisibleObjectRef.current) return;

        const isClicked = contextSafe(() => {
            setPrevRotationY(groupRef.current.rotation.y);
            gsap.to(groupRef.current.rotation, { y: 0, duration: 1, ease: 'power2.out' });
            gsap.to(invisibleObjectRef.current.position, { x: 0, y: 0, z: 19, duration: 1, ease: 'power2.out' });

        });

        const isUnclicked = contextSafe(() => {
            gsap.to(groupRef.current.rotation, { y: prevRotationY, duration: 1, ease: 'power2.out' });
            gsap.to(invisibleObjectRef.current.position, { x: 0, y: 30, z: 70, duration: 3, ease: 'power2.out' });
        });

        if (zoomed) {
            isClicked();
        } else {
            isUnclicked();
        }

        console.log(zoomed);
    }, { dependencies: [zoomed], scope: groupRef });

    useGSAP((context, contextSafe) => {
        
        const resume = contextSafe(() => {
            tl.current.resume();
        });

        const pause = contextSafe(() => {
            tl.current.pause();
        });
        
        if (zoomed) {
            pause();
        }
        else {
            resume();
        }
    }, { dependencies: [zoomed], scope: groupRef });

    useFrame(() => {
        if (invisibleObjectRef.current) {
            const worldPosition = new Vector3();
            invisibleObjectRef.current.getWorldPosition(worldPosition);
            camera.position.copy(worldPosition);
            camera.lookAt(0, 0, 0);
        }
    });

    return (
        <group ref={groupRef}>
            <mesh
                ref={invisibleObjectRef}
                position={[50, 50, 100]}
                visible={false}
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshBasicMaterial transparent opacity={0} />
            </mesh>
        </group>
    );
}
