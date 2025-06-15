import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="text-primary">Richard Dillman</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-semibold">Web Developer</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm a seasoned web developer with a passion for building applications that help people connect
                elegantly, seamlessly, and securely with the things that matter to them. I bring deep familiarity with
                both modern and traditional web technologies, along with an in-depth knowledge of usability and graceful
                degradation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#contact">Get In Touch</Link>
                </Button>
              </div>
              <div className="flex justify-center lg:justify-start space-x-6">
                <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:richard@richarddillman.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image src="/richard-profile.jpg" alt="Richard Dillman" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
