import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  authorRole?: string
  category: string
  tags: string[]
  readingTime: string
  content: string
  featured?: boolean
}

const POSTS_PATH = path.join(process.cwd(), "content/blog")

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(POSTS_PATH)) {
    return []
  }

  const files = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith(".md"))

  const posts = files
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "OpenCredit Team",
        authorRole: data.authorRole,
        category: data.category || "General",
        tags: data.tags || [],
        readingTime: calculateReadingTime(content),
        content,
        featured: data.featured || false,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(POSTS_PATH, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "OpenCredit Team",
    authorRole: data.authorRole,
    category: data.category || "General",
    tags: data.tags || [],
    readingTime: calculateReadingTime(content),
    content,
    featured: data.featured || false,
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map((post) => post.category))
  return Array.from(categories)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap((post) => post.tags))
  return Array.from(tags)
}
