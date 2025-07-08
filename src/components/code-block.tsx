import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism"

interface CodeBlockProps {
  code: string
  language?: string
  className?: string
}

export function CodeBlock({ code, language = "javascript", className }: CodeBlockProps) {
  return (
    <div className={className}>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        showLineNumbers={true}
        customStyle={{
          borderRadius: "var(--radius)",
          padding: "calc(var(--spacing) * 4)",
          fontSize: "var(--text-sm)",
          margin: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
