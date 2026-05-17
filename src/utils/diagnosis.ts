import type { DamageGenre, DamageHeroQuestion } from "../data/damageQuestions";
import type { AnswerKey, Question } from "../types";
import { calculateScores } from "./calculateScores";

const DAMAGE_GENRE_LEADER_BONUS = 2;

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

export function getLeadingDamageGenre(
  questions: Question[],
  answers: Record<string, AnswerKey>
): DamageGenre | null {
  const [first, second] = calculateScores(questions, answers);

  if (!first || !second || first.score === second.score) {
    return null;
  }

  return first.hero as DamageGenre;
}

export function applyDamageGenreLeaderBonus(
  results: { hero: string; score: number }[],
  questions: DamageHeroQuestion[],
  leadingGenre: DamageGenre | null,
  bonus = DAMAGE_GENRE_LEADER_BONUS
) {
  if (!leadingGenre) return results;

  const boostedHeroes = new Set<string>(
    questions
      .filter((question) => question.genre === leadingGenre)
      .flatMap((question) =>
        Object.values(question.scoring).flatMap((rule) => rule.targets)
      )
  );

  return results
    .map((result) => ({
      ...result,
      score: result.score + (boostedHeroes.has(result.hero) ? bonus : 0),
    }))
    .sort((a, b) => b.score - a.score);
}
