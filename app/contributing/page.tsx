import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GitBranch,
  GitPullRequest,
  Bug,
  FileText,
  MessageSquare,
  Code,
  BookOpen,
  Users,
  Lightbulb,
  CheckCircle,
  Github,
} from "lucide-react"

export const metadata = {
  title: "Contributing | OpenCredit",
  description: "Learn how to contribute to OpenCredit and help democratize credit access in India.",
}

const contributionTypes = [
  {
    icon: Code,
    title: "Code Contributions",
    description: "Help build the credit scoring engine, APIs, and platform infrastructure.",
    link: "https://github.com/opencredit/engine",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Improve our docs, write tutorials, or translate content into regional languages.",
    link: "https://github.com/opencredit/docs",
  },
  {
    icon: Bug,
    title: "Bug Reports",
    description: "Found a bug? Report it on GitHub with detailed reproduction steps.",
    link: "https://github.com/opencredit/engine/issues/new?template=bug_report.md",
  },
  {
    icon: Lightbulb,
    title: "Feature Requests",
    description: "Have an idea? Open a discussion or submit a feature request.",
    link: "https://github.com/opencredit/engine/discussions",
  },
  {
    icon: BookOpen,
    title: "Research & Analysis",
    description: "Contribute research on credit accessibility, financial inclusion, or algorithm fairness.",
    link: "https://github.com/opencredit/research",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Help others in discussions, answer questions, and welcome newcomers.",
    link: "https://discord.gg/opencredit",
  },
]

const workflowSteps = [
  {
    step: 1,
    title: "Fork the Repository",
    description: "Create your own fork of the repository you want to contribute to.",
    command: "git clone https://github.com/YOUR_USERNAME/engine.git",
  },
  {
    step: 2,
    title: "Create a Branch",
    description: "Create a new branch for your feature or fix.",
    command: "git checkout -b feature/your-feature-name",
  },
  {
    step: 3,
    title: "Make Your Changes",
    description: "Write your code, add tests, and update documentation as needed.",
    command: null,
  },
  {
    step: 4,
    title: "Commit with Conventional Commits",
    description: "Use conventional commit messages for clear history.",
    command: 'git commit -m "feat: add new scoring parameter"',
  },
  {
    step: 5,
    title: "Push and Open PR",
    description: "Push your changes and open a pull request for review.",
    command: "git push origin feature/your-feature-name",
  },
]

const goodFirstIssues = [
  { title: "Add Hindi translations for user-facing messages", labels: ["good first issue", "documentation"] },
  { title: "Improve error handling in UPI data parser", labels: ["good first issue", "bug"] },
  { title: "Add unit tests for score calculation module", labels: ["good first issue", "testing"] },
  { title: "Update API documentation with examples", labels: ["good first issue", "documentation"] },
]

export default function ContributingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Contributing to OpenCredit"
        description="OpenCredit is an open-source project and we welcome contributions from everyone. Whether you're a developer, researcher, writer, or advocate for financial inclusion, there's a way for you to help."
        lastUpdated="November 2025"
        githubPath="CONTRIBUTING.md"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Ways to Contribute</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributionTypes.map((type) => (
              <Card key={type.title} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                    <type.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <Link
                    href={type.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Get Started
                    <span aria-hidden="true">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GitBranch className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Development Workflow</h2>
          </div>
          <div className="space-y-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                  {step.command && (
                    <code className="block bg-foreground text-background px-4 py-2 rounded-lg text-sm font-mono">
                      {step.command}
                    </code>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GitPullRequest className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Pull Request Guidelines</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Before Submitting
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    Ensure your code follows our style guide
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    Write or update tests as necessary
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    Update documentation if applicable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    Run the full test suite locally
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    Sign the Contributor License Agreement (CLA)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  PR Description Template
                </h3>
                <div className="bg-muted rounded-lg p-4 text-sm font-mono text-muted-foreground">
                  <p>## Summary</p>
                  <p className="text-muted-foreground/60">Brief description of changes</p>
                  <p className="mt-2">## Related Issue</p>
                  <p className="text-muted-foreground/60">Fixes #123</p>
                  <p className="mt-2">## Type of Change</p>
                  <p className="text-muted-foreground/60">- [ ] Bug fix</p>
                  <p className="text-muted-foreground/60">- [ ] New feature</p>
                  <p className="text-muted-foreground/60">- [ ] Documentation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">Good First Issues</h2>
          <p className="text-muted-foreground mb-8">
            New to the project? Here are some beginner-friendly issues to get started:
          </p>
          <div className="space-y-4">
            {goodFirstIssues.map((issue, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">{issue.title}</p>
                    <div className="flex gap-2 mt-2">
                      {issue.labels.map((label) => (
                        <span
                          key={label}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/opencredit/engine/labels/good%20first%20issue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Issue
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link
                href="https://github.com/opencredit/engine/labels/good%20first%20issue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Good First Issues
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Contribute?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of developers, researchers, and advocates working to democratize credit access in India.
            Every contribution matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/opencredit" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Start on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/code-of-conduct">Read Code of Conduct</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
