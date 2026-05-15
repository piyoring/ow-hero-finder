import { styles } from "../styles/appStyles";
import type { HeroDescription } from "../types";

type Result = {
  hero: string;
  score: number;
};

type Props = {
  results: Result[];
  heroDescriptions: Partial<Record<string, HeroDescription>>;
  onReset: () => void;
};

export function ResultPage({ results, heroDescriptions, onReset }: Props) {
  return (
    <>
      <p style={styles.badge}>Result</p>
      <h1 style={styles.title}>診断結果</h1>

      <div style={styles.resultList}>
        {results.slice(0, 3).map((result, index) => {
          const info = heroDescriptions[result.hero];

          return (
            <section key={result.hero} style={styles.resultCard}>
              <div style={styles.rank}>#{index + 1}</div>
              <div>
                <h2 style={styles.heroName}>{result.hero}</h2>
                <p style={styles.heroTitle}>{info?.title}</p>
                <p style={styles.description}>{info?.summary}</p>
                {info?.recommendedFor?.length ? (
                  <div style={styles.recommendedBlock}>
                    <p style={styles.recommendedTitle}>おすすめな人</p>
                    <ul style={styles.recommendedList}>
                      {info.recommendedFor.map((item) => (
                        <li key={item} style={styles.recommendedItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <p style={styles.score}>スコア：{result.score}</p>
              </div>
            </section>
          );
        })}
      </div>

      <button style={styles.primaryButton} onClick={onReset}>
        もう一度診断する
      </button>
    </>
  );
}
