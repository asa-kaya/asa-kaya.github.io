'use client';
import React from 'react';
import { Text } from '@react-three/drei';
import { Text3DProps } from './common/types';

export default function HelperText({children, position, rotation, scale}: Text3DProps) {
    return (
        <Text position={position} rotation={rotation} scale={scale}>
            {children}
        </Text>
    );
}
