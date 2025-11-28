import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { OpenCreditLogo } from "./logo"
import { OpenCreditFooterLogo } from "./footer-logo"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
  <OpenCreditFooterLogo />
  <div className="flex flex-col items-center">
    <span className="font-semibold text-lg">Open Credit Initiative</span>
    <span className="text-sm text-gray-200 justify-center">पत सुलभता, राष्ट्रोन्नता.</span>
  </div>
</div>
            <p className="text-background/70 leading-relaxed max-w-md">
              A non-profit, open-source initiative to democratize credit access in India through transparent, UPI-based
              credit assessment.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <Link
                href="https://github.com/opencredit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/opencredit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/opencredit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:contact@opencredit.org.in"
                className="text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/docs" className="hover:text-background transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs#api" className="hover:text-background transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/whitepapers" className="hover:text-background transition-colors">
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Initiative</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="/milestones" className="hover:text-background transition-colors">
                  Milestones
                </Link>
              </li>
              <li>
                <Link href="/advocacy" className="hover:text-background transition-colors">
                  Advocacy
                </Link>
              </li>
              <li>
                <Link href="/#roadmap" className="hover:text-background transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/#impact" className="hover:text-background transition-colors">
                  Impact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link
                  href="https://github.com/opencredit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/opencredit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/contributing" className="hover:text-background transition-colors">
                  Contributing
                </Link>
              </li>
              <li>
                <Link href="/code-of-conduct" className="hover:text-background transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/50">
            © 2025 OpenCredit Initiative. Licensed under Apache 2.0 License.
          </div>
          <div className="flex items-center gap-6 text-sm text-background/50">
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
