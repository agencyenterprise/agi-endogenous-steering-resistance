import { Bot, Flame, LucideIcon, User } from "lucide-react"

export interface Message {
  role: "user" | "assistant" | "judge"
  content: string
}

const iconsByRole: Record<string, LucideIcon> = {
  user: User,
  assistant: Bot,
  judge: Flame,
}

export function EsrSelfCorrection({ title, messages = [] }: { title: string; messages: Message[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="w-full flex flex-col gap-4">
        {messages.map((message, index) => {
          const Icon = iconsByRole[message.role]

          return (
            <div key={index} className="flex items-center gap-4">
              <div>
                <Icon className="size-8" />
              </div>
              <div className="">{message.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
