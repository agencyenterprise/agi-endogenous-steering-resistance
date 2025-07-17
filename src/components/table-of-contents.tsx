"use client"

import { Eye, EyeOff } from "lucide-react"
import { Fragment, useState } from "react"

import { cn } from "@/lib/utils"

interface Content {
  title: string
  href: string
  children?: Content[]
}

const contents: Content[] = [
  {
    title: "Introduction",
    href: "#introduction",
  },
  {
    title: "Methodology",
    href: "#methodology",
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

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(true)

  function handleClick(href: string) {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="p-4 lg:p-0 flex-1 w-full h-full max-w-2xl lg:absolute lg:top-4 lg:left-4 lg:max-w-[calc((100vw-var(--container-2xl))/2-var(--spacing)*8)] xl:max-w-[calc((100vw-var(--container-3xl))/2-var(--spacing)*8)]!">
      <div className="bg-linear-(--gradient-rainbow) p-px rounded-3xl flex-1 lg:sticky lg:top-4 lg:ml-auto lg:max-w-80">
        <div className="p-4 md:p-6 rounded-3xl bg-background flex flex-col gap-6">
          <div className="text-xl font-bold flex justify-between items-center">
            Table of Contents
            <div
              className="cursor-pointer text-blue-900 min-w-12 size-12 flex justify-center items-center border rounded-full border-purple-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <EyeOff /> : <Eye />}
            </div>
          </div>

          <div className={cn("flex flex-col text-gray-800", isOpen ? "flex" : "hidden")}>
            {contents.map(content => (
              <Fragment key={content.href}>
                <div
                  className="hover:bg-gray-100 cursor-pointer w-full font-semibold p-2 rounded-lg transition-colors duration-500"
                  key={content.href}
                  onClick={() => handleClick(content.href)}
                >
                  {content.title}
                </div>

                {content.children && (
                  <div className="flex flex-col gap-2">
                    {content.children.map(child => (
                      <div
                        key={child.href}
                        className="pl-4 hover:bg-gray-100 cursor-pointer w-full font-semibold p-2 rounded-lg transition-colors duration-500"
                      >
                        {child.title}
                      </div>
                    ))}
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
