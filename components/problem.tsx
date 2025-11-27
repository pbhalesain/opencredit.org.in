import { Card } from "@/components/ui/card"
import { XCircle, Eye, Scale, Lock } from "lucide-react"

const problems = [
  {
    icon: Eye,
    title: "Black Box Algorithms",
    description:
      "Credit bureaus use proprietary algorithms. Borrowers don't know why they were rejected with no mechanism to challenge or understand scoring.",
  },
  {
    icon: Lock,
    title: "Limited Credit History",
    description:
      "190 million adults are 'credit invisible' with no bureau records. New businesses face a catch-22: need credit to build credit history.",
  },
  {
    icon: Scale,
    title: "Bias & Discrimination",
    description:
      "Geographic, gender, caste, and age-based discrimination documented in studies. Arbitrary decisions by loan officers persist.",
  },
  {
    icon: XCircle,
    title: "Information Asymmetry",
    description:
      "Borrowers don't know their credit score before applying. Multiple loan applications due to rejections further damage scores.",
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">The Credit Access Crisis</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Despite India's digital payments revolution with UPI, traditional credit assessment remains opaque, biased,
            and inaccessible to millions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 bg-muted/50 border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">36-60%</div>
              <div className="text-sm text-muted-foreground mt-1">Interest rates from informal lenders</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">86%</div>
              <div className="text-sm text-muted-foreground mt-1">MSMEs rely on informal sources</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">14%</div>
              <div className="text-sm text-muted-foreground mt-1">MSMEs with formal credit access</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
