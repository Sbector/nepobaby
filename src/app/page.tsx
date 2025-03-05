'use client'

import { Canvas } from "@react-three/fiber";
import Experience from "./_components/Expierence";


export default function Home() {
  return (
    <Canvas
      orthographic
      camera={{
        fov: 35,
        zoom:200
      }}>
      <Experience />
    </Canvas>
  )
}