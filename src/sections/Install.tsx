import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Install() {
  const [copied, setCopied] = useState(false);

  const cmd = 'git clone https://github.com/dpolishuk/xpowers.git && cd xpowers && ./scripts/install.sh';

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="install" className="py-24 px-4 border-t border-ij-bg3">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-ij-comment">// quick start</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Installed in <span className="text-ij-keyword">30 seconds</span>
          </h2>
          <p className="text-ij-text mt-4 max-w-xl mx-auto">
            The universal installer detects your agents and installs skills automatically
          </p>
        </div>

        <div className="ij-panel overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-ij-bg3 border-b border-ij-bg3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-ij-error" />
              <div className="w-3 h-3 rounded-full bg-ij-yellow" />
              <div className="w-3 h-3 rounded-full bg-ij-green" />
              <span className="text-xs font-mono text-ij-comment ml-2">install.sh</span>
            </div>
            <button
              onClick={copy}
              className="flex items-center gap-1.5 text-xs text-ij-comment hover:text-ij-text transition-colors"
            >
              {copied ? <Check size={14} className="text-ij-green" /> : <Copy size={14} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="p-5 font-mono text-sm overflow-x-auto">
            <div className="text-ij-keyword">
              <span className="text-ij-comment">$ </span>
              git clone https://github.com/dpolishuk/xpowers.git
            </div>
            <div className="text-ij-keyword mt-1">
              <span className="text-ij-comment">$ </span>
              cd xpowers
            </div>
            <div className="text-ij-green mt-1">
              <span className="text-ij-comment">$ </span>
              ./scripts/install.sh
            </div>
            <div className="text-ij-comment mt-3">
              # install.sh automatically detects your agents and installs skills
            </div>
            <div className="text-ij-comment">
              # supported: Claude Code, OpenCode, Kimi CLI, Codex CLI, Gemini CLI, Pi
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          <div className="ij-panel p-4 text-center">
            <span className="font-mono text-2xl font-bold text-ij-yellow">6+</span>
            <p className="text-xs text-ij-text mt-1">platforms supported</p>
          </div>
          <div className="ij-panel p-4 text-center">
            <span className="font-mono text-2xl font-bold text-ij-green">12+</span>
            <p className="text-xs text-ij-text mt-1">skills included</p>
          </div>
          <div className="ij-panel p-4 text-center">
            <span className="font-mono text-2xl font-bold text-ij-number">4</span>
            <p className="text-xs text-ij-text mt-1">task manager backends</p>
          </div>
        </div>
      </div>
    </section>
  );
}
