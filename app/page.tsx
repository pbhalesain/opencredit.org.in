import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Problem } from "@/components/problem"
import { Solution } from "@/components/solution"
import { HowItWorks } from "@/components/how-it-works"
import { ScoringAlgorithm } from "@/components/scoring-algorithm"
import { Impact } from "@/components/impact"
import { Stakeholders } from "@/components/stakeholders"
import { OpenSource } from "@/components/open-source"
import { Roadmap } from "@/components/roadmap"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Home",
  description:
    "Democratizing access to credit through transparent, UPI-based credit assessment. Open source credit scoring platform for merchants, MSMEs, and consumers in India.",
  path: "/",
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Problem />
      <Solution />
      <HowItWorks />
      <ScoringAlgorithm />
      <Impact />
      <Stakeholders />
      <OpenSource />
      <Roadmap />
      <CTA />
      <Footer />
    </main>
  )
}
