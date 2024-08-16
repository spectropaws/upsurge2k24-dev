import { useState, useRef, useCallback } from "react";
import { useFrame } from '@react-three/fiber';

function Arrow() {
    const arrowRef = useRef();
    const [lastUpdateTime, setLastUpdateTime] = useState(0);

    const updateArrowState = useCallback((currentTime) => {
        if (arrowRef.current) {
            arrowRef.current.rotation.y += 0.02;
            arrowRef.current.position.y = 22 + Math.sin(currentTime * 3) * 2.8;
        }
        setLastUpdateTime(currentTime);
    }, []);

    useFrame(({ clock }) => {
        const currentTime = clock.getElapsedTime();
        if (currentTime - lastUpdateTime >= 0.016) { // 60 FPS: 1 / 60 = ~0.016
            updateArrowState(currentTime);
        }
    });

    return (
        <group ref={arrowRef} position={[27, 0, -1]} rotation={[Math.PI, 0, 0]} scale={[6, 6, 6]}>
            {/* Arrow Shaft */}
            <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>

            {/* Arrowhead */}
            <mesh position={[0, 0.5, 0]} rotation={[0, Math.PI / 2, 0]}>
                <coneGeometry args={[0.2, 0.5, 32]} />
                <meshStandardMaterial color="white" />
            </mesh>
        </group>
    );
}

export default Arrow;
