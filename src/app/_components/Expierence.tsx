import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function Experience() {

    const cubeRef = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {
        cubeRef.current.rotation.x += delta * 0.8
    })

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="blue" wireframe/>
        </mesh>
    )

}