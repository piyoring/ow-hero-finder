import { damageDescriptions } from "./damageDescriptions";
import { tankDescriptions } from "./tankDescriptions";
import { supportDescriptions } from "./supportDescriptions";

export const heroDescriptions = {
  tank: tankDescriptions,
  damage: damageDescriptions,
  support: supportDescriptions,
} as const;
