import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { cn } from "@/lib/utils"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "javascript", className }: CodeBlockProps) {
  return (
    <div className={cn("code-block-container", className)}>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        showLineNumbers={true}
        customStyle={{
          borderRadius: "8px",
          padding: "20px",
          fontSize: "14px",
          margin: "20px 0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
