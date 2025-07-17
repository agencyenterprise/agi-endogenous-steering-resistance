import * as motion from "motion/react-client"

import { Section } from "@/components/section"
import { AnimationDurationEnum } from "@/constants/animation"

export function Header() {
  return (
    <header className="flex justify-center items-center bg-radial from-blue-900 from-10% to-blue-950">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: AnimationDurationEnum.MEDIUM }}
      >
        <Section id="header" className="flex-row gap-2 items-end py-8 text-primary-foreground">
          <h1 className="text-4xl font-bold leading-none">AE.STUDIO</h1>
          <div className="text-xl font-extralight leading-none">RESEARCH</div>
        </Section>
      </motion.div>
    </header>
  )
}
