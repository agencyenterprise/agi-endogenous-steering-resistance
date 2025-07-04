import { cn } from "@/lib/utils"

interface CitationProps {
  title: string
  author: string
  journal: string
  year: string
  url: string
  className?: string
}

export function Citation({ title, author, journal, year, url, className }: CitationProps) {
  return (
    <cite className={cn("block text-sm text-gray-600", className)}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {author}. &quot;{title}.&quot; <em>{journal}</em>, {year}.
      </a>
    </cite>
  )
}
