import { Section } from "@/components/section"

export function Header() {
  return (
    <header className="flex justify-center items-center bg-blue-950">
      <Section id="header" className="flex-row gap-2 items-end py-8 text-primary-foreground">
        <h1 className="text-4xl font-bold leading-none">AE.STUDIO</h1>
        <div className="text-xl font-extralight leading-none">RESEARCH</div>
      </Section>
    </header>
  )
}
