export interface Question {
  id: number;
  phase: number;
  phaseTitle: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  emoji?: string;
}

export const phases = [
  { id: 1, title: "Easy Growers", subtitle: "Low-Maintenance Leaders", icon: "🪴" },
  { id: 2, title: "Bold Growers", subtitle: "Statement Makers", icon: "🌿" },
  { id: 3, title: "Signal Plants", subtitle: "Environmental Indicators", icon: "🌸" },
  { id: 4, title: "Relationship Builders", subtitle: "Connectors & Mentors", icon: "🕸️" },
  { id: 5, title: "Specialty Plants", subtitle: "Unique Needs & Strengths", icon: "✨" },
];

export const coreModelOptions = ["Light", "Water", "Soil", "Space"] as const;

export const questions: Question[] = [
  // Phase 1: Easy Growers
  {
    id: 1,
    phase: 1,
    phaseTitle: "Easy Growers",
    question: "Which plant persona 'thrives on neglect, purifies the air, and grows in the darkest corner'?",
    options: ["The Sales Network", "The Reliable Workhorse", "The Compliance Rockstar", "The Independent Contributor"],
    correctIndex: 2,
    explanation: "The Compliance Rockstar (Snake Plant) thrives on neglect, purifies the air, and grows in the darkest corner. Self-managing teams wish they were this tough.",
    emoji: "🐍",
  },
  // Phase 2: Bold Growers
  {
    id: 2,
    phase: 2,
    phaseTitle: "Bold Growers",
    question: "Which plant persona is described as having big, bold leaves and needing space to keep growing?",
    options: ["The Talent Bench Buddy", "The Independent Contributor", "The High-Performer", "The Steady Eddie"],
    correctIndex: 2,
    explanation: "The High-Performer (Monstera) has big, bold leaves, but will split if they don't get room to grow. Promotion material — just need a bigger pot.",
    emoji: "🌱",
  },
  // Phase 3: Signal Plants
  {
    id: 3,
    phase: 3,
    phaseTitle: "Signal Plants",
    question: "Why are the Culture Canaries (Peace Lily) so valuable to a team?",
    options: [
      "They build something substantial quietly",
      "They're the first to droop when the environment's off — listen when they speak",
      "They take perfect alignment to bloom",
      "They turn raw material into something valuable",
    ],
    correctIndex: 1,
    explanation: "The Culture Canaries (Peace Lily) are first to droop when the environment's off. Listen when they speak — they're telling you the vibe is wrong.",
    emoji: "☮️",
  },
  // Phase 4: Relationship Builders
  {
    id: 4,
    phase: 4,
    phaseTitle: "Relationship Builders",
    question: "Which persona 'sends out babies like it's mentoring the next generation'?",
    options: ["The Stretch Gold", "The Mentor", "The Steady Eddie", "The Remote Team"],
    correctIndex: 1,
    explanation: "The Mentor (Spider Plant) sends out babies like it's mentoring the next generation. One plant becomes ten in a year.",
    emoji: "🕷️",
  },
  // Phase 5: Specialty Plants
  {
    id: 5,
    phase: 5,
    phaseTitle: "Specialty Plants",
    question: "In the Core Model, which care element focuses on 'culture + resources + processes'?",
    options: ["Light", "Water", "Soil", "Space"],
    correctIndex: 2,
    explanation: "Soil = culture + resources + processes. It's the foundation that supports the team's growth.",
    emoji: "🌍",
  },
];
