import { useLoader } from "@react-three/fiber";
import { HoverableObjectProps } from "./common/types";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const colorInteractable = 0x3e81d9;
const colorHovered = 0xffd921;

type HoverEvent = (a: Boolean) => void;

const Interactable = (props: HoverableObjectProps) => {
    const { nodes, materials } = useLoader(GLTFLoader, props.modelPath || "");
    const [isHovered, setHover] = useState<Boolean | undefined>(false);
    const meshes = [];
    
    for (let key in nodes)
    {
        if (!Object.hasOwn(nodes, key) || nodes[key].type !== "Mesh") continue;
        meshes.push(nodes[key]);
    }

    const hoverFunc: HoverEvent = (a: Boolean) => {
        setHover(a);
        props.onHover(a);
    }

    return (
        <>
            { meshes.map((mesh: any) => {
                return (
                <mesh
                    key={mesh.name}
                    geometry={mesh.geometry}
                    position={mesh.position}
                    rotation={mesh.rotation}
                    scale={mesh.scale}
                    onPointerOver={(_: Event) => hoverFunc(true)}
                    onPointerOut={(_: Event) => hoverFunc(false)}
                >
                    <meshBasicMaterial
                        color={isHovered ? colorHovered : colorInteractable}
                    />
                </mesh>);
            }) }
        </>
    );
};

export default Interactable;