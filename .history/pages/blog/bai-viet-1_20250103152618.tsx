'use client'

import { motion } from 'framer-motion'

export default function BaiViet1() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Bài viết 1</h1>
        <p className="text-gray-700 mb-4">
          Nội dung chi tiết của bài viết 1.
        </p>
      </motion.div>
    </div>
  )
}