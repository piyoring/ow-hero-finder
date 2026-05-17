import { styles } from "../styles/appStyles";
import type { HeroDescription } from "../types";

type Result = {
  hero: string;
  score: number;
};

type Props = {
  results: Result[];
  heroDescriptions: Partial<Record<string, HeroDescription>>;
  roleShareLabel: string;
  onReset: () => void;
};

function formatHeroName(hero: string, info: HeroDescription | undefined) {
  if (!info?.nameJa || info.nameJa === hero) {
    return hero;
  }

  return `${info.nameJa} / ${hero}`;
}

function buildShareUrl(
  result: Result | undefined,
  title: string | undefined,
  displayName: string | undefined,
  roleShareLabel: string,
) {
  const pageUrl = `${window.location.origin}${import.meta.env.BASE_URL}`;
  const heroName = displayName ?? result?.hero;
  const roleText = roleShareLabel ? roleShareLabel : "ヒーロー";
  const hashtags = "#OWヒーロー診断 #Overwatch";
  const shareText = result
    ? [
        `OVERWATCH FIND YOUR HEROで診断したら、相性の良い${roleText}は「${heroName}」でした！`,
        title ? `${heroName} - ${title}` : undefined,

        hashtags,
      ]
        .filter(Boolean)
        .join("\n")
    : [
        "OVERWATCH FIND YOUR HEROで自分に合うヒーローを診断しました！",

        hashtags,
      ].join("\n");
  const params = new URLSearchParams({
    text: shareText,
    url: pageUrl,
  });

  return `https://twitter.com/intent/tweet?${params.toString()}`;
}

export function ResultPage({
  results,
  heroDescriptions,
  roleShareLabel,
  onReset,
}: Props) {
  const topResult = results[0];
  const topInfo = topResult ? heroDescriptions[topResult.hero] : undefined;
  const topHeroName = topResult
    ? formatHeroName(topResult.hero, topInfo)
    : undefined;
  const shareUrl = buildShareUrl(
    topResult,
    topInfo?.title,
    topHeroName,
    roleShareLabel
  );

  return (
    <>
      <p style={styles.badge}>Result</p>
      <h1 style={styles.title}>診断結果</h1>
      <p style={styles.pageDescription}>
        回答傾向から相性の高いヒーローを上位順に表示しています。
      </p>

      <div style={styles.resultList}>
        {results.slice(0, 3).map((result, index) => {
          const info = heroDescriptions[result.hero];
          const isTop = index === 0;
          const heroName = formatHeroName(result.hero, info);

          return (
            <section
              key={result.hero}
              style={{
                ...styles.resultCard,
                ...(isTop ? styles.resultCardTop : {}),
              }}
            >
              <div style={{ ...styles.rank, ...(isTop ? styles.rankTop : {}) }}>
                #{index + 1}
              </div>
              <div>
                <h2 style={styles.heroName}>{heroName}</h2>
                <p style={styles.heroTitle}>{info?.title}</p>
                <p style={styles.scoreBadge}>MATCH SCORE {result.score}</p>
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
              </div>
            </section>
          );
        })}
      </div>

      <div style={styles.resultActions}>
        <a
          style={{ ...styles.primaryButton, ...styles.shareButton }}
          href={shareUrl}
          target="_blank"
          rel="noreferrer"
        >
          Xで結果を共有
        </a>
        <button style={styles.primaryButton} onClick={onReset}>
          もう一度診断する
        </button>
      </div>
    </>
  );
}
