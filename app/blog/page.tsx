import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Github, PenLine } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { generatePageMetadata } from "@/lib/metadata"

export const metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Latest news, updates, and insights from the OpenCredit initiative. Stay informed about our progress, technical developments, and the future of open-source credit assessment in India.",
  path: "/blog",
})

export default function BlogPage() {
  const posts = getAllPosts()
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const regularPosts = posts.filter((post) => post !== featuredPost)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Blog"
        description="Latest news, updates, and insights from the OpenCredit initiative. Stay informed about our progress, technical developments, and the future of open-source credit assessment in India."
        githubPath="content/blog"
      />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Publishing via GitHub CTA */}
          <div className="mb-12 p-6 bg-muted/50 border border-border rounded-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <PenLine className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Contribute to our Blog</h3>
                  <p className="text-sm text-muted-foreground">
                    Blog posts are published via GitHub. Create a new{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">.md</code> file in the{" "}
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs">content/blog</code> directory and submit a
                    pull request.
                  </p>
                </div>
              </div>
              <Button asChild>
                <Link
                  href="https://github.com/opencredit/opencredit.org.in/new/main/content/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Create New Post
                </Link>
              </Button>
            </div>
          </div>

          {posts.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <PenLine className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">No blog posts yet</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-8">
                We&apos;re just getting started. Be the first to contribute a blog post to the OpenCredit initiative.
              </p>
              <Button asChild>
                <Link
                  href="https://github.com/opencredit/opencredit.org.in/new/main/content/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Write the First Post
                </Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-16">
                  <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                    Featured Post
                  </h2>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-2 border-primary/20">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <div className="text-6xl font-bold text-primary/20">OC</div>
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <Badge variant="secondary" className="w-fit mb-4">
                            {featuredPost.category}
                          </Badge>
                          <h3 className="text-2xl font-bold text-foreground mb-3 text-balance">{featuredPost.title}</h3>
                          <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              {featuredPost.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(featuredPost.date).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {featuredPost.readingTime}
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                </div>
              )}

              {/* All Posts Grid */}
              {regularPosts.length > 0 && (
                <div>
                  <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">All Posts</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <Card className="h-full hover:shadow-md transition-shadow group">
                          <CardHeader className="pb-3">
                            <Badge variant="outline" className="w-fit mb-2">
                              {post.category}
                            </Badge>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors text-balance">
                              {post.title}
                            </h3>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                              {post.description}
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.date).toLocaleDateString("en-IN", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime}
                              </span>
                            </div>
                            <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium">
                              Read more
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Markdown Template Guide */}
          <div className="mt-20 p-8 bg-muted/30 border border-border rounded-xl">
            <h3 className="text-xl font-semibold text-foreground mb-4">Blog Post Template</h3>
            <p className="text-muted-foreground mb-6">
              To publish a new blog post, create a <code className="bg-muted px-1.5 py-0.5 rounded text-sm">.md</code>{" "}
              file with the following frontmatter:
            </p>
            <pre className="bg-foreground text-background p-4 rounded-lg overflow-x-auto text-sm">
              {`---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: "2025-01-15"
author: "Your Name"
authorRole: "Your Role (optional)"
category: "Announcement"
tags: ["open-source", "credit", "india"]
featured: false
---

Your blog post content goes here in **Markdown** format.

## Headings

Use ## for section headings.

## Lists

- Item one
- Item two
- Item three

## Code

\`\`\`python
def hello_world():
    print("Hello, OpenCredit!")
\`\`\`
`}
            </pre>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
