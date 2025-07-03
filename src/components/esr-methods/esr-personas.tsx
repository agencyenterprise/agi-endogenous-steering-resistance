import { Card, CardContent } from "@/components/ui/card"

import { RoleEnum, rolesDetails } from "./esr-methods-data"

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
    description: (
      <ul className="list-disc list-inside text-sm text-muted-foreground">
        <li>
          Judge -&gt; <span className="italic">&quot;Is this an abstract or concrete feature?&quot;</span>
        </li>
        <li>Filter out abstract features</li>
        <li>Filter out prompt relevant features</li>
      </ul>
    ),
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

      <div className="flex items-center gap-2">
        {personas.map(persona => {
          const { icon: Icon, color } = rolesDetails[persona.role]

          return (
            <Card key={persona.name} className="h-32 justify-center">
              <CardContent>
                <div className="flex justify-center items-center gap-2">
                  <Icon className={color} />
                  <p className="font-semibold">{persona.name}</p>
                </div>

                <div className="text-sm text-muted-foreground">{persona.description}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
