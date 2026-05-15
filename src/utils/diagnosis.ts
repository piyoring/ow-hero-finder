import type { DamageGenre, DamageHeroQuestion } from "../data/damageQuestions";
import type { AnswerKey, Question } from "../types";
import { calculateScores } from "./calculateScores";

type QuestionLike = {
  id: string | number;
  text: string;
  scoring: Question["scoring"];
};

export function normalizeQuestions(questions: QuestionLike[]): Question[] {
  return questions.map((question) => ({
    id: question.id,
    text: question.text,
    scoring: question.scoring,
  }));
}

export function getDamageHeroQuestions(
  questions: DamageHeroQuestion[],
  selectedGenres: DamageGenre[]
): Question[] {
  if (selectedGenres.length === 0) return [];

  return normalizeQuestions(
    questions.filter((question) => selectedGenres.includes(question.genre))
  );
}

export function getTopDamageGenres(
  questions: Question[],
  answers: Record<string, AnswerKey>,
  limit = 2
): DamageGenre[] {
  return calculateScores(questions, answers)
    .slice(0, limit)
    .map((result) => result.hero as DamageGenre);
}
