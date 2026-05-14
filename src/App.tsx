import { useMemo, useState } from "react";
import type { AnswerKey, Page, Role } from "./types";
import { supportQuestions } from "./data/supportQuestions";
import { supportDescriptions } from "./data/supportDescriptions";
import { tankQuestions } from "./data/tankQuestions";
import { tankDescriptions } from "./data/tankDescriptions";
import { calculateScores } from "./utils/calculateScores";
import { styles } from "./styles/appStyles";
import { TopPage } from "./components/TopPage";
import { QuestionPage } from "./components/QuestionPage";
import { ResultPage } from "./components/ResultPage";

export default function App() {
  const [page, setPage] = useState<Page>("top");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [answers, setAnswers] = useState<Record<number, AnswerKey>>({});

const questions =
  selectedRole === "tank"
    ? tankQuestions
    : selectedRole === "support"
    ? supportQuestions
    : [];

const roleLabel =
  selectedRole === "tank"
    ? "タンク"
    : selectedRole === "support"
    ? "サポート"
    : selectedRole === "damage"
    ? "ダメージ"
    : "";

const heroDescriptions =
  selectedRole === "tank"
    ? tankDescriptions
    : selectedRole === "support"
    ? supportDescriptions
    : {};

  const results = useMemo(() => {
    return calculateScores(questions, answers);
  }, [questions, answers]);

  const startDiagnosis = (role: Role) => {
    setSelectedRole(role);
    setAnswers({});
    setPage("questions");
  };

  const backToTop = () => {
    setSelectedRole(null);
    setAnswers({});
    setPage("top");
  };

  const reset = () => {
    setSelectedRole(null);
    setAnswers({});
    setPage("top");
  };

  const answerQuestion = (questionId: number, answer: AnswerKey) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {page === "top" && <TopPage onStart={startDiagnosis} />}

        {page === "questions" && (
          <QuestionPage
            roleLabel={roleLabel}
            questions={questions}
            answers={answers}
            onAnswer={answerQuestion}
            onBackToTop={backToTop}
            onShowResult={() => setPage("result")}
          />
        )}

        {page === "result" && (
          <ResultPage
            results={results}
            heroDescriptions={heroDescriptions}
            onReset={reset}
          />
        )}
      </div>
    </main>
  );
}