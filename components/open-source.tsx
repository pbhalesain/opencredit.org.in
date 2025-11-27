import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Code, Shield, Rocket, Globe } from "lucide-react"
import Link from "next/link"

const benefits = [
  {
    icon: Shield,
    title: "Trust Through Transparency",
    description: "Anyone can review code, algorithms, and scoring logic. Community auditing ensures fairness.",
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    description: "Open collaboration improves algorithms. Bugs and biases quickly identified and fixed.",
  },
  {
    icon: Code,
    title: "Ecosystem Development",
    description: "Lenders, fintechs, and cooperatives can build on and customize the platform.",
  },
  {
    icon: Globe,
    title: "International Expansion",
    description: "Model can be replicated in Southeast Asia, Africa, and Latin America.",
  },
]

export function OpenSource() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Why Open Source?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Open source is not just a technical choice—it's a commitment to transparency, fairness, and community-driven
            innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-foreground text-background">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-background/10 rounded-lg flex items-center justify-center">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Contribute to OpenCredit</h3>
                <p className="text-background/70">Join 1000+ contributors building fair credit infrastructure</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">GNU Lesser General Public  </div>
                <div className="text-sm text-background/70">License</div>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <Link href="https://github.com/opencredit" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View Repository
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
