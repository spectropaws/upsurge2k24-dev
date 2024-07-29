import React, { useState } from 'react';
import { Canvas} from '@react-three/fiber';
import { Stats, Environment } from '@react-three/drei';
import Controller from './controller';
import AnimatedCamera from './AnimatedCamera';

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
            <directionalLight position={[0, 5, 10]} intensity={10} />
            <Environment preset="city" background />
            <Controller onClick={handleControllerClick} />
            <Stats />
            <AnimatedCamera zoomed={zoomed} />
        </Canvas>
    );
}
