"use client";

import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillBar } from "@/components/SkillBar";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  { ssr: false }
);
const AnimatedCursor = dynamic(() => import("@/components/AnimatedCursor"), {
  ssr: false,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    { name: "Frontend Development", level: 60, icon: Code },
    { name: "Backend Development", level: 20, icon: Server },
  ];

  const projects = [
    {
      title: "HomeStayMove",
      description: "Dự án Book phòng thuê nhà",
      image: "/slide.jpg?height=400&width=600",
      tags: ["React.js", "Node.js", "MongoDB"],
      link: "https://homestaymove.example.com",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AnimatedCursor />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBackground />
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-xl opacity-50"></div>
              <Image
                src="/minhquang.jpg?height=200&width=200"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full relative z-10 border-4 border-gray-800"
              />
            </motion.div>
            <motion.h1
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Trần Minh Quang
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Blog cá nhân học hỏi và chia sẻ kiến thức về lập trình
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-4"
            >
              <Button className="group">
                View Projects
                <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
              <Button variant="outline" className="group">
                Download CV
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
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
              { icon: Github, href: "https://github.com/minhquang203", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "tranminhquang082003@gmail.com",
                label: "Email",
              },
              { icon: Globe, href: "https://example.com", label: "Website" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 rounded-full bg-gray-700 hover:bg-purple-900 transition-colors"
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
    </div>
  );
}