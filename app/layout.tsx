import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "OpenCredit - Open Source Credit Scoring for India",
    template: "%s | OpenCredit",
  },
  description:
    "Democratizing access to credit through transparent, UPI-based credit assessment. Open source credit scoring platform for merchants, MSMEs, and consumers in India.",
  metadataBase: new URL("https://opencredit.org.in"),
  keywords: [
    "open source",
    "credit scoring",
    "UPI",
    "India",
    "MSME",
    "financial inclusion",
    "transparent lending",
    "alternative credit",
    "merchant credit",
    "digital lending",
  ],
  authors: [{ name: "OpenCredit Initiative" }],
  creator: "OpenCredit Initiative",
  publisher: "OpenCredit Initiative",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://opencredit.org.in",
    siteName: "OpenCredit",
    title: "OpenCredit - Open Source Credit Scoring for India",
    description:
      "Democratizing access to credit through transparent, UPI-based credit assessment. Open source credit scoring platform for merchants, MSMEs, and consumers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenCredit - Open Source Credit Scoring for India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCredit - Open Source Credit Scoring for India",
    description:
      "Democratizing access to credit through transparent, UPI-based credit assessment. Open source credit scoring platform for merchants, MSMEs, and consumers.",
    images: ["/og-image.png"],
    creator: "@opencreditindia",
    site: "@opencreditindia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
