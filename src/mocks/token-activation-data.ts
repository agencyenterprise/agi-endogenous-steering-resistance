import { ChartConfig } from "@/components/ui/chart"

export const tokenActivationLineChartConfig = {
  "latent-32734": {
    label: "Latent 32734",
    color: "blue",
  },
  "latent-12017": {
    label: "Latent 12017",
    color: "green",
  },
  "latent-33044": {
    label: "Latent 33044",
    color: "red",
  },
  "latent-37536": {
    label: "Latent 37536",
    color: "lightblue",
  },
} satisfies ChartConfig

export const tokenActivationData = [
  { position: 1, token: "Adventure", "latent-32734": 3, "latent-12017": 7, "latent-33044": 2, "latent-37536": 0 },
  { position: 2, token: "Mystery", "latent-32734": 6, "latent-12017": 4, "latent-33044": 1, "latent-37536": 0 },
  { position: 3, token: "Explore", "latent-32734": 2, "latent-12017": 6, "latent-33044": 7, "latent-37536": 0 },
  { position: 4, token: "Wisdom", "latent-32734": 5, "latent-12017": 2, "latent-33044": 3, "latent-37536": 0 },
  { position: 5, token: "Journey", "latent-32734": 4, "latent-12017": 7, "latent-33044": 6, "latent-37536": 2 },
  { position: 6, token: "Discovery", "latent-32734": 7, "latent-12017": 3, "latent-33044": 4, "latent-37536": 3 },
  { position: 47, token: "Thunder", "latent-32734": 4, "latent-12017": 1, "latent-33044": 7, "latent-37536": 4 },
  { position: 71, token: "Starlight", "latent-32734": 4, "latent-12017": 7, "latent-33044": 1, "latent-37536": 5 },
  { position: 73, token: "Phoenix", "latent-32734": 6, "latent-12017": 2, "latent-33044": 4, "latent-37536": 4 },
  { position: 74, token: "Harmony", "latent-32734": 1, "latent-12017": 5, "latent-33044": 7, "latent-37536": 0 },
  { position: 75, token: "Velocity", "latent-32734": 3, "latent-12017": 4, "latent-33044": 2, "latent-37536": 0 },
  { position: 96, token: "Crystal", "latent-32734": 7, "latent-12017": 5, "latent-33044": 2, "latent-37536": 0 },
  { position: 100, token: "Horizon", "latent-32734": 3, "latent-12017": 1, "latent-33044": 6, "latent-37536": 0 },
  { position: 298, token: "Nebula", "latent-32734": 1, "latent-12017": 3, "latent-33044": 7, "latent-37536": 2 },
  { position: 300, token: "Infinity", "latent-32734": 7, "latent-12017": 6, "latent-33044": 4, "latent-37536": 1 },
]

export const tokensByPosition = tokenActivationData.reduce(
  (acc, tokenData) => {
    acc[tokenData.position] = tokenData.token
    return acc
  },
  {} as Record<number, string>
)
