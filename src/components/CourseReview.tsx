import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { phases } from "@/data/quizData";

const phaseHighlights = [
  {
    phase: phases[0],
    personas: [
      { name: "The Network Starter", stage: "Cotton Seed Planting", desc: "One seed becomes an entire field. Expands reach exponentially." },
      { name: "The Resilient Grower", stage: "Cotton Growing", desc: "Thrives in tough conditions with minimal intervention. Steady results." },
      { name: "The Steady Deliverer", stage: "Harvesting", desc: "Nearly impossible to derail. Performs even when conditions aren't perfect." },
    ],
  },
  {
    phase: phases[1],
    personas: [
      { name: "The Transformer", stage: "Ginning & Processing", desc: "Turns raw material into something valuable with room to operate." },
      { name: "The Reserve Keeper", stage: "Fiber Storage", desc: "Stores everything needed and stays ready under pressure." },
      { name: "The Precision Specialist", stage: "Spinning Yarn", desc: "Independent, focused work. Clear parameters yield quality output." },
    ],
  },
  {
    phase: phases[2],
    personas: [
      { name: "The Sensitive Specialist", stage: "Dyeing & Coloring", desc: "Brilliant when conditions are exactly right. Timing and chemistry matter." },
      { name: "The Culture Detector", stage: "Fabric Inspection", desc: "First to sense when something's off. Early warning system." },
      { name: "The Steady Builder", stage: "Weaving Fabric", desc: "Quietly builds something substantial. Reliable and compounding." },
    ],
  },
  {
    phase: phases[3],
    personas: [
      { name: "The Adaptable Planner", stage: "Pattern Making & Cutting", desc: "Grows with whatever support structure provided. Optimizes around patterns." },
      { name: "The Connection Mentor", stage: "Sewing Assembly", desc: "One stitch connects to the next. Builds the whole from pieces." },
      { name: "The Showstopper", stage: "Screen Printing", desc: "Takes perfect alignment, but when it prints…everyone notices." },
    ],
  },
  {
    phase: phases[4],
    personas: [
      { name: "The Distributed Inspector", stage: "Quality Control", desc: "Incredibly thorough without drowning in bureaucracy." },
      { name: "The Detail Finisher", stage: "Folding & Tagging", desc: "Precision and care. Thrives on autonomy and clear standards." },
      { name: "The Logistics Networker", stage: "Packaging & Shipping", desc: "One package becomes ten destinations. Adapts to any channel." },
    ],
  },
];

const coreModel = [
  { label: "Specs", detail: "Clarity + priorities", icon: "📋" },
  { label: "Infrastructure", detail: "Culture + resources + process", icon: "🏛️" },
  { label: "Materials", detail: "Support + feedback cadence", icon: "🧰" },
  { label: "Capacity", detail: "Autonomy + boundaries + role definition", icon: "⚖️" },
];

interface CourseReviewProps {
  onStartQuiz: () => void;
  onBack: () => void;
}

const CourseReview = ({ onStartQuiz, onBack }: CourseReviewProps) => {
  const [activePhase, setActivePhase] = useState(0);

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
          <h4 className="text-base text-accent mb-5">Production Care = People Leadership</h4>
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
          <h2 className="text-2xl font-bold text-foreground mb-5">15 Team Personas</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(i)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  activePhase === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
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
                    Phase {phaseHighlights[activePhase].phase.id}
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

        {/* Key Takeaway */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-muted rounded-2xl p-6 border border-border"
        >
          <h4 className="text-sm text-accent font-bold uppercase tracking-wider mb-2">Key Takeaway</h4>
          <p className="text-foreground text-lg italic leading-relaxed">
            "Better teams aren't about pushing harder. They're about matching care to needs and adjusting the process."
          </p>
        </motion.section>

        {/* CTA */}
        <div className="text-center pb-8">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartQuiz}
            className="bg-origin-yellow text-primary font-bold text-lg px-10 py-4 rounded-xl shadow-glow-gold hover:brightness-110 transition-all"
          >
            I'm Ready — Start the Quiz 🚀
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
