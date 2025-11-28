import type { Metadata } from "next"

const siteConfig = {
  name: "OpenCredit",
  description:
    "Democratizing access to credit through transparent, UPI-based credit assessment. Open source credit scoring platform for merchants, MSMEs, and consumers in India.",
  url: "https://opencredit.org.in",
  ogImage: "/og-image.png",
  twitterHandle: "@opencreditindia",
  locale: "en_IN",
}

interface GenerateMetadataProps {
  title: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  authors?: string[]
}

export function generatePageMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  type = "website",
  publishedTime,
  authors,
}: GenerateMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const fullTitle = title === "Home" ? siteConfig.name : `${title} | ${siteConfig.name}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - OpenCredit`,
        },
      ],
      locale: siteConfig.locale,
      type,
      ...(type === "article" && publishedTime && { publishedTime }),
      ...(type === "article" && authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
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
  }
}

export { siteConfig }
