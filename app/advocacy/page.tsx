import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Landmark,
  FileText,
  Download,
  ExternalLink,
  Users,
  Scale,
  Sprout,
  ShoppingBag,
  MessageSquare,
  Mail,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Advocacy",
  description:
    "OpenCredit advocacy initiatives with RBI, NCST, NCSC, NABARD, and Merchant Associations. Policy papers, submissions, and regulatory engagement for open-source credit scoring in India.",
  path: "/advocacy",
})

const advocacyBodies = [
  {
    id: "rbi",
    name: "Reserve Bank of India (RBI)",
    shortName: "RBI",
    icon: Landmark,
    description:
      "India's central bank and primary financial regulator. We engage with RBI on digital lending guidelines, alternative credit data regulations, and regulatory sandbox participation.",
    focus: ["Digital Lending Guidelines", "Alternative Credit Data", "Regulatory Sandbox", "Consumer Protection"],
    papers: [
      {
        title: "Proposal for Open-Source Credit Scoring Framework",
        description: "Submission to RBI outlining the OpenCredit approach to transparent, UPI-based credit assessment",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
      {
        title: "Response to Digital Lending Directions 2022",
        description: "Our analysis and recommendations on RBI's digital lending regulatory framework",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
    ],
    links: [
      {
        label: "RBI Digital Lending Guidelines",
        url: "https://www.rbi.org.in/Scripts/BS_CircularIndexDisplay.aspx?Id=12382",
      },
      {
        label: "RBI Regulatory Sandbox",
        url: "https://www.rbi.org.in/Scripts/PublicationReportDetails.aspx?UrlPage=&ID=938",
      },
    ],
  },
  {
    id: "ncst",
    name: "National Commission for Scheduled Tribes (NCST)",
    shortName: "NCST",
    icon: Users,
    description:
      "Constitutional body safeguarding interests of Scheduled Tribes. We advocate for inclusive credit access in tribal areas through transparent scoring mechanisms.",
    focus: [
      "Financial Inclusion in Tribal Areas",
      "Traditional Livelihood Credit",
      "Self-Help Group Financing",
      "Tribal Entrepreneur Support",
    ],
    papers: [
      {
        title: "Credit Access for Tribal Entrepreneurs",
        description: "Policy paper on improving credit access for ST entrepreneurs using alternative data",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
    ],
    links: [{ label: "NCST Official Portal", url: "https://ncst.nic.in/" }],
  },
  {
    id: "ncsc",
    name: "National Commission for Scheduled Castes (NCSC)",
    shortName: "NCSC",
    icon: Scale,
    description:
      "Constitutional body protecting rights of Scheduled Castes. We work to ensure fair, unbiased credit scoring that doesn't perpetuate historical discrimination.",
    focus: ["Bias-Free Credit Scoring", "Economic Empowerment", "Entrepreneurship Support", "Fair Lending Practices"],
    papers: [
      {
        title: "Ensuring Algorithmic Fairness in Credit Scoring",
        description: "Framework for detecting and preventing bias in credit assessment algorithms",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
    ],
    links: [{ label: "NCSC Official Portal", url: "https://ncsc.nic.in/" }],
  },
  {
    id: "nabard",
    name: "National Bank for Agriculture and Rural Development (NABARD)",
    shortName: "NABARD",
    icon: Sprout,
    description:
      "Apex development bank for rural and agricultural credit. We collaborate on credit scoring for farmers, rural merchants, and agricultural value chains.",
    focus: [
      "Agricultural Credit",
      "Rural Merchant Financing",
      "FPO Credit Assessment",
      "Kisan Credit Card Enhancement",
    ],
    papers: [
      {
        title: "Alternative Credit Scoring for Agricultural Value Chains",
        description: "Methodology for assessing creditworthiness of farmers and rural merchants using transaction data",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
      {
        title: "Digital Credit Assessment for Farmer Producer Organizations",
        description: "Framework for evaluating FPOs using collective transaction patterns",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
    ],
    links: [
      { label: "NABARD Official Website", url: "https://www.nabard.org/" },
      { label: "NABARD Financial Inclusion", url: "https://www.nabard.org/content.aspx?id=501" },
    ],
  },
  {
    id: "merchant-associations",
    name: "Merchant & Trade Associations",
    shortName: "Trade Bodies",
    icon: ShoppingBag,
    description:
      "Industry bodies representing merchants, traders, and MSMEs across India. We partner to understand ground realities and advocate for merchant-friendly credit policies.",
    focus: ["MSME Credit Access", "Working Capital Solutions", "Trade Credit", "Digital Payment Incentives"],
    papers: [
      {
        title: "Voice of Merchants: Credit Access Survey Report",
        description: "Comprehensive survey findings on credit challenges faced by Indian merchants",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
      {
        title: "Recommendations for MSME Credit Policy",
        description: "Joint submission to Ministry of MSME on improving credit access through open data",
        date: "Coming Soon",
        status: "draft",
        downloadUrl: null,
      },
    ],
    links: [
      { label: "CAIT (Confederation of All India Traders)", url: "https://cait.in/" },
      { label: "FISME (Federation of Indian MSMEs)", url: "https://www.fisme.org.in/" },
      { label: "Ministry of MSME", url: "https://msme.gov.in/" },
    ],
    associations: ["CAIT", "FISME", "FICCI", "CII", "ASSOCHAM"],
  },
]

const advocacyPrinciples = [
  {
    title: "Transparency First",
    description:
      "All our policy positions, submissions, and research are publicly available for scrutiny and feedback.",
  },
  {
    title: "Evidence-Based",
    description: "Our advocacy is grounded in data, research, and real-world impact assessments.",
  },
  {
    title: "Inclusive Participation",
    description: "We actively seek input from underserved communities in shaping our policy recommendations.",
  },
  {
    title: "Regulatory Respect",
    description: "We work constructively within regulatory frameworks while advocating for beneficial reforms.",
  },
]

const upcomingEngagements = [
  {
    title: "RBI Fintech Conference 2026",
    date: "Q1 2026",
    type: "Conference",
    description: "Presenting OpenCredit methodology at RBI's annual fintech conference",
  },
  {
    title: "NABARD Rural Credit Summit",
    date: "Q2 2026",
    type: "Summit",
    description: "Workshop on alternative credit data for agricultural lending",
  },
  {
    title: "Digital India Week - MSME Track",
    date: "Q3 2026",
    type: "Exhibition",
    description: "Demonstrating open-source credit scoring for merchant associations",
  },
]

export default function AdvocacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Advocacy & Policy"
        description="OpenCredit actively engages with regulators, constitutional bodies, and industry associations to advocate for transparent, fair, and inclusive credit scoring policies in India."
        lastUpdated="November 2025"
        githubPath="advocacy/README.md"
      />

      {/* Advocacy Principles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-6">Our Advocacy Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {advocacyPrinciples.map((principle) => (
              <Card key={principle.title} className="border-border">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Regulatory & Institutional Engagement</h2>

          <div className="space-y-12">
            {advocacyBodies.map((body) => (
              <Card key={body.id} id={body.id} className="border-border overflow-hidden">
                <CardHeader className="bg-muted/30 border-b border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <body.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{body.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{body.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Focus Areas */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {body.focus.map((area) => (
                        <Badge key={area} variant="secondary">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Papers & Submissions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Papers & Submissions</h4>
                    <div className="space-y-3">
                      {body.papers.map((paper, index) => (
                        <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <FileText className="w-4 h-4 text-primary" />
                                <h5 className="font-medium text-foreground">{paper.title}</h5>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">{paper.description}</p>
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {paper.date}
                                </span>
                                <Badge variant="outline" className="text-xs">
                                  {paper.status === "draft" ? "In Draft" : "Published"}
                                </Badge>
                              </div>
                            </div>
                            {paper.downloadUrl ? (
                              <Button size="sm" variant="outline" asChild>
                                <Link href={paper.downloadUrl} target="_blank" rel="noopener noreferrer">
                                  <Download className="w-4 h-4 mr-1" />
                                  PDF
                                </Link>
                              </Button>
                            ) : (
                              <Badge variant="outline">Coming Soon</Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Related Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {body.links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Associations (for merchant associations) */}
                  {"associations" in body && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Partner Associations</h4>
                      <div className="flex flex-wrap gap-2">
                        {body.associations.map((assoc) => (
                          <Badge key={assoc} variant="outline">
                            {assoc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Engagements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Upcoming Engagements</h2>
          <div className="space-y-4">
            {upcomingEngagements.map((engagement, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-primary mb-1" />
                    <span className="text-xs font-medium text-primary">{engagement.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{engagement.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {engagement.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{engagement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <MessageSquare className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Advocacy Efforts</h2>
                  <p className="text-muted-foreground mb-6">
                    We welcome collaboration from researchers, policy experts, industry practitioners, and advocates for
                    financial inclusion. Together, we can shape policies that democratize credit access.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Contribute to policy papers and research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Share ground-level insights and data</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">Participate in stakeholder consultations</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <Button asChild>
                    <Link href="mailto:advocacy@opencredit.org.in">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Advocacy Team
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contributing">Contribute to Research</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
