'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  skill: {
    name: string
    level: number
    icon: React.ComponentType // Sử dụng React.ComponentType cho các biểu tượng
  }
  index: number
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const IconComponent = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-center mb-2">
        <IconComponent className="h-6 w-6 mr-2 text-purple-500" />
        <span className="font-medium">{skill.name}</span>
        <span className="ml-auto">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  )
}