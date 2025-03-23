'use client';
import React, { useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Billboard } from '@react-three/drei';
import { Color, Mesh } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function HelperText({children, ...props}) {
    return (
            <Text {...props}>
                {children}
            </Text>
    );
}
