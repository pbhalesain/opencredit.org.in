import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Download, ExternalLink, Calendar, User, BookOpen, FlaskConical, Github } from "lucide-react"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Whitepapers & Research",
  description:
    "Technical whitepapers, research papers, and impact studies from the OpenCredit initiative. Open-access research on credit scoring and financial inclusion.",
  path: "/whitepapers",
})

const whitepapers = [
  {
    title: "OpenCredit Impact Paper v1.0",
    description:
      "Comprehensive impact paper outlining the vision, technical architecture, and projected impact of open-source credit scoring in India. Covers the 25 trillion rupee MSME credit gap and how transparent, UPI-based credit assessment can bridge it.",
    date: "November 2025",
    authors: ["OpenCredit Initiative"],
    tags: ["Impact", "Vision", "Technical"],
    downloadUrl: "https://github.com/opencredit/research/releases",
    featured: true,
  },
  {
    title: "UPI Transaction Analysis for Credit Scoring",
    description:
      "Technical paper detailing the methodology for analyzing UPI transaction patterns to derive creditworthiness signals. Includes statistical validation and comparison with traditional credit bureau scores.",
    date: "Coming Soon",
    authors: ["OpenCredit Research Team"],
    tags: ["Technical", "Methodology"],
    downloadUrl: null,
    featured: false,
  },
  {
    title: "Fairness and Bias in Credit Algorithms",
    description:
      "Research on ensuring algorithmic fairness in credit scoring, including statistical tests for bias detection and mitigation strategies specific to the Indian context.",
    date: "Coming Soon",
    authors: ["OpenCredit Research Team"],
    tags: ["Research", "Ethics"],
    downloadUrl: null,
    featured: false,
  },
]

const researchTopics = [
  {
    title: "Alternative Data Sources",
    description: "Exploring additional data sources beyond UPI for holistic credit assessment",
    status: "In Progress",
  },
  {
    title: "Regional Credit Patterns",
    description: "Analyzing credit behavior patterns across different Indian states and regions",
    status: "Planned",
  },
  {
    title: "Small Merchant Credit Needs",
    description: "Deep dive into the specific credit requirements of micro and small merchants",
    status: "In Progress",
  },
  {
    title: "Algorithm Explainability",
    description: "Making credit decisions transparent and understandable to borrowers",
    status: "Planned",
  },
]

const referenceDocuments = [
  {
    title: "IFC (2024) - MSME Finance Gap: Assessment of the Shortfalls and Opportunities",
    url: "https://www.ifc.org/en/insights-reports/2017/msme-finance-gap",
  },
  {
    title: "SIDBI (2024) - Indian MSME Sector: Credit Demand and Supply Dynamics",
    url: "https://www.sidbi.in/en/about-sidbi/annual-reports",
  },
  {
    title: "RBI (2025) - Digital Banking Channels Authorisation Directions",
    url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx",
  },
  {
    title: "RBI (2025) - Digital Lending Directions",
    url: "https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12382",
  },
  {
    title: "NPCI (2025) - UPI Transaction Statistics",
    url: "https://www.npci.org.in/what-we-do/upi/upi-ecosystem-statistics",
  },
  {
    title: "DPDP Act 2023 - Digital Personal Data Protection Act",
    url: "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf",
  },
]

export default function WhitepapersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Whitepapers & Research"
        description="Technical documentation, research papers, and impact studies that form the foundation of the OpenCredit initiative. All our research is open-access and peer-reviewable."
        lastUpdated="November 2025"
        githubPath="research/README.md"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Published Papers</h2>

          <div className="space-y-6">
            {whitepapers.map((paper) => (
              <Card
                key={paper.title}
                className={`border-border ${paper.featured ? "border-primary/30 bg-primary/5" : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {paper.featured && (
                          <span className="px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full font-medium">
                            Featured
                          </span>
                        )}
                        {paper.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{paper.title}</h3>
                      <p className="text-muted-foreground mb-4">{paper.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {paper.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {paper.authors.join(", ")}
                        </span>
                      </div>
                      {paper.downloadUrl ? (
                        <div className="flex gap-3">
                          <Button size="sm" asChild>
                            <Link href={paper.downloadUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="w-4 h-4 mr-2" />
                              Download PDF
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href="https://github.com/opencredit/research"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View on GitHub
                            </Link>
                          </Button>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground italic">Coming soon</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FlaskConical className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Ongoing Research</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Our research team is continuously exploring new frontiers in credit assessment, financial inclusion, and
            algorithmic fairness. Here are some of our current research initiatives:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {researchTopics.map((topic) => (
              <Card key={topic.title} className="border-border">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{topic.title}</CardTitle>
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                        topic.status === "In Progress"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {topic.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Reference Documents</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Key external references and regulatory documents that inform our work:
          </p>

          <div className="space-y-3">
            {referenceDocuments.map((doc) => (
              <Link
                key={doc.title}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all"
              >
                <span className="text-foreground text-sm">{doc.title}</span>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Contribute to Our Research</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We welcome contributions from researchers, academics, and practitioners. If you&apos;re working on related
            research or have insights to share, we&apos;d love to collaborate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="https://github.com/opencredit/research" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Research Repository
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="mailto:research@opencredit.org.in">Contact Research Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
