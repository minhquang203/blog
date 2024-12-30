'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})
  const { scrollY } = useScroll()

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8])
  const headerBlur = useTransform(scrollY, [0, 100], [0, 8])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // offset

      Object.entries(sectionsRef.current).forEach(([key, ref]) => {
        if (ref && ref.offsetTop <= scrollPosition && ref.offsetTop + ref.offsetHeight > scrollPosition) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-800 text-white">
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-filter"
        style={{ opacity: headerOpacity, backdropFilter: `blur(${headerBlur}px)` }}
      >
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <Button
                  variant="ghost"
                  className={`text-sm ${activeSection === section ? 'text-purple-400' : 'text-gray-300'}`}
                  onClick={() => scrollTo(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </motion.header>

      <main className="container mx-auto px-4 py-20">
        <AnimatedSection className="h-screen flex flex-col justify-center items-center text-center" id="home" ref={(el) => (sectionsRef.current['home'] = el)}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-purple-500"
            />
          </motion.div>
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Tran Minh Quang
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Web Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button onClick={() => scrollTo('about')} className="group">
              Learn More
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="py-20" id="about" ref={(el) => (sectionsRef.current['about'] = el)}>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate web developer with 5 years of experience in creating responsive and user-friendly web applications. 
              My journey in tech started with a curiosity for how things work on the internet, which led me to dive deep into the world of web development.
              I specialize in React, Node.js, and modern web technologies, always staying up-to-date with the latest trends and best practices.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups.
              I believe in the power of technology to solve real-world problems and I'm always excited to take on new challenges that push the boundaries of what's possible on the web.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20" id="skills" ref={(el) => (sectionsRef.current['skills'] = el)}>
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <motion.div className="flex flex-wrap justify-center gap-4" variants={stagger}>
            {[
              'React', 'Next.js', 'Node.js', 'TypeScript', 'TailwindCSS', 
              'GraphQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'CI/CD'
            ].map((skill) => (
              <motion.div key={skill} variants={fadeInUp}>
                <Badge variant="secondary" className="text-lg py-2 px-4 bg-purple-700 hover:bg-purple-600 transition-colors">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="py-20" id="projects" ref={(el) => (sectionsRef.current['projects'] = el)}>
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={stagger}>
            {[
              { 
                title: 'E-commerce Platform', 
                description: 'A full-stack e-commerce solution built with Next.js and Stripe',
                image: '/placeholder.svg?height=200&width=350',
                link: '#'
              },
              { 
                title: 'Task Management App', 
                description: 'A React-based task manager with drag-and-drop functionality',
                image: '/placeholder.svg?height=200&width=350',
                link: '#'
              },
              { 
                title: 'Weather Dashboard', 
                description: 'A weather app using React and OpenWeatherMap API',
                image: '/placeholder.svg?height=200&width=350',
                link: '#'
              },
              { 
                title: 'Blog CMS', 
                description: 'A custom CMS built with Node.js and MongoDB',
                image: '/placeholder.svg?height=200&width=350',
                link: '#'
              }
            ].map((project, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden bg-gray-800 hover:bg-gray-700 transition-colors">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={350}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Button asChild variant="secondary">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="py-20" id="contact" ref={(el) => (sectionsRef.current['contact'] = el)}>
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className="w-full p-2 bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
              ></textarea>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <motion.div 
            className="flex justify-center space-x-4 mt-8"
            variants={stagger}
          >
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:jane@example.com" }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Button variant="outline" size="icon" asChild className="bg-gray-800 hover:bg-gray-700">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

