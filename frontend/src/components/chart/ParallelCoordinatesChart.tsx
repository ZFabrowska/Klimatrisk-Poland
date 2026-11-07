
import { useMemo } from "react";
import useDataStore, { type ElementKey } from "../../hooks/useDataStore";
import useLanguageStore from "../../hooks/useLanguageStore";
import { voivodeshipNames } from "../../assets/voivodeship";

const axisKeys = ["f", "s", "e", "r"] as ElementKey[];

const axisLabels = {
  en: ["Hazard", "Vulnerability", "Exposure", "Response", "Total Risk"],
  pl: ["Zagrożenie", "Wrażliwość", "Ekspozycja", "Reagowanie", "Całkowite ryzyko"],
  no: ["Fare", "Sårbarhet", "Eksponering", "Respons", "Samlet risiko"],
};

const seriesLabels = {
  en: ["Selected county", "Voivodeship mean", "Poland mean"],
  pl: ["Wybrany powiat", "Średnia województwa", "Średnia Polski"],
  no: ["Valgt fylke", "Gjennomsnitt i voivodskapet", "Gjennomsnitt i Polen"],
};

const seriesColors = ["#0891b2", "#16a34a", "#737373"];

function ParallelCoordinatesChart() {
  const { data, cache, selectedYear, selectedKommune } = useDataStore();
  const { language } = useLanguageStore();
  const voivodeshipCode = selectedKommune?.slice(0,2);

  const voivodeshipName = voivodeshipCode
  ? voivodeshipNames[voivodeshipCode]?.[language]
  : undefined;

  const countyName =
  selectedYear && selectedKommune
    ? data?.years[selectedYear]?.byKommune[selectedKommune]?.klimarisk_name
    : undefined;

  const chartData = useMemo(() => {
    if (!cache || !selectedYear || !selectedKommune) return null;

    const yearCache = cache.years[selectedYear];
    if (!yearCache) return null;

    const selected = yearCache.byKommune[selectedKommune];
    if (!selected) return null;

    const entries = Object.entries(yearCache.byKommune);
    const regionEntries = entries.filter(([code]) =>
      code.startsWith(selectedKommune.slice(0, 2))
    );

    const values = (entry: typeof selected) => [
      ...axisKeys.map(key => entry[key]),
      entry.totalRisk,
    ];

    const mean = (items: typeof entries) => {
      if (items.length === 0) return null;

      const result = [0, 0, 0, 0, 0];

      items.forEach(([, entry]) => {
        values(entry).forEach((value, index) => {
          result[index] += value;
        });
      });

      return result.map(value => value / items.length);
    };

    return [
      values(selected),
      mean(regionEntries),
      mean(entries),
    ];
  }, [cache, selectedYear, selectedKommune]);

  if (!chartData || chartData.some(series => !series)) {
    return (
      <div style={{ padding: 20 }}>
        {language === "pl"
          ? "Wybierz powiat na mapie."
          : language === "no"
            ? "Velg et fylke på kartet."
            : "Select a county on the map."}
      </div>
    );
  }

  const width = 900;
  const height = 420;
  const left = 75;
  const right = 75;
  const top = 45;
  const bottom = 85;

  const plotHeight = height - top - bottom;
  const axisPositions = axisKeys.map(
    (_, index) => left + index * (width - left - right) / 4
  );
  axisPositions.push(width - right);

  const getY = (value: number, index: number) => {
    const max = index === 4 ? 400 : 100;
    return top + plotHeight * (1 - value / max);
  };

  return (
    <div style={{ padding: 20, width: "100%", boxSizing: "border-box" }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "auto" }}
      >
        {axisPositions.map((x, index) => (
          <g key={index}>
            <line
              x1={x}
              x2={x}
              y1={top}
              y2={top + plotHeight}
              stroke="#777"
              strokeWidth={1.5}
            />

            {Array.from({ length: 5 }, (_, tick) => {
              const value = tick * (index === 4 ? 100 : 25);
              const y = getY(value, index);

              return (
                <g key={tick}>
                  <line
                    x1={x - 5}
                    x2={x + 5}
                    y1={y}
                    y2={y}
                    stroke="#777"
                  />
                  <text
                    x={x - 10}
                    y={y + 4}
                    textAnchor="end"
                    fontSize={13}
                    fill="currentColor"
                  >
                    {value}
                  </text>
                </g>
              );
            })}

            <text
              x={x}
              y={top + plotHeight + 28}
              textAnchor="middle"
              fontSize={15}
              fontWeight="bold"
              fill="currentColor"
            >
              {axisLabels[language][index]}
            </text>
          </g>
        ))}

        {chartData.map((series, seriesIndex) => {
          if (!series) return null;

          const points = series.map(
            (value, index) =>
              `${axisPositions[index]},${getY(value, index)}`
          ).join(" ");

          return (
            <g key={seriesIndex}>
              <polyline
                points={points}
                fill="none"
                stroke={seriesColors[seriesIndex]}
                strokeWidth={seriesIndex === 0 ? 4 : 2.5}
                strokeDasharray={seriesIndex === 2 ? "7 5" : undefined}
                strokeLinejoin="round"
              />

              {series.map((value, index) => (
                <circle
                  key={index}
                  cx={axisPositions[index]}
                  cy={getY(value, index)}
                  r={seriesIndex === 0 ? 5 : 3.5}
                  fill={seriesColors[seriesIndex]}
                >
                  <title>{`${seriesLabels[language][seriesIndex]}: ${value.toFixed(1)}`}</title>
                </circle>
              ))}
            </g>
          );
        })}

        <text
          x={axisPositions[4]}
          y={top + plotHeight + 49}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
        >
          H + V + E + (100-R)
        </text>
      </svg>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 28,
          flexWrap: "wrap",
          marginTop: 10,
        }}
      >
    {seriesLabels[language].map((label, index) => (
        <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
            <span
            style={{
                width: 25,
                height: 4,
                backgroundColor: seriesColors[index],
                display: "inline-block",
            }}
            />
            <span>
            {index === 0 && countyName
            ? `${label} (${countyName})`
            : index === 1 && voivodeshipName
                ? `${label} (${voivodeshipName})`
                : label}
            </span>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ParallelCoordinatesChart;
