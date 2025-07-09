import * as motion from "motion/react-client"

import { Citation } from "@/components/citation"
import { CodeBlock } from "@/components/code-block"
import { EsrMethods } from "@/components/esr-methods"
import { FeatureHeatmap } from "@/components/feature-heatmap"
import { MathLatex } from "@/components/math-latex"
import { NextSectionArrowDown } from "@/components/next-section-arrow-down"
import { ResponseScoresComparison } from "@/components/response-scores-comparison"
import { Section } from "@/components/section"
import { TableOfContents } from "@/components/table-of-contents"
import { TokenActivation } from "@/components/token-activation/token-activation"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="py-8 md:py-16">
      <div className="flex flex-col w-full items-center gap-2 px-4">
        <h1 className="text-2xl md:text-3xl font-bold w-full text-center max-w-2xl xl:max-w-3xl">
          Endogenous resistance to activation steering in language models emerges at scale
        </h1>
        <div className="text-sm text-center">
          LLMs can detect and actively resist unnatural manipulations of their internal representations.
        </div>
      </div>

      <Separator className="my-8 md:my-16" />

      <div className="relative flex justify-center items-center flex-col gap-8 md:gap-16">
        <TableOfContents />

        <Section id="introduction" title="Introduction">
          <div>
            We uncover a new phenomenon, Endogenous Steering Resistance (ESR), demonstrating that large language models
            can detect and actively resist unnatural manipulations of their internal representations. Using sparse
            autoencoder (SAE) latents in a 70B parameter language model, we show that models recognize when their
            outputs become incoherent from artificial manipulation of their activations. They subsequently self-correct,
            either spontaneously or when prompted with simple phrases like “try again”. This capability exhibits a clear
            scaling pattern, robustly appearing in the 70B parameter model but mostly absent in an 8B parameter variant
            from the same family. By analyzing the activation patterns of SAE latents, we identify specific meta-level
            latents involved in the model&apos;s self-correction mechanism. Our findings provide empirical evidence for
            sophisticated self-monitoring capabilities in large language models, with important implications for both AI
            alignment and theoretical understanding of emergent meta-cognition in artificial systems. In some respects,
            the phenomenon is analogous to the endogenous control of attention in humans, in which internal mechanisms
            resist distracting concepts and maintain activation of task-relevant representations.
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <NextSectionArrowDown nextSectionId="methods" />
          </motion.div>
        </Section>

        <Section id="methods" title="Methods">
          <EsrMethods />
        </Section>

        <Section id="token-activation" title="Token Activation">
          <TokenActivation />
        </Section>

        <Section id="response-scores-comparison" title="Response Scores Comparison">
          <ResponseScoresComparison />
        </Section>

        <Section id="feature-heatmap" title="Feature Heatmap">
          <FeatureHeatmap />
        </Section>

        <Section id="app-components" title="Other App Components Below">
          <div className="flex flex-col gap-2">
            <div>Citation:</div>
            <Citation title="Citation" author="Author" journal="Journal" year="2025" url="https://www.google.com" />
          </div>
          <Separator />

          <div className="flex flex-col gap-2">
            <div>Code Block:</div>
            <CodeBlock code="console.log('Hello, world!')" />
          </div>
          <Separator />

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
