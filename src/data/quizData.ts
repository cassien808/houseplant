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
    question: "The 'Sales Network' persona is associated with which plant?",
    options: ["Snake Plant", "Pothos", "ZZ Plant", "Monstera"],
    correctIndex: 1,
    explanation: "Pothos = The Sales Network. Put me anywhere and I'll trail forever. One good rep turns into an entire pipeline.",
    emoji: "🪴",
  },
  {
    id: 2,
    phase: 1,
    phaseTitle: "Easy Growers",
    question: "Which persona 'thrives on neglect, purifies the air, and grows in the darkest corner'?",
    options: ["The Sales Network", "Enterprise Project Energy", "The Compliance Rockstar", "The Independent Contributor"],
    correctIndex: 2,
    explanation: "The Compliance Rockstar (Snake Plant) thrives on neglect, purifies the air, and grows in the darkest corner. Self-managing teams wish they were this tough.",
    emoji: "🐍",
  },
  {
    id: 3,
    phase: 1,
    phaseTitle: "Easy Growers",
    question: "What best describes the Enterprise Project Energy (ZZ Plant)?",
    options: [
      "Needs perfect conditions to perform",
      "Nearly impossible to kill — keeps delivering even when the lights are off and the budget is tight",
      "Expands reach exponentially",
      "Stores everything needed and stays ready",
    ],
    correctIndex: 1,
    explanation: "The ZZ Plant (Enterprise Project Energy) is nearly impossible to kill. Keeps delivering even when the lights are off and the budget is tight.",
    emoji: "💎",
  },
  // Phase 2: Bold Growers
  {
    id: 4,
    phase: 2,
    phaseTitle: "Bold Growers",
    question: "Which persona needs 'room to grow' and is described as 'promotion material — just need a bigger pot'?",
    options: ["The Talent Bench Buddy", "The Independent Contributor", "The High-Performer", "The Steady Eddie"],
    correctIndex: 2,
    explanation: "The High-Performer (Monstera) has big, bold leaves, but will split if they don't get room to grow. Promotion material — just need a bigger pot.",
    emoji: "🌱",
  },
  {
    id: 5,
    phase: 2,
    phaseTitle: "Bold Growers",
    question: "The Talent Bench Buddy (Succulent) is best known for:",
    options: [
      "Brilliant output when conditions are exactly right",
      "Independent, focused work with clear parameters",
      "Storing everything it needs and still looking good under pressure — future leaders in training",
      "Building something substantial quietly",
    ],
    correctIndex: 2,
    explanation: "The Talent Bench Buddy (Succulent) stores everything it needs and still looks good under pressure. Future leaders in training.",
    emoji: "🌵",
  },
  {
    id: 6,
    phase: 2,
    phaseTitle: "Bold Growers",
    question: "The Independent Contributor (Cactus) excels through:",
    options: [
      "Expanding networks",
      "Being armed, spiky, and proud — give them sun and leave them alone, they'll bloom when ready",
      "Sensing when something is off",
      "Adapting to any channel",
    ],
    correctIndex: 1,
    explanation: "The Independent Contributor (Cactus) is armed, spiky, and proud. Give me sun and leave me alone — I'll bloom when ready.",
    emoji: "🌵",
  },
  // Phase 3: Signal Plants
  {
    id: 7,
    phase: 3,
    phaseTitle: "Signal Plants",
    question: "Which persona is described as 'brilliant when the environment is exactly right — leaves fold up at night and throw tantrums if conditions change'?",
    options: ["The Steady Eddie", "The Culture Canaries", "The Sensitive Specialist", "The Adaptable Team Player"],
    correctIndex: 2,
    explanation: "The Sensitive Specialist (Calathea) has leaves that fold up at night and throws tantrums if conditions change. Brilliant when the environment is exactly right.",
    emoji: "🎨",
  },
  {
    id: 8,
    phase: 3,
    phaseTitle: "Signal Plants",
    question: "The Culture Canaries (Peace Lily) are valued because they:",
    options: [
      "Build something substantial quietly",
      "Are the first to droop when the environment's off — listen when they speak, they're telling you the vibe is wrong",
      "Take perfect alignment to bloom",
      "Turn raw material into something valuable",
    ],
    correctIndex: 1,
    explanation: "The Culture Canaries (Peace Lily) are first to droop when the environment's off. Listen when they speak — they're telling you the vibe is wrong.",
    emoji: "☮️",
  },
  {
    id: 9,
    phase: 3,
    phaseTitle: "Signal Plants",
    question: "The Steady Eddie (Rubber Plant) is best described as:",
    options: [
      "Takes perfect alignment to create impact",
      "Nearly impossible to droop",
      "Quietly grows tall and glossy with basic care — your reliable mid-level leader who just keeps compounding",
      "Stores everything and stays ready",
    ],
    correctIndex: 2,
    explanation: "The Steady Eddie (Rubber Plant) quietly grows tall and glossy with basic care. Your reliable mid-level leader who just keeps compounding.",
    emoji: "🌿",
  },
  // Phase 4: Relationship Builders
  {
    id: 10,
    phase: 4,
    phaseTitle: "Relationship Builders",
    question: "The Adaptable Team Player (Philodendron) is someone who:",
    options: [
      "Climbs on trails — whatever the support structure allows. Grows with the trellis you give it",
      "Connects pieces into a whole",
      "Takes perfect alignment to bloom",
      "Is nearly impossible to kill",
    ],
    correctIndex: 0,
    explanation: "The Adaptable Team Player (Philodendron) climbs on trails — whatever the support structure allows. Grows with the trellis you give it.",
    emoji: "🌿",
  },
  {
    id: 11,
    phase: 4,
    phaseTitle: "Relationship Builders",
    question: "Which persona 'sends out babies like it's mentoring the next generation — one plan becomes ten in a year'?",
    options: ["The Stretch Gold", "The Mentor", "The Steady Eddie", "The Remote Team"],
    correctIndex: 1,
    explanation: "The Mentor (Spider Plant) sends out babies like it's mentoring the next generation. One plan becomes ten in a year.",
    emoji: "🕷️",
  },
  {
    id: 12,
    phase: 4,
    phaseTitle: "Relationship Builders",
    question: "The Divaficus (Fiddle-Leaf Fig) requires what to succeed?",
    options: [
      "Minimal intervention",
      "Stunning when happy, dramatic when not — high-maintenance superstar, worth it only when you have the bandwidth",
      "Tough conditions",
      "Lots of stored materials",
    ],
    correctIndex: 1,
    explanation: "The Divaficus (Fiddle-Leaf Fig) is stunning when happy, dramatic when not. High-maintenance superstar — worth it only when you have the bandwidth.",
    emoji: "🌳",
  },
  // Phase 5: Specialty Plants
  {
    id: 13,
    phase: 5,
    phaseTitle: "Specialty Plants",
    question: "The Stretch Gold (Birds of Paradise) is best known for:",
    options: [
      "Takes years and perfect conditions, but when it flowers…everyone stops and stares",
      "One package becomes ten destinations",
      "Precision and care with autonomy",
      "The first to sense something is off",
    ],
    correctIndex: 0,
    explanation: "The Stretch Gold (Birds of Paradise) takes years and perfect conditions, but when it flowers…everyone stops and stares.",
    emoji: "🦜",
  },
  {
    id: 14,
    phase: 5,
    phaseTitle: "Specialty Plants",
    question: "The Remote Team (String of Pearls) is described as:",
    options: [
      "Expanding networks",
      "Perfect chemistry and timing",
      "Looks delicate, actually incredibly resilient if you don't drown them with too many Teams or Zoom calls",
      "Building the whole from pieces",
    ],
    correctIndex: 2,
    explanation: "The Remote Team (String of Pearls) looks delicate, actually incredibly resilient if you don't drown them with too many Teams or Zoom calls.",
    emoji: "📿",
  },
  {
    id: 15,
    phase: 5,
    phaseTitle: "Specialty Plants",
    question: "In the Core Model, which care element focuses on 'culture + resources + processes'?",
    options: ["Light", "Water", "Soil", "Space"],
    correctIndex: 2,
    explanation: "Soil = culture + resources + processes. It's the foundation that supports the team's growth.",
    emoji: "🌍",
  },
];
