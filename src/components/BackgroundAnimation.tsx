import { Suspense, } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF, Html, useProgress } from "@react-three/drei"

function FallbackComponent() {
    const { progress } = useProgress()
    return (
        <>
            <Html center className="text-primary">
                {progress}
            </Html>
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
                <Model position={[-0.1, -0.2, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.4} />
                <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5}
                    autoRotate={true} autoRotateSpeed={2.5} />
            </Canvas>
        </div>
    )
}

export default BackgroundAnimation