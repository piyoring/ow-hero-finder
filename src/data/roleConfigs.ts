import type { HeroDescription, Question, Role } from "../types";
import { damageDescriptions } from "./damageDescriptions";
import { supportDescriptions } from "./supportDescriptions";
import { supportQuestions } from "./supportQuestions";
import { tankDescriptions } from "./tankDescriptions";
import { tankQuestions } from "./tankQuestions";

export const roleConfigs = {
  tank: {
    label: "タンク",
    questions: tankQuestions,
    descriptions: tankDescriptions,
  },
  damage: {
    label: "ダメージ",
    questions: [],
    descriptions: damageDescriptions,
  },
  support: {
    label: "サポート",
    questions: supportQuestions,
    descriptions: supportDescriptions,
  },
} satisfies Record<
  Role,
  {
    label: string;
    questions: Question[];
    descriptions: Partial<Record<string, HeroDescription>>;
  }
>;
