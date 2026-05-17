import type React from "react";
import { useEffect, useMemo, useState } from "react";
import type { AnswerKey, Page, Role } from "./types";
import { damageGenreQuestions, damageHeroQuestions } from "./data/damageQuestions";
import type { DamageGenre } from "./data/damageQuestions";
import { defaultRoleTheme, roleConfigs } from "./data/roleConfigs";
import { calculateScores } from "./utils/calculateScores";
import {
  applyDamageGenreLeaderBonus,
  getDamageHeroQuestions,
  getLeadingDamageGenre,
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
  const roleTheme = roleConfig?.theme ?? defaultRoleTheme;
  const pageStyle = {
    ...styles.page,
    "--role-accent": roleTheme.accent,
    "--role-accent-soft": roleTheme.accentSoft,
    "--role-accent-glow": roleTheme.accentGlow,
    "--role-accent-text": roleTheme.accentText,
  } as React.CSSProperties;
  const damageGenreDiagnosisQuestions = useMemo(
    () => normalizeQuestions(damageGenreQuestions),
    []
  );

  const topTwoDamageGenres = useMemo(
    () => getTopDamageGenres(damageGenreDiagnosisQuestions, damageGenreAnswers),
    [damageGenreAnswers, damageGenreDiagnosisQuestions]
  );

  const leadingDamageGenre = useMemo(
    () => getLeadingDamageGenre(damageGenreDiagnosisQuestions, damageGenreAnswers),
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
  const questionPageDescription =
    selectedRole === "damage"
      ? page === "damage-genre"
        ? "まずプレイスタイルを診断し、その結果からヒーロー診断へ進みます。"
        : "プレイスタイル診断で選ばれた傾向をもとに、ヒーロー候補を絞り込みます。"
      : undefined;

  const results = useMemo(() => {
    const currentAnswers = page === "damage-genre" ? damageGenreAnswers : answers;
    const baseResults = calculateScores(questions, currentAnswers);

    if (selectedRole !== "damage" || page === "damage-genre") {
      return baseResults;
    }

    return applyDamageGenreLeaderBonus(
      baseResults,
      damageHeroQuestions,
      leadingDamageGenre
    );
  }, [
    questions,
    answers,
    damageGenreAnswers,
    leadingDamageGenre,
    page,
    selectedRole,
  ]);

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
    <main style={pageStyle}>
      <div style={styles.container}>
        {page === "top" && <TopPage onStart={startDiagnosis} />}

        {(page === "damage-genre" || page === "questions") && (
          <QuestionPage
            roleLabel={roleLabel}
            pageDescription={questionPageDescription}
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

        <footer style={styles.disclaimer}>
          このツールは非公式です。Blizzard Entertainment, Inc. とは提携・承認・後援関係にありません。Overwatch
          および関連する名称は Blizzard Entertainment, Inc. の商標または登録商標です。
        </footer>
      </div>
    </main>
  );
}
