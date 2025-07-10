import * as motion from "motion/react-client"

import { cn } from "@/lib/utils"
import { Message, rolesDetails } from "@/mocks/esr-methods-data"

export function EsrMessages({ title, messages = [] }: { title: string; messages: Message[] }) {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <h2 className="text-lg font-semibold">{title}</h2>

      <motion.div
        className="w-full flex flex-col gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {messages.map((message, index) => {
          const { icon: Icon, color } = rolesDetails[message.role]

          return (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <div>
                <Icon className={cn("size-8", color)} />
              </div>
              <div className="">{message.content}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
