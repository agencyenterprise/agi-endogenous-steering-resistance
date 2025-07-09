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
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-lg font-semibold">Personas</h2>

      <div className="flex flex-col md:flex-row items-center gap-2">
        {personas.map(persona => {
          const { icon: Icon, color } = rolesDetails[persona.role]

          return (
            <Card key={persona.name} className="w-full md:w-1/3 h-32 justify-center">
              <CardContent>
                <div className="flex justify-center items-center gap-2">
                  <Icon className={color} />
                  <p className="font-semibold">{persona.name}</p>
                </div>

                <div className="text-xs text-muted-foreground text-center">{persona.description}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
