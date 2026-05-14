import type React from "react";

export const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #101827 0%, #1f2937 55%, #111827 100%)",
    color: "#f9fafb",
    padding: "32px 16px",
    boxSizing: "border-box",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  container: {
    maxWidth: 960,
    margin: "0 auto",
  },

  badge: {
    color: "#93c5fd",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    fontSize: 13,
    margin: "0 0 8px",
  },

  title: {
    fontSize: "clamp(32px, 6vw, 56px)",
    lineHeight: 1.1,
    margin: "0 0 16px",
  },

  lead: {
    color: "#cbd5e1",
    fontSize: 18,
    lineHeight: 1.8,
    maxWidth: 680,
  },

  roleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
    marginTop: 32,
  },

  primaryCard: {
    border: "1px solid rgba(147,197,253,0.5)",
    background: "rgba(59,130,246,0.18)",
    color: "#fff",
    padding: 24,
    borderRadius: 20,
    textAlign: "left",
    cursor: "pointer",
  },

  disabledCard: {
    border: "1px solid rgba(148,163,184,0.25)",
    background: "rgba(148,163,184,0.08)",
    color: "#94a3b8",
    padding: 24,
    borderRadius: 20,
    textAlign: "left",
    cursor: "not-allowed",
  },

  roleTitle: {
    display: "block",
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 8,
  },

  roleText: {
    display: "block",
    fontSize: 14,
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    alignItems: "flex-start",
  },

  progressBox: {
    background: "rgba(15,23,42,0.7)",
    border: "1px solid rgba(148,163,184,0.25)",
    padding: "12px 16px",
    borderRadius: 14,
    margin: "16px 0 24px",
    color: "#cbd5e1",
  },

  questionList: {
    display: "grid",
    gap: 16,
    paddingBottom: 96,
  },

  questionCard: {
    background: "rgba(15,23,42,0.78)",
    border: "1px solid rgba(148,163,184,0.24)",
    borderRadius: 20,
    padding: 20,
  },

  questionTitle: {
    margin: "0 0 16px",
    fontSize: 18,
    lineHeight: 1.6,
  },

  answerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 10,
  },

  answerButton: {
    border: "1px solid rgba(148,163,184,0.35)",
    background: "rgba(30,41,59,0.8)",
    color: "#e5e7eb",
    borderRadius: 14,
    padding: "12px 14px",
    cursor: "pointer",
    fontWeight: 700,
  },

  answerButtonSelected: {
    background: "rgba(59,130,246,0.85)",
    borderColor: "#93c5fd",
    color: "#ffffff",
  },

  stickyFooter: {
    position: "sticky",
    bottom: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    background: "rgba(15,23,42,0.95)",
    border: "1px solid rgba(148,163,184,0.3)",
    borderRadius: 18,
    padding: 16,
    backdropFilter: "blur(12px)",
  },

  resultButton: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: 999,
    padding: "12px 20px",
    fontWeight: 800,
    cursor: "pointer",
  },

  resultButtonDisabled: {
    opacity: 0.45,
    cursor: "not-allowed",
  },

  secondaryButton: {
    background: "transparent",
    color: "#cbd5e1",
    border: "1px solid rgba(148,163,184,0.4)",
    borderRadius: 999,
    padding: "10px 16px",
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
    background: "rgba(15,23,42,0.78)",
    border: "1px solid rgba(147,197,253,0.28)",
    borderRadius: 22,
    padding: 20,
  },

  rank: {
    width: 56,
    height: 56,
    borderRadius: 18,
    background: "rgba(59,130,246,0.25)",
    display: "grid",
    placeItems: "center",
    fontWeight: 900,
    fontSize: 20,
    color: "#bfdbfe",
  },

  heroName: {
    margin: "0 0 4px",
    fontSize: 28,
  },

  heroTitle: {
    margin: "0 0 8px",
    color: "#93c5fd",
    fontWeight: 800,
  },

  description: {
    margin: 0,
    color: "#cbd5e1",
    lineHeight: 1.7,
  },

  score: {
    margin: "12px 0 0",
    fontWeight: 800,
  },

  primaryButton: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    borderRadius: 999,
    padding: "14px 22px",
    fontWeight: 900,
    cursor: "pointer",
  },
};