import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const factors = [
  { name: "Transaction Volume", weight: "30%", description: "Average monthly UPI transaction volume" },
  { name: "Consistency", weight: "25%", description: "Standard deviation of monthly volumes" },
  { name: "Growth Rate", weight: "15%", description: "Recent 3 months vs previous 3 months" },
  { name: "Payment Success Rate", weight: "15%", description: "Successful transactions / Total transactions" },
  { name: "Customer Diversity", weight: "15%", description: "Concentration risk from top customers" },
]

const scoreRanges = [
  { range: "80-100", label: "Excellent", risk: "Low Risk", color: "bg-green-500" },
  { range: "60-79", label: "Good", risk: "Medium Risk", color: "bg-blue-500" },
  { range: "40-59", label: "Fair", risk: "Medium-High", color: "bg-yellow-500" },
  { range: "0-39", label: "Poor", risk: "High Risk", color: "bg-red-500" },
]

export function ScoringAlgorithm() {
  return (
    <section id="algorithm" className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Open Source Scoring Algorithm</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Fully transparent weighted scoring model. All logic publicly visible on GitHub.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-background border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Scoring Factors</h3>
            <div className="space-y-4">
              {factors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Badge variant="secondary" className="text-sm font-mono shrink-0">
                    {factor.weight}
                  </Badge>
                  <div>
                    <div className="font-medium text-foreground">{factor.name}</div>
                    <div className="text-sm text-muted-foreground">{factor.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-background border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">Credit Score Ranges</h3>
            <div className="space-y-4">
              {scoreRanges.map((range, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${range.color}`} />
                  <div className="font-mono text-lg font-semibold text-foreground w-20">{range.range}</div>
                  <Badge variant="outline" className="text-sm">
                    {range.label}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{range.risk}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h4 className="font-medium text-foreground mb-2">Eligibility Thresholds</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Minimum avg. monthly volume: ₹25,000</li>
                <li>• Minimum transaction count: 20</li>
                <li>• Minimum business tenure: 3 months</li>
                <li>• Maximum payment failure rate: 20%</li>
              </ul>
            </div>
          </Card>
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-4">Mandatory Lender Disclosure</h3>
          <p className="text-muted-foreground mb-4">If a lender adds proprietary scoring rules, they must disclose:</p>
          <div className="grid sm:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-background rounded-lg">
              <div className="font-medium text-foreground">Rule Description</div>
              <div className="text-muted-foreground">Plain English explanation</div>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <div className="font-medium text-foreground">Weightage</div>
              <div className="text-muted-foreground">% contribution to decision</div>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <div className="font-medium text-foreground">Rationale</div>
              <div className="text-muted-foreground">Why this rule is used</div>
            </div>
            <div className="p-3 bg-background rounded-lg">
              <div className="font-medium text-foreground">Impact Range</div>
              <div className="text-muted-foreground">Effect on loan terms</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
