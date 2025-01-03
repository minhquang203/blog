'use client'

import { motion } from 'framer-motion'

const blogPosts = [
  {
    title: 'Bài viết 1',
    description: 'Mô tả ngắn gọn về bài viết 1.',
    link: '/blog/bai-viet-1'
  },
  {
    title: 'Bài viết 2',
    description: 'Mô tả ngắn gọn về bài viết 2.',
    link: '/blog/bai-viet-2'
  },
  // Thêm các bài viết khác ở đây
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-700 mb-4">{post.description}</p>
              <a href={post.link} className="text-blue-500 hover:underline">
                Đọc thêm
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}