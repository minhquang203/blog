

  

const blogPosts = {
  "gioi-thieu-javascript": {
    title: "Giới thiệu về JavaScript cho người mới bắt đầu",
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
    date: "2023-11-27",
    image: "/Java.jpg",
    tags: ["JavaScript", "Frontend", "Web Development"],
  },
  "nextjs-va-uu-diem": {
    title:
      "Next.js vs React: Sự khác biệt và lý do chọn Next.js cho dự án của bạn",
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
    date: "2023-12-10",
    image: "/next.webp",
    tags: ["Next.js", "React", "Web Development", "SEO"],
  },
  "nodejs-backend-development": {
    title: "Node.js: Nền tảng cho phát triển Backend hiện đại",
    content: `
      <p>Node.js đã và đang thay đổi cách chúng ta xây dựng các ứng dụng phía máy chủ. Hãy tìm hiểu về những ưu điểm và cách sử dụng Node.js hiệu quả để tạo ra các ứng dụng backend mạnh mẽ, nhanh chóng và có thể mở rộng.</p>

      <h2>Node.js là gì?</h2>
      <p>Node.js là một môi trường runtime JavaScript được xây dựng trên V8 JavaScript engine của Chrome, cho phép chạy JavaScript trên máy chủ, thay vì chỉ sử dụng trong trình duyệt. Điều này giúp bạn có thể xây dựng các ứng dụng backend hiệu quả bằng JavaScript, tạo ra một môi trường thống nhất từ frontend đến backend.</p>

      <h2>Ưu điểm của Node.js</h2>
      <p>Node.js mang đến nhiều lợi ích khi xây dựng ứng dụng backend, đặc biệt cho các ứng dụng yêu cầu hiệu suất cao và khả năng xử lý nhiều kết nối đồng thời.</p>
      <ul>
        <li><strong>Non-blocking I/O:</strong> Node.js sử dụng mô hình non-blocking I/O giúp xử lý hàng nghìn kết nối đồng thời mà không làm giảm hiệu suất.</li>
        <li><strong>Event-driven architecture:</strong> Mô hình dựa trên sự kiện cho phép Node.js quản lý các yêu cầu trong thời gian thực, đặc biệt hữu ích cho các ứng dụng chat hoặc streaming.</li>
        <li><strong>Hệ sinh thái npm phong phú:</strong> npm (Node Package Manager) là kho thư viện mã nguồn mở lớn nhất thế giới, cung cấp hàng triệu gói thư viện hỗ trợ phát triển nhanh chóng.</li>
        <li><strong>Hiệu suất cao cho ứng dụng realtime:</strong> Node.js đặc biệt hiệu quả khi xây dựng các ứng dụng cần xử lý thời gian thực như chat hoặc game online nhờ vào khả năng xử lý sự kiện nhanh chóng.</li>
      </ul>

      <h2>Ví dụ về HTTP Server</h2>
      <p>Node.js cho phép bạn dễ dàng xây dựng các ứng dụng web với một HTTP server đơn giản. Đây là ví dụ về một server HTTP cơ bản sử dụng module <strong>http</strong> của Node.js:</p>
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
      <p>Express.js là framework phổ biến nhất được sử dụng cùng Node.js. Nó giúp đơn giản hóa quá trình xây dựng ứng dụng web bằng cách cung cấp các tính năng như routing, middleware và nhiều công cụ hữu ích khác.</p>
      <p>Dưới đây là ví dụ về cách tạo một API đơn giản với Express.js:</p>
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
      <p>Nhờ Express.js, bạn có thể dễ dàng mở rộng ứng dụng của mình với các API, middleware và xử lý các route phức tạp hơn.</p>

      <h2>Kết luận</h2>
      <p>Node.js là một lựa chọn tuyệt vời cho phát triển backend, đặc biệt cho các ứng dụng yêu cầu khả năng mở rộng và xử lý thời gian thực. Với những ưu điểm vượt trội như hiệu suất cao, non-blocking I/O, và sự hỗ trợ mạnh mẽ từ cộng đồng, Node.js tiếp tục là nền tảng phát triển backend phổ biến nhất hiện nay.</p>
    `,
    date: "2023-11-23",
    image: "/nodejs.png",
    tags: ["Node.js", "Backend", "JavaScript", "Express.js"],
  },
'hoc-lap-trinh-hieu-qua': {
    title: 'Phương pháp học lập trình hiệu quả cho người mới bắt đầu',
    content: `
      <p class="text-lg text-gray-700 dark:text-gray-300">Học lập trình là một hành trình đầy thử thách nhưng cũng rất thú vị. Đặc biệt đối với những ai mới bắt đầu, việc xây dựng nền tảng vững chắc sẽ giúp bạn tự tin hơn trong việc giải quyết các bài toán khó khăn sau này. Cùng khám phá những phương pháp và chiến lược học lập trình hiệu quả để bạn có thể tiến bộ nhanh chóng và dễ dàng vượt qua mọi khó khăn!</p>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">1. Xây dựng nền tảng vững chắc</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Để trở thành lập trình viên giỏi, bạn cần bắt đầu từ những điều cơ bản. Hãy chắc chắn bạn đã hiểu rõ:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Cú pháp cơ bản</strong>: Mỗi ngôn ngữ lập trình đều có cú pháp riêng, và việc nắm vững cú pháp là bước đầu tiên để bắt tay vào việc lập trình.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Kiểu dữ liệu</strong>: Hiểu rõ cách sử dụng các kiểu dữ liệu cơ bản như số nguyên, chuỗi, mảng, đối tượng sẽ giúp bạn thao tác hiệu quả hơn trong quá trình lập trình.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Cấu trúc điều khiển</strong>: Các cấu trúc điều khiển như if, loop, switch sẽ giúp bạn điều khiển dòng chảy của chương trình một cách linh hoạt.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Giải quyết bài toán đơn giản</strong>: Bắt đầu với các bài tập dễ, sau đó từ từ nâng dần độ khó để hiểu sâu hơn về cách giải quyết vấn đề.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">2. Thực hành thường xuyên: Lập trình là kỹ năng thực hành</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Lập trình không phải là môn học lý thuyết. Để giỏi, bạn cần phải luyện tập mỗi ngày. Hãy bắt đầu với các dự án nhỏ và từ từ thử thách bản thân với những vấn đề phức tạp hơn. Càng thực hành nhiều, bạn sẽ càng nắm vững các kỹ năng cần thiết.</p>
      <p class="text-lg text-gray-700 dark:text-gray-300">Đừng ngần ngại khi gặp khó khăn, vì đó là cách để bạn học hỏi và tiến bộ. Mỗi lỗi sai là một bài học quý giá!</p>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">3. Tài nguyên học tập phong phú</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Ngày nay, việc học lập trình trở nên dễ dàng hơn bao giờ hết nhờ vào vô số tài nguyên trực tuyến. Bạn có thể học từ nhiều nguồn khác nhau:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Khóa học trực tuyến</strong>: Các nền tảng như Coursera, Udemy cung cấp hàng nghìn khóa học chất lượng, giúp bạn tiếp cận kiến thức một cách có hệ thống.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Documentation chính thức</strong>: Mỗi ngôn ngữ lập trình đều có tài liệu chính thức, nơi bạn có thể tìm hiểu chi tiết về các thư viện và chức năng sẵn có.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>YouTube tutorials</strong>: Các video hướng dẫn trên YouTube giúp bạn dễ dàng hình dung cách giải quyết vấn đề.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Coding challenges</strong>: Các trang như LeetCode và HackerRank cung cấp bài tập coding giúp bạn rèn luyện kỹ năng giải quyết vấn đề một cách hiệu quả.</li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mt-6">4. Tham gia cộng đồng lập trình viên</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300">Không ai có thể thành công một mình, và cộng đồng lập trình viên chính là một nguồn lực vô cùng quý báu. Tham gia vào cộng đồng sẽ giúp bạn:</p>
      <ul class="list-disc pl-8 mt-4">
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>GitHub</strong>: Là nơi bạn có thể chia sẻ mã nguồn, học hỏi từ người khác và đóng góp vào các dự án mã nguồn mở.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Stack Overflow</strong>: Một diễn đàn lớn nơi bạn có thể tìm kiếm giải đáp cho mọi thắc mắc lập trình.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Discord servers</strong>: Kết nối với các lập trình viên từ khắp nơi trên thế giới, trao đổi kiến thức và thảo luận về các chủ đề lập trình thú vị.</li>
        <li class="text-lg text-gray-700 dark:text-gray-300"><strong>Meetups địa phương</strong>: Tham gia các cuộc gặp gỡ tại địa phương để giao lưu, học hỏi và kết nối với các lập trình viên khác.</li>
      </ul>
      <p class="text-lg text-gray-700 dark:text-gray-300">Với một nền tảng vững chắc, sự kiên trì trong thực hành và một cộng đồng hỗ trợ, bạn sẽ nhanh chóng phát triển kỹ năng lập trình của mình. Chúc bạn thành công trong hành trình học lập trình!</p>
    `,
    date: '2023-11-20',
    image: '/hoc.jpg',
    tags: ['Học lập trình', 'Lời khuyên', 'Phương pháp học']
  },
  "chung-chi-lap-trinh-quan-trong": {
    title: "Các chứng chỉ lập trình quan trọng nên có",
    content: `
    <p>Chứng chỉ lập trình không chỉ là bằng chứng cho kiến thức của bạn mà còn là lợi thế trong công việc. Hãy tìm hiểu về những chứng chỉ quan trọng trong ngành lập trình giúp bạn nâng cao kỹ năng và sự nghiệp của mình.</p>

    <h2><i class="fas fa-laptop-code"></i> 1. Chứng chỉ Web Development</h2>
    <ul>
      <li><i class="fab fa-react"></i> Meta Front-End Developer Certificate</li>
      <li><i class="fab fa-node-js"></i> AWS Certified Developer</li>
      <li><i class="fab fa-google"></i> Google Professional Cloud Developer</li>
      <li><i class="fab fa-microsoft"></i> Microsoft Certified: Azure Developer Associate</li>
    </ul>

    <h2><i class="fab fa-js-square"></i> 2. Chứng chỉ JavaScript</h2>
    <ul>
      <li><i class="fas fa-code"></i> JavaScript Institute Certification</li>
      <li><i class="fab fa-node-js"></i> OpenJS Node.js Application Developer</li>
      <li><i class="fab fa-node-js"></i> OpenJS Node.js Services Developer</li>
    </ul>

    <h2><i class="fas fa-cogs"></i> 3. Chứng chỉ Framework</h2>
    <ul>
      <li><i class="fab fa-react"></i> React Developer Certification</li>
      <li><i class="fab fa-vuejs"></i> Vue.js Certification</li>
      <li><i class="fab fa-angular"></i> Angular Certification</li>
    </ul>

    <h2><i class="fas fa-calendar-check"></i> 4. Lộ trình học và thi chứng chỉ</h2>
    <ol>
      <li>Chọn chứng chỉ phù hợp với mục tiêu nghề nghiệp</li>
      <li>Nghiên cứu kỹ về nội dung và yêu cầu của từng chứng chỉ</li>
      <li>Lập kế hoạch học tập chi tiết và thực hiện nghiêm túc</li>
      <li>Thực hành và làm bài tập mẫu để củng cố kiến thức</li>
      <li>Đăng ký và chuẩn bị tốt cho kỳ thi chứng chỉ</li>
    </ol>

    <h2><i class="fas fa-thumbs-up"></i> Kết luận</h2>
    <p>Chứng chỉ lập trình là một công cụ mạnh mẽ để nâng cao khả năng cạnh tranh trong ngành công nghệ. Mặc dù kiến thức thực tế rất quan trọng, nhưng chứng chỉ là yếu tố không thể thiếu giúp bạn khẳng định năng lực và mở ra cơ hội nghề nghiệp mới.</p>
  `,
    date: "2023-11-18",
    image: "/images/programming-certificates.jpg",
    tags: ["Chứng chỉ", "Phát triển nghề nghiệp", "Học lập trình"],
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
    // Lấy bài viết từ blogPosts dựa trên slug
    const post = blogPosts[params.slug];
  
    // Kiểm tra nếu không có bài viết thì trả về thông báo lỗi
    if (!post) {
      return <p>Post not found.</p>; // Hoặc điều hướng đến trang khác nếu cần
    }
  
    return (
      <div>
        <h1>{post.title}</h1>
        
        {/* Hiển thị các tag của bài viết */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(post.tags ?? []).map((tag, index) => (
            <span key={index} className="badge">
              {tag}
            </span>
          ))}
        </div>
  
        {/* Nội dung bài viết */}
        <div>{post.content}</div>
      </div>
    );
  }
