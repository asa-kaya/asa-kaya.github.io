import { ReactNode } from "react";
import { Vector3, Euler } from "three";


export interface Props {
    children?: ReactNode
}

export interface Text3DProps {
    children?: ReactNode,
    position?: Vector3,
    rotation?: Euler,
    scale?: Vector3,
}

export interface IHover {
    (hovered: Boolean): void
}

export interface HoverableObjectProps {
    children?: ReactNode,
    position?: number[],
    rotation?: number[],
    scale?: number[],
    onHover: IHover
}