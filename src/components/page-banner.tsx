import * as motion from "motion/react-client"
import Image from "next/image"

import { AnimationDurationEnum } from "@/constants/animation"

export function PageBanner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: AnimationDurationEnum.MEDIUM, delay: 0.6 }}
      className="relative w-full min-h-[40vh]"
    >
      <Image
        src="https://agencyenterprise.github.io/agi-endogenous-steering-resistance/banner.png"
        alt="ESR Introduction"
        fill
        className="object-cover object-[center_60%]"
      />
    </motion.div>
  )
}
