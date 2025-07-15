interface UnicornStudio {
  isInitialized: boolean
  init?(): void
}

declare global {
  interface Window {
    UnicornStudio: UnicornStudio
  }
}

export {}
