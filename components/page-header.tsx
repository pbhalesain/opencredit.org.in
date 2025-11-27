import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  description: string
  lastUpdated?: string
  githubPath?: string
}

export function PageHeader({ title, description, lastUpdated, githubPath }: PageHeaderProps) {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-muted/30 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
        {(lastUpdated || githubPath) && (
          <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
            {lastUpdated && <span>Last updated: {lastUpdated}</span>}
            {githubPath && (
              <Link
                href={`https://github.com/opencredit/opencredit.org.in/edit/main/${githubPath}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                Edit on GitHub
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
