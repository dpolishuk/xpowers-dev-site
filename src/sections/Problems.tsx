import { AlertTriangle, FileText, GitBranch, Cpu, Lock } from 'lucide-react';

const PROBLEMS = [
  {
    icon: FileText,
    title: 'Markdown files proliferate',
    desc: 'spec, plans — the agent gets confused in files. You have to remember where everything is.',
  },
  {
    icon: GitBranch,
    title: 'No graph memory',
    desc: 'Specs in files do not provide a directed graph of tasks. No epic → task structure.',
  },
  {
    icon: Cpu,
    title: 'No new platform support',
    desc: 'Kimi CLI, Pi, Gemini, Codex — when I started, only Claude Code was supported.',
  },
  {
    icon: Lock,
    title: 'No full XP',
    desc: 'No simplification review, no full integration of extreme programming practices.',
  },
  {
    icon: AlertTriangle,
    title: 'No autonomous execution',
    desc: 'Ralph is absent. No pipeline-multiagent review like Umputun\'s.',
  },
];

export default function Problems() {
  return (
    <section id="problems" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// problem statement</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Problems I <span className="text-ij-error">solved</span>
          </h2>
          <p className="text-ij-text mt-4 max-w-xl mx-auto">
            Dozens of projects with superpowers — accumulated limitations I had to overcome
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((p, i) => (
            <div
              key={i}
              className="ij-panel p-5 hover:border-ij-keyword/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-md bg-ij-bg3 text-ij-keyword group-hover:text-ij-function transition-colors">
                  <p.icon size={18} />
                </div>
                <h3 className="font-semibold text-ij-textBright">{p.title}</h3>
              </div>
              <p className="text-sm text-ij-text leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <span className="font-mono text-sm text-ij-comment">
            /* superpowers is a great foundation. But the ecosystem grows fast. xpowers polishes. */
          </span>
        </div>
      </div>
    </section>
  );
}
