import { SectionTitle } from "@/components/section-title"
import { cn } from "@/lib/utils"

interface SectionProps {
  id: string
  title?: string
  children?: React.ReactNode
  className?: string
  fullWidth?: boolean
}

export function Section({ id, title, children, className, fullWidth }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col gap-6 w-2xl xl:w-3xl px-4 md:px-8 z-10",
        {
          "!w-full max-w-none! bg-background": fullWidth,
        },
        className
      )}
    >
      {title && <SectionTitle title={title} />}
      {children}
    </section>
  )
}
