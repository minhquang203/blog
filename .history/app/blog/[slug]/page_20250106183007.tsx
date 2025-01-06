import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { notFound } from 'next/navigation'

const blogPosts = {
  'gioi-thieu-javascript': {
    title: 'Giới thiệu về JavaScript cho người mới bắt đầu',
    content: `
      <p>JavaScript là một ngôn ngữ lập trình phổ biến và mạnh mẽ được sử dụng rộng rãi trong phát triển web. Hãy cùng tìm hiểu về những khái niệm cơ bản và tầm quan trọng của nó.</p>
      
      <h2>JavaScript là gì?</h2>
      <p>JavaScript là một ngôn ngữ lập trình high-level, được thông dịch và hướng đối tượng. Nó được sử dụng chủ yếu để tạo ra các trang web động và tương tác.</p>
      
      <h2>Tại sao JavaScript quan trọng?</h2>
      <ul>
        <li>Tạo tương tác người dùng động</li>
        <li>Xử lý dữ liệu phía client</li>
        <li>Phát triển ứng dụng web hiện đại</li>
        <li>Hỗ trợ phát triển full-stack với Node.js</li>
      </ul>
    `,
    date: '2023-11-27',
    image: '/public/Java.jpg',
    tags: ['JavaScript', 'Frontend', 'Web Development']
  },
  'nextjs-va-uu-diem': {
    title: 'Next.js và những ưu điểm trong phát triển ứng dụng React',
    content: `
      <p>Next.js là một framework React mạnh mẽ được phát triển bởi Vercel, mang đến nhiều tính năng và ưu điểm vượt trội cho việc phát triển ứng dụng web.</p>

      <h2>Tại sao chọn Next.js?</h2>
      <ul>
        <li>Server-side Rendering (SSR) tích hợp sẵn</li>
        <li>Static Site Generation (SSG) cho hiệu suất tối ưu</li>
        <li>API Routes đơn giản và mạnh mẽ</li>
        <li>Tối ưu hóa hình ảnh tự động</li>
      </ul>

      <h2>App Router trong Next.js 13+</h2>
      <p>App Router là một tính năng mới trong Next.js 13+, mang đến cách tiếp cận mới về routing và layouts:</p>
      <pre><code>
// app/page.tsx
export default function HomePage() {
  return (
    <div>
      <h1>Trang Chủ</h1>
      <p>Chào mừng đến với ứng dụng Next.js!</p>
    </div>
  )
}
      </code></pre>

      <h2>Server Components</h2>
      <p>Next.js 13+ giới thiệu React Server Components, cho phép render components trên server:</p>
      <pre><code>
// Mặc định là Server Component
async function ProductList() {
  const products = await getProducts()
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  )
}
      </code></pre>
    `,
    date: '2023-11-25',
    image: '/images/nextjs-benefits.jpg',
    tags: ['Next.js', 'React', 'Server Components', 'Web Development']
  },
  'nodejs-backend-development': {
    title: 'Node.js: Nền tảng cho phát triển Backend hiện đại',
    content: `
      <p>Node.js đã và đang thay đổi cách chúng ta xây dựng các ứng dụng phía máy chủ. Hãy tìm hiểu về những ưu điểm và cách sử dụng Node.js hiệu quả.</p>

      <h2>Node.js là gì?</h2>
      <p>Node.js là một môi trường runtime JavaScript được xây dựng trên V8 JavaScript engine của Chrome, cho phép chạy JavaScript trên máy chủ.</p>

      <h2>Ưu điểm của Node.js</h2>
      <ul>
        <li>Non-blocking I/O</li>
        <li>Event-driven architecture</li>
        <li>Hệ sinh thái npm phong phú</li>
        <li>Hiệu suất cao cho ứng dụng realtime</li>
      </ul>

      <h2>Ví dụ về HTTP Server</h2>
      <pre><code>
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Xin chào từ Node.js!');
});

server.listen(3000, () => {
  console.log('Server đang chạy tại http://localhost:3000/');
});
      </code></pre>

      <h2>Express.js Framework</h2>
      <p>Express.js là framework phổ biến nhất cho Node.js:</p>
      <pre><code>
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Chào mừng đến với API của chúng tôi!');
});

app.listen(3000, () => {
  console.log('Server Express đang chạy!');
});
      </code></pre>
    `,
    date: '2023-11-23',
    image: '/images/nodejs-backend.jpg',
    tags: ['Node.js', 'Backend', 'JavaScript', 'Express.js']
  },
  'hoc-lap-trinh-hieu-qua': {
    title: 'Phương pháp học lập trình hiệu quả cho người mới',
    content: `
      <p>Học lập trình có thể là một thách thức lớn đối với người mới bắt đầu. Dưới đây là những phương pháp và chiến lược học tập hiệu quả.</p>

      <h2>1. Xây dựng nền tảng vững chắc</h2>
      <ul>
        <li>Học cú pháp cơ bản của ngôn ngữ</li>
        <li>Hiểu rõ về các kiểu dữ liệu</li>
        <li>Nắm vững các cấu trúc điều khiển</li>
        <li>Thực hành giải quyết bài toán đơn giản</li>
      </ul>

      <h2>2. Thực hành thường xuyên</h2>
      <p>Lập trình là kỹ năng thực hành. Hãy code mỗi ngày, bắt đầu với các dự án nhỏ và dần dần tăng độ phức tạp.</p>

      <h2>3. Tài nguyên học tập</h2>
      <ul>
        <li>Khóa học trực tuyến (Coursera, Udemy)</li>
        <li>Documentation chính thức</li>
        <li>YouTube tutorials</li>
        <li>Coding challenges (LeetCode, HackerRank)</li>
      </ul>

      <h2>4. Tham gia cộng đồng</h2>
      <p>Kết nối với cộng đồng lập trình viên qua:</p>
      <ul>
        <li>GitHub</li>
        <li>Stack Overflow</li>
        <li>Discord servers</li>
        <li>Meetups địa phương</li>
      </ul>
    `,
    date: '2023-11-20',
    image: '/images/learning-programming.jpg',
    tags: ['Học lập trình', 'Lời khuyên', 'Phương pháp học']
  },
  'chung-chi-lap-trinh-quan-trong': {
    title: 'Các chứng chỉ lập trình quan trọng nên có',
    content: `
      <p>Chứng chỉ lập trình không chỉ là bằng chứng cho kiến thức của bạn mà còn là lợi thế trong công việc. Hãy tìm hiểu về những chứng chỉ quan trọng trong ngành.</p>

      <h2>1. Chứng chỉ Web Development</h2>
      <ul>
        <li>Meta Front-End Developer Certificate</li>
        <li>AWS Certified Developer</li>
        <li>Google Professional Cloud Developer</li>
        <li>Microsoft Certified: Azure Developer Associate</li>
      </ul>

      <h2>2. Chứng chỉ JavaScript</h2>
      <ul>
        <li>JavaScript Institute Certification</li>
        <li>OpenJS Node.js Application Developer</li>
        <li>OpenJS Node.js Services Developer</li>
      </ul>

      <h2>3. Chứng chỉ Framework</h2>
      <ul>
        <li>React Developer Certification</li>
        <li>Vue.js Certification</li>
        <li>Angular Certification</li>
      </ul>

      <h2>4. Lộ trình học và thi chứng chỉ</h2>
      <ol>
        <li>Chọn chứng chỉ phù hợp với mục tiêu nghề nghiệp</li>
        <li>Nghiên cứu kỹ về nội dung và yêu cầu</li>
        <li>Lập kế hoạch học tập chi tiết</li>
        <li>Thực hành và làm bài tập mẫu</li>
        <li>Đăng ký và chuẩn bị cho kỳ thi</li>
      </ol>
    `,
    date: '2023-11-18',
    image: '/images/programming-certificates.jpg',
    tags: ['Chứng chỉ', 'Phát triển nghề nghiệp', 'Học lập trình']
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-gray-500 mb-8">{post.date}</p>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg mb-8 object-cover w-full"
          />
        </header>
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

