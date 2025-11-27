import { Button } from "@/components/ui/button"
import { ArrowRight, Github, FileText } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Non-Profit Open Source Initiative
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance max-w-4xl mx-auto">
          Democratizing Credit Access
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
          Open-source credit scoring platform that leverages UPI transaction data to provide transparent, fair, and
          accessible credit assessment for 63 million MSMEs and 190 million credit-invisible Indians.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <Link href="https://github.com/opencredit" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View on GitHub
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
            <Link href="/whitepapers">
              <FileText className="w-5 h-5" />
              Read Whitepaper
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground mt-1">Transparent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Open</div>
            <div className="text-sm text-muted-foreground mt-1">Source</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Zero</div>
            <div className="text-sm text-muted-foreground mt-1">License Fees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Fair</div>
            <div className="text-sm text-muted-foreground mt-1">Assessment</div>
          </div>
        </div>
      </div>
    </section>
  )
}
