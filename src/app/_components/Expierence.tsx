import { TrackballControls } from "@react-three/drei"


export default function Experience() {

    return (
        <>
            <TrackballControls
                target={[0, 0, 0]}
                minDistance={1}
                maxDistance={3}
                noPan
                rotateSpeed={2.5}
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