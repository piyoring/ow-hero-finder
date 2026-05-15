import type { HeroDescription, Question, Role } from "../types";
import { damageDescriptions } from "./damageDescriptions";
import { supportDescriptions } from "./supportDescriptions";
import { supportQuestions } from "./supportQuestions";
import { tankDescriptions } from "./tankDescriptions";
import { tankQuestions } from "./tankQuestions";

export const roleConfigs = {
  tank: {
    label: "TANK",
    questions: tankQuestions,
    descriptions: tankDescriptions,
  },
  damage: {
    label: "DAMAGE",
    questions: [],
    descriptions: damageDescriptions,
  },
  support: {
    label: "SUPPORT",
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
