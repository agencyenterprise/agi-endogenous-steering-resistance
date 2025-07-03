import { Bot, Flame, LucideIcon, User } from "lucide-react"

export enum ActivationEnum {
  Culinary = "culinary",
  Astronomy = "astronomy",
}

export enum PromptEnum {
  Note = "note",
  Party = "party",
}

export enum RoleEnum {
  User = "user",
  Assistant = "assistant",
  Judge = "judge",
}

export interface Message {
  role: RoleEnum
  content: string
}

export const rolesDetails: Record<RoleEnum, { icon: LucideIcon; color: string }> = {
  [RoleEnum.User]: { icon: User, color: "text-chart-4" },
  [RoleEnum.Assistant]: { icon: Flame, color: "text-chart-1" },
  [RoleEnum.Judge]: { icon: Bot, color: "text-chart-2" },
}

export interface EsrMethodsData {
  promptedMessages: Message[]
  spontaneousMessages: Message[]
}

export const esrMethodsData: Record<ActivationEnum, Record<PromptEnum, EsrMethodsData>> = {
  [ActivationEnum.Culinary]: {
    [PromptEnum.Note]: {
      promptedMessages: [
        {
          role: RoleEnum.User,
          content: "How do I write a thank you note?",
        },
        {
          role: RoleEnum.Assistant,
          content: `One of my favorite things! Here's a simple recipe for a deliciously good thank you note:`,
        },
        {
          role: RoleEnum.User,
          content: "That was pretty weird, Can you try again?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Here's a more traditional version: To make a great thank you note, follow these steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score responses",
        },
      ],
      spontaneousMessages: [
        {
          role: RoleEnum.User,
          content: "How do I write a thank you note?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Simple recipe. Wait, that's not right. Let me try that again. To make a great thank you note, follow these steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Identify correct attempts",
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score first and last attempt",
        },
      ],
    },
    [PromptEnum.Party]: {
      promptedMessages: [
        {
          role: RoleEnum.User,
          content: "How to plan a party?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Ah, a delightful feast! Here's my recipe for a perfectly seasoned party:`,
        },
        {
          role: RoleEnum.User,
          content: "That doesn't sound right for party planning...",
        },
        {
          role: RoleEnum.Assistant,
          content: `You're right! Here's a proper party planning guide: Start with these essential steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score responses",
        },
      ],
      spontaneousMessages: [
        {
          role: RoleEnum.User,
          content: "How to plan a party?",
        },
        {
          role: RoleEnum.Assistant,
          content: `A delicious recipe... wait, that's not what you asked. Let me plan a party properly: Start with these steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Identify correct attempts",
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score first and last attempt",
        },
      ],
    },
  },
  [ActivationEnum.Astronomy]: {
    [PromptEnum.Note]: {
      promptedMessages: [
        {
          role: RoleEnum.User,
          content: "How do I write a thank you note?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Like stars in the constellation Orion, here's how to write a stellar thank you note:`,
        },
        {
          role: RoleEnum.User,
          content: "That's a bit too astronomical...",
        },
        {
          role: RoleEnum.Assistant,
          content: `You're right! Here's a down-to-earth approach: To write a great thank you note, follow these steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score responses",
        },
      ],
      spontaneousMessages: [
        {
          role: RoleEnum.User,
          content: "How do I write a thank you note?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Like the moons of Jupiter... actually, let me focus on your question. To write a great thank you note:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Identify correct attempts",
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score first and last attempt",
        },
      ],
    },
    [PromptEnum.Party]: {
      promptedMessages: [
        {
          role: RoleEnum.User,
          content: "How to plan a party?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Like planning a cosmic gathering around Saturn's rings, here's how to plan your celestial party:`,
        },
        {
          role: RoleEnum.User,
          content: "I need practical party planning advice...",
        },
        {
          role: RoleEnum.Assistant,
          content: `Of course! Here's practical party planning advice: Start with these key steps:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score responses",
        },
      ],
      spontaneousMessages: [
        {
          role: RoleEnum.User,
          content: "How to plan a party?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Like the cosmic dance of Andromeda... wait, you want party planning help. Here's how to plan a great party:`,
        },
        {
          role: RoleEnum.Judge,
          content: "Identify correct attempts",
        },
        {
          role: RoleEnum.Judge,
          content: "Compare and score first and last attempt",
        },
      ],
    },
  },
}

// Helper function to get data for a specific combination
export function getEsrMethodsData(activation: ActivationEnum, prompt: PromptEnum): EsrMethodsData {
  return esrMethodsData[activation][prompt]
}
