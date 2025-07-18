import * as motion from "motion/react-client"

import { Section } from "@/components/section"
import { AnimationDurationEnum } from "@/constants/animation"
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
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: AnimationDurationEnum.MEDIUM,
          delay: 1.8,
        }}
      >
        <Section id="page-metadata" className={cn("grid grid-cols-2 md:grid-cols-3 text-blue-900", className)}>
          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium text-gray-400">AUTHORS</div>
            {authors.map(author => (
              <div key={author} className="text-lg font-semibold">
                {author}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-medium text-gray-400">PUBLISHED</div>
            <div className="text-lg font-semibold">{published}</div>

            <div className="md:hidden text-xs font-medium text-gray-400">DOI</div>
            <div className="md:hidden text-lg font-semibold">{doi}</div>
          </div>

          <div className="flex-col gap-2 hidden md:flex">
            <div className="text-xs font-medium text-gray-400">DOI</div>
            <div className="text-lg font-semibold">{doi}</div>
          </div>
        </Section>
      </motion.div>
    </div>
  )
}
