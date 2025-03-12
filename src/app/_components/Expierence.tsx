import { OrbitControls, Splat } from "@react-three/drei"


export default function Experience() {

    return (
        <>
            <OrbitControls
                enablePan={false}
                rotateSpeed={0.8}
                minDistance={3.5}
                maxDistance={8}
                target={[0,-0.1,0]}
            />
            {/* <directionalLight position={[1, 1, 0]} />
            <directionalLight position={[1, 0, 0]} intensity={15} color={'#ff0000'} />
            <ambientLight intensity={0.7} /> */}
            {/* <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="blue" />
            </mesh> */}
            <Splat
                src="./Masked.splat"
                position={[0, -0.3, 0]}
                scale={2}
                chunkSize={1000}
                alphaTest={0.04}
            />


        </>
    )

}