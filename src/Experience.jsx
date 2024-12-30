import { useRef, useState,useMemo, useEffect,Suspense } from 'react';
import { useGLTF, OrbitControls,useTexture, PresentationControls,Html,useHelper,Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import Loader from './Loader';
import { Perf } from 'r3f-perf';
import * as THREE from 'three'
import { useControls } from 'leva';


export default function Experience({color,modifyMenu,environmentButton,activeEnvironmentMapButton}) {
    const directionalLightRef = useRef();
    useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1)
    const bakedShadowTexture=useTexture('./simpleShadowInverted.jpg')
    const sceneRef = useRef();
    const blueShoe = useGLTF('blueVansCompressed.glb')
    const greenShoe = useGLTF('vans_old_skool_green_compressed.glb')
    const blackShoe = useGLTF('vans_shoe_white_compressed.glb')

    const [rotation,setRotation]=useState([Math.PI / 4, 0, 0])
    const [scale,setScale]=useState(2)
    const [position,setPosition]=useState([0,0,0])
    const environmentMap=['city','dawn','forest','night','park','sunset']


    // LEVA CONTROLS
    const { x, y, z } = useControls('Group Position', {
        x: { value: -9.5, min: -20, max: 20, step: 0.1 },
        y: { value: -0.5, min: -30, max: 10, step: 0.1 },
        z: { value: 0, min: -30, max: 10, step: 0.1 },
      });

      const { lightPosition } = useControls({
        lightPosition: {
          value: [19.5, 3, -5],
          step: 0.1
        }
      })

    const selectedShoe = useMemo(() => {
        if (color === 'Blue') {
            return blueShoe;
        } else if (color === 'Green') {
            return greenShoe;
        } else if (color === 'Black') {
            return blackShoe;
        } else {
            return blueShoe; // Default case
        }
    }, [color, blueShoe, greenShoe, blackShoe])

    useEffect(()=>{
        if(color=='Blue'){
            setRotation([Math.PI / 4, 0, 0])
            setScale(1.4)
            setPosition([0.3,0,0])
        }else if(color=='Green'){
            setRotation([Math.PI / 4, 0, 0])
            setScale(1.9)
            setPosition([0.3,1.2,-0.9])
        }else if(color=='Black'){
            setRotation([Math.PI/8, 0, 0])
            setScale(185)
            setPosition([-0.6,1.1,-1.7])
        }
    },[color])
    
    useEffect(() => {
        if (selectedShoe && selectedShoe.scene) {
            selectedShoe.scene.traverse((child) => {
                if (child.isMesh) {
    
                    child.castShadow = true; // Enable shadow casting
                    // child.material.color.setHex(hexColor);
                    // child.receiveShadow = true; // Optional: Enable receiving shadows
                }
            });
        }
    }, [selectedShoe]);
   

    useFrame((state,delta)=>{
        const time = state.clock.getElapsedTime();
    if (sceneRef.current) {
    //   sceneRef.current.rotation.y = time * 0.5; // Rotate the scene on the Y-axis
    }


    })

  
    



    return (
        <>
            {/* <Perf position="top-left" /> */}
            {/* {environmentButton && <Perf position="top-left" />} */}

{/* -20,-29,-15 */}
            <group ref={sceneRef} position={[x, y, z]}> 
            {/* Directional Light */}
            <directionalLight
                ref={directionalLightRef}
                castShadow
                position={lightPosition}
                intensity={4.2}
                
            />
            {/* Ambient Light And Environment Map*/}
            <ambientLight intensity={0.8} />

            {/* <Environment
                background
                preset='sunset'
            /> */}

            {environmentButton ? (<Environment background preset={environmentMap[activeEnvironmentMapButton]}/> ): <ambientLight intensity={0.8} />}
            {/* {environmentButton && <OrbitControls/>} */}

            {/* Shoe Model */}
            <PresentationControls
                global
                rotation={[0, 1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[-1, 0.75]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
            {/* <Html center>
             <div className="loader"></div>
            </Html> */}
            <Suspense fallback={
            <Html>
                <Loader/>
            </Html>      
            }>
            <primitive
                object={selectedShoe.scene}
                rotation={rotation}
                scale={scale}
                position={position}
                castShadow
                
            />

            {/* <mesh castShadow>
                <boxGeometry/>
                <meshStandardMaterial color='black'/>
            </mesh> */}

           

            {/* <mesh position={[0.1,-1.4,1.1]} rotation-x={-Math.PI * 0.5} scale={3}>
                <planeGeometry />
                <meshBasicMaterial 
                  transparent
                  map={bakedShadowTexture}
                  opacity={1}  // Optional: adjust opacity as needed
            />
            </mesh> */}
            </Suspense>
            </PresentationControls>

             {/* Ground Plane */}
             {/* {!environmentButton && (
                <mesh
                receiveShadow
                position-y={-1.9}
                // rotation-y={1}
                rotation-z={1.9}
                position-x={-1.5}
                rotation-x={-Math.PI * 0.61}
                // visible={false}
                scale={25}
            >
                <planeGeometry />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            )} */}

            </group>
            {/* <OrbitControls/> */}
        </>
    );
}
