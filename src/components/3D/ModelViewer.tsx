'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function DeviceModel(props: any) {
    const groupRef = useRef<THREE.Group>(null);

    // Device dimensions - Landscape Orientation
    const width = 5.0;
    const height = 3.2;
    const depth = 0.65;
    const radius = 0.4;

    return (
        <group ref={groupRef} {...props}>
            {/* Main Body - Soft Off-white */}
            <RoundedBox args={[width, height, depth]} radius={radius} smoothness={8} castShadow receiveShadow>
                <meshStandardMaterial
                    color="#f2f2f0"
                    roughness={0.4}
                    metalness={0.1}
                />
            </RoundedBox>

            {/* Screen Assembly - Flipped to Backside */}
            <group position={[0, 0, -depth / 2]} rotation={[0, Math.PI, 0]}>
                {/* Bezel/Frame - Black - Very Thin */}
                <RoundedBox
                    args={[width - 0.1, height - 0.1, 0.02]} // Almost edge-to-edge
                    radius={radius - 0.05}
                    smoothness={4}
                    position={[0, 0, 0]}
                    castShadow
                    receiveShadow
                >
                    <meshStandardMaterial color="#111111" roughness={0.2} metalness={0.5} />
                </RoundedBox>

                {/* Display Area - Glossy Black 3D Glass */}
                <RoundedBox
                    args={[width - 0.2, height - 0.2, 0.03]} // Maximized screen area
                    radius={radius - 0.1}
                    smoothness={4}
                    position={[0, 0, 0.005]}
                    castShadow={false}
                    receiveShadow
                >
                    <meshStandardMaterial
                        color="#000000"
                        roughness={0.05}
                        metalness={0.7}
                        envMapIntensity={1.0}
                    />
                </RoundedBox>
            </group>

            {/* Side Buttons - Top Long Edge */}
            <group position={[1.0, height / 2, 0]}>
                <RoundedBox args={[0.6, 0.05, 0.15]} radius={0.02} smoothness={4} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#e0e0e0" roughness={0.5} metalness={0.2} />
                </RoundedBox>
            </group>
            <group position={[2.0, height / 2, 0]}>
                <RoundedBox args={[0.3, 0.05, 0.15]} radius={0.02} smoothness={4} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#e0e0e0" roughness={0.5} metalness={0.2} />
                </RoundedBox>
            </group>

            {/* USB-C Port - Left Short Edge - Standard Pill Shape */}
            <group position={[-width / 2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                {/* Port Housing (Dark Grey) */}
                <RoundedBox args={[0.4, 0.02, 0.15]} radius={0.05} smoothness={8} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#222222" roughness={0.7} metalness={0.3} />
                </RoundedBox>
                {/* Inner Port Hole (Black) */}
                <RoundedBox args={[0.3, 0.025, 0.08]} radius={0.03} smoothness={4} position={[0, 0.005, 0]}>
                    <meshStandardMaterial color="#000000" roughness={0.9} metalness={0.1} />
                </RoundedBox>
            </group>
        </group>
    );
}

export default function ModelViewer() {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '600px' }}>
            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 40 }}>
                <Stage environment="city" intensity={0.5} shadows="contact" adjustCamera={1.3}>
                    {/* Rotate the model so the back (screen side) is initially visible */}
                    <DeviceModel rotation={[0, Math.PI, 0]} />
                </Stage>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableZoom={true}
                    minDistance={5}
                    maxDistance={20}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    );
}
