"use client"

import { BookOpenText } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { Section } from "@/components/section"
import { AnimationDurationEnum } from "@/constants/animation"

const contentItems = [
  {
    title: "Abstract",
    href: "#abstract",
  },
  {
    title: "Model Architecture Diagram",
    href: "#model-architecture-diagram",
  },
  {
    title: "Sparse Autoencoder Implementation",
    href: "#sae-implementation",
  },
  {
    title: "Token Activation",
    href: "#token-activation",
  },
  {
    title: "Response Scores Comparison",
    href: "#response-scores-comparison",
  },
]

export function NewTableOfContents() {
  const isClient = useIsClient()
  const isMobile = useMediaQuery("(max-width: 1023px)")
  const [isOpen, setIsOpen] = useState(true)

  function handleClick(href: string) {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isClient) return null

  return (
    <Section
      id="table-of-contents"
      className="w-full lg:w-80 lg:!p-0 lg:absolute lg:left-4 lg:top-4 lg:h-full lg:max-w-[calc((100vw-var(--container-2xl))/2-var(--spacing)*8)] z-20 pointer-events-none"
    >
      <motion.div
        className="flex flex-col border p-4 rounded-2xl shadow-sm min-w-full lg:min-w-14 lg:sticky lg:top-4 lg:left-4 bg-background pointer-events-auto"
        animate={
          isMobile
            ? undefined
            : {
                width: isOpen ? "256px" : "56px",
                maxWidth: isOpen ? "256px" : "56px",
                borderRadius: isOpen ? "var(--radius-2xl)" : "9999px",
              }
        }
        transition={{
          width: { duration: AnimationDurationEnum.FAST },
          maxWidth: { duration: AnimationDurationEnum.FAST },
          borderRadius: { duration: 0 },
        }}
        onMouseLeave={isMobile ? undefined : () => setIsOpen(false)}
      >
        <div className="flex items-center gap-2 h-6 min-w-6">
          <div className="flex items-center justify-center size-6">
            <BookOpenText className="cursor-pointer" onMouseEnter={() => setIsOpen(true)} />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex items-center text-lg font-bold h-6 max-h-6 overflow-hidden"
                initial={isMobile ? undefined : { opacity: 0, x: -10, fontSize: 0 }}
                animate={isMobile ? undefined : { opacity: 1, x: 0, fontSize: "1rem" }}
                exit={{ opacity: 0, x: -10, fontSize: 0 }}
                transition={{
                  duration: AnimationDurationEnum.FAST,
                }}
              >
                Table of Contents
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="flex flex-col items-start"
              initial={isMobile ? undefined : { opacity: 0, height: 0 }}
              animate={isMobile ? undefined : { opacity: 1, height: "220px" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: AnimationDurationEnum.FAST,
              }}
            >
              <div className="pt-4" />
              {contentItems.map(item => (
                <motion.div
                  key={item.href}
                  className="text-sm w-56 rounded-lg p-2 hover:bg-gray-100 cursor-pointer transition-colors duration-100"
                  initial={isMobile ? undefined : { opacity: 0, fontSize: 0 }}
                  animate={isMobile ? undefined : { opacity: 1, fontSize: "var(--text-sm)" }}
                  exit={{ opacity: 0, fontSize: 0 }}
                  transition={{
                    duration: AnimationDurationEnum.FAST,
                  }}
                  onClick={() => handleClick(item.href)}
                >
                  {item.title}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
