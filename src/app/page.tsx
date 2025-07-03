"use client"

import { ChevronDownIcon } from "lucide-react"
import * as motion from "motion/react-client"

import { BasicChart } from "@/components/basic-chart"
import { BasicKatex } from "@/components/basic-katex"

export default function Home() {
  return (
    <div className="container mx-auto">
      <section id="lorem-ipsum">
        <h2 className="text-5xl font-bold">Lorem Ipsum</h2>
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
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer inline-block"
            onClick={() => {
              const nextSection = document.getElementById("basic-chart")
              nextSection?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <ChevronDownIcon className="h-8 w-8" />
          </motion.div>
        </motion.div>
      </section>

      <section id="basic-chart">
        <h2 className="text-5xl font-bold">Basic Chart</h2>
        <BasicChart />
      </section>

      <section id="basic-katex">
        <h2 className="text-5xl font-bold">Basic Katex</h2>
        <BasicKatex />
      </section>
    </div>
  )
}
