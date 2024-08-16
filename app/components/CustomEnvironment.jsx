import React, { useMemo } from 'react';

const Stars = ({ count }) => {
    const stars = useMemo(() => {
        return Array.from({ length: count }).map(() => (
            <mesh key={Math.random()} position={[
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
                Math.random() * 200 - 100,
            ]}>
                <sphereGeometry args={[0.3, 8, 8]} />
                <meshStandardMaterial color="white" />
            </mesh>
        ));
    }, [count]);

    return <>{stars}</>;
};

export default function CustomEnvironment() {
    return (
        <>
            <color attach="background" args={['rgba(20, 20, 20, 1)']} />
            <ambientLight intensity={0.6} />
            <Stars count={200} />
        </>
    );
}
