import type { HeroDescription, Question, Role } from "../types";
import { damageDescriptions } from "./damageDescriptions";
import { supportDescriptions } from "./supportDescriptions";
import { supportQuestions } from "./supportQuestions";
import { tankDescriptions } from "./tankDescriptions";
import { tankQuestions } from "./tankQuestions";

export type RoleTheme = {
  accent: string;
  accentSoft: string;
  accentGlow: string;
  accentText: string;
};

export const defaultRoleTheme: RoleTheme = {
  accent: "#f59e0b",
  accentSoft: "#38bdf8",
  accentGlow: "rgba(245,158,11,0.18)",
  accentText: "#fbbf24",
};

export const roleConfigs = {
  tank: {
    label: "TANK",
    theme: {
      accent: "#f59e0b",
      accentSoft: "#fbbf24",
      accentGlow: "rgba(245,158,11,0.18)",
      accentText: "#fbbf24",
    },
    questions: tankQuestions,
    descriptions: tankDescriptions,
  },
  damage: {
    label: "DAMAGE",
    theme: {
      accent: "#0ea5e9",
      accentSoft: "#38bdf8",
      accentGlow: "rgba(14,165,233,0.18)",
      accentText: "#7dd3fc",
    },
    questions: [],
    descriptions: damageDescriptions,
  },
  support: {
    label: "SUPPORT",
    theme: {
      accent: "#10b981",
      accentSoft: "#34d399",
      accentGlow: "rgba(16,185,129,0.18)",
      accentText: "#86efac",
    },
    questions: supportQuestions,
    descriptions: supportDescriptions,
  },
} satisfies Record<
  Role,
  {
    label: string;
    theme: RoleTheme;
    questions: Question[];
    descriptions: Partial<Record<string, HeroDescription>>;
  }
>;
