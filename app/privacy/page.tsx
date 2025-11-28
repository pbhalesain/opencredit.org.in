import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for the OpenCredit platform - how we handle and protect your data in compliance with DPDP Act 2023.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Privacy Policy"
        description="How OpenCredit handles, protects, and respects your data. We are committed to transparency in all aspects of our operations, including data privacy."
        lastUpdated="November 2025"
        githubPath="PRIVACY.md"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>1. Introduction</h2>
          <p>
            OpenCredit (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
            open-source credit assessment platform and related services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>Account registration information (name, email, organization)</li>
            <li>UPI transaction data (with explicit consent through Account Aggregator framework)</li>
            <li>Business information for merchants seeking credit scores</li>
            <li>Communications with our team</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>Usage data and analytics</li>
            <li>Device and browser information</li>
            <li>IP addresses and location data</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Calculate credit scores using our open-source algorithms</li>
            <li>Improve and optimize our platform</li>
            <li>Communicate updates and changes</li>
            <li>Comply with legal obligations</li>
            <li>Conduct research to improve financial inclusion (with anonymized data)</li>
          </ul>

          <h2>4. Data Protection</h2>
          <p>We implement industry-standard security measures including:</p>
          <ul>
            <li>AES-256 encryption for data at rest</li>
            <li>TLS 1.3 for data in transit</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication mechanisms</li>
          </ul>

          <h2>5. DPDP Act Compliance</h2>
          <p>
            OpenCredit is fully compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act). We ensure:
          </p>
          <ul>
            <li>Data is processed only with explicit consent</li>
            <li>Purpose limitation for all data processing</li>
            <li>Data localization within India</li>
            <li>Right to access, correction, and erasure</li>
            <li>Grievance redressal mechanisms</li>
          </ul>

          <h2>6. Data Sharing</h2>
          <p>We do not sell your personal data. We may share information with:</p>
          <ul>
            <li>Lenders (only with your explicit consent for loan applications)</li>
            <li>Regulatory authorities (as required by law)</li>
            <li>Service providers (under strict data processing agreements)</li>
          </ul>

          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
            <li>File complaints with the Data Protection Board of India</li>
          </ul>

          <h2>8. Open Source Commitment</h2>
          <p>
            As an open-source initiative, our data processing algorithms and logic are publicly available for review.
            This transparency ensures accountability in how we handle your data.
          </p>

          <h2>9. Contact Us</h2>
          <p>For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer:</p>
          <ul>
            <li>Email: privacy@opencredit.org.in</li>
            <li>Address: OpenCredit Initiative, India</li>
          </ul>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            revision date. Significant changes will be communicated via email to registered users.
          </p>

          <p className="text-muted-foreground text-sm mt-8">Last updated: November 2025</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
