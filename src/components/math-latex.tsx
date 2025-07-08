"use client"

import "katex/dist/katex.min.css"
import { InlineMath } from "react-katex"

interface MathLatexProps {
  className?: string
}

export function MathLatex({ className }: MathLatexProps) {
  return (
    <div className={className}>
      <InlineMath>\int_0^\infty x^2 dx</InlineMath>
    </div>
  )
}
