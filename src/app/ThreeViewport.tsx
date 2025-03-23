'use client';
import React, { useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color, ColorRepresentation, Mesh } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const colorInteractable = 0xffd921;
const colorHovered = 0x1bde00;
const colorNeutral = 0x181818;
const colorBackground = 0x5c5c5c;

const UpdateSceneBackground = () => {
    const { scene } = useThree();

    scene.background = new Color(colorBackground);

    return <></>;
};

const Bike = () => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/bike.glb');
    const [isHovered, setHover] = useState(false);

    const body = nodes.Body as Mesh;
    const handlebar = nodes.HandleBar as Mesh;
    const wheelR = nodes.WheelR as Mesh;

    return (
        <>
            <mesh
                geometry={body.geometry}
                position={body.position}
                rotation={body.rotation}
                scale={body.scale}
                onPointerOver={(_: Event) => setHover(true)}
                onPointerOut={(_: Event) => setHover(false)}
            >
                <meshStandardMaterial
                    color={isHovered ? colorHovered : colorInteractable}
                />
            </mesh>
            <mesh
                geometry={handlebar.geometry}
                position={handlebar.position}
                rotation={handlebar.rotation}
                scale={handlebar.scale}
                onPointerOver={(_: Event) => setHover(true)}
                onPointerOut={(_: Event) => setHover(false)}
            >
                <meshStandardMaterial
                    color={isHovered ? colorHovered : colorInteractable}
                />
            </mesh>
            <mesh
                geometry={wheelR.geometry}
                position={wheelR.position}
                rotation={wheelR.rotation}
                scale={wheelR.scale}
                onPointerOver={(_: Event) => setHover(true)}
                onPointerOut={(_: Event) => setHover(false)}
            >
                <meshStandardMaterial
                    color={isHovered ? colorHovered : colorInteractable}
                />
            </mesh>
        </>
    );
};

const Letter = () => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/letter.glb');
    const [isHovered, setHover] = useState(false);

    const letter = nodes.Letter as Mesh;

    return (
        <mesh
            geometry={letter.geometry}
            position={letter.position}
            rotation={letter.rotation}
            onPointerOver={(_: Event) => setHover(true)}
            onPointerOut={(_: Event) => setHover(false)}
        >
            <meshStandardMaterial
                color={isHovered ? colorHovered : colorInteractable}
            />
        </mesh>
    );
};

const Poster = () => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/poster.glb');
    const [isHovered, setHover] = useState(false);

    const poster = nodes.Poster as Mesh;

    return (
        <mesh
            geometry={poster.geometry}
            position={poster.position}
            rotation={poster.rotation}
            onPointerOver={(_: Event) => setHover(true)}
            onPointerOut={(_: Event) => setHover(false)}
        >
            <meshStandardMaterial
                color={isHovered ? colorHovered : colorInteractable}
            />
        </mesh>
    );
};

const Room = () => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/stage.glb');

    const stage = nodes.Stage as Mesh;

    return (
        <mesh
            geometry={stage.geometry}
            position={stage.position}
            rotation={stage.rotation}
        >
            <meshStandardMaterial color={colorNeutral} />
        </mesh>
    );
};

export default function ThreeViewport() {
    return (
        <Canvas flat linear camera={{ position: [5, 6, 5], fov: 30 }}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
            />
            <pointLight
                position={[-10, -10, -10]}
                decay={0}
                intensity={Math.PI}
            />

            <Room />
            <Bike />
            <Letter />
            <Poster />
            <UpdateSceneBackground />

            <OrbitControls
                target={[0, 1, 0]}
                autoRotate={false}
                autoRotateSpeed={1}
                /*minPolarAngle={Math.PI/2}*/
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={0}
                maxAzimuthAngle={Math.PI / 2}
            />
        </Canvas>
    );
}
