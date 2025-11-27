import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, MessageSquare, Shield, AlertTriangle, Scale } from "lucide-react"

export const metadata = {
  title: "Code of Conduct | OpenCredit",
  description: "Our commitment to providing a welcoming and inclusive environment for all contributors.",
}

const values = [
  {
    icon: Heart,
    title: "Be Welcoming",
    description:
      "We strive to create a welcoming environment for people of all backgrounds and identities. This includes, but is not limited to, members of any race, ethnicity, culture, national origin, color, immigration status, social and economic class, educational level, sex, sexual orientation, gender identity and expression, age, size, family status, political belief, religion, and mental and physical ability.",
  },
  {
    icon: Users,
    title: "Be Respectful",
    description:
      "Not all of us will agree all the time, but disagreement is no excuse for poor behavior and poor manners. We might all experience some frustration now and then, but we cannot allow that frustration to turn into a personal attack. It's important to remember that a community where people feel uncomfortable or threatened is not a productive one.",
  },
  {
    icon: MessageSquare,
    title: "Be Collaborative",
    description:
      "Our work will be used by other people, and in turn we will depend on the work of others. When we make something for the benefit of the project, we are willing to explain to others how it works, so that they can build on the work to make it even better.",
  },
  {
    icon: Shield,
    title: "Be Transparent",
    description:
      "Transparency is at the core of OpenCredit's mission. We are committed to open communication, documenting our decisions, and sharing our reasoning with the community. This extends to all interactions within the project.",
  },
]

const unacceptable = [
  "The use of sexualized language or imagery, and sexual attention or advances of any kind",
  "Trolling, insulting or derogatory comments, and personal or political attacks",
  "Public or private harassment",
  "Publishing others' private information, such as a physical or email address, without their explicit permission",
  "Other conduct which could reasonably be considered inappropriate in a professional setting",
  "Advocating for, or encouraging, any of the above behavior",
]

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Code of Conduct"
        description="Our Pledge: In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone."
        lastUpdated="November 2025"
        githubPath="CODE_OF_CONDUCT.md"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Our Values</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Unacceptable Behavior</h2>
          </div>
          <p className="text-muted-foreground mb-6">Examples of unacceptable behavior by participants include:</p>
          <ul className="space-y-3">
            {unacceptable.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Enforcement</h2>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Community leaders are responsible for clarifying and enforcing our standards of acceptable behavior and
              will take appropriate and fair corrective action in response to any behavior that they deem inappropriate,
              threatening, offensive, or harmful.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Community leaders have the right and responsibility to remove, edit, or reject comments, commits, code,
              wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, and will
              communicate reasons for moderation decisions when appropriate.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-8 mb-4">Enforcement Guidelines</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Community leaders will follow these Community Impact Guidelines in determining the consequences for any
              action they deem in violation of this Code of Conduct:
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Correction:</strong> A private, written warning from community
                leaders, providing clarity around the nature of the violation and an explanation of why the behavior was
                inappropriate.
              </li>
              <li>
                <strong className="text-foreground">Warning:</strong> A warning with consequences for continued
                behavior. No interaction with the people involved for a specified period of time.
              </li>
              <li>
                <strong className="text-foreground">Temporary Ban:</strong> A temporary ban from any sort of interaction
                or public communication with the community for a specified period of time.
              </li>
              <li>
                <strong className="text-foreground">Permanent Ban:</strong> A permanent ban from any sort of public
                interaction within the community.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Reporting</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the community leaders
            responsible for enforcement at:
          </p>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <p className="font-mono text-foreground">conduct@opencredit.org.in</p>
              <p className="text-sm text-muted-foreground mt-2">
                All complaints will be reviewed and investigated promptly and fairly. All community leaders are
                obligated to respect the privacy and security of the reporter of any incident.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Attribution</h2>
          <p className="text-muted-foreground leading-relaxed">
            This Code of Conduct is adapted from the{" "}
            <a
              href="https://www.contributor-covenant.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Contributor Covenant
            </a>
            , version 2.1, available at{" "}
            <a
              href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://www.contributor-covenant.org/version/2/1/code_of_conduct/
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
