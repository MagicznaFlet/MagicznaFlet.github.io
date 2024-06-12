import {Suspense} from "react"
import { useLoader,Canvas,SceneProps } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/Addons.js"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"

function FallbackComponent(props:any){
    return(
        <>
        <div>
            <p>FallbackComponent</p>
            <img src="/image.png" alt="Cat picture" />
        </div>
        </>
    )
}

function Model(props:any){
    const backgroundModel = useGLTF('/dog.glb')
    return <primitive object={backgroundModel.scene} {...props}/>;
}

function BackgroundAnimation(props:any){
    return (
        <div>
                <Canvas camera={{position:[5,5,-5],fov:25}}>
                    <Suspense fallback={<FallbackComponent/>}/>
                    <Environment preset="city"/>
                    <ambientLight intensity={0.5}/>
                    <Model position={[-0.1,-0.2,0]} rotation={[0,Math.PI / 2,0]} scale={0.2}/>
                    <OrbitControls minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.5}
                    autoRotate={true} autoRotateSpeed={2.5} />
                </Canvas>
        </div>
    )
}

export default BackgroundAnimation