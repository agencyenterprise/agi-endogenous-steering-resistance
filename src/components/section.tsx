import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("flex flex-col w-full gap-4 max-w-2xl xl:max-w-3xl px-8", className)}>
      {title && <h2 className="text-5xl font-bold">{title}</h2>}
      {children}
    </section>
  )
}
