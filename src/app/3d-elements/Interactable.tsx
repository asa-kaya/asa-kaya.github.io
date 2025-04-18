import { useLoader } from "@react-three/fiber";
import { InteractableObjectProps } from "../common/types";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Object3D, Object3DEventMap, Vector3 } from "three";
import { Html } from "@react-three/drei";
import { MobileView } from 'react-device-detect';

const colorInteractable = 0x3e81d9;
const colorHovered = 0xffd921;

type HoverEvent = (value: Boolean) => void;

const Interactable = (props: InteractableObjectProps) => {
    const { nodes, materials } = useLoader(GLTFLoader, props.modelPath || "");
    const [isHovered, setHover] = useState<Boolean | undefined>(false);
    
    const meshes = [];
    let root: Object3D<Object3DEventMap> | undefined = undefined;
    
    for (let key in nodes)
    {
        if (Object.hasOwn(nodes, key))
        {
            if (nodes[key].type === "Group")
                root = nodes[key];
            else if (nodes[key].type === "Mesh")
                meshes.push(nodes[key]);
        }
    }

    let billboardPosition = meshes.reduce((sum: Vector3, m) => sum.add(m.position), new Vector3()).divideScalar(meshes.length);

    const hoverFunc: HoverEvent = (value: Boolean) => {
        setHover(value);
        props.onHover(value);
        document.body.style.cursor = value ? "pointer" : "auto";
    }

    return (
        <group
            position={root?.position}
            rotation={root?.rotation}
            scale={root?.scale}
            onPointerOver={(_: Event) => hoverFunc(true)}
            onPointerOut={(_: Event) => hoverFunc(false)}
            onClick={props.onClick}
        >
            { meshes.map((mesh: any) => {
                return (
                <mesh
                    key={mesh.name}
                    geometry={mesh.geometry}
                    position={mesh.position}
                    rotation={mesh.rotation}
                    scale={mesh.scale}
                >
                    <meshBasicMaterial
                        color={isHovered ? colorHovered : colorInteractable}
                    />
                </mesh>);
            }) }
            <Html className={`${props.hideTooltip ? "hidden" : ""}`} center={true}  position={billboardPosition}>
                <MobileView>
                    <div className="flex flex-col items-center w-max"
                        onPointerOver={_ => hoverFunc(true)}
                        onPointerOut={(_) => hoverFunc(false)}
                        onClick={props.onClick}
                    >
                        <svg width="24px" height="24px" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8Z" fill="#fff"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z" fill="#fff"/>
                        </svg>
                        <h1 className="font-semibold text-shadow-custom text-white">{props.tooltip}</h1>
                    </div>
                </MobileView>
            </Html>
        </group>
    );
};

export default Interactable;