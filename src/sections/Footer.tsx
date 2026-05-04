import { Github, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ij-bg3 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-lg font-semibold text-ij-function">xpowers</span>
              <span className="font-mono text-sm text-ij-comment">.dev</span>
            </div>
            <p className="text-sm text-ij-text leading-relaxed">
              Evolution of superpowers. Agent development framework built on Xtreme Programming.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-ij-textBright mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <a href="https://github.com/dpolishuk/xpowers" target="_blank" rel="noopener noreferrer" className="text-sm text-ij-text hover:text-ij-function transition-colors flex items-center gap-2">
                <Github size={14} />
                dpolishuk/xpowers
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ij-bg3 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ij-comment font-mono">
            /* MIT License */
          </p>
          <p className="text-xs text-ij-comment flex items-center gap-1">
            Built with <Heart size={12} className="text-ij-error" /> for agent-driven development
          </p>
        </div>
      </div>
    </footer>
  );
}
