'use client'

import { motion, MotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  const smoothMouseX: MotionValue<number> = useSpring(0, { stiffness: 300, damping: 30 })
  const smoothMouseY: MotionValue<number> = useSpring(0, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setIsClient(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  useEffect(() => {
    smoothMouseX.set(mousePosition.x)
    smoothMouseY.set(mousePosition.y)
  }, [mousePosition, smoothMouseX, smoothMouseY])

  if (!isClient) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
      }}
    />
  )
}