import { motion } from "framer-motion";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
}

const getBadge = (percentage: number) => {
  if (percentage >= 90) return { title: "Production Master", emoji: "🏆", color: "text-points-gold" };
  if (percentage >= 70) return { title: "Team Builder", emoji: "🌟", color: "text-accent" };
  if (percentage >= 50) return { title: "Growing Leader", emoji: "🌱", color: "text-sonic-green" };
  return { title: "Seed Planter", emoji: "🌾", color: "text-heritage-orange" };
};

const ResultsScreen = ({ score, totalQuestions, correctAnswers, onRestart }: ResultsScreenProps) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const badge = getBadge(percentage);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl shadow-card p-8 md:p-12 max-w-lg w-full text-center"
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
            "Better teams aren't about pushing harder. They're about matching care to needs and adjusting the process."
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRestart}
          className="bg-origin-yellow text-primary font-bold text-lg px-8 py-3.5 rounded-xl shadow-glow-gold hover:brightness-110 transition-all w-full"
        >
          Try Again 🔄
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;
