'use client'

import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'; // Đảm bảo nhập THREE từ thư viện để có kiểu đúng

function AnimatedSphereInner() {
  const meshRef = useRef<THREE.Mesh | null>(null)  // Cập nhật kiểu

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.elapsedTime * 0.2  // Sử dụng state.elapsedTime thay vì state.clock.getElapsedTime()
      meshRef.current.rotation.y = state.elapsedTime * 0.3
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
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedSphereInner />
    </Canvas>
  )
}