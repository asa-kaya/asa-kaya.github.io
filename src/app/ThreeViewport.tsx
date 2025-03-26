'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color, ColorRepresentation, Mesh, Vector3, Euler } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import HelperText from './HelperText';
import Interactable from './Interactable';

const colorNeutral = 0x181818;
const colorBackground = 0x5c5c5c;
const defaultHeader = "JUNRICK";
const defaultDescription = "Game & Web Development";

type HoverEvent = (a: Boolean) => void;

const UpdateSceneBackground = () => {
    const { scene } = useThree();

    scene.background = new Color(colorBackground);

    return <></>;
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
    const [header, setHeader] = useState<String | undefined>(defaultHeader);
    const [description, setDescription] = useState<String | undefined>(defaultDescription);

    const updateHeaderAndDescription = (active: Boolean, h: String, d: String) => {
        setHeader(active ? h : defaultHeader);
        setDescription(active ? d : defaultDescription);
    };

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
            <Interactable
                modelPath="/assets/bike.glb"
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "Projects", "See my personal works")}
            />
            <Interactable
                modelPath="/assets/poster.glb"
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "About Me", "Skills | Experience | Contact")}
            />
            <Interactable
                modelPath="/assets/letter.glb"
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "Credits", "Inspirations for this website")}
            />
            <UpdateSceneBackground />

            <HelperText
                position={new Vector3(0, 0, 1.25)}
                rotation={new Euler(-Math.PI/2, 0, 0)}
                scale={new Vector3(0.5, 0.5, 0.5)}
            >
                {header}
            </HelperText>
            <HelperText
                position={new Vector3(1.25, 0, 0.1)}
                rotation={new Euler(-Math.PI/2, 0, Math.PI/2)}
                scale={new Vector3(0.22, 0.22, 0.22)}
            >
                {description}
            </HelperText>

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
