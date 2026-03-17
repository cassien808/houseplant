import { motion } from "framer-motion";
import { phases } from "@/data/quizData";
import PlantIcon from "@/components/TshirtIcon";

interface WelcomeScreenProps {
  onStart: () => void;
  onReview: () => void;
}

const WelcomeScreen = ({ onStart, onReview }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--core-blue) / 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--sky-blue) / 0.2) 0%, transparent 40%)"
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative z-10 max-w-2xl"
      >
        {/* Plant icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <PlantIcon className="w-36 h-36 mx-auto" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-3 tracking-tight">
          Houseplant Harmony
        </h1>
        <h4 className="text-xl md:text-2xl text-sky-blue mb-2 italic">
          Growing Thriving Teams Through Plant Personas
        </h4>
        <p className="text-secondary/80 text-lg mb-10">
          Test your knowledge from the mini-workshop. <br className="hidden sm:block" />
          5 questions across 5 plant groups.
        </p>

        {/* Phase preview */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-lg px-4 py-2 text-primary-foreground/90 text-sm"
            >
              <span className="mr-1.5">{phase.icon}</span>
              {phase.title}
            </motion.div>
          ))}
        </div>

        {/* Two CTA buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onReview}
            className="border-2 border-sky-blue text-sky-blue font-bold text-lg px-8 py-4 rounded-xl hover:bg-sky-blue/10 transition-all"
          >
            🌿 Review the Course
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            className="bg-origin-yellow text-primary font-bold text-lg px-10 py-4 rounded-xl shadow-glow-gold hover:brightness-110 transition-all"
          >
            Start the Challenge 🌱
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
