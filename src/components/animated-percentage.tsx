"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

interface AnimatedPercentageProps {
  value: number
  duration?: number
  className?: string
}

export function AnimatedPercentage({ value, duration = 1.5, className }: AnimatedPercentageProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(() => Math.round(count.get()))
  const percentage = useTransform(() => `${rounded.get()}%`)

  useEffect(() => {
    const controls = animate(count, value, { duration })
    return () => controls.stop()
  }, [value, duration, count])

  return <motion.span className={className}>{percentage}</motion.span>
}
