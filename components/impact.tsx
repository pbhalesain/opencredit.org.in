import { Card } from "@/components/ui/card"

const impacts = [
  { value: "50M", label: "Merchants", description: "Gain access to transparent credit scoring (5 years)" },
  { value: "₹5T", label: "Credit Flow", description: "Additional credit to underserved segments" },
  { value: "40%", label: "Reduction", description: "In loan rejection rates for eligible merchants" },
  { value: "30%", label: "Cost Savings", description: "Reduction in borrowing costs via marketplace" },
  { value: "15M", label: "Jobs Created", description: "Direct and indirect employment" },
  { value: "100%", label: "Transparency", description: "In credit assessment methodology" },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projected Impact</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative potential for India's financial ecosystem over 5 years.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((impact, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl font-bold text-primary">{impact.value}</div>
              <div className="text-lg font-semibold text-foreground mt-2">{impact.label}</div>
              <div className="text-sm text-muted-foreground mt-1">{impact.description}</div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">Financial Inclusion</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Equal approval rates across genders and regions. 60% reduction in loan rejection for marginalized
              communities. Rural-urban parity in credit access.
            </p>
          </Card>
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">Economic Growth</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3% increase in MSME GDP contribution. ₹15 trillion cumulative GDP impact. ₹1.5 trillion additional GST
              collection through formalization.
            </p>
          </Card>
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-lg font-semibold text-foreground mb-3">Social Impact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              5 million families lifted above poverty line. 40% increase in credit access for women entrepreneurs. 20
              million rural merchants gain access.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
