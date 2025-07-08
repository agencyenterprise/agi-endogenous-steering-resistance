import * as motion from "motion/react-client"

import { Citation } from "@/components/citation"
import { CodeBlock } from "@/components/code-block"
import { EsrMethods } from "@/components/esr-methods"
import { MathLatex } from "@/components/math-latex"
import { NextSectionArrowDown } from "@/components/next-section-arrow-down"
import { Section } from "@/components/section"
import { TableOfContents } from "@/components/table-of-contents"
import { TokenActivation } from "@/components/token-activation/token-activation"

export default function Home() {
  return (
    <div className="py-8 md:py-16">
      <div className="relative flex justify-center items-center flex-col gap-8 md:gap-16">
        <TableOfContents />

        <Section id="introduction" title="Introduction">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque amet ad sint tempore vitae,
            esse, et distinctio quae at corrupti hic, totam perspiciatis nisi dolorem iure autem mollitia alias. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Optio, nemo recusandae numquam vitae sit sunt totam
            eligendi dicta debitis ducimus id consequuntur, quod obcaecati in cum sequi iste maxime sed? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Perferendis incidunt vel corporis voluptates eligendi suscipit
            doloribus maiores beatae ut? Mollitia tempore debitis adipisci suscipit enim similique commodi rem inventore
            odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <NextSectionArrowDown nextSectionId="esr-methods" />
          </motion.div>
        </Section>

        <Section id="esr-methods" title="ESR Methods">
          <EsrMethods />
        </Section>

        <Section id="token-activation-chart" title="Token Activation Chart">
          <TokenActivation />
        </Section>

        <Section id="components" title="Components">
          <div className="flex flex-col gap-2">
            <div>Citation:</div>
            <Citation title="Citation" author="Author" journal="Journal" year="2025" url="https://www.google.com" />
          </div>
          <hr />

          <div className="flex flex-col gap-2">
            <div>Code Block:</div>
            <CodeBlock code="console.log('Hello, world!')" />
          </div>
          <hr />

          <div className="flex flex-col gap-2">
            <div>Math Formula:</div>
            <MathLatex />
          </div>
        </Section>

        <Section id="full-width" fullWidth>
          <div className="bg-blue-100 text-xl p-4">Full Width Section</div>
        </Section>

        <Section id="full-width-with-title" fullWidth title="Full Width Section with Title">
          <div className="bg-blue-100 text-xl p-4">Full Width Section with Title</div>
        </Section>
      </div>
    </div>
  )
}
