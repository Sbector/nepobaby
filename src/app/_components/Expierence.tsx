import * as THREE from 'three'
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"


export default function Experience() {

    const cubeRef = useRef<THREE.Mesh>(null!)

    useFrame((state, delta) => {
        
        const angle = state.clock.elapsedTime * 0.2

        state.camera.position.x = Math.sin(angle) * 8
        state.camera.position.z = Math.cos(angle) * 8
        state.camera.lookAt(0,0,0)
        
        cubeRef.current.rotation.x += delta * 0.2

    })

    return (
        <mesh ref={cubeRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="blue" wireframe/>
        </mesh>
    )

}