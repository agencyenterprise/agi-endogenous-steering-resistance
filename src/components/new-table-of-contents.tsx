"use client"

import { BookOpenText } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"
import { useIsClient, useMediaQuery } from "usehooks-ts"

import { Section } from "@/components/section"
import { AnimationDurationEnum } from "@/constants/animation"
import { cn } from "@/lib/utils"

interface ContentItem {
  title: string
  href: string
  children?: ContentItem[]
}

const contentItems: ContentItem[] = [
  {
    title: "Introduction",
    href: "#introduction",
  },
  {
    title: "Methodology",
    href: "#methodology",
    children: [
      {
        title: "Personas",
        href: "#personas",
      },
      {
        title: "SAE Implementation",
        href: "#sae-implementation",
      },
      {
        title: "SAE Latent Selection",
        href: "#sae-latent-selection",
      },
    ],
  },
  {
    title: "Token Activation",
    href: "#token-activation",
  },
  {
    title: "Main Results",
    href: "#main-results",
  },
]

const sectionIds = contentItems.flatMap(content => [
  content.href.substring(1), // Remove the # from href
  ...(content.children?.map(child => child.href.substring(1)) || []),
])

export function NewTableOfContents() {
  const isClient = useIsClient()
  const isMobile = useMediaQuery("(max-width: 1023px)")
  const [isOpen, setIsOpen] = useState(isMobile)
  const [activeSection, setActiveSection] = useState("")

  function handleClick(href: string) {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Cache DOM elements to avoid repeated queries
    const sectionElements = sectionIds
      .map(id => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    let ticking = false

    const updateActiveSection = () => {
      // Find the topmost visible section using cached elements
      const visibleSections = sectionElements.filter(element => {
        const rect = element.getBoundingClientRect()
        return rect.top < window.innerHeight && rect.bottom > 0
      })

      if (visibleSections.length > 0) {
        // Find the section closest to the top of the viewport
        const topSection = visibleSections.reduce((closest, current) => {
          const closestDistance = Math.abs(closest.getBoundingClientRect().top)
          const currentDistance = Math.abs(current.getBoundingClientRect().top)
          return currentDistance < closestDistance ? current : closest
        })

        setActiveSection(`#${topSection.id}`)
      }

      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateActiveSection)
        ticking = true
      }
    }

    // Initial call
    updateActiveSection()

    // Add throttled scroll event listener
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  if (!isClient) return null

  return (
    <Section
      id="table-of-contents"
      className="pt-4 w-full lg:w-80 lg:!p-0 lg:absolute lg:left-4 lg:top-4 lg:h-full lg:max-w-[calc((100vw-var(--container-2xl))/2-var(--spacing)*8)] z-20 pointer-events-none"
    >
      <motion.div
        className="flex flex-col border p-4 rounded-full shadow-sm min-w-full lg:min-w-14 lg:sticky lg:top-4 lg:left-4 bg-background pointer-events-auto"
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
          borderRadius: isOpen ? { duration: 0 } : { delay: 0.3 },
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
                initial={isMobile ? undefined : { opacity: 0, x: -10, fontSize: 0, filter: "blur(10px)" }}
                animate={isMobile ? undefined : { opacity: 1, x: 0, fontSize: "1rem", filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -10, fontSize: 0, filter: "blur(10px)" }}
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
              initial={isMobile ? undefined : { opacity: 0, height: 0, filter: "blur(10px)" }}
              animate={isMobile ? undefined : { opacity: 1, height: "280px", filter: "blur(0px)" }}
              exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
              transition={{
                duration: AnimationDurationEnum.FAST,
              }}
            >
              <div className="pt-4" />
              {contentItems.map(item => (
                <ContentItem
                  key={item.href}
                  item={item}
                  isMobile={isMobile}
                  activeSection={activeSection}
                  handleClick={handleClick}
                  className="font-semibold"
                >
                  {item.children?.map(child => (
                    <ContentItem
                      key={child.href}
                      item={child}
                      isMobile={isMobile}
                      activeSection={activeSection}
                      handleClick={handleClick}
                      className="pl-4"
                    />
                  ))}
                </ContentItem>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}

interface ContentItemProps {
  item: ContentItem
  isMobile: boolean
  activeSection: string
  handleClick: (href: string) => void
  className?: string
  children?: React.ReactNode
}

function ContentItem({ item, isMobile, activeSection, handleClick, className, children }: ContentItemProps) {
  const isActive = activeSection === item.href

  return (
    <>
      <motion.div
        key={item.href}
        className={cn("text-sm w-56 rounded-lg p-2 cursor-pointer text-blue-950", className)}
        initial={isMobile ? undefined : { opacity: 0, fontSize: 0, background: "transparent" }}
        animate={
          isMobile
            ? undefined
            : {
                opacity: 1,
                fontSize: "var(--text-sm)",
                background: isActive ? "var(--color-red-200)" : "transparent",
              }
        }
        exit={{ opacity: 0, fontSize: 0, background: "transparent" }}
        transition={{
          duration: AnimationDurationEnum.FAST,
          background: { delay: 0.4 },
        }}
        whileHover={{
          backgroundColor: "var(--color-gray-100)",
          transition: { backgroundColor: { duration: 0.2 } },
        }}
        onClick={() => handleClick(item.href)}
      >
        {item.title}
      </motion.div>
      {children}
    </>
  )
}
