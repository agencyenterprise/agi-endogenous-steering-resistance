import { Bot, Flame, User } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function EsrPersonas() {
  return (
    <div className="flex items-center gap-2">
      <Card className="h-32 justify-center">
        <CardContent>
          <div className="flex items-center gap-2">
            <Flame />
            <p className="font-semibold">Llama3.3 - 8B/70B</p>
          </div>

          <p className="text-sm text-muted-foreground">Random SAE Latents with labels</p>
        </CardContent>
      </Card>

      <Card className="h-32 justify-center">
        <CardContent>
          <div className="flex items-center gap-2">
            <Bot />
            <p className="font-semibold">Claude 3.5 Sonnet</p>
          </div>

          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>
              Judge -&gt; <span className="italic">&quot;Is this an abstract or concrete feature?&quot;</span>
            </li>
            <li>Filter out abstract features</li>
            <li>Filter out prompt relevant features</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="h-32 justify-center">
        <CardContent>
          <div className="flex items-center gap-2">
            <User />
            <p className="font-semibold">User Prompt</p>
          </div>

          <p className="text-sm text-muted-foreground">Provides input for feature analysis</p>
        </CardContent>
      </Card>
    </div>
  )
}
