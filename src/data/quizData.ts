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
  { id: 1, title: "Raw Materials", subtitle: "From Field to Harvest", icon: "🌱" },
  { id: 2, title: "Fiber Processing", subtitle: "Transforming Raw to Ready", icon: "⚙️" },
  { id: 3, title: "Fabric Creation", subtitle: "Building the Foundation", icon: "🧵" },
  { id: 4, title: "Garment Assembly", subtitle: "Bringing It All Together", icon: "✂️" },
  { id: 5, title: "Quality & Distribution", subtitle: "From Inspection to Customer", icon: "📦" },
];

export const coreModelOptions = ["Specs", "Infrastructure", "Materials", "Capacity"] as const;

export const questions: Question[] = [
  // Phase 1: Raw Materials
  {
    id: 1,
    phase: 1,
    phaseTitle: "Raw Materials",
    question: "The 'Network Starter' persona is associated with which production stage?",
    options: ["Cotton Growing", "Cotton Seed Planting", "Harvesting", "Ginning"],
    correctIndex: 1,
    explanation: "Cotton Seed Planting = The Network Starter. One seed becomes an entire field — they expand reach exponentially.",
    emoji: "🌱",
  },
  {
    id: 2,
    phase: 1,
    phaseTitle: "Raw Materials",
    question: "Which persona 'thrives in tough conditions with minimal intervention'?",
    options: ["The Steady Deliverer", "The Network Starter", "The Resilient Grower", "The Transformer"],
    correctIndex: 2,
    explanation: "The Resilient Grower (Cotton Growing) thrives in tough conditions with minimal intervention and delivers steady results.",
    emoji: "🌿",
  },
  {
    id: 3,
    phase: 1,
    phaseTitle: "Raw Materials",
    question: "What best describes The Steady Deliverer (Harvesting)?",
    options: [
      "Needs perfect conditions to perform",
      "Nearly impossible to derail — performs even when conditions aren't perfect",
      "Expands reach exponentially",
      "Stores everything needed and stays ready",
    ],
    correctIndex: 1,
    explanation: "The Steady Deliverer is nearly impossible to derail and performs even when conditions aren't perfect.",
    emoji: "🚜",
  },
  // Phase 2: Fiber Processing
  {
    id: 4,
    phase: 2,
    phaseTitle: "Fiber Processing",
    question: "Which persona 'turns raw material into something valuable with room to operate'?",
    options: ["The Reserve Keeper", "The Precision Specialist", "The Transformer", "The Steady Builder"],
    correctIndex: 2,
    explanation: "The Transformer (Ginning & Processing) turns raw material into something valuable with room to operate.",
    emoji: "⚙️",
  },
  {
    id: 5,
    phase: 2,
    phaseTitle: "Fiber Processing",
    question: "The Reserve Keeper is best known for:",
    options: [
      "Brilliant output when conditions are exactly right",
      "Independent, focused work with clear parameters",
      "Storing everything needed and staying ready under pressure",
      "Building something substantial quietly",
    ],
    correctIndex: 2,
    explanation: "The Reserve Keeper (Fiber Storage) stores everything needed and stays ready under pressure.",
    emoji: "🏗️",
  },
  {
    id: 6,
    phase: 2,
    phaseTitle: "Fiber Processing",
    question: "The Precision Specialist (Spinning Yarn) excels through:",
    options: [
      "Expanding networks",
      "Independent, focused work with clear parameters",
      "Sensing when something is off",
      "Adapting to any channel",
    ],
    correctIndex: 1,
    explanation: "The Precision Specialist does independent, focused work where clear parameters yield quality output.",
    emoji: "🎯",
  },
  // Phase 3: Fabric Creation
  {
    id: 7,
    phase: 3,
    phaseTitle: "Fabric Creation",
    question: "Which persona is described as 'brilliant when conditions are exactly right — timing and chemistry matter'?",
    options: ["The Steady Builder", "The Culture Detector", "The Sensitive Specialist", "The Detail Finisher"],
    correctIndex: 2,
    explanation: "The Sensitive Specialist (Dyeing & Coloring) is brilliant when conditions are exactly right. Timing and chemistry matter.",
    emoji: "🎨",
  },
  {
    id: 8,
    phase: 3,
    phaseTitle: "Fabric Creation",
    question: "The Culture Detector (Fabric Inspection) is valued because they:",
    options: [
      "Build something substantial quietly",
      "Are the first to sense when something's off — an early warning system",
      "Take perfect alignment to print",
      "Turn raw material into something valuable",
    ],
    correctIndex: 1,
    explanation: "The Culture Detector is the first to sense when something's off — they serve as an early warning system.",
    emoji: "🔍",
  },
  {
    id: 9,
    phase: 3,
    phaseTitle: "Fabric Creation",
    question: "The Steady Builder (Weaving Fabric) is best described as:",
    options: [
      "Takes perfect alignment to create impact",
      "Nearly impossible to derail",
      "Quietly builds something substantial — reliable and compounding",
      "Stores everything and stays ready",
    ],
    correctIndex: 2,
    explanation: "The Steady Builder quietly builds something substantial. They are reliable and their results are compounding over time.",
    emoji: "🧶",
  },
  // Phase 4: Garment Assembly
  {
    id: 10,
    phase: 4,
    phaseTitle: "Garment Assembly",
    question: "The Adaptable Planner (Pattern Making & Cutting) is someone who:",
    options: [
      "Grows with whatever support structure provided and optimizes around patterns",
      "Connects pieces into a whole",
      "Takes perfect alignment to print",
      "Is nearly impossible to derail",
    ],
    correctIndex: 0,
    explanation: "The Adaptable Planner grows with whatever support structure is provided and optimizes around patterns.",
    emoji: "📐",
  },
  {
    id: 11,
    phase: 4,
    phaseTitle: "Garment Assembly",
    question: "Which persona 'builds the whole from pieces — one stitch connects to the next'?",
    options: ["The Showstopper", "The Connection Mentor", "The Steady Builder", "The Logistics Networker"],
    correctIndex: 1,
    explanation: "The Connection Mentor (Sewing Assembly) builds the whole from pieces — one stitch connects to the next.",
    emoji: "🪡",
  },
  {
    id: 12,
    phase: 4,
    phaseTitle: "Garment Assembly",
    question: "The Showstopper (Screen Printing) requires what to succeed?",
    options: [
      "Minimal intervention",
      "Perfect alignment — but when it prints, everyone notices",
      "Tough conditions",
      "Lots of stored materials",
    ],
    correctIndex: 1,
    explanation: "The Showstopper takes perfect alignment, but when it prints…everyone notices.",
    emoji: "⭐",
  },
  // Phase 5: Quality & Distribution
  {
    id: 13,
    phase: 5,
    phaseTitle: "Quality & Distribution",
    question: "The Distributed Inspector (Quality Control) is best known for being:",
    options: [
      "Incredibly thorough without drowning in bureaucracy",
      "One package becomes ten destinations",
      "Precision and care with autonomy",
      "The first to sense something is off",
    ],
    correctIndex: 0,
    explanation: "The Distributed Inspector is incredibly thorough without drowning in bureaucracy.",
    emoji: "✅",
  },
  {
    id: 14,
    phase: 5,
    phaseTitle: "Quality & Distribution",
    question: "The Detail Finisher (Folding & Tagging) thrives on:",
    options: [
      "Expanding networks",
      "Perfect chemistry and timing",
      "Autonomy and clear standards with precision and care",
      "Building the whole from pieces",
    ],
    correctIndex: 2,
    explanation: "The Detail Finisher thrives on precision and care with autonomy and clear standards.",
    emoji: "🏷️",
  },
  {
    id: 15,
    phase: 5,
    phaseTitle: "Quality & Distribution",
    question: "In the Core Model, which lens focuses on 'culture + resources + process'?",
    options: ["Specs", "Infrastructure", "Materials", "Capacity"],
    correctIndex: 1,
    explanation: "Infrastructure = culture + resources + process. It's the support system that enables the team to function well.",
    emoji: "🏛️",
  },
];
