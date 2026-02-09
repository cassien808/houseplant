import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/WelcomeScreen";
import CourseReview from "@/components/CourseReview";
import QuizQuestion from "@/components/QuizQuestion";
import ScoreBar from "@/components/ScoreBar";
import ResultsScreen from "@/components/ResultsScreen";
import { questions } from "@/data/quizData";

type Screen = "welcome" | "review" | "quiz" | "results";

const POINTS_BASE = 100;
const STREAK_BONUS = 50;

const Index = () => {
  const [screen, setScreen] = useState<Screen>("welcome");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setCorrectAnswers(0);
  };

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) {
      setStreak((s) => s + 1);
      setScore((s) => s + POINTS_BASE + streak * STREAK_BONUS);
      setCorrectAnswers((c) => c + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        setScreen("results");
      } else {
        setCurrentIndex((i) => i + 1);
      }
    }, 300);
  }, [currentIndex, streak]);

  if (screen === "welcome") {
    return <WelcomeScreen onStart={handleStart} onReview={() => setScreen("review")} />;
  }

  if (screen === "review") {
    return <CourseReview onStartQuiz={handleStart} onBack={() => setScreen("welcome")} />;
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        score={score}
        totalQuestions={questions.length}
        correctAnswers={correctAnswers}
        onRestart={handleStart}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start px-4 py-8 md:py-12">
      <ScoreBar
        score={score}
        streak={streak}
        currentQuestion={currentIndex}
        totalQuestions={questions.length}
      />
      <AnimatePresence mode="wait">
        <QuizQuestion
          key={questions[currentIndex].id}
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
        />
      </AnimatePresence>
    </div>
  );
};

export default Index;
