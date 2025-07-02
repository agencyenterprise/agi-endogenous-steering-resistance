"use client"

import "katex/dist/katex.min.css"
import { InlineMath } from "react-katex"

export function BasicKatex() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="text-2xl font-bold">Basic Katex</h2>

      <InlineMath>\int_0^\infty x^2 dx</InlineMath>
    </div>
  )
}
