import type React from "react";

export const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at 16% 0%, var(--role-accent-glow, rgba(245,158,11,0.18)), transparent 34%), radial-gradient(circle at 82% 8%, rgba(56,189,248,0.14), transparent 28%), linear-gradient(135deg, #242424 0%, #171717 48%, #0d1720 100%)",
    color: "#f8fafc",
    padding: "46px 16px",
    boxSizing: "border-box",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  container: {
    maxWidth: 960,
    margin: "0 auto",
  },

  badge: {
    color: "var(--role-accent-text, #fbbf24)",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    fontSize: 13,
    margin: "0 0 8px",
  },

  title: {
    fontSize: "clamp(34px, 6vw, 58px)",
    lineHeight: 1.1,
    margin: "0 0 16px",
  },

  brandTitle: {
    maxWidth: 820,
    margin: "0 0 18px",
    color: "#f8fafc",
    fontSize: "clamp(42px, 7vw, 82px)",
    lineHeight: 0.95,
    fontWeight: 950,
    letterSpacing: 0,
    textShadow: "0 2px 0 rgba(14,165,233,0.36)",
  },

  lead: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 680,
  },

  pageDescription: {
    maxWidth: 620,
    margin: "-4px 0 0",
    color: "#cbd5e1",
    fontSize: 15,
    lineHeight: 1.7,
  },

  topLayout: {
    display: "grid",
    gap: 28,
    alignItems: "start",
  },

  roleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    marginTop: 4,
  },

  primaryCard: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(244,244,245,0.14)",
    borderTop: "3px solid #f59e0b",
    background:
      "linear-gradient(135deg, rgba(244,244,245,0.07), rgba(24,24,27,0.84) 46%), rgba(24,24,27,0.78)",
    color: "#fff",
    padding: 24,
    borderRadius: 8,
    textAlign: "left",
    cursor: "pointer",
    boxShadow: "0 16px 40px rgba(0,0,0,0.24)",
  },

  disabledCard: {
    border: "1px solid rgba(148,163,184,0.25)",
    background: "rgba(148,163,184,0.08)",
    color: "#94a3b8",
    padding: 24,
    borderRadius: 8,
    textAlign: "left",
    cursor: "not-allowed",
  },

  roleTitle: {
    display: "block",
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 8,
  },

  roleMeta: {
    display: "block",
    color: "#a1a1aa",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.12em",
    marginBottom: 8,
  },

  roleAccent: {
    display: "block",
    width: 34,
    height: 4,
    borderRadius: 999,
    marginBottom: 18,
  },

  roleText: {
    display: "block",
    color: "#d4d4d8",
    fontSize: 15,
    lineHeight: 1.6,
  },

  roleCta: {
    display: "inline-flex",
    marginTop: 22,
    color: "#f8fafc",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: "0.16em",
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "flex-start",
  },

  progressBox: {
    background:
      "linear-gradient(135deg, rgba(244,244,245,0.06), rgba(24,24,27,0.78)), rgba(24,24,27,0.76)",
    border: "1px solid rgba(244,244,245,0.14)",
    padding: 16,
    borderRadius: 8,
    margin: "16px 0 24px",
    color: "#d4d4d8",
  },

  progressMeta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 10,
  },

  progressTrack: {
    height: 8,
    overflow: "hidden",
    borderRadius: 999,
    background: "rgba(244,244,245,0.12)",
  },

  progressFill: {
    height: "100%",
    borderRadius: 999,
    background:
      "linear-gradient(90deg, var(--role-accent, #f59e0b), var(--role-accent-soft, #38bdf8))",
    transition: "width 180ms ease",
  },

  questionList: {
    display: "grid",
    gap: 16,
    paddingBottom: 96,
  },

  questionCard: {
    background:
      "linear-gradient(135deg, var(--role-accent-glow, rgba(245,158,11,0.10)), rgba(24,24,27,0.78) 24%), rgba(24,24,27,0.78)",
    border: "1px solid rgba(244,244,245,0.12)",
    borderRadius: 8,
    padding: 20,
    boxShadow: "inset 3px 0 0 var(--role-accent, #f59e0b)",
  },

  questionHeader: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 14,
    alignItems: "start",
    marginBottom: 16,
  },

  questionNumber: {
    minWidth: 44,
    padding: "7px 9px",
    borderRadius: 8,
    background: "var(--role-accent-glow, rgba(251,191,36,0.14))",
    border: "1px solid var(--role-accent, #f59e0b)",
    color: "var(--role-accent-text, #fbbf24)",
    fontSize: 13,
    fontWeight: 900,
    textAlign: "center",
  },

  questionTitle: {
    margin: 0,
    fontSize: 18,
    lineHeight: 1.6,
  },

  answerScale: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },

  scaleLabel: {
    minWidth: 94,
    color: "#a1a1aa",
    fontSize: 13,
    fontWeight: 800,
  },

  scaleLabelPositive: {
    color: "#86efac",
  },

  scaleLabelNegative: {
    color: "#fca5a5",
    textAlign: "right",
  },

  scaleButtons: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(42px, 1fr))",
    alignItems: "center",
    justifyItems: "center",
    gap: 18,
    flex: "1 1 auto",
    maxWidth: 440,
    margin: "0 auto",
  },

  answerButton: {
    border: "3px solid rgba(244,244,245,0.28)",
    background: "rgba(24,24,27,0.36)",
    color: "transparent",
    borderRadius: 999,
    padding: 0,
    cursor: "pointer",
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
  },

  answerButtonStrong: {
    width: 46,
    height: 46,
  },

  answerButtonSelected: {
    borderColor: "rgba(255,255,255,0.92)",
    color: "#ffffff",
    boxShadow: "0 0 0 4px rgba(255,255,255,0.08)",
  },

  stickyFooter: {
    position: "sticky",
    bottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    background:
      "linear-gradient(135deg, rgba(244,244,245,0.05), rgba(24,24,27,0.94)), rgba(24,24,27,0.94)",
    border: "1px solid rgba(244,244,245,0.16)",
    borderRadius: 8,
    padding: 16,
    backdropFilter: "blur(12px)",
    boxShadow: "0 14px 34px rgba(0,0,0,0.25)",
  },

  resultButton: {
    background:
      "linear-gradient(135deg, var(--role-accent, #f59e0b), var(--role-accent-soft, #38bdf8))",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "12px 20px",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 24px var(--role-accent-glow, rgba(245,158,11,0.24))",
  },

  resultButtonDisabled: {
    opacity: 0.45,
    cursor: "not-allowed",
  },

  secondaryButton: {
    background: "transparent",
    color: "#e5e7eb",
    border: "1px solid rgba(244,244,245,0.22)",
    borderRadius: 8,
    padding: "10px 16px",
    flexShrink: 0,
    whiteSpace: "nowrap",
    cursor: "pointer",
  },

  resultList: {
    display: "grid",
    gap: 16,
    margin: "24px 0",
  },

  resultCard: {
    display: "grid",
    gridTemplateColumns: "64px 1fr",
    gap: 16,
    alignItems: "start",
    background:
      "linear-gradient(135deg, rgba(244,244,245,0.05), rgba(24,24,27,0.80)), rgba(24,24,27,0.78)",
    border: "1px solid rgba(244,244,245,0.14)",
    borderRadius: 8,
    padding: 20,
  },

  resultCardTop: {
    borderColor: "var(--role-accent, #f59e0b)",
    background:
      "linear-gradient(135deg, var(--role-accent-glow, rgba(251,191,36,0.14)), rgba(24,24,27,0.78) 42%)",
  },

  rank: {
    width: 56,
    height: 56,
    borderRadius: 8,
    background: "var(--role-accent-glow, rgba(56,189,248,0.14))",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    fontSize: 20,
    color: "var(--role-accent-text, #7dd3fc)",
  },

  rankTop: {
    background: "var(--role-accent-glow, rgba(245,158,11,0.20))",
    color: "var(--role-accent-text, #fbbf24)",
  },

  heroName: {
    margin: "0 0 4px",
    fontSize: 28,
  },

  heroTitle: {
    margin: "0 0 8px",
    color: "var(--role-accent-text, #7dd3fc)",
    fontWeight: 800,
  },

  scoreBadge: {
    display: "inline-flex",
    margin: "0 0 12px",
    padding: "5px 9px",
    borderRadius: 6,
    background: "var(--role-accent-glow, rgba(245,158,11,0.14))",
    color: "var(--role-accent-text, #fbbf24)",
    border: "1px solid var(--role-accent, #f59e0b)",
    fontSize: 12,
    fontWeight: 950,
    letterSpacing: "0.08em",
  },

  description: {
    margin: 0,
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  recommendedBlock: {
    marginTop: 14,
  },

  recommendedTitle: {
    margin: "0 0 8px",
    color: "#f5f5f5",
    fontSize: 14,
    fontWeight: 800,
  },

  recommendedList: {
    display: "grid",
    gap: 6,
    margin: 0,
    paddingLeft: 20,
    color: "#cbd5e1",
    lineHeight: 1.6,
  },

  recommendedItem: {
    paddingLeft: 2,
  },

  score: {
    margin: "12px 0 0",
    fontWeight: 800,
  },

  resultActions: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },

  primaryButton: {
    background:
      "linear-gradient(135deg, var(--role-accent, #f59e0b), var(--role-accent-soft, #38bdf8))",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
  },

  shareButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f8fafc",
    color: "#111827",
    textDecoration: "none",
  },

  disclaimer: {
    marginTop: 48,
    paddingTop: 18,
    borderTop: "1px solid rgba(244,244,245,0.12)",
    color: "#a1a1aa",
    fontSize: 12,
    lineHeight: 1.7,
  },
};
