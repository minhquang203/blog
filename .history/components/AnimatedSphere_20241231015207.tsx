'use client'

import { MeshDistortMaterial, Sphere, SpotLight } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function AnimatedSphereInner() {
  const meshRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef}>
      <MeshDistortMaterial
        color="#8B5CF6"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  )
}

export default function AnimatedSphere() {
  return (
    <Canvas>
      {/* <ambientLight intensity={0.5} /> */}
      <SpotLight position={[10, 10, 10]} />
      <AnimatedSphereInner />
    </Canvas>
  )
}

