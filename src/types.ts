export type Role = "tank" | "damage" | "support";
export type Page = "top" | "questions" | "result";
export type AnswerKey = "yes" | "somewhat_yes" | "somewhat_no" | "no";

export type ScoringRule = {
  targets: string[];
  points: number;
};

export type Question = {
  id: number;
  text: string;
  scoring: Record<AnswerKey, ScoringRule>;
};

export type HeroDescription = {
  title: string;
  description: string;
};
