import { OrbitControls } from "@react-three/drei"


export default function Experience() {

    return (
        <>
            <OrbitControls
                enablePan={false}
                rotateSpeed={0.8}
            />
            <directionalLight position={[1, 1, 0]} />
            <ambientLight intensity={0.7} />
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh>
        </>
    )

}