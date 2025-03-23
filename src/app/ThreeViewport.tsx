'use client';
import React, { useRef, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Color, ColorRepresentation, Mesh } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import HelperText from './HelperText';

const colorInteractable = 0xffd921;
const colorHovered = 0x1bde00;
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

const Bike = (props) => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/bike.glb');
    const [isHovered, setHover] = useState<Boolean | undefined>(false);

    const body = nodes.Body as Mesh;
    const handlebar = nodes.HandleBar as Mesh;
    const wheelR = nodes.WheelR as Mesh;

    const hoverFunc: HoverEvent = (a: Boolean) => {
        setHover(a);
        props.onHover(a);
    }

    return (
        <>
            <mesh
                geometry={body.geometry}
                position={body.position}
                rotation={body.rotation}
                scale={body.scale}
                onPointerOver={(_: Event) => hoverFunc(true)}
                onPointerOut={(_: Event) => hoverFunc(false)}
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
                onPointerOver={(_: Event) => hoverFunc(true)}
                onPointerOut={(_: Event) => hoverFunc(false)}
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
                onPointerOver={(_: Event) => hoverFunc(true)}
                onPointerOut={(_: Event) => hoverFunc(false)}
            >
                <meshStandardMaterial
                    color={isHovered ? colorHovered : colorInteractable}
                />
            </mesh>
        </>
    );
};

const Letter = (props) => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/letter.glb');
    const [isHovered, setHover] = useState<Boolean | undefined>(false);

    const letter = nodes.Letter as Mesh;

    const hoverFunc: HoverEvent = (a: Boolean) => {
        setHover(a);
        props.onHover(a);
    }

    return (
        <mesh
            geometry={letter.geometry}
            position={letter.position}
            rotation={letter.rotation}
            onPointerOver={(_: Event) => hoverFunc(true)}
            onPointerOut={(_: Event) => hoverFunc(false)}
        >
            <meshStandardMaterial
                color={isHovered ? colorHovered : colorInteractable}
            />
        </mesh>
    );
};

const Poster = (props) => {
    const { nodes, materials } = useLoader(GLTFLoader, '/assets/poster.glb');
    const [isHovered, setHover] = useState<Boolean | undefined>(false);

    const poster = nodes.Poster as Mesh;

    const hoverFunc: HoverEvent = (a: Boolean) => {
        setHover(a);
        props.onHover(a);
    }

    return (
        <mesh
            geometry={poster.geometry}
            position={poster.position}
            rotation={poster.rotation}
            onPointerOver={(_: Event) => hoverFunc(true)}
            onPointerOut={(_: Event) => hoverFunc(false)}
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
            <Bike onHover={(active: Boolean) => updateHeaderAndDescription(active, "Projects", "See my personal works")} />
            <Poster onHover={(active: Boolean) => updateHeaderAndDescription(active, "About Me", "Skills | Experience | Contact")} />
            <Letter onHover={(active: Boolean) => updateHeaderAndDescription(active, "Credits", "Inspirations for this website")} />
            <UpdateSceneBackground />

            <HelperText position={[0, 0, 1.25]} rotation={[-Math.PI/2, 0, 0]} scale={0.5}>
                {header}
            </HelperText>
            <HelperText position={[1.25, 0, 0.1]} rotation={[-Math.PI/2, 0, Math.PI/2]} scale={0.220}>
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
