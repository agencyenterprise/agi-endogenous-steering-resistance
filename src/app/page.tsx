import * as motion from "motion/react-client"
import Image from "next/image"

import { EsrMethods } from "@/components/esr-methods"
import { EsrPersonas } from "@/components/esr-methods/esr-personas"
import { NewTableOfContents } from "@/components/new-table-of-contents"
import { PageMetadata } from "@/components/page-metadata"
import { PageTitle } from "@/components/page-title"
import { ResponseScoresComparison } from "@/components/response-scores-comparison"
import { SAEImplementation } from "@/components/sae-implementation"
import { Section } from "@/components/section"
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
        className="relative w-full min-h-[40vh]"
      >
        <Image
          src="https://agencyenterprise.github.io/agi-endogenous-steering-resistance/banner.png"
          alt="ESR Introduction"
          fill
          className="object-cover object-[center_60%]"
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
        <NewTableOfContents />

        <motion.div {...FADE_IN_VIEWPORT} className="pt-0 lg:pt-20">
          <Section id="introduction" title="Introduction">
            <div className="text-blue-950">
              We uncover a new phenomenon, Endogenous Steering Resistance (ESR), demonstrating that large language
              models can detect and actively resist unnatural manipulations of their internal representations. Using
              sparse autoencoder (SAE) latents in a 70B parameter language model, we show that models recognize when
              their outputs become incoherent from artificial manipulation of their activations. They subsequently
              self-correct, either spontaneously or when prompted with simple phrases like &quot;try again&quot;.
              <br />
              <br />
              This capability exhibits a clear scaling pattern, robustly appearing in the 70B parameter model but mostly
              absent in an 8B parameter variant from the same family. By analyzing the activation patterns of SAE
              latents, we identify specific meta-level latents involved in the model&apos;s self-correction mechanism.
              Our findings provide empirical evidence that large language models develop intrinsic safeguards against
              manipulation, suggesting a novel form of emergent behavior that could have implications for AI safety and
              interpretability research.
            </div>
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="methodology" title="Methodology">
            <div className="text-blue-950">
              We manipulate the internal representations of large language models by intervening on Sparse Autoencoder
              (SAE) latents, then assess the resulting responses using a judge model. <br />
              <br />
              By comparing models with 8B and 70B parameters, we examine both spontaneous and prompted self-correction
              behaviors. This methodology allows us to identify meta-level latents that play a key role in the
              self-correction process.
            </div>
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="personas" title="Personas">
            <EsrPersonas />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="sae-implementation" title="Sparse Autoencoder Implementation">
            <SAEImplementation />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="sae-latent-selection" title="SAE Latent Selection">
            <EsrMethods />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT} className="z-10 relative w-full">
          <Section id="token-activation" fullWidth className="!p-0">
            <TokenActivation />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="main-results" title="Main Results">
            <ResponseScoresComparison />
          </Section>
        </motion.div>

        <motion.div {...FADE_IN_VIEWPORT}>
          <Section id="conclusion" title="Conclusion">
            <div className="text-blue-950">
              Our research uncovers a novel phenomenon of Endogenous Steering Resistance (ESR) in large language models.
              This emergent behavior represents a form of intrinsic safeguard that develops as models scale, potentially
              providing a natural defense mechanism against certain types of manipulation.
              <br />
              <br /> The implications of this finding extend beyond basic research into practical applications for AI
              safety and interpretability. Understanding how models develop and deploy these resistance mechanisms could
              inform the development of more robust and trustworthy AI systems.
              <br />
              <br /> Future work should explore the generality of this phenomenon across different model architectures
              and training regimes, as well as investigate the potential for leveraging these natural resistance
              mechanisms in AI safety applications
            </div>
          </Section>
        </motion.div>

        <div />
      </div>
    </div>
  )
}
