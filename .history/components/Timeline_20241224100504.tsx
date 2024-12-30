import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'

export function Timeline() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description: "Lead developer for multiple high-profile projects, mentoring junior developers, and implementing best practices."
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Co.",
      period: "2018 - 2021",
      description: "Developed and maintained various web applications, focusing on performance optimization and user experience."
    },
    {
      title: "Junior Web Developer",
      company: "Web Solutions Ltd.",
      period: "2016 - 2018",
      description: "Assisted in the development of client websites and internal tools, gaining experience in front-end and back-end technologies."
    }
  ]

  return (
    <div className="max-w-2xl mx-auto">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index} 
          className="mb-8 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="flex flex-col items-center mr-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
              {index + 1}
            </div>
            {index < experiences.length - 1 && (
              <div className="h-full w-px bg-gray-300"></div>
            )}
          </div>
          <Card className="flex-1">
            <CardContent>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-500">{exp.company}</p>
              <p className="text-gray-400">{exp.period}</p>
              <p>{exp.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

