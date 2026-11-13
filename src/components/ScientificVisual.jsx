export default function ScientificVisual({ type = "hero" }) {
  if (type === "hero")
    return (
      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 500 400">
          <defs>
            <pattern
              id="grid"
              width="25"
              height="25"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M25 0H0V25"
                fill="none"
                stroke="var(--accent)"
                strokeWidth=".5"
                opacity=".16"
              />
            </pattern>
          </defs>
          <rect x="25" y="25" width="450" height="340" fill="url(#grid)" />
          <g fill="none" stroke="var(--accent)" strokeWidth="1.1">
            {Array.from({ length: 21 }, (_, i) => (
              <ellipse
                key={i}
                cx="252"
                cy="190"
                rx={37 + i * 7}
                ry={20 + i * 4.7}
                transform={`rotate(${i * 3 - 32} 252 190)`}
                opacity={0.65 + i * 0.015}
              />
            ))}
          </g>
          <path
            d="M40 315H465M70 345V40"
            stroke="var(--accent)"
            strokeWidth=".8"
            opacity=".8"
          />
          <g fill="var(--accent)" fontFamily="monospace" fontSize="10">
            <text x="451" y="333">
              x
            </text>
            <text x="54" y="47">
              y
            </text>
            <text x="85" y="345">
              FIG. 01 — EXPLORAR, MODELAR, COMPRENDER
            </text>
          </g>
          <circle cx="252" cy="190" r="4" fill="var(--accent)" />
        </svg>
        <span className="visual-note">
          La curiosidad también tiene coordenadas.
        </span>
      </div>
    );
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <svg viewBox="0 0 400 180">
        {type === "mobility" && (
          <>
            <g stroke="var(--border)" strokeWidth="1" fill="none">
              {Array.from({ length: 10 }, (_, i) => (
                <path
                  key={i}
                  d={`M${i * 55 - 80} 0l170 180M${i * 55} 0L${i * 55 - 155} 180`}
                />
              ))}
            </g>
            <g stroke="var(--accent)" fill="none" strokeWidth="2">
              <path d="M75 135L150 85 213 110 278 48 331 66" />
              <path d="M118 32L150 85 242 38M213 110l45 43" opacity=".8" />
            </g>
            {[
              [75, 135],
              [150, 85],
              [213, 110],
              [278, 48],
              [331, 66],
            ].map(([x, y]) => (
              <circle
                key={x}
                cx={x}
                cy={y}
                r="5"
                fill="var(--surface)"
                stroke="var(--accent)"
                strokeWidth="2"
              />
            ))}
          </>
        )}
        {type === "waves" && (
          <>
            {[0, 1, 2].map((n) => (
              <path
                key={n}
                d={`M15 ${55 + n * 35} ${Array.from({ length: 180 }, (_, i) => `L${i * 2.1 + 15} ${55 + n * 35 + Math.sin(i * 0.25 + n) * Math.exp(-Math.pow((i - 90) / 38, 2)) * (29 - n * 5)}`).join(" ")}`}
                stroke={n === 0 ? "var(--accent)" : "var(--diagram-secondary)"}
                strokeWidth="1.7"
                fill="none"
              />
            ))}
            <path d="M15 155H385" stroke="var(--diagram-secondary)" />
          </>
        )}
        {type === "statistics" && (
          <>
            <path d="M30 150H375M40 150V25" stroke="var(--diagram-secondary)" />
            {Array.from({ length: 21 }, (_, i) => (
              <rect
                key={i}
                x={52 + i * 14}
                y={150 - 100 * Math.exp(-Math.pow((i - 10) / 5, 2))}
                width="10"
                height={100 * Math.exp(-Math.pow((i - 10) / 5, 2))}
                rx="1"
                fill={i % 3 === 0 ? "var(--accent)" : "var(--diagram-secondary)"}
              />
            ))}
            <path
              d={`M45 149 ${Array.from({ length: 100 }, (_, i) => `L${45 + i * 3.1} ${150 - 114 * Math.exp(-Math.pow((i - 50) / 24, 2))}`).join(" ")}`}
              fill="none"
              stroke="var(--text)"
              strokeWidth="1.7"
            />
          </>
        )}
      </svg>
      <span>Ilustración conceptual · Sin datos reales</span>
    </div>
  );
}
