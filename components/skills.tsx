import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "jQuery", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["PHP", "ColdFusion", "SQL", "MySQL", "PostgreSQL", "Triggers", "Views", "Stored Procedures"],
    },
    {
      title: "Tools & Design",
      skills: [
        "Photoshop",
        "Git",
        "Cross-browser Testing",
        "Section 508 Compliance",
        "Usability",
        "Graceful Degradation",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning traditional and modern web technologies, with deep expertise in both
            front-end and back-end development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-3xl mx-auto">
            I bring deep familiarity with older standards and an in-depth knowledge of usability, graceful degradation,
            cross-browser methodologies, and Section 508 requirements. I'm also familiar with the new toys and the
            really, really old ones too.
          </p>
        </div>
      </div>
    </section>
  )
}
