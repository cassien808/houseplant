import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { phases } from "@/data/quizData";

const phaseHighlights = [
  {
    phase: phases[0],
    personas: [
      { name: "The Sales Network", stage: "Pothos", desc: "Put me anywhere and I'll trail forever. One good rep turns into an entire pipeline." },
      { name: "The Compliance Rockstar", stage: "Snake Plant", desc: "Thrives on neglect, purifies the air, grows in the darkest corner. Self-managing teams wish they were this tough." },
      { name: "The Reliable Workhorse", stage: "ZZ Plant", desc: "Nearly impossible to kill. Keeps delivering even when the lights are off and the budget is tight." },
    ],
  },
  {
    phase: phases[1],
    personas: [
      { name: "The High-Performer", stage: "Monstera", desc: "Big, bold leaves, but will split if I don't get room to grow. Promotion material — just need a bigger pot." },
      { name: "The Talent Bench Buddy", stage: "Succulent", desc: "Stores everything it needs and still looks good under pressure. Future leaders in training." },
      { name: "The Independent Contributor", stage: "Cactus", desc: "Armed, spiky, and proud. Give me sun and leave me alone — I'll bloom when ready." },
    ],
  },
  {
    phase: phases[2],
    personas: [
      { name: "The Sensitive Specialist", stage: "Calathea", desc: "Leaves fold up at night and throw tantrums if conditions change. Brilliant when the environment is exactly right." },
      { name: "The Culture Canaries", stage: "Peace Lily", desc: "First to droop when the environment's off. Listen when they speak — they're telling you the vibe is wrong." },
      { name: "The Steady Eddie", stage: "Rubber Plant", desc: "Quietly grows tall and glossy with basic care. Your reliable mid-level leader who just keeps compounding." },
    ],
  },
  {
    phase: phases[3],
    personas: [
      { name: "The Adaptable Team Player", stage: "Philodendron", desc: "Climbs on trails — whatever the support structure allows. Grows with the trellis you give it." },
      { name: "The Mentor", stage: "Spider Plant", desc: "Sends out babies like it's mentoring the next generation. One plan becomes ten in a year." },
      { name: "The Divaficus", stage: "Fiddle-Leaf Fig", desc: "Stunning when happy, dramatic when not. High-maintenance superstar — worth it only when you have the bandwidth." },
    ],
  },
  {
    phase: phases[4],
    personas: [
      { name: "The Stretch Gold", stage: "Birds of Paradise", desc: "Takes years and perfect conditions, but when it flowers…everyone stops and stares." },
      { name: "The Remote Team", stage: "String of Pearls", desc: "Looks delicate, actually incredibly resilient if you don't drown them with too many Teams or Zoom calls." },
      { name: "The Contractor", stage: "Air Plant (Tillandsia)", desc: "No soil, no pot, just a quick weekly soak and lots of light. Thrives on freedom." },
    ],
  },
];

const coreModel = [
  { label: "Light", detail: "Clarity + Priorities", icon: "☀️" },
  { label: "Water", detail: "Support + Feedback Cadence", icon: "💧" },
  { label: "Soil", detail: "Culture + Resources + Processes", icon: "⛰️" },
  { label: "Space", detail: "Autonomy + Boundaries + Role Definition", icon: "📐" },
];

interface CourseReviewProps {
  onStartQuiz: () => void;
  onBack: () => void;
}

const CourseReview = ({ onStartQuiz, onBack }: CourseReviewProps) => {
  const [activePhase, setActivePhase] = useState(0);
  const [expandedScenario, setExpandedScenario] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-blue text-primary-foreground py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <button onClick={onBack} className="text-sky-blue hover:text-primary-foreground text-sm mb-4 flex items-center gap-1 transition-colors">
            ← Back to Home
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Course Review</h1>
          <p className="text-sky-blue text-lg">Review the key concepts before testing your knowledge</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">
        {/* Core Model */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">The Core Model</h2>
          <h4 className="text-base text-accent mb-5">Plant Care = Leadership Care</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {coreModel.map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-bold text-foreground">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-11">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Phase Tabs */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-5">15 Plant Personas</h2>
          <p className="text-sm text-muted-foreground mb-3">👆 Tap a group to explore its personas</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(i)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  activePhase === i
                    ? "bg-primary text-primary-foreground ring-2 ring-accent"
                    : "bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                <span className="mr-1.5">{phase.icon}</span>
                {phase.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="bg-gradient-blue px-5 py-4">
                  <p className="text-sky-blue text-xs font-semibold uppercase tracking-wider">
                    Group {phaseHighlights[activePhase].phase.id}
                  </p>
                  <h3 className="text-xl font-bold text-primary-foreground">
                    {phaseHighlights[activePhase].phase.title}
                  </h3>
                  <p className="text-secondary/70 text-sm">{phaseHighlights[activePhase].phase.subtitle}</p>
                </div>
                <div className="divide-y divide-border">
                  {phaseHighlights[activePhase].personas.map((persona) => (
                    <div key={persona.name} className="px-5 py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                        <span className="font-bold text-foreground">{persona.name}</span>
                        <span className="text-xs text-accent font-semibold">({persona.stage})</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{persona.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Mini-Scenarios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">Small Group Scenarios</h2>
          <p className="text-sm text-muted-foreground mb-5">👆 Click a scenario to reveal suggested responses</p>
          <div className="space-y-4">
            {[
              {
                number: 1,
                scenario: "A high performer is getting frustrated and disengaged",
                emoji: "😤",
                prompts: ["Which plant persona fits best? Why?", "What's the environmental challenge (Light / Water / Soil / Space)?", "What are 2 care changes you'd make this week?"],
                answers: [
                  "The High-Performer (Monstera) — big, bold leaves but will split if they don't get room to grow. This person needs a bigger pot (expanded role or promotion path).",
                  "Space — they lack autonomy, boundaries, or a clear next step. They've outgrown their current role definition.",
                  "1) Have a candid career conversation about their growth trajectory this week. 2) Delegate a stretch project that gives them visible ownership.",
                ],
              },
              {
                number: 2,
                scenario: "A team member is steady and reliable but being overlooked",
                emoji: "🙂",
                prompts: ["Which plant persona fits best? Why?", "What's the environmental challenge (Light / Water / Soil / Space)?", "What are 2 care changes you'd make this week?"],
                answers: [
                  "The Steady Eddie (Rubber Plant) — quietly grows tall and glossy with basic care. Your reliable mid-level leader who just keeps compounding.",
                  "Light — they lack visibility and recognition. Their consistent contributions aren't being seen or celebrated.",
                  "1) Publicly acknowledge their contributions in a team meeting. 2) Include them in a cross-functional initiative to increase their visibility.",
                ],
              },
              {
                number: 3,
                scenario: "A specialist seems 'difficult' but reacts strongly to change",
                emoji: "😰",
                prompts: ["Which plant persona fits best? Why?", "What's the environmental challenge (Light / Water / Soil / Space)?", "What are 2 care changes you'd make this week?"],
                answers: [
                  "The Sensitive Specialist (Calathea) — brilliant when the environment is exactly right, but throws tantrums if conditions change suddenly.",
                  "Soil — the culture, resources, or processes around them have shifted and they haven't had time to adapt.",
                  "1) Give advance notice of upcoming changes and explain the 'why' behind them. 2) Create a stable routine or check-in cadence so they feel grounded.",
                ],
              },
              {
                number: 4,
                scenario: "A key person is thriving, but everyone depends on them too much",
                emoji: "🏋️",
                prompts: ["Which plant persona fits best? Why?", "What's the environmental challenge (Light / Water / Soil / Space)?", "What are 2 care changes you'd make this week?"],
                answers: [
                  "The Mentor (Spider Plant) — sends out babies like it's mentoring the next generation. But right now the parent plant is carrying too much.",
                  "Water — too much support flowing to them (overwatering with responsibility) without distributing it to others.",
                  "1) Identify 2 tasks they currently own that can be delegated to team members they've been mentoring. 2) Pair them with a 'buddy' who shadows them to build redundancy.",
                ],
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-card cursor-pointer transition-all hover:border-accent/50"
                onClick={() => setExpandedScenario(expandedScenario === item.number ? null : item.number)}
              >
                <div className="flex items-start gap-4 p-5">
                  <span className="text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs text-accent font-bold uppercase tracking-wider mb-1">Scenario {item.number}</h4>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${expandedScenario === item.number ? "rotate-180" : ""}`} />
                    </div>
                    <p className="font-bold text-foreground text-lg mb-3">{item.scenario}</p>
                    <div className="space-y-1.5">
                      {item.prompts.map((prompt, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          <span>{prompt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {expandedScenario === item.number && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border bg-muted/50 px-5 py-4 space-y-3">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-accent">💡 Suggested Responses</h5>
                        {item.answers.map((answer, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <span className="text-accent font-bold mt-0.5 flex-shrink-0">{i + 1}.</span>
                            <span>{answer}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Key Takeaway */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-muted rounded-2xl p-6 border border-border"
        >
          <h4 className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Key Takeaway</h4>
          <p className="text-foreground text-lg italic leading-relaxed">
            "Better teams aren't about pushing harder. They're about matching care to needs and adjusting the environment."
          </p>
        </motion.section>

        {/* CTA */}
        <div className="text-center pb-8 space-y-3">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartQuiz}
            className="bg-origin-yellow text-primary font-bold text-lg px-10 py-4 rounded-xl shadow-glow-gold hover:brightness-110 transition-all"
          >
            I'm Ready — Start the Quiz 🌱
          </motion.button>
          <div>
            <button
              onClick={onBack}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Return to Main
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
