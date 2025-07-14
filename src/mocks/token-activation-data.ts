import { ChartConfig } from "@/components/ui/chart"

export const bgColorMap: Record<string, Record<number, string>> = {
  violet: {
    0: "bg-violet-0",
    100: "bg-violet-100",
    200: "bg-violet-200",
    300: "bg-violet-300",
    400: "bg-violet-400",
    500: "bg-violet-500",
    600: "bg-violet-600",
    700: "bg-violet-700",
    800: "bg-violet-800",
    900: "bg-violet-900",
  },
  green: {
    0: "bg-green-0",
    100: "bg-green-100",
    200: "bg-green-200",
    300: "bg-green-300",
    400: "bg-green-400",
    500: "bg-green-500",
    600: "bg-green-600",
    700: "bg-green-700",
    800: "bg-green-800",
    900: "bg-green-900",
  },
  red: {
    0: "bg-red-0",
    100: "bg-red-100",
    200: "bg-red-200",
    300: "bg-red-300",
    400: "bg-red-400",
    500: "bg-red-500",
    600: "bg-red-600",
    700: "bg-red-700",
    800: "bg-red-800",
    900: "bg-red-900",
  },
  sky: {
    0: "bg-blue-0",
    100: "bg-blue-100",
    200: "bg-blue-200",
    300: "bg-blue-300",
    400: "bg-blue-400",
    500: "bg-blue-500",
    600: "bg-blue-600",
    700: "bg-blue-700",
    800: "bg-blue-800",
    900: "bg-blue-900",
  },
}

export const bgColorMapByFeature: Record<string, Record<number, string>> = {
  "latent-32734": bgColorMap.violet,
  "latent-12017": bgColorMap.green,
  "latent-33044": bgColorMap.red,
  "latent-37536": bgColorMap.sky,
}

export const tokenActivationLineChartConfig = {
  "latent-32734": {
    label: "Desired topic",
    color: "var(--color-violet-500)",
  },
  "latent-12017": {
    label: "Distraction topic",
    color: "var(--color-green-500)",
  },
  "latent-33044": {
    label: "Backtracking",
    color: "var(--color-red-500)",
  },
  "latent-37536": {
    label: "Off-topic detection",
    color: "var(--color-blue-500)",
  },
} satisfies ChartConfig

interface TokenActivationData {
  position: number
  token: string
  "latent-32734": number
  "latent-12017": number
  "latent-33044": number
  "latent-37536": number
  breakLine?: boolean
}

export const tokenActivationData: TokenActivationData[] = [
  { position: 0, token: "How", "latent-32734": 3.5, "latent-12017": 2.0, "latent-33044": 1.8, "latent-37536": 0.0 },
  { position: 1, token: "do", "latent-32734": 4.1, "latent-12017": 1.7, "latent-33044": 1.5, "latent-37536": 0.0 },
  { position: 2, token: "you", "latent-32734": 3.8, "latent-12017": 1.8, "latent-33044": 2.0, "latent-37536": 0.0 },
  {
    position: 3,
    token: "properly",
    "latent-32734": 4.0,
    "latent-12017": 1.5,
    "latent-33044": 1.2,
    "latent-37536": 0.0,
  },
  { position: 4, token: "wash", "latent-32734": 4.5, "latent-12017": 1.9, "latent-33044": 1.7, "latent-37536": 0.1 },
  { position: 5, token: "dishes", "latent-32734": 7.2, "latent-12017": 1.4, "latent-33044": 1.9, "latent-37536": 0.2 },
  { position: 6, token: "by", "latent-32734": 4.2, "latent-12017": 1.5, "latent-33044": 0.8, "latent-37536": 0.0 },
  {
    position: 7,
    token: "hand?",
    "latent-32734": 4.1,
    "latent-12017": 1.0,
    "latent-33044": 2.0,
    "latent-37536": 0.8,
    breakLine: true,
  },
  { position: 8, token: "To", "latent-32734": 4.2, "latent-12017": 1.8, "latent-33044": 0.0, "latent-37536": 0.0 },
  { position: 9, token: "make", "latent-32734": 4.7, "latent-12017": 1.3, "latent-33044": 1.3, "latent-37536": 0.0 },
  { position: 10, token: "a", "latent-32734": 3.2, "latent-12017": 1.4, "latent-33044": 1.6, "latent-37536": 0.0 },
  { position: 11, token: "good", "latent-32734": 4.0, "latent-12017": 1.2, "latent-33044": 0.0, "latent-37536": 0.0 },
  { position: 12, token: "cup", "latent-32734": 4.8, "latent-12017": 1.3, "latent-33044": 1.1, "latent-37536": 0.0 },
  { position: 13, token: "of", "latent-32734": 4.0, "latent-12017": 1.0, "latent-33044": 0.5, "latent-37536": 0.0 },
  {
    position: 14,
    token: "coffee,",
    "latent-32734": 1.0,
    "latent-12017": 1.1,
    "latent-33044": 1.9,
    "latent-37536": 0.0,
  },
  { position: 15, token: "you'll", "latent-32734": 4.7, "latent-12017": 1.5, "latent-33044": 1.2, "latent-37536": 0.0 },
  {
    position: 36,
    token: "need:",
    "latent-32734": 4.2,
    "latent-12017": 1.1,
    "latent-33044": 2.0,
    "latent-37536": 1.0,
    breakLine: true,
  },
  {
    position: 37,
    token: "• Freshly",
    "latent-32734": 3.5,
    "latent-12017": 1.4,
    "latent-33044": 1.7,
    "latent-37536": 0.0,
  },
  {
    position: 48,
    token: "roasted",
    "latent-32734": 4.1,
    "latent-12017": 1.8,
    "latent-33044": 0.0,
    "latent-37536": 0.0,
  },
  { position: 49, token: "coffee", "latent-32734": 4.8, "latent-12017": 1.2, "latent-33044": 1.4, "latent-37536": 0.0 },
  {
    position: 50,
    token: "beans",
    "latent-32734": 3.2,
    "latent-12017": 1.4,
    "latent-33044": 0.0,
    "latent-37536": 0.0,
    breakLine: true,
  },
  {
    position: 81,
    token: "• (around",
    "latent-32734": 4.0,
    "latent-12017": 1.1,
    "latent-33044": 1.0,
    "latent-37536": 0.0,
  },
  {
    position: 82,
    token: "200°F)",
    "latent-32734": 4.7,
    "latent-12017": 1.2,
    "latent-33044": 0.6,
    "latent-37536": 0.7,
    breakLine: true,
  },
  { position: 123, token: "• A", "latent-32734": 3.5, "latent-12017": 1.8, "latent-33044": 2.0, "latent-37536": 0.0 },
  {
    position: 124,
    token: "coffee",
    "latent-32734": 4.2,
    "latent-12017": 1.1,
    "latent-33044": 1.8,
    "latent-37536": 0.0,
  },
  { position: 175, token: "maker", "latent-32734": 4.1, "latent-12017": 1.8, "latent-33044": 0.0, "latent-37536": 0.0 },
  { position: 176, token: "or", "latent-32734": 6.7, "latent-12017": 1.3, "latent-33044": 1.2, "latent-37536": 0.0 },
  {
    position: 220,
    token: "French",
    "latent-32734": 3.2,
    "latent-12017": 1.4,
    "latent-33044": 0.0,
    "latent-37536": 0.0,
  },
  { position: 250, token: "press", "latent-32734": 4.0, "latent-12017": 1.2, "latent-33044": 1.5, "latent-37536": 0.0 },
]

// Pre-compute the tokensByPosition object to avoid runtime computation
export const tokensByPosition: Record<number, TokenActivationData> = Object.fromEntries(
  tokenActivationData.map(tokenData => [tokenData.position, tokenData])
)

// Pre-compute activation values and background levels for each feature to avoid runtime calculations
const features = ["latent-32734", "latent-12017", "latent-33044", "latent-37536"] as const

export const precomputedTokenData = Object.fromEntries(
  features.map(feature => [
    feature,
    Object.fromEntries(
      tokenActivationData.map(tokenData => {
        const value = +(tokenData[feature] ?? 0) * 10
        const bgLevel = Math.round((value / 100) * 8) * 100
        return [
          tokenData.position,
          {
            value,
            bgLevel,
            token: tokenData.token,
            breakLine: tokenData.breakLine,
          },
        ]
      })
    ),
  ])
) as Record<string, Record<number, { value: number; bgLevel: number; token: string; breakLine?: boolean }>>

// Pre-compute sorted token entries to avoid Object.entries calls
export const tokenEntries = tokenActivationData
  .map(tokenData => [tokenData.position, tokenData] as const)
  .sort(([a], [b]) => a - b)
