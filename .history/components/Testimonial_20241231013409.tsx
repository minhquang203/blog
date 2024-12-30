import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  title: string
}

export function Testimonial({ quote, author, title }: TestimonialProps) {
  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <p className="text-gray-700 dark:text-gray-300 italic mb-4">&quot;{quote}&quot;</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-purple-500 rounded-full mr-4"></div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}