'use client'

import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20" />
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-b from-purple-400 to-pink-400 rounded-full opacity-20 dark:opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            transition: {
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
        />
      ))}
    </div>
  )
}

