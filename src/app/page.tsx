import * as motion from "motion/react-client"
import Image from "next/image"

import { EsrMethods } from "@/components/esr-methods"
import { PageMetadata } from "@/components/page-metadata"
import { PageTitle } from "@/components/page-title"
import { ResponseScoresComparison } from "@/components/response-scores-comparison"
import { SAEImplementation } from "@/components/sae-implementation"
import { Section } from "@/components/section"
import { TableOfContents } from "@/components/table-of-contents"
import { TokenActivation } from "@/components/token-activation"
import { Separator } from "@/components/ui/separator"
import { AnimationDurationEnum, FADE_IN_VIEWPORT } from "@/constants/animation"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 bg-gray-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: AnimationDurationEnum.SLOW, ease: "easeOut" }}
        className="relative w-full min-h-[350px]"
      >
        <Image
          src="https://agencyenterprise.github.io/agi-endogenous-steering-resistance/banner.png"
          alt="ESR Introduction"
          fill
          className="object-cover"
        />
      </motion.div>

      <PageTitle
        title="Endogenous resistance to activation steering in language models emerges at scale"
        description="LLMs can detect and actively resist unnatural manipulations of their internal representations."
      />

      <Separator className="bg-gray-400" />

      <PageMetadata
        authors={[
          "Keenan Pepper",
          "Stijn Servaes",
          "Murat Cubuktepe",
          "Judd Rosenblatt",
          "Diogo S de Lucena",
          "Michael Vaiana",
          "Michael S. A. Graziano",
        ]}
        published="July 10, 2025"
        doi="10.212433"
      />

      <div className="relative flex justify-center items-center flex-col gap-20 bg-background">
        <TableOfContents />

        <motion.div {...FADE_IN_VIEWPORT} className="pt-20">
          <Section id="abstract" title="Abstract">
            <div>
              We uncover a new phenomenon, Endogenous Steering Resistance (ESR), demonstrating that large language
              models can detect and actively resist unnatural manipulations of their internal representations. Using
              sparse autoencoder (SAE) latents in a 70B parameter language model, we show that models recognize when
              their outputs become incoherent from artificial manipulation of their activations. They subsequently
              self-correct, either spontaneously or when prompted with simple phrases like “try again”. This capability
              exhibits a clear scaling pattern, robustly appearing in the 70B parameter model but mostly absent in an 8B
              parameter variant from the same family. By analyzing the activation patterns of SAE latents, we identify
              specific meta-level latents involved in the model&apos;s self-correction mechanism. Our findings provide
              empirical evidence for sophisticated self-monitoring capabilities in large language models, with important
              implications for both AI alignment and theoretical understanding of emergent meta-cognition in artificial
              systems. In some respects, the phenomenon is analogous to the endogenous control of attention in humans,
              in which internal mechanisms resist distracting concepts and maintain activation of task-relevant
              representations.
            </div>
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="model-architecture-diagram" title="Model Architecture Diagram">
            <EsrMethods />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="sae-implementation" title="Sparse Autoencoder Implementation">
            <SAEImplementation />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT} className="z-10 relative w-full">
          <Section id="token-activation" fullWidth className="!p-0">
            <TokenActivation />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="response-scores-comparison" title="Response Scores Comparison">
            <ResponseScoresComparison />
          </Section>
        </motion.div>

        <div />
      </div>
    </div>
  )
}
