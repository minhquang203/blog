import { Badge } from "@/components/ui/badge"
import Image from 'next/image'
import { notFound } from 'next/navigation'

const blogPosts = {
  'gioi-thieu-javascript': {
    title: 'Giới thiệu về JavaScript cho người mới bắt đầu',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300">JavaScript là một ngôn ngữ lập trình mạnh mẽ, phổ biến và không thể thiếu trong phát triển web. Được sử dụng rộng rãi trong frontend và backend, JavaScript đã trở thành một trong những ngôn ngữ quan trọng nhất trong công nghệ web hiện đại. Bài viết này sẽ giúp bạn hiểu rõ hơn về JavaScript, tại sao nó lại quan trọng và cách bắt đầu học nó.</p>
      
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">JavaScript là gì?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">JavaScript là một ngôn ngữ lập trình high-level, không cần biên dịch và được sử dụng chủ yếu để phát triển các trang web động. Nó cho phép bạn tạo ra những trải nghiệm tương tác phong phú cho người dùng thông qua các tính năng như thay đổi nội dung trang web mà không cần tải lại trang.</p>
      
      <p class="text-lg text-gray-700 dark:text-gray-300">Một số tính năng nổi bật của JavaScript bao gồm:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300">Tạo các trang web động và tương tác.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Xử lý sự kiện người dùng như click, di chuột, nhập liệu.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Tạo các ứng dụng web phức tạp với React, Angular, Vue, hoặc làm việc với Node.js ở phía server.</li>
      </ul>
      
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Tại sao JavaScript lại quan trọng?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">JavaScript không chỉ là một công cụ để tạo ra các trang web động mà còn có khả năng xây dựng các ứng dụng web mạnh mẽ, chạy mượt mà trên mọi thiết bị và trình duyệt. Dưới đây là một số lý do tại sao JavaScript lại vô cùng quan trọng:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300">JavaScript giúp tạo ra trải nghiệm người dùng tốt hơn bằng cách giảm thiểu việc tải lại trang.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Với khả năng hỗ trợ các framework và thư viện mạnh mẽ (React, Angular, Vue.js), JavaScript giúp phát triển ứng dụng web hiện đại một cách nhanh chóng và hiệu quả.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">JavaScript còn có thể chạy trên server thông qua Node.js, cho phép lập trình viên phát triển ứng dụng full-stack chỉ với một ngôn ngữ duy nhất.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Các công cụ và thư viện của JavaScript cũng hỗ trợ phát triển ứng dụng di động, như React Native.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Lộ trình học JavaScript</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Để học JavaScript, bạn cần nắm vững một số khái niệm cơ bản trước khi tiến đến các tính năng nâng cao. Dưới đây là lộ trình học JavaScript từ cơ bản đến nâng cao:</p>
      <ol class="list-decimal pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300">Bắt đầu với cú pháp cơ bản: biến, hàm, vòng lặp, câu điều kiện.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Hiểu rõ về DOM (Document Object Model) và cách JavaScript tương tác với HTML/CSS để thay đổi nội dung trang web.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Nắm vững ES6+ (ECMAScript 6 và các tính năng mới như Arrow Functions, Template Literals, và các phương thức của Array).</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Học về các cấu trúc dữ liệu nâng cao như Object, Array, và các kỹ thuật như Destructuring, Spread Operator.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Tìm hiểu về lập trình bất đồng bộ (Asynchronous Programming) với Promises, async/await.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Khám phá các thư viện và framework phổ biến như React, Vue, Angular để phát triển ứng dụng front-end.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Thực hành với Node.js để xây dựng ứng dụng backend bằng JavaScript.</li>
      </ol>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Ví dụ về JavaScript cơ bản</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Dưới đây là một ví dụ đơn giản về JavaScript:</p>
      <pre class="bg-gray-100 p-4 rounded-lg">
        <code>
          <span class="text-purple-500">const</span> message = <span class="text-green-500">'Hello, World!'</span>;
          <span class="text-purple-500">console</span>.<span class="text-blue-500">log</span>(message);
        </code>
      </pre>
      <p class="text-lg text-gray-700 dark:text-gray-300">Trong ví dụ trên, chúng ta khai báo một biến <code>message</code> và in giá trị của nó ra console bằng cách sử dụng <code>console.log()</code>.</p>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Kết luận</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">JavaScript là một ngôn ngữ mạnh mẽ và linh hoạt, không thể thiếu trong phát triển web hiện đại. Bằng cách học JavaScript, bạn có thể tạo ra các trang web động và các ứng dụng phức tạp. Hãy bắt đầu với những kiến thức cơ bản và từ từ nâng cao kỹ năng của bạn qua các dự án thực tế. Chúc bạn thành công trên hành trình học JavaScript!</p>
    `,
    date: '2023-11-27',
    image: '/Java.jpg',
    tags: ['JavaScript', 'Frontend', 'Web Development']
  },
  'nextjs-va-uu-diem': {
    title: 'Next.js vs React: Sự khác biệt và lý do chọn Next.js cho dự án của bạn',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300">Trong thế giới phát triển web hiện đại, React đã trở thành một trong những thư viện phổ biến nhất cho việc xây dựng giao diện người dùng. Tuy nhiên, khi nói đến phát triển ứng dụng web toàn diện, Next.js - một framework xây dựng trên React - lại cung cấp rất nhiều tính năng mạnh mẽ mà React không có. Hãy cùng khám phá sự khác biệt giữa React và Next.js, và lý do bạn nên chọn Next.js cho dự án của mình.</p>
      
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">React là gì?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">React là một thư viện JavaScript được phát triển bởi Facebook, giúp xây dựng giao diện người dùng (UI) động và phản ứng (reactive). React tập trung vào việc xây dựng các component tái sử dụng, giúp việc phát triển các giao diện web trở nên dễ dàng và linh hoạt. Tuy nhiên, React chỉ là thư viện chuyên về việc xây dựng giao diện, bạn vẫn cần phải tích hợp các công cụ khác để xử lý routing, state management, tối ưu hóa SEO, v.v.</p>
      
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Next.js là gì?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Next.js là một framework React phát triển bởi Vercel, cung cấp rất nhiều tính năng vượt trội mà React không có sẵn. Một trong những tính năng nổi bật nhất của Next.js là khả năng render ứng dụng phía server (Server-side Rendering - SSR), giúp cải thiện SEO và hiệu suất tải trang.</p>
      
      <h3 class="text-xl font-semibold text-gray-800 dark:text-white mt-4">Các tính năng nổi bật của Next.js:</h3>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300">Server-side Rendering (SSR): Render ứng dụng trên server thay vì trên client, giúp tối ưu hóa SEO và tốc độ tải trang.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Static Site Generation (SSG): Tạo ra các trang tĩnh từ dữ liệu động, giúp tối ưu hóa hiệu suất và bảo mật.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">API Routes: Next.js cho phép bạn tạo API endpoints trực tiếp trong ứng dụng mà không cần server ngoài.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300">Tối ưu hóa hình ảnh tự động: Next.js tự động tối ưu hóa hình ảnh cho phù hợp với các thiết bị và độ phân giải khác nhau.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Sự khác biệt giữa Next.js và React</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Mặc dù Next.js xây dựng trên React, nhưng nó cung cấp nhiều tính năng mà React không có sẵn. Đây là một số sự khác biệt lớn giữa chúng:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Routing:</strong> React không cung cấp routing mặc định, bạn cần phải sử dụng thư viện như React Router. Ngược lại, Next.js có routing tích hợp sẵn với hệ thống dựa trên thư mục (file-based routing).</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Render phía server:</strong> React chỉ render phía client, còn Next.js hỗ trợ cả SSR và SSG.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>API Routes:</strong> Với React, bạn cần một backend riêng để xử lý các API request, trong khi Next.js cho phép bạn tạo API endpoints ngay trong framework.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">Khi nào bạn nên chọn Next.js?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Nếu dự án của bạn yêu cầu tối ưu hóa SEO, tốc độ tải trang, và việc render dữ liệu động phía server, Next.js là một sự lựa chọn tuyệt vời. Ngoài ra, nếu bạn cần xây dựng một ứng dụng full-stack mà không muốn phải tích hợp nhiều công cụ, Next.js cung cấp mọi thứ bạn cần, từ front-end đến back-end (API Routes).</p>

      <h3 class="text-xl font-semibold text-gray-800 dark:text-white mt-4">Kết luận</h3>
      <p class="text-lg text-gray-700 dark:text-gray-300">Trong khi React rất mạnh mẽ và linh hoạt, Next.js mang lại một số tính năng mạnh mẽ để giúp bạn phát triển ứng dụng web nhanh chóng và hiệu quả hơn. Nếu bạn muốn tận dụng tối đa khả năng của React và cần các tính năng như SSR, SSG, và API Routes, Next.js sẽ là framework lý tưởng cho dự án của bạn.</p>
    `,
    date: '2023-12-10',
    image: '/next-vs-react.webp',
    tags: ['Next.js', 'React', 'Web Development', 'SEO']
  };
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
    image: '/nodejs.png',
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
    image: '/hoc.jpg',
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

