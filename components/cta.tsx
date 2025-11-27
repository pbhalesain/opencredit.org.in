import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Mail, FileText, Users } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="p-12 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Join the Movement for Fair Credit</h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Whether you're a developer, lender, policymaker, or advocate for financial inclusion—there's a place for you
            in OpenCredit.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <Link href="https://github.com/opencredit" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                Contribute Code
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <Link href="/whitepapers">
                <FileText className="w-5 h-5" />
                Read Whitepaper
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <Link href="mailto:partners@opencredit.org.in">
                <Users className="w-5 h-5" />
                Partner With Us
              </Link>
            </Button>
            <Button variant="secondary" size="lg" className="gap-2" asChild>
              <Link href="mailto:contact@opencredit.org.in">
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
