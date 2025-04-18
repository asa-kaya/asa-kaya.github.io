'use client';
import React, { createRef, useRef, useState } from 'react';
import { Canvas, useLoader, useThree, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import HelperText from './HelperText';
import Interactable from './Interactable';
import ProjectsModal from '../modal-div/ProjectsModal';
import AboutModal from '../modal-div/AboutModal';
import CreditsModal from '../modal-div/CreditsModal';
import ModalDiv from '../modal-div/ModalDiv';

const colorBackground = 0x5c5c5c;
const defaultHeader = "JUNRICK";
const defaultDescription = "Game & Web Development";

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

export default function Viewport3D() {
    const [header, setHeader] = useState<string | undefined>(defaultHeader);
    const [description, setDescription] = useState<string | undefined>(defaultDescription);
    const [activeModal, setActiveModal] = useState<ModalDiv | null>();

    const projectsDivRef = createRef<ProjectsModal>();
    const aboutDivRef = createRef<AboutModal>();
    const creditsDivRef = createRef<CreditsModal>();

    const updateHeaderAndDescription = (active: Boolean, h: string, d: string) => {
        setHeader(active ? h : defaultHeader);
        setDescription(active ? d : defaultDescription);
    };

    const openModal = (modal: ModalDiv | null) => {
        if (!modal) return;

        setActiveModal(modal);
        modal.setHidden(false);
    }

    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <>
        <Canvas flat linear camera={{ position: [5, 6, 5], fov: 30 }}>
            <Room />
            <Interactable
                modelPath="/assets/bike.glb"
                tooltip="Projects"
                hideTooltip={activeModal != null}
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "Projects", "See my personal works")}
                onClick={(e) => openModal(projectsDivRef.current as unknown as ModalDiv)}
                
            />
            <Interactable
                modelPath="/assets/poster2.glb"
                tooltip="About Me"
                hideTooltip={activeModal != null}
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "About", "Skills | Experience | Contact")}
                onClick={(e) => openModal(aboutDivRef.current as unknown as ModalDiv)}
            />
            <Interactable
                modelPath="/assets/letter.glb"
                tooltip="Credits"
                hideTooltip={activeModal != null}
                onHover={(active: Boolean) => updateHeaderAndDescription(active, "Credits", "Inspirations for this website")}
                onClick={(e) => openModal(creditsDivRef.current as unknown as ModalDiv)}
            />
            <UpdateSceneBackground />

            <HelperText
                position={new THREE.Vector3(0, 0, 1.25)}
                rotation={new THREE.Euler(-Math.PI/2, 0, 0)}
                scale={new THREE.Vector3(0.5, 0.5, 0.5)}
            >
                {header?.toUpperCase()}
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
        <ProjectsModal ref={projectsDivRef} onClose={closeModal} />
        <AboutModal ref={aboutDivRef} onClose={closeModal} />
        <CreditsModal ref={creditsDivRef} onClose={closeModal} />
        </>
    );
}
