import * as motion from "motion/react-client"

import { Section } from "@/components/section"
import { AnimationDurationEnum } from "@/constants/animation"
import { cn } from "@/lib/utils"

interface PageTitleProps {
  title: string
  description: string
  className?: string
}

export function PageTitle({ title, description, className }: PageTitleProps) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: AnimationDurationEnum.MEDIUM,
          delay: 1.2,
        }}
      >
        <Section id="page-title" className="text-blue-950">
          <h1 className="text-2xl md:text-4xl font-bold w-full">{title}</h1>
          <div className="text-lg w-full md:w-2/3">{description}</div>
        </Section>
      </motion.div>
    </div>
  )
}
