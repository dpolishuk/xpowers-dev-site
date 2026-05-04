import { Terminal, Bot, Code, Sparkles, Monitor, Smartphone } from 'lucide-react';

const PLATFORMS = [
  { name: 'Claude Code', icon: Bot, desc: 'Anthropic', color: 'text-ij-blue' },
  { name: 'OpenCode', icon: Code, desc: 'Open-source IDE', color: 'text-ij-keyword' },
  { name: 'Kimi CLI', icon: Sparkles, desc: 'Moonshot AI', color: 'text-ij-green' },
  { name: 'Codex CLI', icon: Terminal, desc: 'OpenAI', color: 'text-ij-yellow' },
  { name: 'Gemini CLI', icon: Monitor, desc: 'Google', color: 'text-ij-number' },
  { name: 'Pi', icon: Smartphone, desc: 'Inflection', color: 'text-ij-yellow' },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 px-4 border-t border-ij-bg3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// platforms</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Works <span className="gradient-text">everywhere</span>
          </h2>
          <p className="text-ij-text mt-4 max-w-xl mx-auto">
            A single framework for all modern AI agents and editors
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PLATFORMS.map((p, i) => (
            <div
              key={i}
              className="ij-panel p-5 text-center hover:border-ij-function/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-3">
                <p.icon size={28} className={p.color} />
              </div>
              <h3 className="font-semibold text-ij-textBright text-sm mb-1">{p.name}</h3>
              <span className="text-xs text-ij-comment">{p.desc}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="font-mono text-sm text-ij-comment">
            /* OpenCode routing: different models = different strengths. Write with one — review with another. */
          </span>
        </div>
      </div>
    </section>
  );
}
