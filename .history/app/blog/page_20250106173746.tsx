'use client';

import { useState } from "react";

interface Post {
  title: string;
  excerpt: string;
  date: string;
  link: string;
}

const Blog = () => {
  // Dữ liệu tĩnh cho bài viết
  const [posts] = useState<Post[]>([
    {
      title: "Học React từ cơ bản đến nâng cao",
      excerpt: "Khám phá các khái niệm cơ bản về React, từ JSX đến Hooks...",
      date: "2025-01-06",
      link: "/blog/hoc-react",
    },
    {
      title: "JavaScript là gì và tại sao bạn nên học nó?",
      excerpt: "Tìm hiểu về JavaScript, ngôn ngữ lập trình phổ biến và tại sao nó quan trọng...",
      date: "2025-01-05",
      link: "/blog/javascript-la-gi",
    },
    {
      title: "Cách tối ưu hóa ứng dụng với Next.js",
      excerpt: "Khám phá các phương pháp tối ưu hiệu suất ứng dụng Next.js với các công cụ và kỹ thuật tiên tiến...",
      date: "2025-01-04",
      link: "/blog/toi-uu-hoa-ung-dung-nextjs",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Blog của tôi</h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{post.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{post.excerpt}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Published on {post.date}</p>
            <a href={post.link} className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
              Đọc thêm →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
