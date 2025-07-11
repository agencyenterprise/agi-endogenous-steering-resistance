import * as motion from "motion/react-client"

import { Section } from "@/components/section"
import { cn } from "@/lib/utils"

interface PageTitleProps {
  title: string
  description: string
  className?: string
}

export function PageTitle({ title, description, className }: PageTitleProps) {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 1, ease: "easeOut" }}
      className={cn("flex justify-center items-center", className)}
    >
      <Section id="page-title">
        <h1 className="text-2xl md:text-4xl font-bold w-full text-sky-950">{title}</h1>
        <div className="text-lg">{description}</div>
      </Section>
    </motion.div>
  )
}
