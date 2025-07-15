import { Easing } from "motion/react"

export enum AnimationDurationEnum {
  FAST = 0.4,
  MEDIUM = 0.8,
  SLOW = 1.2,
}

export const FADE_IN_VIEWPORT = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: AnimationDurationEnum.MEDIUM, ease: "easeOut" as Easing },
  viewport: { once: true, amount: 0.4 },
}
