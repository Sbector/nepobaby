import { Environment, OrbitControls } from "@react-three/drei"
import GSplat from "./GSplat"
import { Suspense } from "react"
import Placeholder from "./Placeholder"


export default function Experience() {

    return (
        <>
            <Environment
                background
                preset="forest"
                blur={1}
                backgroundIntensity={0.1}
            />

            <OrbitControls
                enablePan={false}
                rotateSpeed={0.8}
                minDistance={3}
                maxDistance={8}
                target={[0, -0.1, 0]}
            />
            {/* <directionalLight position={[1, 1, 0]} />
            <directionalLight position={[1, 0, 0]} intensity={15} color={'#ff0000'} />
            <ambientLight intensity={0.7} /> */}
            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh> */}
            <Suspense fallback={<Placeholder/>}>
                <GSplat />
            </Suspense>
        </>
    )

}