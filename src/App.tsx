import { useEffect, useMemo, useState } from "react";
import type { AnswerKey, Page, Role } from "./types";
import { damageGenreQuestions, damageHeroQuestions } from "./data/damageQuestions";
import type { DamageGenre } from "./data/damageQuestions";
import { roleConfigs } from "./data/roleConfigs";
import { calculateScores } from "./utils/calculateScores";
import {
  getDamageHeroQuestions,
  getTopDamageGenres,
  normalizeQuestions,
} from "./utils/diagnosis";
import { styles } from "./styles/appStyles";
import { TopPage } from "./components/TopPage";
import { QuestionPage } from "./components/QuestionPage";
import { ResultPage } from "./components/ResultPage";
import type { Question } from "./types";

export default function App() {
  const [page, setPage] = useState<Page>("top");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [answers, setAnswers] = useState<Record<string, AnswerKey>>({});
  const [damageGenreAnswers, setDamageGenreAnswers] = useState<
    Record<string, AnswerKey>
  >({});
  const [selectedDamageGenres, setSelectedDamageGenres] = useState<DamageGenre[]>([]);

  const roleConfig = selectedRole ? roleConfigs[selectedRole] : null;
  const damageGenreDiagnosisQuestions = useMemo(
    () => normalizeQuestions(damageGenreQuestions),
    []
  );

  const topTwoDamageGenres = useMemo(
    () => getTopDamageGenres(damageGenreDiagnosisQuestions, damageGenreAnswers),
    [damageGenreAnswers, damageGenreDiagnosisQuestions]
  );

  const questions: Question[] = useMemo(() => {
    if (page === "damage-genre") return damageGenreDiagnosisQuestions;

    if (selectedRole === "damage") {
      return getDamageHeroQuestions(damageHeroQuestions, selectedDamageGenres);
    }

    return roleConfig?.questions ?? [];
  }, [
    damageGenreDiagnosisQuestions,
    page,
    roleConfig,
    selectedDamageGenres,
    selectedRole,
  ]);

  const roleLabel = roleConfig?.label ?? "";
  const heroDescriptions = roleConfig?.descriptions ?? {};

  const results = useMemo(() => {
    const currentAnswers = page === "damage-genre" ? damageGenreAnswers : answers;
    return calculateScores(questions, currentAnswers);
  }, [questions, answers, damageGenreAnswers, page]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  const resetDiagnosis = () => {
    setSelectedRole(null);
    setAnswers({});
    setDamageGenreAnswers({});
    setSelectedDamageGenres([]);
    setPage("top");
  };

  const startDiagnosis = (role: Role) => {
    setSelectedRole(role);
    if (role === "damage") {
      setDamageGenreAnswers({});
      setSelectedDamageGenres([]);
      setAnswers({});
      setPage("damage-genre");
    } else {
      setAnswers({});
      setPage("questions");
    }
  };

  const answerQuestion = (questionId: string | number, answer: AnswerKey) => {
    if (page === "damage-genre") {
      setDamageGenreAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    } else {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    }
  };

  const completeQuestions = () => {
    if (page === "damage-genre") {
      setSelectedDamageGenres(topTwoDamageGenres);
      setAnswers({});
      setPage("questions");
      return;
    }

    setPage("result");
  };

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {page === "top" && <TopPage onStart={startDiagnosis} />}

        {(page === "damage-genre" || page === "questions") && (
          <QuestionPage
            roleLabel={roleLabel}
            questions={questions}
            answers={page === "damage-genre" ? damageGenreAnswers : answers}
            onAnswer={answerQuestion}
            onBackToTop={resetDiagnosis}
            onComplete={completeQuestions}
            completeButtonLabel={
              page === "damage-genre" ? "続いて回答する" : "結果を見る"
            }
          />
        )}

        {page === "result" && (
          <ResultPage
            results={results}
            heroDescriptions={heroDescriptions}
            onReset={resetDiagnosis}
          />
        )}
      </div>
    </main>
  );
}
