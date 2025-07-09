"use client"

const contents = [
  {
    title: "Introduction",
    href: "#introduction",
  },
  {
    title: "ESR Methods",
    href: "#esr-methods",
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
  function handleClick(href: string) {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex-1 w-full h-full max-w-2xl lg:absolute lg:top-0 lg:left-0 lg:max-w-[calc((100vw-var(--container-2xl))/2)] xl:max-w-[calc((100vw-var(--container-3xl))/2)]!">
      <div className="bg-background flex flex-col gap-4 flex-1 border-b lg:border-b-0 lg:border-r px-8 pb-8 lg:sticky lg:top-0 lg:ml-auto lg:max-w-64 lg:py-4">
        <div className="text-lg font-bold">Contents</div>

        <ul className="flex flex-col gap-2">
          {contents.map(content => (
            <li
              className="hover:underline cursor-pointer w-fit"
              key={content.href}
              onClick={() => handleClick(content.href)}
            >
              {content.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
