import { Check, X } from 'lucide-react';

const COMPARISON = [
  { feature: 'Claude Code', sp: true, xp: true },
  { feature: 'OpenCode', sp: true, xp: true },
  { feature: 'Kimi CLI', sp: false, xp: true },
  { feature: 'Pi (extension)', sp: false, xp: true },
  { feature: 'Gemini CLI', sp: true, xp: true },
  { feature: 'Codex CLI', sp: false, xp: true },
  { feature: 'Task Management', sp: false, xp: true },
  { feature: 'Beads / Graph support', sp: false, xp: true },
  { feature: 'TDD out of the box', sp: true, xp: true },
  { feature: 'XP (full practices)', sp: false, xp: true },
  { feature: 'Ralph mode', sp: false, xp: true },
  { feature: 'Multi-agent review', sp: false, xp: true },
  { feature: 'SRE Refined tickets', sp: false, xp: true },
  { feature: 'BV Robotriage', sp: false, xp: true },
  { feature: 'Graphify (legacy index)', sp: false, xp: true },
  { feature: 'Legacy workflow', sp: false, xp: true },
];

export default function Comparison() {
  return (
    <section className="py-24 px-4 border-t border-ij-bg3">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// comparison</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            xpowers <span className="text-ij-function">features</span>
          </h2>
          <p className="text-ij-text mt-4">
            Took the best — added what was missing for real projects
          </p>
        </div>

        <div className="ij-panel overflow-hidden">
          <div className="grid grid-cols-3 text-sm border-b border-ij-bg3">
            <div className="px-4 py-3 font-semibold text-ij-comment">Feature</div>
            <div className="px-4 py-3 font-semibold text-center text-ij-comment">other frameworks</div>
            <div className="px-4 py-3 font-semibold text-center text-ij-function">xpowers.dev</div>
          </div>
          {COMPARISON.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-ij-bg/50' : ''} hover:bg-ij-bg3/30 transition-colors`}
            >
              <div className="px-4 py-3 text-ij-text flex items-center gap-2">
                <span className="font-mono text-ij-comment">//</span>
                {row.feature}
              </div>
              <div className="px-4 py-3 flex items-center justify-center">
                {row.sp ? (
                  <Check size={16} className="text-ij-green" />
                ) : (
                  <X size={16} className="text-ij-error/60" />
                )}
              </div>
              <div className="px-4 py-3 flex items-center justify-center">
                {row.xp ? (
                  <Check size={16} className="text-ij-function" />
                ) : (
                  <X size={16} className="text-ij-error/60" />
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ij-comment mt-4 font-mono">
          /* xpowers — evolution of agent-driven development for real-world tasks. */
        </p>
      </div>
    </section>
  );
}
