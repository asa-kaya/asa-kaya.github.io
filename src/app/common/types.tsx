import React, { ReactNode } from "react";
import { Vector3, Euler } from "three";
import { Technology } from "./technologies";

export interface Text3DProps {
    children?: ReactNode,
    position?: Vector3,
    rotation?: Euler,
    scale?: Vector3,
}

export interface InteractableObjectProps {
    modelPath: string,
    children?: ReactNode,
    position?: number[],
    rotation?: number[],
    scale?: number[],
    tooltip: string,
    hideTooltip?: boolean,
    onHover: (hovered: Boolean) => void,
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

export interface Person {
    name: string,
    contact?: string
}