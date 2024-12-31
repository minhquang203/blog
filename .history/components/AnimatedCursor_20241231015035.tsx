'use client'

import { motion, MotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  const smoothMouseX: MotionValue<number> = useSpring(mousePosition.x, { stiffness: 300, damping: 30 })
  const smoothMouseY: MotionValue<number> = useSpring(mousePosition.y, { stiffness: 300, damping: 30 })

  useEffect(() => {
    setIsClient(true)
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  if (!isClient) return null

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
      style={{
        x: smoothMouseX,
        y: smoothMouseY,
        width: 20,
        height: 20,
        backgroundColor: 'rgba(124, 58, 237, 0.5)',
      }}
    />
  )
}