import { motion } from "framer-motion";

interface ScoreBarProps {
  score: number;
  streak: number;
  currentQuestion: number;
  totalQuestions: number;
}

const ScoreBar = ({ score, streak, currentQuestion, totalQuestions }: ScoreBarProps) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-3">
        {/* Score */}
        <motion.div
          key={score}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <span className="text-2xl">⭐</span>
          <span className="text-2xl font-bold text-points-gold">{score}</span>
          <span className="text-sm text-muted-foreground">pts</span>
        </motion.div>

        {/* Streak */}
        {streak > 1 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-1.5 bg-streak-fire/10 border border-streak-fire/30 px-3 py-1 rounded-full"
          >
            <span className="text-lg">🔥</span>
            <span className="text-sm font-bold text-streak-fire">{streak} streak!</span>
          </motion.div>
        )}
      </div>

      {/* Progress bar */}
      <div className="h-2.5 bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg, hsl(var(--core-blue)), hsl(var(--sonic-green)))" }}
        />
      </div>
    </div>
  );
};

export default ScoreBar;
