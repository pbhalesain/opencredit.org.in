import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Code, Zap, Database, Shield, Settings, Terminal, FileCode, ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Documentation | OpenCredit",
  description:
    "Comprehensive documentation for the OpenCredit platform - guides, API reference, and integration tutorials.",
}

const quickLinks = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running with OpenCredit in 5 minutes.",
    href: "#quickstart",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation with examples.",
    href: "#api",
  },
  {
    icon: Database,
    title: "Data Models",
    description: "Understand the data structures and schemas.",
    href: "#data-models",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Security best practices and compliance.",
    href: "#security",
  },
]

const docSections = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        description: "Overview of the OpenCredit platform",
        href: "https://github.com/open-credit/docs/blob/main/getting-started/introduction.md",
      },
      {
        title: "Installation",
        description: "How to set up OpenCredit locally",
        href: "https://github.com/open-credit/docs/blob/main/getting-started/installation.md",
      },
      {
        title: "Configuration",
        description: "Environment variables and settings",
        href: "https://github.com/open-credit/docs/blob/main/getting-started/configuration.md",
      },
      {
        title: "First Integration",
        description: "Your first credit score request",
        href: "https://github.com/open-credit/docs/blob/main/getting-started/first-integration.md",
      },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      {
        title: "Credit Scoring Algorithm",
        description: "How scores are calculated",
        href: "https://github.com/open-credit/docs/blob/main/concepts/scoring-algorithm.md",
      },
      {
        title: "UPI Data Processing",
        description: "Transaction data handling",
        href: "https://github.com/open-credit/docs/blob/main/concepts/upi-data.md",
      },
      {
        title: "Scoring Parameters",
        description: "Understand each scoring factor",
        href: "https://github.com/open-credit/docs/blob/main/concepts/scoring-parameters.md",
      },
      {
        title: "Risk Categories",
        description: "Score ranges and interpretations",
        href: "https://github.com/open-credit/docs/blob/main/concepts/risk-categories.md",
      },
    ],
  },
  {
    title: "Integration Guides",
    items: [
      {
        title: "For Lenders",
        description: "Integrate OpenCredit into your lending platform",
        href: "https://github.com/open-credit/docs/blob/main/integrations/lenders.md",
      },
      {
        title: "For Merchants",
        description: "Access your credit score via API",
        href: "https://github.com/open-credit/docs/blob/main/integrations/merchants.md",
      },
      {
        title: "For Developers",
        description: "Build on top of OpenCredit",
        href: "https://github.com/open-credit/docs/blob/main/integrations/developers.md",
      },
      {
        title: "Webhook Events",
        description: "Real-time notifications and events",
        href: "https://github.com/open-credit/docs/blob/main/integrations/webhooks.md",
      },
    ],
  },
]

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Documentation"
        description="Everything you need to integrate with OpenCredit, understand our algorithms, and build on our platform. Our documentation is open-source and community-maintained."
        lastUpdated="November 2025"
        githubPath="docs/README.md"
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link key={link.title} href={link.href}>
                <Card className="border-border hover:border-primary/50 hover:bg-muted/50 transition-all h-full">
                  <CardContent className="p-4">
                    <link.icon className="w-5 h-5 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground text-sm">{link.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quickstart" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Quick Start</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Get started with OpenCredit in just a few steps. This guide will help you make your first credit score
            request.
          </p>

          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    1
                  </span>
                  Install the SDK
                </CardTitle>
              </CardHeader>
              <CardContent>
                <code className="block bg-foreground text-background px-4 py-3 rounded-lg text-sm font-mono overflow-x-auto">
                  npm install @open-credit/sdk
                </code>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    2
                  </span>
                  Initialize the Client
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-foreground text-background px-4 py-3 rounded-lg text-sm font-mono overflow-x-auto">
                  {`import { OpenCredit } from '@opencredit/sdk';

const client = new OpenCredit({
  apiKey: process.env.OPENCREDIT_API_KEY,
  environment: 'sandbox', // or 'production'
});`}
                </pre>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    3
                  </span>
                  Request a Credit Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-foreground text-background px-4 py-3 rounded-lg text-sm font-mono overflow-x-auto">
                  {`const score = await client.scoring.calculate({
  merchantId: 'merchant_123',
  upiId: 'merchant@upi',
  consentToken: 'consent_token_from_aa',
});

console.log(score);
// { score: 72, category: 'good', factors: [...] }`}
                </pre>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-foreground">
              <strong>Note:</strong> You&apos;ll need API credentials to make requests. Sign up at{" "}
              <Link
                href="https://github.com/open-credit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/open-credit
              </Link>{" "}
              to get started with the sandbox environment.
            </p>
          </div>
        </div>
      </section>

      <section id="api" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileCode className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">API Reference</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            Complete API documentation is available on GitHub. Our API follows REST conventions and returns JSON
            responses.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">REST API</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Full REST API documentation with request/response examples.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/open-credit/api-docs" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View API Docs
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">SDK Reference</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  JavaScript/TypeScript SDK with full type definitions.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/open-credit/sdk-js" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View SDK Docs
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Documentation Sections</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {docSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
                      >
                        <span className="font-medium text-foreground text-sm">{item.title}</span>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="data-models" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Data Models</h2>
          </div>
          <p className="text-muted-foreground mb-6">Understanding the data structures used in OpenCredit.</p>
          <Card className="border-border">
            <CardContent className="p-0">
              <pre className="p-6 text-sm font-mono overflow-x-auto">
                {`interface CreditScore {
  score: number;           // 0-100
  category: 'excellent' | 'good' | 'fair' | 'poor';
  calculatedAt: string;    // ISO timestamp
  validUntil: string;      // ISO timestamp
  factors: ScoringFactor[];
  merchantId: string;
  version: string;         // Algorithm version
}

interface ScoringFactor {
  name: string;
  weight: number;          // Percentage weight
  score: number;           // Factor score (0-100)
  description: string;
  improvementTips?: string[];
}`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="security" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Security</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Data Protection</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>AES-256 encryption at rest</li>
                  <li>TLS 1.3 for all data in transit</li>
                  <li>DPDP Act 2023 compliant</li>
                  <li>Data localization in India</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Authentication</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>API key authentication</li>
                  <li>OAuth 2.0 for user flows</li>
                  <li>Rate limiting per API key</li>
                  <li>IP allowlisting available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <Settings className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Documentation Coming Soon</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We&apos;re actively building out our documentation. In the meantime, check out our GitHub repositories or
            join our Discord community for help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/open-credit" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contributing">Contribute to Docs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
