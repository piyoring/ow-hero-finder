import type { AnswerKey, Question } from "../types";

export function calculateScores(
  questions: Question[],
  answers: Record<number, AnswerKey>
) {
  const scores: Record<string, number> = {};

  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer) continue;

    const rule = question.scoring[answer];

    for (const hero of rule.targets) {
      scores[hero] = (scores[hero] ?? 0) + rule.points;
    }
  }

  return Object.entries(scores)
    .map(([hero, score]) => ({ hero, score }))
    .sort((a, b) => b.score - a.score);
}
