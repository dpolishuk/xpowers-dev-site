import { Shield, GitCommit, Zap, Users, Target, Brain, Network, FileSearch } from 'lucide-react';

const FEATURES = [
  {
    icon: Shield,
    title: 'TDD as anti-drift trick',
    desc: 'Test first — code second. The agent cannot fit a test to already written code. RED-GREEN-REFACTOR cycle out of the box.',
    color: 'text-ij-green',
    bg: 'bg-ij-green/10',
  },
  {
    icon: GitCommit,
    title: 'tm-first — Graph Task Management',
    desc: 'Not markdown files, but a directed graph of tasks. Beads, Beads Rust, Ticket, Linear — pick any backend.',
    color: 'text-ij-blue',
    bg: 'bg-ij-blue/10',
  },
  {
    icon: Zap,
    title: 'XP out of the box',
    desc: 'Extreme Programming: pair programming, CI, YAGNI, frequent commits, refactoring through tests.',
    color: 'text-ij-yellow',
    bg: 'bg-ij-yellow/10',
  },
  {
    icon: Brain,
    title: 'Ralph Mode — full autonomy',
    desc: 'The agent walks the task graph on its own, checks acceptance criteria, generates the next ticket relative to reality.',
    color: 'text-ij-number',
    bg: 'bg-ij-number/10',
  },
  {
    icon: Users,
    title: 'Multi-Agent Review Pipeline',
    desc: '7 specialized reviewer agents check code in parallel. Quality, Security, DevOps, Simplification.',
    color: 'text-ij-keyword',
    bg: 'bg-ij-keyword/10',
  },
  {
    icon: Target,
    title: 'SRE Refined — ticket slicing',
    desc: 'Google SRE Rules: tickets are super-executable, small, with clear acceptance criteria. Only the first ticket — not 25 at once.',
    color: 'text-ij-green',
    bg: 'bg-ij-green/10',
  },
  {
    icon: Network,
    title: 'BV Robotriage — graph memory',
    desc: 'The agent sees all tickets as a directed graph. Understands what is done, what should be done, how tasks relate.',
    color: 'text-ij-yellow',
    bg: 'bg-ij-yellow/10',
  },
  {
    icon: FileSearch,
    title: 'Graphify — legacy indexing',
    desc: 'Python scripts inspired by Karpathy. Structured JSON of the codebase, understandable by the agent. Especially for legacy.',
    color: 'text-ij-number',
    bg: 'bg-ij-number/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 border-t border-ij-bg3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// features</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            What makes it <span className="text-ij-function">powerful</span>
          </h2>
          <p className="text-ij-text mt-4 max-w-xl mx-auto">
            Everything superpowers lacked — everything needed for real agent-driven development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="ij-panel p-5 hover:border-ij-function/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-10 h-10 rounded-lg ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon size={20} className={f.color} />
              </div>
              <h3 className="font-semibold text-ij-textBright mb-2 text-sm">{f.title}</h3>
              <p className="text-xs text-ij-text leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
