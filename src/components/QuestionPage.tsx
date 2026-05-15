import type { AnswerKey, Question } from "../types";
import { styles } from "../styles/appStyles";

const answerOptions: {
  key: AnswerKey;
  title: string;
  strength: "strong" | "soft";
  tone: "negative" | "positive";
}[] = [
  { key: "yes", title: "はい", strength: "strong", tone: "positive" },
  {
    key: "somewhat_yes",
    title: "どちらかといえばはい",
    strength: "soft",
    tone: "positive",
  },
  {
    key: "somewhat_no",
    title: "どちらかといえばいいえ",
    strength: "soft",
    tone: "negative",
  },
  { key: "no", title: "いいえ", strength: "strong", tone: "negative" },
];

type Props = {
  roleLabel: string;
  pageDescription?: string;
  questions: Question[];
  answers: Record<string, AnswerKey>;
  onAnswer: (questionId: string | number, answer: AnswerKey) => void;
  onBackToTop: () => void;
  onComplete: () => void;
  completeButtonLabel: string;
};

export function QuestionPage({
  roleLabel,
  pageDescription,
  questions,
  answers,
  onAnswer,
  onBackToTop,
  onComplete,
  completeButtonLabel,
}: Props) {
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;
  const progress =
    questions.length === 0 ? 0 : (answeredCount / questions.length) * 100;

  return (
    <>
      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.title}>{roleLabel}</h1>
          {pageDescription ? (
            <p style={styles.pageDescription}>{pageDescription}</p>
          ) : null}
        </div>
        <button style={styles.secondaryButton} onClick={onBackToTop}>
          トップへ
        </button>
      </div>

      <div style={styles.progressBox}>
        <div style={styles.progressMeta}>
          <span>回答済み</span>
          <strong>
            {answeredCount} / {questions.length}
          </strong>
        </div>
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress}%` }} />
        </div>
      </div>

      <div style={styles.questionList}>
        {questions.map((question, index) => (
          <section key={question.id} style={styles.questionCard}>
            <div style={styles.questionHeader}>
              <span style={styles.questionNumber}>Q{index + 1}</span>
              <h2 style={styles.questionTitle}>{question.text}</h2>
            </div>

            <div className="answer-scale" style={styles.answerScale}>
              <span style={{ ...styles.scaleLabel, ...styles.scaleLabelPositive }}>
                そう思う
              </span>
              <div className="scale-buttons" style={styles.scaleButtons}>
                {answerOptions.map((option) => {
                  const selected = answers[question.id] === option.key;
                  const isPositive = option.tone === "positive";

                  return (
                    <button
                      key={option.key}
                      style={{
                        ...styles.answerButton,
                        ...(option.strength === "strong"
                          ? styles.answerButtonStrong
                          : {}),
                        borderColor: isPositive
                          ? "rgba(52,211,153,0.62)"
                          : "rgba(248,113,113,0.62)",
                        ...(selected
                          ? {
                              ...styles.answerButtonSelected,
                              background: isPositive ? "#10b981" : "#ef4444",
                            }
                          : {}),
                      }}
                      onClick={() => onAnswer(question.id, option.key)}
                      title={option.title}
                      aria-label={option.title}
                    />
                  );
                })}
              </div>
              <span style={{ ...styles.scaleLabel, ...styles.scaleLabelNegative }}>
                そう思わない
              </span>
            </div>
          </section>
        ))}
      </div>

      <div style={styles.stickyFooter}>
        <span>
          {isComplete
            ? "すべて回答済みです"
            : `未回答：${questions.length - answeredCount}問`}
        </span>
        <button
          style={{
            ...styles.resultButton,
            ...(isComplete ? {} : styles.resultButtonDisabled),
          }}
          disabled={!isComplete}
          onClick={onComplete}
        >
          {completeButtonLabel}
        </button>
      </div>
    </>
  );
}
