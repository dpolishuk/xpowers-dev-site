import { useState, useEffect } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ij-bg/95 backdrop-blur-md border-b border-ij-bg3' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xl font-semibold text-ij-function">xpowers</span>
            <span className="font-mono text-sm text-ij-comment">.dev</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('features')} className="text-sm text-ij-text hover:text-ij-function transition-colors">
              <span className="font-mono text-ij-comment mr-1">//</span>Features
            </button>
            <button onClick={() => scrollTo('legacy')} className="text-sm text-ij-text hover:text-ij-function transition-colors">
              <span className="font-mono text-ij-comment mr-1">//</span>Legacy
            </button>
            <button onClick={() => scrollTo('platforms')} className="text-sm text-ij-text hover:text-ij-function transition-colors">
              <span className="font-mono text-ij-comment mr-1">//</span>Platforms
            </button>
            <button onClick={() => scrollTo('install')} className="text-sm text-ij-text hover:text-ij-function transition-colors">
              <span className="font-mono text-ij-comment mr-1">//</span>Install
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/dpolishuk/xpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ij-comment hover:text-ij-text transition-colors"
            >
              <Github size={16} />
              <span className="hidden sm:inline">dpolishuk/xpowers</span>
            </a>
            <a
              href="https://github.com/dpolishuk/xpowers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-ij-bg bg-ij-function rounded-md hover:bg-ij-yellow transition-colors"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
