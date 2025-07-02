import * as motion from "motion/react-client"

import { BasicChart } from "@/components/basic-chart"
import { BasicKatex } from "@/components/basic-katex"

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1>Hello World</h1>

      <p className="font-sans">Font Sans</p>
      <p className="font-mono">Font Mono</p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 5 }}>
        <BasicChart />

        <BasicKatex />
      </motion.div>
    </div>
  )
}
