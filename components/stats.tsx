import { Card } from "@/components/ui/card"

const stats = [
  {
    value: "₹25T",
    label: "MSME Credit Gap",
    description: "Unmet credit needs in India",
  },
  {
    value: "69%",
    label: "MSMEs Underserved",
    description: "Report unmet credit needs",
  },
  {
    value: "190M",
    label: "Credit Invisible",
    description: "Adults without bureau records",
  },
  {
    value: "15.5B",
    label: "UPI Transactions",
    description: "Processed monthly",
  },
]

export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-background border-border">
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mt-2">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
