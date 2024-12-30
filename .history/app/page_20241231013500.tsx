import ContactForm from '@/components/ContactForm';
import Button from '@/components/ui/button';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Code, Moon, Server, Sun } from 'react-feather';

const AnimatedCursor = dynamic(() => import("@/components/AnimatedCursor"), {
  ssr: false,
});

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    { name: "Frontend Development", level: 60, icon: Code },
    { name: "Backend Development", level: 20, icon: Server },
  ];

  const projects = [
    {
      title: "HomeStayMove",
      description: "Dự án Book phòng thuê nhà",
      image: "/slide.jpg?height=400&width=600", // Đảm bảo rằng bạn đã đặt hình ảnh này trong thư mục public
      tags: ["React.js", "Node.js", "MongoDB"],
      link: "https://homestaymove.example.com",
      featured: true,
    },
    {
      title: "AI-Powered Analytics",
      description: "Real-time data analytics platform with machine learning capabilities",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Python", "TensorFlow", "AWS"],
      link: "#",
      featured: true,
    },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      {/* Nội dung khác */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
          <motion.div
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              // Các liên kết khác
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-6 w-6" />
                <span className="sr-only">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <Button
        className="fixed bottom-4 right-4 rounded-full p-2"
        variant="outline"
        size="icon"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}