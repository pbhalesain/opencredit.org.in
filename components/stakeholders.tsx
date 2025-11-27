import { Card } from "@/components/ui/card"
import { Store, Building2, Landmark, Users, Building, Briefcase } from "lucide-react"

const stakeholders = [
  {
    icon: Store,
    title: "Merchants & MSMEs",
    description: "Small retailers, street vendors, service providers, and micro-enterprises gain fair credit access.",
  },
  {
    icon: Users,
    title: "Consumers",
    description: "Credit-invisible individuals can build credit history through UPI payment behavior.",
  },
  {
    icon: Building2,
    title: "NBFCs & Fintechs",
    description: "Access to verified merchant data reduces customer acquisition costs and risk.",
  },
  {
    icon: Landmark,
    title: "Banks",
    description: "Expand reach to underserved segments with reliable alternative credit signals.",
  },
  {
    icon: Building,
    title: "Cooperative Societies",
    description: "Credit unions and SHGs can make data-driven lending decisions for members.",
  },
  {
    icon: Briefcase,
    title: "Regulators",
    description: "RBI and SEBI can audit transparent algorithms. Real-time data enables agile policy-making.",
  },
]

export function Stakeholders() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Who Benefits</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A platform designed for all stakeholders in India's credit ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stakeholders.map((stakeholder, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <stakeholder.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stakeholder.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stakeholder.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
