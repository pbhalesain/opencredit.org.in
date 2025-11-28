"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { OpenCreditLogo } from "./logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <OpenCreditLogo className="w-32 h-32" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Problem
            </Link>
            <Link href="/#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Solution
            </Link>
            <Link href="/#algorithm" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Algorithm
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resources
                <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/docs">Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/whitepapers">Whitepapers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/milestones">Milestones</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/advocacy">Advocacy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contributing">Contributing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/code-of-conduct">Code of Conduct</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Roadmap
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="https://github.com/open-credit" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contributing">Get Involved</Link>
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/#problem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Problem
              </Link>
              <Link href="/#solution" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Solution
              </Link>
              <Link
                href="/#algorithm"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Algorithm
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <div className="pl-4 flex flex-col gap-2 border-l border-border">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Resources</span>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
                <Link
                  href="/whitepapers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Whitepapers
                </Link>
                <Link
                  href="/milestones"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Milestones
                </Link>
                <Link
                  href="/advocacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Advocacy
                </Link>
                <Link
                  href="/contributing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contributing
                </Link>
                <Link
                  href="/code-of-conduct"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Code of Conduct
                </Link>
              </div>
              <Link href="/#roadmap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Roadmap
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" asChild>
                  <Link href="https://github.com/open-credit" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/contributing">Get Involved</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
