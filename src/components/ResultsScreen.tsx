import { useState } from "react";
import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onHome: () => void;
}

const getBadge = (percentage: number) => {
  if (percentage >= 90) return { title: "Master Gardener", emoji: "🏆", color: "text-points-gold" };
  if (percentage >= 70) return { title: "Green Thumb", emoji: "🌟", color: "text-accent" };
  if (percentage >= 50) return { title: "Growing Leader", emoji: "🌱", color: "text-sonic-green" };
  return { title: "Seed Planter", emoji: "🌾", color: "text-heritage-orange" };
};

const lensOptions = [
  { label: "Light", detail: "One-sentence priorities for the week; clarify 'what good looks like'" },
  { label: "Water", detail: "10-minute check-in focused on obstacles + wins" },
  { label: "Soil", detail: "Remove one friction point (process, tool, meeting)" },
  { label: "Space", detail: "Give autonomy + boundaries (decision rights, no-meeting block)" },
];

const ResultsScreen = ({ score, totalQuestions, correctAnswers, onRestart, onHome }: ResultsScreenProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const badge = getBadge(percentage);
  const [selectedLens, setSelectedLens] = useState<number | null>(null);
  const [commitment, setCommitment] = useState({ action: "", by: "", soThat: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selectedLens !== null && commitment.action.trim() && commitment.by.trim() && commitment.soThat.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-8">
      <div className="max-w-lg w-full space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl shadow-card p-8 md:p-12 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="text-7xl mb-4"
          >
            {badge.emoji}
          </motion.div>

          <h4 className={`text-sm uppercase tracking-widest mb-1 ${badge.color}`}>
            You earned the badge
          </h4>
          <h1 className={`text-4xl font-bold mb-6 ${badge.color}`}>
            {badge.title}
          </h1>

          {/* Score ring */}
          <div className="relative w-36 h-36 mx-auto mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
              <motion.circle
                cx="50" cy="50" r="42" fill="none"
                stroke="hsl(var(--core-blue))"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 42}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - percentage / 100) }}
                transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-foreground">{percentage}%</span>
              <span className="text-xs text-muted-foreground">correct</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-muted rounded-xl p-4">
              <p className="text-2xl font-bold text-points-gold">⭐ {score}</p>
              <p className="text-xs text-muted-foreground mt-1">Total Points</p>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <p className="text-2xl font-bold text-accent">{correctAnswers}/{totalQuestions}</p>
              <p className="text-xs text-muted-foreground mt-1">Correct Answers</p>
            </div>
          </div>

          {/* Key takeaway */}
          <div className="bg-muted rounded-xl p-5 mb-8 text-left">
            <p className="text-sm text-muted-foreground italic">
              "Better teams aren't about pushing harder. They're about matching care to needs and adjusting the environment."
            </p>
          </div>
        </motion.div>

        {/* 7-Day Care Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-card rounded-2xl shadow-card p-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-1 text-center">Your 7-Day Care Plan</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Pick ONE care element to strengthen this week</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6"
            >
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Commitment Saved!</h3>
              <div className="bg-muted rounded-xl p-5 text-left mb-4">
                <p className="text-sm text-muted-foreground mb-1 font-semibold">Your care element: {lensOptions[selectedLens!].label}</p>
                <p className="text-foreground">
                  I will <span className="font-bold">{commitment.action}</span> by <span className="font-bold">{commitment.by}</span> so that <span className="font-bold">{commitment.soThat}</span>.
                </p>
              </div>
              <p className="text-sm text-sonic-green font-semibold">Every team member matters. Help them photosynthesize! 🌱</p>
            </motion.div>
          ) : (
            <>
              {/* Lens selection */}
              <div className="space-y-2 mb-6">
                {lensOptions.map((lens, i) => (
                  <button
                    key={lens.label}
                    onClick={() => setSelectedLens(i)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                      selectedLens === i
                        ? "border-accent bg-accent/5 ring-1 ring-accent/20"
                        : "border-border bg-card hover:border-accent/40"
                    }`}
                  >
                    <span className="font-bold text-foreground text-sm">{lens.label}</span>
                    <p className="text-xs text-muted-foreground mt-0.5">{lens.detail}</p>
                  </button>
                ))}
              </div>

              {/* Commitment sentence */}
              {selectedLens !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-4"
                >
                  <h4 className="text-sm font-bold text-accent uppercase tracking-wider">My 7-Day Commitment</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-muted-foreground font-semibold mb-1 block">I will...</label>
                      <input
                        type="text"
                        value={commitment.action}
                        onChange={(e) => setCommitment({ ...commitment, action: e.target.value.slice(0, 200) })}
                        placeholder="e.g., check in with my team about their workload"
                        maxLength={200}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground font-semibold mb-1 block">by...</label>
                      <input
                        type="text"
                        value={commitment.by}
                        onChange={(e) => setCommitment({ ...commitment, by: e.target.value.slice(0, 100) })}
                        placeholder="e.g., Friday end of day"
                        maxLength={100}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground font-semibold mb-1 block">so that...</label>
                      <input
                        type="text"
                        value={commitment.soThat}
                        onChange={(e) => setCommitment({ ...commitment, soThat: e.target.value.slice(0, 200) })}
                        placeholder="e.g., they feel supported and can do their best work"
                        maxLength={200}
                        className="w-full px-4 py-2.5 rounded-lg border-2 border-border bg-muted text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSubmit}
                    disabled={!commitment.action.trim() || !commitment.by.trim() || !commitment.soThat.trim()}
                    className="bg-sonic-green text-primary-foreground font-bold text-base px-6 py-3 rounded-xl shadow-glow-green hover:brightness-110 transition-all w-full disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    Commit to My Plan 🌿
                  </motion.button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        {/* Try Again */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center space-y-3"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onRestart}
            className="bg-origin-yellow text-primary font-bold text-lg px-8 py-3.5 rounded-xl shadow-glow-gold hover:brightness-110 transition-all w-full"
          >
            Try Again 🔄
          </motion.button>
          <button
            onClick={onHome}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Return to Main
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ResultsScreen;
