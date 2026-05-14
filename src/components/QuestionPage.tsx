import type { AnswerKey, Question } from "../types";
import { styles } from "../styles/appStyles";

const answerOptions: { key: AnswerKey; label: string }[] = [
  { key: "yes", label: "はい" },
  { key: "somewhat_yes", label: "どちらかといえばはい" },
  { key: "somewhat_no", label: "どちらかといえばいいえ" },
  { key: "no", label: "いいえ" },
];

type Props = {
  roleLabel: string;
  questions: Question[];
  answers: Record<number, AnswerKey>;
  onAnswer: (questionId: number, answer: AnswerKey) => void;
  onBackToTop: () => void;
  onShowResult: () => void;
};

export function QuestionPage({
  roleLabel,
  questions,
  answers,
  onAnswer,
  onBackToTop,
  onShowResult,
}: Props) {
  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === questions.length;

  return (
    <>
      <div style={styles.headerRow}>
        <div>
          <p style={styles.badge}>{roleLabel}</p>
          <h1 style={styles.title}>適性診断</h1>
        </div>
        <button style={styles.secondaryButton} onClick={onBackToTop}>
          トップへ
        </button>
      </div>

      <div style={styles.progressBox}>
        回答済み：{answeredCount} / {questions.length}
      </div>

      <div style={styles.questionList}>
        {questions.map((question) => (
          <section key={question.id} style={styles.questionCard}>
            <h2 style={styles.questionTitle}>
              Q{question.id}. {question.text}
            </h2>

            <div style={styles.answerGrid}>
              {answerOptions.map((option) => {
                const selected = answers[question.id] === option.key;

                return (
                  <button
                    key={option.key}
                    style={{
                      ...styles.answerButton,
                      ...(selected ? styles.answerButtonSelected : {}),
                    }}
                    onClick={() => onAnswer(question.id, option.key)}
                  >
                    {option.label}
                  </button>
                );
              })}
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
          onClick={onShowResult}
        >
          結果を見る
        </button>
      </div>
    </>
  );
}