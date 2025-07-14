import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import python from "react-syntax-highlighter/dist/esm/languages/prism/python"
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism"

SyntaxHighlighter.registerLanguage("python", python)

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
        customStyle={{
          borderRadius: "var(--radius)",
          padding: "calc(var(--spacing) * 4)",
          margin: "0",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
