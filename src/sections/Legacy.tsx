import { Network, FileSearch, GitCommit, Target, RotateCcw, CheckCircle } from 'lucide-react';

const WORKFLOW_STEPS = [
  { num: '1', title: 'Run Graphify', desc: 'Build a structured index of your codebase', icon: FileSearch, color: 'text-ij-number', bg: 'bg-ij-number/10' },
  { num: '2', title: 'Define Epic', desc: 'Scope the feature or refactor you need', icon: Target, color: 'text-ij-keyword', bg: 'bg-ij-keyword/10' },
  { num: '3', title: 'Slice First Task', desc: 'SRE Refined: small, executable, scoped', icon: GitCommit, color: 'text-ij-keyword', bg: 'bg-ij-keyword/10' },
  { num: '4', title: 'Execute with TDD', desc: 'Agent writes tests first, then code', icon: CheckCircle, color: 'text-ij-green', bg: 'bg-ij-green/10' },
  { num: '5', title: 'Review', desc: 'Multi-agent pipeline checks every change', icon: RotateCcw, color: 'text-ij-green', bg: 'bg-ij-green/10' },
  { num: '6', title: 'Check Epic Criteria', desc: 'Done? Close. No? Slice next task.', icon: Network, color: 'text-ij-keyword', bg: 'bg-ij-keyword/10' },
];

export default function Legacy() {
  return (
    <section id="legacy" className="py-24 px-4 border-t border-ij-bg3">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// legacy codebases</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            See your project as a <span className="text-ij-function">graph</span>
          </h2>
          <p className="text-ij-text mt-4 max-w-xl mx-auto">
            Legacy is not a file tree — it is a graph of interconnected systems. Iterate with confidence.
          </p>
        </div>

        {/* The Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="ij-panel p-6">
            <h3 className="font-semibold text-ij-textBright mb-4">The Vision</h3>
            <p className="text-sm text-ij-text leading-relaxed mb-4">
              A <strong>legacy codebase</strong> is not a folder tree — it is a <strong>graph of interconnected systems</strong>.
              To refactor safely, you must see dependencies, boundaries, and entry points.
            </p>
            <p className="text-sm text-ij-text leading-relaxed mb-4">
              <strong>Beads</strong> turns your project into an <strong>epic-task graph</strong>: each epic = a scope of work, each task = a node.
              The agent walks this graph — not a folder structure.
            </p>
            <div className="ij-panel p-4 bg-ij-bg/50">
              <p className="text-xs text-ij-comment font-mono mb-2">// Why a graph beats a folder tree</p>
              <p className="text-xs text-ij-error mb-1">✗ Folder tree: agent sees files, not intent. Refactors blindly.</p>
              <p className="text-xs text-ij-green">✓ Epic graph: agent sees scope → tasks → acceptance criteria.</p>
            </div>
          </div>

          <div className="ij-panel p-6">
            <h3 className="font-semibold text-ij-textBright mb-4">Graphify</h3>
            <p className="text-sm text-ij-text leading-relaxed mb-4">
              <strong>Graphify</strong> — Python scripts inspired by Andrej Karpathy. Scans your codebase and builds a <strong>structured JSON index</strong>.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-ij-text">
                <span className="text-ij-function">❯</span> Class map — all classes, methods, inheritance
              </div>
              <div className="flex items-center gap-2 text-sm text-ij-text">
                <span className="text-ij-function">❯</span> Call graph — function-level dependencies
              </div>
              <div className="flex items-center gap-2 text-sm text-ij-text">
                <span className="text-ij-function">❯</span> Module graph — import relationships
              </div>
              <div className="flex items-center gap-2 text-sm text-ij-text">
                <span className="text-ij-function">❯</span> Entry points — APIs, main functions, CLI
              </div>
            </div>
            <p className="text-xs text-ij-comment font-mono mt-4">
              /* The agent reads the index — not raw files. Understands architecture first. */
            </p>
          </div>
        </div>

        {/* Iterative Workflow */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-ij-textBright">Iterative Legacy Workflow</h3>
          <p className="text-sm text-ij-comment mt-2">Each iteration is scoped. The agent never works without context.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORKFLOW_STEPS.map((step, i) => (
            <div key={i} className="ij-panel p-4 hover:border-ij-function/40 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${step.bg} flex items-center justify-center`}>
                  <step.icon size={16} className={step.color} />
                </div>
                <span className="font-mono text-lg font-bold text-ij-comment">{step.num}</span>
              </div>
              <h4 className="font-semibold text-ij-textBright text-sm mb-1">{step.title}</h4>
              <p className="text-xs text-ij-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
