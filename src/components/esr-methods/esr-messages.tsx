import { cn } from "@/lib/utils"
import { Message, rolesDetails } from "@/mocks/esr-methods-data"

export function EsrMessages({ title, messages = [] }: { title: string; messages: Message[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="w-full flex flex-col gap-4">
        {messages.map((message, index) => {
          const { icon: Icon, color } = rolesDetails[message.role]

          return (
            <div key={index} className="flex items-center gap-4">
              <div>
                <Icon className={cn("size-8", color)} />
              </div>
              <div className="">{message.content}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
