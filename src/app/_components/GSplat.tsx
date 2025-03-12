import { Splat } from "@react-three/drei"

export default function GSplat() {
    return(
        <Splat
                        src="./Masked.splat"
                        position={[0, -0.3, 0]}
                        scale={2}
                        chunkSize={1000}
                        alphaTest={0.04}
                    />
    )
}