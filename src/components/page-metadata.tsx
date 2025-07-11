import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

interface PageMetadataProps {
  authors: string[]
  published: string
  doi: string
  className?: string
}

export function PageMetadata({ authors, published, doi, className }: PageMetadataProps) {
  return (
    <div className="flex justify-center items-center">
      <Section id="page-metadata" className={cn("grid grid-cols-3 text-sky-800", className)}>
        <div className="flex flex-col gap-2">
          <div className="text-xs font-medium text-sky-700">AUTHORS</div>
          {authors.map(author => (
            <div key={author} className="text-lg font-semibold">
              {author}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-sky-700">
          <div className="text-xs font-medium">PUBLISHED</div>
          <div className="text-lg font-semibold">{published}</div>
        </div>

        <div className="flex flex-col gap-2 text-sky-700">
          <div className="text-xs font-medium">DOI</div>
          <div className="text-lg font-semibold">{doi}</div>
        </div>
      </Section>
    </div>
  )
}
