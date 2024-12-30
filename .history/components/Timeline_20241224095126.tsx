import { Card, CardContent } from "@/components/ui/card"

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
        <div key={index} className="mb-8 flex">
          <div className="flex flex-col items-center mr-4">
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            {index !== experiences.length - 1 && <div className="w-1 h-full bg-purple-300"></div>}
          </div>
          <Card className="flex-grow">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

