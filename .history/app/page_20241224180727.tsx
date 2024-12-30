'use client'

import { ContactForm } from '@/components/ContactForm'
import { Navbar } from '@/components/Navbar'
import { ProjectCard } from '@/components/ProjectCard'
import { SkillBar } from '@/components/SkillBar'
import { Button } from "@/components/ui/button"
import { motion, useScroll } from 'framer-motion'
import { ChevronDown, Cloud, Code, Cog, Database, Download, Github, Globe, Linkedin, Mail, Moon, Server, Sparkles, Sun } from 'lucide-react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false })
const AnimatedCursor = dynamic(() => import('@/components/AnimatedCursor'), { ssr: false })

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Home() {
  const [theme, setTheme] = useState('dark')
  const { scrollY } = useScroll()
  const [activeSection, setActiveSection] = useState('home')

  const skills = [
    { name: 'Frontend Development', level: 90, icon: Code },
    { name: 'Backend Development', level: 85, icon: Server },
    { name: 'Database Management', level: 80, icon: Database },
    { name: 'Cloud Services', level: 75, icon: Cloud },
    { name: 'DevOps', level: 70, icon: Cog },
  ]

  const projects = [
    {
      title: 'AI-Powered Analytics',
      description: 'Real-time data analytics platform with machine learning capabilities',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['React', 'Python', 'TensorFlow', 'AWS'],
      link: '#',
      featured: true
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with headless CMS',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['Next.js', 'Stripe', 'Sanity.io'],
      link: '#'
    },
    {
      title: 'Social Network App',
      description: 'Real-time social platform with video calls',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['React Native', 'WebRTC', 'Firebase'],
      link: '#'
    }
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300 ${theme}`}>
      <AnimatedCursor />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
                src="../public/minhquang.jpg"
                alt="Profile"
                width={200}
                height={200}
                className="rounded-full relative z-10 border-4 border-white dark:border-gray-800"
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
              className="text-xl mb-8 text-gray-600 dark:text-gray-300"
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
      <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
      <section id="projects" className="py-20">
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
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Let's Connect
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
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:contact@example.com", label: "Email" },
              { icon: Globe, href: "https://example.com", label: "Website" }
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
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    </div>
  )
}

