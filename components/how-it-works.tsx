import { Card } from "@/components/ui/card"
import { QrCode, Database, Calculator, Building2, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: QrCode,
    step: "01",
    title: "UPI Transaction Data",
    description: "Merchant consents to share UPI transaction history from last 3-12 months.",
  },
  {
    icon: Database,
    step: "02",
    title: "Data Analysis",
    description: "Platform analyzes volume, consistency, growth, payment success rate, and customer diversity.",
  },
  {
    icon: Calculator,
    step: "03",
    title: "Transparent Scoring",
    description: "Open-source algorithm calculates credit score (0-100) with full breakdown visible.",
  },
  {
    icon: Building2,
    step: "04",
    title: "Lender Matching",
    description: "Multiple lenders compete to offer best terms through transparent marketplace.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Fair Credit Access",
    description: "Merchant selects best offer with full transparency on terms and conditions.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple, transparent, and fair credit assessment in five steps.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 bg-card border-border relative">
              <div className="text-6xl font-bold text-muted/30 absolute top-4 right-4">{step.step}</div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
