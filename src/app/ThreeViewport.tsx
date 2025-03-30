'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import HelperText from './HelperText';
import Interactable from './Interactable';

const colorBackground = 0x5c5c5c;
const defaultHeader = "JUNRICK";
const defaultDescription = "Game & Web Development";

type HoverEvent = (a: Boolean) => void;

const UpdateSceneBackground = () => {
    const { scene } = useThree();

    scene.background = new THREE.Color(colorBackground);

    return <></>;
};

const Room = () => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/stage/stage.gltf');
    const mesh = useRef<undefined | THREE.Mesh>(null);

    const tex = useTexture('/assets/stage/stage.png')
    tex.flipY = false;

    const basicMat = new THREE.MeshBasicMaterial();
    basicMat.map = tex;

    const stage = nodes.Stage as THREE.Mesh;

    return (
        <mesh
            position={stage.position}
            rotation={stage.rotation}
            scale={stage.scale}
            ref={mesh}
        >
            <bufferGeometry attach="geometry" {...stage.geometry} />
            <meshBasicMaterial map={tex} />
        </mesh>
    );
};

export default function ThreeViewport() {
    const [header, setHeader] = useState<string | undefined>(defaultHeader);
    const [description, setDescription] = useState<string | undefined>(defaultDescription);

    const updateHeaderAndDescription = (active: Boolean, h: string, d: string) => {
        setHeader(active ? h : defaultHeader);
        setDescription(active ? d : defaultDescription);
    };

    return (
        <Canvas flat linear camera={{ position: [5, 6, 5], fov: 30 }}>
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
                position={new THREE.Vector3(0, 0, 1.25)}
                rotation={new THREE.Euler(-Math.PI/2, 0, 0)}
                scale={new THREE.Vector3(0.5, 0.5, 0.5)}
            >
                {header}
            </HelperText>
            <HelperText
                position={new THREE.Vector3(1.25, 0, 0.1)}
                rotation={new THREE.Euler(-Math.PI/2, 0, Math.PI/2)}
                scale={new THREE.Vector3(0.22, 0.22, 0.22)}
            >
                {description}
            </HelperText>

            <OrbitControls
                target={[0, 1, 0]}
                autoRotate={false}
                enablePan={false}
                autoRotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minAzimuthAngle={0}
                maxAzimuthAngle={Math.PI / 2}
            />
        </Canvas>
    );
}
