import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const TYPING_LINES = [
  { text: 'git clone https://github.com/dpolishuk/xpowers', color: 'text-ij-keyword' },
  { text: 'cd xpowers && ./scripts/install.sh', color: 'text-ij-string' },
  { text: '# Installation complete. Activating superpowers...', color: 'text-ij-comment' },
];

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (lineIndex >= TYPING_LINES.length) {
      setDone(true);
      return;
    }
    const line = TYPING_LINES[lineIndex].text;
    if (charIndex < line.length) {
      const timer = setTimeout(() => setCharIndex(c => c + 1), 35);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLineIndex(l => l + 1);
        setCharIndex(0);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [charIndex, lineIndex, done]);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(s => !s), 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(#A9B7C6 1px, transparent 1px), linear-gradient(90deg, #A9B7C6 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative z-10 max-w-4xl w-full text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="font-mono text-ij-function">xpowers</span>
          <span className="font-mono text-ij-comment">.dev</span>
        </h1>

        <p className="text-lg sm:text-xl text-ij-text max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Agent development framework built on{' '}
          <span className="text-ij-keyword font-medium">Xtreme Programming</span>.{' '}
          TDD, tm-first, Ralph mode, multi-agent review.
        </p>

        {/* Terminal */}
        <div className="ij-panel overflow-hidden text-left animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-2 px-4 py-2 bg-ij-bg3 border-b border-ij-bg3">
            <div className="w-3 h-3 rounded-full bg-ij-error" />
            <div className="w-3 h-3 rounded-full bg-ij-function" />
            <div className="w-3 h-3 rounded-full bg-ij-green" />
            <span className="text-xs font-mono text-ij-comment ml-2">user@dev:~/project</span>
          </div>
          <div className="p-4 font-mono text-sm min-h-[120px]">
            {TYPING_LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className={line.color}>
                <span className="text-ij-comment mr-2">$</span>
                {line.text}
              </div>
            ))}
            {lineIndex < TYPING_LINES.length && (
              <div className={TYPING_LINES[lineIndex].color}>
                <span className="text-ij-comment mr-2">$</span>
                {TYPING_LINES[lineIndex].text.slice(0, charIndex)}
                <span className={`inline-block w-2 h-4 ml-0.5 align-middle bg-ij-function ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            )}
            {done && (
              <div className="mt-2 text-ij-string">
                <span className="text-ij-comment mr-2">$</span>
                <span className="text-ij-keyword">xpowers</span>{' '}
                <span className="text-ij-function">activate</span>
                <span className="inline-block w-2 h-4 ml-0.5 align-middle bg-ij-function animate-cursor-blink" />
              </div>
            )}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#install"
            onClick={(e) => { e.preventDefault(); document.getElementById('install')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-6 py-3 text-sm font-semibold text-ij-bg bg-ij-function rounded-lg hover:bg-ij-yellow transition-colors shadow-glow"
          >
            Quick Start
          </a>
          <a
            href="https://github.com/dpolishuk/xpowers"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-sm font-medium text-ij-text border border-ij-bg3 rounded-lg hover:border-ij-function hover:text-ij-function transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ij-comment hover:text-ij-text transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}

