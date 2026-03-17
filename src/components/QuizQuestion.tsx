import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Question } from "@/data/quizData";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (correct: boolean) => void;
  onBack: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({ question, onAnswer, onBack, questionNumber, totalQuestions }: QuizQuestionProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);

    setTimeout(() => {
      onAnswer(index === question.correctIndex);
      setSelected(null);
      setShowResult(false);
    }, 2200);
  };

  const isCorrect = selected === question.correctIndex;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Phase badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{question.emoji}</span>
        <span className="text-sm font-semibold text-accent uppercase tracking-wider">
          Phase {question.phase} · {question.phaseTitle}
        </span>
      </div>

      {/* Question counter */}
      <p className="text-muted-foreground text-sm mb-2">
        Question {questionNumber} of {totalQuestions}
      </p>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 leading-snug">
        {question.question}
      </h2>

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let optionClass = "border-border bg-card hover:border-accent hover:bg-secondary/30";

          if (showResult) {
            if (index === question.correctIndex) {
              optionClass = "border-success-green bg-success-green/10 ring-2 ring-success-green/30";
            } else if (index === selected && !isCorrect) {
              optionClass = "border-destructive bg-destructive/10 ring-2 ring-destructive/30";
            } else {
              optionClass = "border-border bg-card opacity-50";
            }
          }

          return (
            <motion.button
              key={index}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
              onClick={() => handleSelect(index)}
              disabled={showResult}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-300 ${optionClass}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-current flex items-center justify-center text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base font-medium">{option}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0 }}
            className={`mt-6 p-5 rounded-xl border-2 ${
              isCorrect
                ? "border-success-green/30 bg-success-green/5"
                : "border-destructive/30 bg-destructive/5"
            }`}
          >
            <p className="font-bold text-lg mb-1">
              {isCorrect ? "✅ Correct!" : "❌ Not quite!"}
            </p>
            <p className="text-muted-foreground text-sm">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizQuestion;
