import React, { useRef, useEffect } from "react";
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { Vector3 } from 'three';

export default function AnimatedCamera({ zoomed }) {
    const groupRef = useRef();
    const invisibleObjectRef = useRef();
    const { camera } = useThree();

    const tl = useRef(gsap.timeline({ repeat: -1, yoyo: true }));

    useEffect(() => {
        const timeline = tl.current;

        if (groupRef.current) {
            timeline.to(groupRef.current.rotation, { y: Math.PI / 4, duration: 20, ease: 'power2.inOut' });
            timeline.to(groupRef.current.rotation, { y: -Math.PI / 4, duration: 20, ease: 'power2.inOut' });
        }

        return () => timeline.kill();
    }, []);

    useEffect(() => {
        if (!groupRef.current && !invisibleObjectRef.current) return;      
        const prevPosition = groupRef.current.position.clone();
        if (zoomed) {
            tl.current.pause();
            gsap.to(groupRef.current.rotation, { y: 0, duration: 1, ease: 'power2.out' });
            gsap.to(invisibleObjectRef.current.position, { x: 0, y: 0, z: 19, duration: 1, ease: 'power2.out' });
        } else {
            gsap.to(groupRef.current.rotation, { y: prevPosition.y, duration: 1, ease: 'power2.out' });

            tl.current.play();

            gsap.to(invisibleObjectRef.current.position, { x: 0, y: 50, z: 100, duration: 3, ease: 'power2.out' });
        }
    }, [zoomed]);

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

// TODO fix animation jitter after missing pointer.
// TODO fix bug where clicking gets disabled when  clicked controller just as the page loads.
