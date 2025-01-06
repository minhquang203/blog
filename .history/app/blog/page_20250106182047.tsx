// app/blog/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

// Đây thường sẽ đến từ cơ sở dữ liệu hoặc CMS
const blogPosts = [
  {
    slug: 'gioi-thieu-javascript',
    title: 'Giới thiệu về JavaScript cho người mới bắt đầu',
    excerpt: 'Khám phá những khái niệm cơ bản của JavaScript và tại sao nó lại quan trọng trong phát triển web hiện đại.',
    date: '2023-11-27',
    image: '/images/javascript-intro.jpg'
  },
  {
    slug: 'nextjs-va-uu-diem',
    title: 'Next.js và những ưu điểm trong phát triển ứng dụng React',
    excerpt: 'Tìm hiểu về Next.js và cách nó giúp tối ưu hóa quá trình phát triển ứng dụng React của bạn.',
    date: '2023-11-25',
    image: '/images/nextjs-benefits.jpg'
  },
  {
    slug: 'nodejs-backend-development',
    title: 'Node.js: Nền tảng cho phát triển Backend hiện đại',
    excerpt: 'Khám phá cách Node.js đang thay đổi cách chúng ta xây dựng các ứng dụng phía máy chủ.',
    date: '2023-11-23',
    image: '/images/nodejs-backend.jpg'
  },
  {
    slug: 'hoc-lap-trinh-hieu-qua',
    title: 'Phương pháp học lập trình hiệu quả cho người mới',
    excerpt: 'Những lời khuyên và chiến lược để học lập trình một cách hiệu quả, từ người mới bắt đầu đến chuyên gia.',
    date: '2023-11-20',
    image: '/images/learning-programming.jpg'
  },
  {
    slug: 'chung-chi-lap-trinh-quan-trong',
    title: 'Các chứng chỉ lập trình quan trọng nên có',
    excerpt: 'Tổng quan về các chứng chỉ lập trình được đánh giá cao trong ngành công nghiệp phần mềm.',
    date: '2023-11-18',
    image: '/images/programming-certificates.jpg'
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog Công Nghệ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={300}
                className="rounded-t-lg object-cover h-48 w-full"
              />
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="text-2xl font-semibold hover:text-purple-600 transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}