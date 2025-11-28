import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Rocket,
  Target,
  Users,
  Building2,
  Globe,
  CheckCircle2,
  Clock,
  Circle,
  TrendingUp,
  Landmark,
  Github,
  Calendar,
} from "lucide-react"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Project Milestones",
  description:
    "Track OpenCredit's journey from concept to market leadership. View our progress, achievements, and upcoming milestones in democratizing credit access in India.",
  path: "/milestones",
})

const milestones = [
  {
    id: "m1",
    title: "Project Inception",
    description: "OpenCredit initiative founded with mission to democratize credit access",
    date: "Q3 2025",
    status: "completed",
    category: "Foundation",
    icon: Rocket,
  },
  {
    id: "m2",
    title: "Open Source Launch",
    description: "Credit scoring engine released on GitHub under Apache 2.0 license",
    date: "Q4 2025",
    status: "in-progress",
    category: "Development",
    icon: Github,
  },
  {
    id: "m3",
    title: "First 1M Merchants",
    description: "Onboard first million merchants to the OpenCredit platform",
    date: "Q1 2026",
    status: "upcoming",
    category: "Growth",
    icon: Users,
  },
  {
    id: "m4",
    title: "5 Lender Partnerships",
    description: "Partner with 5 NBFCs and cooperative banks for pilot lending",
    date: "Q2 2026",
    status: "upcoming",
    category: "Partnerships",
    icon: Building2,
  },
  {
    id: "m5",
    title: "RBI Sandbox Entry",
    description: "Enter RBI regulatory sandbox for alternative credit scoring",
    date: "Q2 2026",
    status: "upcoming",
    category: "Regulatory",
    icon: Landmark,
  },
  {
    id: "m6",
    title: "₹1,000 Cr Loans Facilitated",
    description: "Facilitate first ₹1,000 crore in loans through OpenCredit scores",
    date: "Q4 2026",
    status: "upcoming",
    category: "Impact",
    icon: TrendingUp,
  },
  {
    id: "m7",
    title: "Consumer Credit Launch",
    description: "Launch consumer credit scoring for individuals",
    date: "Q1 2027",
    status: "upcoming",
    category: "Product",
    icon: Target,
  },
  {
    id: "m8",
    title: "Regional Expansion",
    description: "Expand to tier 2 and tier 3 cities across India",
    date: "Q3 2027",
    status: "upcoming",
    category: "Growth",
    icon: Globe,
  },
]

const kpis = [
  { label: "Merchants Onboarded", target: "5M", current: "0", progress: 0 },
  { label: "Lender Partners", target: "10", current: "0", progress: 0 },
  { label: "Loans Facilitated", target: "₹10,000 Cr", current: "₹0", progress: 0 },
  { label: "GitHub Stars", target: "1,000", current: "0", progress: 0 },
]

const phases = [
  {
    phase: "Phase 1: Foundation",
    timeline: "Year 1 (2025-2026)",
    goals: [
      "Launch open-source credit scoring engine",
      "Onboard 5 million merchants",
      "Partner with 10 lenders",
      "Facilitate ₹10,000 crore in loans",
      "Pilot in 5 major cities",
    ],
    status: "active",
  },
  {
    phase: "Phase 2: Scale-Up",
    timeline: "Year 2-3 (2026-2028)",
    goals: [
      "Expand to 25 million merchants",
      "50 lender partnerships",
      "₹50,000 crore annual loan volume",
      "Consumer credit scoring launch",
      "10+ regional languages",
    ],
    status: "planned",
  },
  {
    phase: "Phase 3: Maturity",
    timeline: "Year 4-5 (2028-2030)",
    goals: [
      "50 million merchants, 200 million consumers",
      "100+ lender partnerships",
      "₹2,00,000 crore annual loans",
      "AI/ML credit models",
      "International expansion",
    ],
    status: "vision",
  },
]

function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-primary" />
    case "in-progress":
      return <Clock className="w-5 h-5 text-amber-500" />
    default:
      return <Circle className="w-5 h-5 text-muted-foreground" />
  }
}

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return <Badge className="bg-primary/10 text-primary border-0">Completed</Badge>
    case "in-progress":
      return <Badge className="bg-amber-500/10 text-amber-600 border-0">In Progress</Badge>
    default:
      return <Badge variant="outline">Upcoming</Badge>
  }
}

export default function MilestonesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Project Milestones"
        description="Track our journey from concept to market leadership. OpenCredit is committed to transparency in our progress, achievements, and roadmap for democratizing credit access in India."
        lastUpdated="November 2025"
        githubPath="MILESTONES.md"
      />

      {/* KPI Dashboard */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6">Key Progress Indicators</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <Card key={kpi.label} className="border-border">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{kpi.current}</span>
                    <span className="text-sm text-muted-foreground">/ {kpi.target}</span>
                  </div>
                  <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${kpi.progress}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Milestone Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.id} className="relative flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 w-12 h-12 bg-background border-2 border-border rounded-full flex items-center justify-center shrink-0">
                    <milestone.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-border">
                    <CardContent className="p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(milestone.status)}
                          <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                        </div>
                        {getStatusBadge(milestone.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{milestone.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {milestone.date}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {milestone.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">5-Year Implementation Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <Card
                key={phase.phase}
                className={`border-border ${phase.status === "active" ? "ring-2 ring-primary" : ""}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={phase.status === "active" ? "default" : "secondary"}>
                      {phase.status === "active" ? "Current" : phase.status === "planned" ? "Planned" : "Vision"}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <p className="text-sm text-muted-foreground">{phase.timeline}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Help Us Reach Our Goals</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            OpenCredit is a community-driven initiative. Whether you&apos;re a developer, researcher, lender, or
            advocate for financial inclusion, there&apos;s a way for you to contribute.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contributing">Start Contributing</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/opencredit" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
