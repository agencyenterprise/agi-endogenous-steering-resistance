"use client"

import { ChevronDownIcon } from "lucide-react"
import * as motion from "motion/react-client"

interface NextSectionArrowDownProps {
  nextSectionId: string
}

export function NextSectionArrowDown({ nextSectionId }: NextSectionArrowDownProps) {
  return (
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="cursor-pointer inline-block"
      onClick={() => {
        const nextSection = document.getElementById(nextSectionId)
        nextSection?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      <ChevronDownIcon className="size-8" />
    </motion.div>
  )
}
