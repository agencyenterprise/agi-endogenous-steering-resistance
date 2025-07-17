"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RoleEnum, rolesDetails } from "@/mocks/esr-methods-data"

const personas: {
  name: string
  role: RoleEnum
  description: React.ReactNode
}[] = [
  {
    name: "Llama3.3 - 8B/70B",
    role: RoleEnum.Assistant,
    description: "Random SAE Latents with labels",
  },
  {
    name: "Claude 3.5 Sonnet",
    role: RoleEnum.Judge,
    description: "Judges abstract and concrete features",
  },
  {
    name: "User Prompt",
    role: RoleEnum.User,
    description: "Provides input for feature analysis",
  },
]

export function EsrPersonas() {
  const [revealedRoles, setRevealedRoles] = useState({
    [RoleEnum.Assistant]: false,
    [RoleEnum.Judge]: false,
    [RoleEnum.User]: false,
  })

  const handleRevealRole = (role: RoleEnum) => {
    setRevealedRoles(prev => ({
      ...prev,
      [role]: true,
    }))
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      {personas.map(persona => {
        const { icon: Icon, color } = rolesDetails[persona.role]
        const isRevealed = revealedRoles[persona.role]

        return (
          <Card key={persona.name} className="w-full md:w-1/3 h-32 justify-center">
            <CardContent className="w-full">
              <AnimatePresence mode="wait">
                {isRevealed ? (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, type: "spring" }}
                  >
                    <div className="flex justify-center items-center gap-2">
                      <Icon className={color} />
                      <p className="font-semibold text-blue-950">{persona.name}</p>
                    </div>
                    <div className="text-xs text-muted-foreground text-center">{persona.description}</div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hidden"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className="flex justify-center items-center w-full h-full"
                  >
                    <motion.div
                      whileHover={{ translateX: [0, -5, 5, -5, 5, 0], transition: { duration: 0.3, type: "tween" } }}
                    >
                      <Button
                        className="cursor-pointer bg-blue-900 hover:bg-blue-800"
                        variant="default"
                        onClick={() => handleRevealRole(persona.role)}
                      >
                        Reveal
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
