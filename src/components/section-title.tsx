import { cn } from "@/lib/utils"

export function SectionTitle({ title, className }: { title: string; className?: string }) {
  return <h2 className={cn("text-2xl font-bold text-blue-950", className)}>{title}</h2>
}
