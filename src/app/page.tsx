import * as motion from "motion/react-client"

import { BasicKatex } from "@/components/basic-katex"
import { EsrMethods } from "@/components/esr-methods"
import { NextSectionArrowDown } from "@/components/next-section-arrow-down"
import { Section } from "@/components/section"
import { TokenActivation } from "@/components/token-activation/token-activation"

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-16 py-16">
      <Section id="lorem-ipsum" title="Lorem Ipsum">
        <div>
          <motion.p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel pellentesque mi. Curabitur nunc neque,
            auctor non dictum tristique, posuere quis quam. Vivamus non dui mi. Sed a augue enim. Morbi sed sagittis
            orci. Maecenas maximus elit et sodales faucibus. Nunc eget massa non augue dapibus egestas at eu metus.
            Donec felis odio, dapibus vel fermentum vel, interdum et tellus. Vivamus varius eros ut tempus fermentum.
            Etiam venenatis libero vel felis vulputate, non faucibus tortor molestie. Nunc sit amet velit egestas,
            luctus lorem id, consectetur nibh. Maecenas sed varius nisi. Aliquam tincidunt magna nec felis semper
            sagittis. Fusce auctor scelerisque nibh et dapibus. Nunc id urna id magna molestie tempus.
          </motion.p>
          <motion.p className="text-xl">
            Maecenas ut nisi in urna interdum sodales. Nunc condimentum mauris ut rhoncus finibus. Aliquam sit amet est
            convallis, dignissim eros lacinia, tempor nulla. Duis imperdiet orci nec eros ultricies semper. Vivamus
            pretium augue quam, a tincidunt quam euismod ut. Fusce dapibus nisl eu tincidunt egestas. Vestibulum
            consectetur vulputate tincidunt. Mauris nec volutpat nunc. Etiam magna ligula, aliquet at quam sed, ornare
            cursus odio. Vestibulum dignissim orci at lorem fermentum, a blandit lectus molestie. Donec commodo lorem id
            dui dignissim aliquam. Morbi non leo tristique augue lacinia sagittis.
          </motion.p>
          <motion.p className="text-xl">
            Quisque rhoncus, purus in suscipit tincidunt, neque quam molestie elit, vitae dignissim erat magna faucibus
            lorem. Fusce eget mauris interdum, eleifend quam ac, ornare risus. Pellentesque sit amet feugiat ante, ut
            pharetra magna. Vivamus pharetra accumsan neque, sit amet eleifend arcu pellentesque at. Duis ornare arcu a
            pretium tincidunt. In dapibus sapien ex, at dictum elit accumsan at. Pellentesque et dolor rhoncus, gravida
            magna sit amet, accumsan justo.
          </motion.p>
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

      <Section id="basic-chart" title="Token Activation Chart">
        <TokenActivation />
      </Section>

      <Section id="basic-katex" title="Basic Katex">
        <BasicKatex />
      </Section>
    </div>
  )
}
