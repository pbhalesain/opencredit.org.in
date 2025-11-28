interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML conversion
  const parseMarkdown = (md: string): string => {
    let html = md
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-10 mb-4 text-foreground">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-12 mb-6 text-foreground">$1</h1>')
      // Bold and Italic
      .replace(/\*\*\*(.*?)\*\*\*/gim, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/gim, "<em>$1</em>")
      // Code blocks
      .replace(
        /```(\w+)?\n([\s\S]*?)```/gim,
        '<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-6"><code class="text-sm">$2</code></pre>',
      )
      // Inline code
      .replace(/`(.*?)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      // Links
      .replace(
        /\[([^\]]+)\]$$([^)]+)$$/gim,
        '<a href="$2" class="text-primary hover:underline" target="_blank" rel="noopener noreferrer">$1</a>',
      )
      // Images
      .replace(/!\[([^\]]*)\]$$([^)]+)$$/gim, '<img src="$2" alt="$1" class="rounded-lg my-6 max-w-full" />')
      // Blockquotes
      .replace(
        /^> (.*$)/gim,
        '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">$1</blockquote>',
      )
      // Unordered lists
      .replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc text-muted-foreground leading-relaxed">$1</li>')
      .replace(/^- (.*$)/gim, '<li class="ml-6 list-disc text-muted-foreground leading-relaxed">$1</li>')
      // Ordered lists
      .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 list-decimal text-muted-foreground leading-relaxed">$1</li>')
      // Horizontal rule
      .replace(/^---$/gim, '<hr class="border-border my-8" />')
      // Paragraphs
      .replace(/\n\n/gim, "</p><p class='text-muted-foreground leading-relaxed mb-4'>")

    // Wrap in paragraph tags
    html = `<p class='text-muted-foreground leading-relaxed mb-4'>${html}</p>`

    // Clean up empty paragraphs
    html = html.replace(/<p class='text-muted-foreground leading-relaxed mb-4'>\s*<\/p>/gim, "")

    // Wrap consecutive list items in ul/ol
    html = html.replace(/(<li class="ml-6 list-disc[^>]*>.*?<\/li>\s*)+/gim, '<ul class="my-4 space-y-2">$&</ul>')
    html = html.replace(/(<li class="ml-6 list-decimal[^>]*>.*?<\/li>\s*)+/gim, '<ol class="my-4 space-y-2">$&</ol>')

    return html
  }

  return <article className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
}
