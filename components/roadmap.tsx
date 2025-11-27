import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    timeline: "Year 1",
    status: "In Progress",
    milestones: [
      "Launch open-source credit scoring engine on GitHub",
      "Onboard 5 million merchants",
      "Partner with 10 lenders (NBFCs, fintech, cooperative banks)",
      "Facilitate ₹10,000 crore in loans",
      "Pilot in 5 cities: Delhi, Mumbai, Bangalore, Hyderabad, Ahmedabad",
    ],
  },
  {
    phase: "Phase 2",
    title: "Scale-Up",
    timeline: "Year 2-3",
    status: "Planned",
    milestones: [
      "Expand to 25 million merchants",
      "50 lenders including banks and MFIs",
      "₹50,000 crore annual loan volume",
      "Launch consumer credit scoring (beta)",
      "Regional language support (10+ languages)",
    ],
  },
  {
    phase: "Phase 3",
    title: "Maturity",
    timeline: "Year 4-5",
    status: "Vision",
    milestones: [
      "50 million merchants, 200 million consumers",
      "100+ lender partnerships",
      "₹2,00,000 crore annual loans",
      "AI/ML credit models",
      "International expansion to Southeast Asia, Africa",
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">5-Year Roadmap</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Phased implementation strategy from proof of concept to market leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className={`p-6 bg-background border-border ${index === 0 ? "ring-2 ring-primary" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Badge variant={index === 0 ? "default" : "secondary"}>{phase.phase}</Badge>
                  <div className="text-sm text-muted-foreground mt-1">{phase.timeline}</div>
                </div>
                <Badge variant="outline">{phase.status}</Badge>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.milestones.map((milestone, mIndex) => (
                  <li key={mIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {milestone}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
