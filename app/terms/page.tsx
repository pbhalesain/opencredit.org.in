import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description: "Terms of service for using the OpenCredit platform and services. Open source under Apache 2.0 license.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Terms of Service"
        description="The terms and conditions governing the use of OpenCredit's open-source credit assessment platform and related services."
        lastUpdated="November 2025"
        githubPath="TERMS.md"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-neutral dark:prose-invert">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the OpenCredit platform, API, or any related services, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            OpenCredit provides an open-source credit scoring platform that uses UPI transaction data to calculate
            credit scores for merchants, MSMEs, and consumers in India. Our services include:
          </p>
          <ul>
            <li>Credit score calculation via API</li>
            <li>Open-source credit scoring algorithms</li>
            <li>Documentation and integration guides</li>
            <li>Research and whitepapers</li>
          </ul>

          <h2>3. Open Source License</h2>
          <p>The OpenCredit codebase is licensed under the Apache License 2.0. You are free to:</p>
          <ul>
            <li>Use the software for any purpose</li>
            <li>Modify and distribute the software</li>
            <li>Use the software commercially</li>
          </ul>
          <p>
            Subject to the conditions in the Apache 2.0 license, including attribution requirements and inclusion of the
            license notice.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>When using OpenCredit services, you agree to:</p>
          <ul>
            <li>Provide accurate information</li>
            <li>Obtain proper consent before processing user data</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not use the service for fraudulent or illegal purposes</li>
            <li>Maintain the security of your API credentials</li>
            <li>Follow our Code of Conduct in community interactions</li>
          </ul>

          <h2>5. API Usage</h2>
          <h3>5.1 Rate Limits</h3>
          <p>
            API access is subject to rate limits. Exceeding these limits may result in temporary suspension of access.
            Current rate limits are documented in our API reference.
          </p>

          <h3>5.2 API Keys</h3>
          <p>
            You are responsible for keeping your API keys secure. Any activity under your API keys is your
            responsibility. Report compromised keys immediately.
          </p>

          <h2>6. Data Usage</h2>
          <p>When integrating with OpenCredit:</p>
          <ul>
            <li>You must obtain valid consent from end users before processing their data</li>
            <li>Data must be used only for the purposes disclosed to users</li>
            <li>You must comply with DPDP Act requirements</li>
            <li>Credit scores should not be the sole basis for lending decisions</li>
          </ul>

          <h2>7. Disclaimer of Warranties</h2>
          <p>OpenCredit is provided &quot;as is&quot; without warranty of any kind. We do not guarantee:</p>
          <ul>
            <li>Uninterrupted or error-free service</li>
            <li>Accuracy of credit scores for lending decisions</li>
            <li>Suitability for any particular purpose</li>
          </ul>
          <p>Credit scores are informational and should be used as one of many factors in credit decisions.</p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, OpenCredit and its contributors shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
          </p>

          <h2>9. Non-Profit Nature</h2>
          <p>
            OpenCredit is a non-profit initiative. We do not charge license fees for the use of our open-source
            software. Optional support services and enterprise features may be offered in the future to sustain
            operations.
          </p>

          <h2>10. Regulatory Compliance</h2>
          <p>
            Users of OpenCredit who are regulated entities (NBFCs, banks, etc.) are responsible for ensuring their use
            of OpenCredit complies with:
          </p>
          <ul>
            <li>RBI guidelines on digital lending</li>
            <li>Fair Practices Code</li>
            <li>Know Your Customer (KYC) requirements</li>
            <li>Anti-Money Laundering regulations</li>
          </ul>

          <h2>11. Modifications to Service</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the service at any time. Significant
            changes will be communicated in advance through our GitHub repository and mailing list.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to our API services for violation of these terms or for any other
            reason at our discretion.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction
            of courts in India.
          </p>

          <h2>14. Contact</h2>
          <p>For questions about these Terms of Service, please contact:</p>
          <ul>
            <li>Email: legal@opencredit.org.in</li>
            <li>GitHub: github.com/opencredit</li>
          </ul>

          <p className="text-muted-foreground text-sm mt-8">Last updated: November 2025</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
