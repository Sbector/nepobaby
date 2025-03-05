'use client'

import { Canvas } from "@react-three/fiber";
import Experience from "./_components/Expierence";


export default function Home() {
  return (
    <Canvas
      camera={{
        fov: 35,
      }}>
      <Experience />
    </Canvas>
  )
}