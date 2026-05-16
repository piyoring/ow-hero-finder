export type Role = "tank" | "damage" | "support";
export type Page = "top" | "questions" | "result" | "damage-genre";
export type AnswerKey = "yes" | "somewhat_yes" | "somewhat_no" | "no";

export type ScoringRule = {
  targets: string[];
  points: number;
};

export type Question = {
  id: string | number;
  text: string;
  scoring: Record<AnswerKey, ScoringRule>;
};

export type HeroDescription = {
  nameJa: string;
  title: string;
  summary: string;
  playstyle: string;
  recommendedFor: string[];
};
