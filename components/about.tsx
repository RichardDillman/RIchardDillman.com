import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seasoned web developer with expertise spanning both front-end and back-end technologies, focused on
            creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                Experienced in both front-end and back-end development with PHP, ColdFusion, and modern web
                technologies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design & UX</h3>
              <p className="text-muted-foreground">
                Strong design skills with Photoshop and early training as an artist, enabling smooth collaboration with
                design teams.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
              <p className="text-muted-foreground">
                Passionate about using technology to help others, including recognized work with children's services
                organizations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I don't claim to be a graphic designer, but my skills in design tools and early training as an artist allow
            me to communicate easily with the design team, smoothing the transformation from concept to product.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, I enjoy long walks along the beach, healthy eating, gaming (World of Warcraft, Diablo,
            Settlers of Catan), gardening, and sculpting. I also care greatly about helping kids and take pride in my
            community contributions through technology.
          </p>
        </div>
      </div>
    </section>
  )
}
