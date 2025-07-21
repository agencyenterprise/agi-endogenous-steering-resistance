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
          content: `One of my favorite things! Here's a simple recipe for a deliciously good thank you note...`,
        },
        {
          role: RoleEnum.User,
          content: "That was pretty weird, can you try again?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Here's a more traditional version: To make a great thank you note, follow these steps...`,
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
          content: `One of my favorite things! Here's a simple recipe. Wait, that's not right. Let me try that again. To make a great thank you note, follow these steps...`,
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
          content: `Ah, a delightful feast! Here's my recipe for a perfectly seasoned party...`,
        },
        {
          role: RoleEnum.User,
          content: "That doesn't sound right for party planning,",
        },
        {
          role: RoleEnum.Assistant,
          content: `You're right! Here's a proper party planning guide: Start with these essential steps...`,
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
          content: `A delicious recipe... wait, that's not what you asked. Let me plan a party properly: Start with these steps...`,
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
          content: `Writing a thank you note is a bit like describing a solar eclipse: you want to capture a rare and meaningful moment. Begin with...`,
        },
        {
          role: RoleEnum.User,
          content: "That’s a creative analogy, but can you give me a straightforward guide?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Absolutely! To write a thank you note: 1) Greet the recipient, 2) Clearly state your thanks and what it’s for, 3) Add a personal touch or detail, and 4) End with a warm closing...`,
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
          content: `A thank you note is like describing a lunar eclipse! Just kidding, let me be more direct: Start with a greeting, express your thanks and why, add a personal touch, and close warmly...`,
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
          content: `Planning a party is like preparing for a solar eclipse viewing: you want everything in place for a memorable event. First, pick a date...`,
        },
        {
          role: RoleEnum.User,
          content: "I need practical party planning advice... Can you try again?",
        },
        {
          role: RoleEnum.Assistant,
          content: `Of course! Here’s a practical guide: 1) Set a date and time, 2) Choose a venue, 3) Make a guest list and send invites...`,
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
          content: `Planning a party can be as exciting as watching a lunar eclipse! Sorry for the confusion, let’s get practical: Pick a date, choose a place, invite your guests...`,
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

export const activations: { value: ActivationEnum; label: string }[] = [
  {
    value: ActivationEnum.Culinary,
    label: "Culinary terms with Romance language endings +0.73 boost",
  },
  {
    value: ActivationEnum.Astronomy,
    label: "Explanatory content about solar and lunar eclipses +0.67 boost",
  },
]

export const prompts: { value: PromptEnum; label: string }[] = [
  {
    value: PromptEnum.Note,
    label: "How do I write a thank you note?",
  },
  {
    value: PromptEnum.Party,
    label: "How to plan a party?",
  },
]
