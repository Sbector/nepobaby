import { OrbitControls, Splat } from "@react-three/drei"


export default function Experience() {

    return (
        <>
            <OrbitControls
                enablePan={false}
                rotateSpeed={0.8}
                minZoom={1}
            />
            <directionalLight position={[1, 1, 0]} />
            <directionalLight position={[1, 0, 0]} intensity={15} color={'#ff0000'} />
            <ambientLight intensity={0.7} />
            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh> */}
            <group rotation={[0.25,0.15,0]} position={[0.08,0,0.03]} scale={0.6}>
                <Splat
                    src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
                    position={[-0.05, 0.6, -0.15]}
                    rotation={[-0.8, 0, 0]}
                    scale={0.3}
                />
            </group>

        </>
    )

}