import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    slug: "gioi-thieu-javascript",
    title: "Giới thiệu về JavaScript cho người mới bắt đầu",
    excerpt: "Khám phá những khái niệm cơ bản của JavaScript và tại sao nó lại quan trọng trong phát triển web hiện đại.",
    date: "2023-11-27",
    tags: ["JavaScript", "Frontend", "Beginners"],
  },
  {
    slug: "nextjs-va-uu-diem",
    title: "Next.js và những ưu điểm trong phát triển ứng dụng React",
    excerpt: "Tìm hiểu về Next.js và cách nó giúp tối ưu hóa quá trình phát triển ứng dụng React của bạn.",
    date: "2023-11-25",
    tags: ["Next.js", "React", "Frontend"],
  },
  {
    slug: "nodejs-backend-development",
    title: "Node.js: Nền tảng cho phát triển Backend hiện đại",
    excerpt: "Khám phá cách Node.js đang thay đổi cách chúng ta xây dựng các ứng dụng phía máy chủ.",
    date: "2023-11-23",
    tags: ["Node.js", "Backend", "JavaScript"],
  },
  {
    slug: "hoc-lap-trinh-hieu-qua",
    title: "Phương pháp học lập trình hiệu quả cho người mới",
    excerpt: "Những lời khuyên và chiến lược để học lập trình một cách hiệu quả, từ người mới bắt đầu đến chuyên gia.",
    date: "2023-11-20",
    tags: ["Learning", "Programming", "Tips"],
  },
  {
    slug: "chung-chi-lap-trinh-quan-trong",
    title: "Các chứng chỉ lập trình quan trọng nên có",
    excerpt: "Tổng quan về các chứng chỉ lập trình được đánh giá cao trong ngành công nghiệp phần mềm.",
    date: "2023-11-18",
    tags: ["Certificates", "Career", "Development"],
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

