import { Card } from "@/components/ui/card"
import { Eye, Smartphone, Shield, Users, LineChart, Scale } from "lucide-react"

const principles = [
  {
    icon: Eye,
    title: "Transparency",
    description: "All credit scoring rules are open source and publicly auditable by anyone.",
  },
  {
    icon: Smartphone,
    title: "UPI-Based Assessment",
    description: "Leverage real-time UPI transaction data as primary credit signal.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Data used only with explicit consent, full DPDP Act compliance.",
  },
  {
    icon: Users,
    title: "Multi-Lender Marketplace",
    description: "Competitive lending environment drives down costs for borrowers.",
  },
  {
    icon: LineChart,
    title: "Borrower Empowerment",
    description: "Credit scores accessible before application with improvement tips.",
  },
  {
    icon: Scale,
    title: "Mandatory Disclosure",
    description: "Lenders must disclose proprietary rule weightages to borrowers.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The OpenCredit Solution</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto italic">
            "Every honest merchant with a UPI QR code deserves transparent access to fair credit."
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <Card key={index} className="p-6 bg-background border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{principle.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
