export default function Placeholder() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial wireframe />
        </mesh>
    )
}