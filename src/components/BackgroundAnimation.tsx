import { Suspense, useMemo, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"

function FallbackComponent() {
    return (
        <>
            <div>
                <p>FallbackComponent</p>
                <img src="/image.png" alt="Cat picture" />
            </div>
        </>
    )
}

function Model(props: any) {
    const backgroundModel = useGLTF('/dog.glb')
    return <primitive object={backgroundModel.scene} {...props} />;
}

function BackgroundAnimation() {
    return (
        <div className="w-full h-[40vh]">
            <Canvas camera={{ position: [5, 5, -2], fov: 25 }}>
                <Suspense fallback={<FallbackComponent />} />
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <Model position={[-0.1, -0.2, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.2} />
                <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5}
                    autoRotate={true} autoRotateSpeed={2.5} />
            </Canvas>
        </div>
    )
}

export default BackgroundAnimation