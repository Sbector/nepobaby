'use client'

import { Canvas } from "@react-three/fiber"
import Experience from "./_components/Expierence"

export default function Home() {
  return (
    <Canvas
      // orthographic
      camera={{
        fov: 25,
        position: [0, 0, 8],
        // zoom: 220
      }}>
      <Experience />
    </Canvas>
  )
}