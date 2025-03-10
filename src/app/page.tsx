'use client'

import { Canvas } from "@react-three/fiber"
import Experience from "./_components/Expierence"
import * as THREE from 'three'


export default function Home() {
  return (
    <Canvas
      // orthographic
      camera={{
        fov: 35,
        position: [1, 1, 1],
        // zoom: 220
      }}>
      <Experience />
    </Canvas>
  )
}