'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { demoScripts, type DemoScript } from './demoScripts';
import { trackEvent, EVENTS } from '@/components/analytics/events';

type Phase = 'idle' | 'typing' | 'thinking' | 'organizing' | 'done';

export default function InteractiveDemo() {
  const [currentScript, setCurrentScript] = useState(0);
  const [phase, setPhase] = useState<Phase>('idle');
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAutoPlayed = useRef(false);

  const script = demoScripts[currentScript];

  const startDemo = useCallback((scriptIndex?: number) => {
    if (scriptIndex !== undefined) {
      setCurrentScript(scriptIndex);
    }
    setPhase('typing');
    setTypedText('');
    setCharIndex(0);
    trackEvent(EVENTS.DEMO_PLAY);
  }, []);

  // Auto-play on scroll into view
  useEffect(() => {
    if (hasAutoPlayed.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAutoPlayed.current) {
          hasAutoPlayed.current = true;
          // Slight delay for mobile battery saving
          const delay = window.innerWidth < 768 ? 500 : 100;
          setTimeout(() => startDemo(), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [startDemo]);

  // Typing effect
  useEffect(() => {
    if (phase !== 'typing') return;

    const currentInput = demoScripts[currentScript].input;
    if (charIndex >= currentInput.length) {
      setPhase('thinking');
      return;
    }

    const timer = setTimeout(() => {
      setTypedText(currentInput.slice(0, charIndex + 1));
      setCharIndex((c) => c + 1);
    }, 20 + Math.random() * 30);

    return () => clearTimeout(timer);
  }, [phase, charIndex, currentScript]);

  // Thinking -> Organizing -> Done
  useEffect(() => {
    if (phase === 'thinking') {
      const timer = setTimeout(() => setPhase('organizing'), 1200);
      return () => clearTimeout(timer);
    }
    if (phase === 'organizing') {
      const timer = setTimeout(() => setPhase('done'), 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleTryAgain = () => {
    const next = (currentScript + 1) % demoScripts.length;
    trackEvent(EVENTS.DEMO_TRY_AGAIN, { script: String(next) });
    startDemo(next);
  };

  const colorMap: Record<string, string> = {
    violet: 'bg-violet',
    coral: 'bg-coral',
    honey: 'bg-honey',
  };

  const tagBgMap: Record<string, string> = {
    violet: 'bg-violet-soft text-violet',
    coral: 'bg-coral-soft text-coral',
    honey: 'bg-honey/20 text-ink',
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-line shadow-card overflow-hidden bg-white">
        {/* Left pane — Input */}
        <div className="p-5 md:p-6 border-b md:border-b-0 md:border-r border-line bg-cream/30">
          <div className="text-xs font-medium text-ink-muted mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ink-muted/40" />
            Your messy notes
          </div>
          <div className="min-h-[200px] font-mono text-sm text-ink leading-relaxed">
            {phase === 'idle' && (
              <p className="text-ink-muted/40 italic">
                Click &quot;Try it&quot; to see ClearNotes organize messy notes&hellip;
              </p>
            )}
            {typedText && (
              <p>
                {typedText}
                {phase === 'typing' && (
                  <span className="inline-block w-0.5 h-4 bg-violet ml-0.5 animate-pulse" />
                )}
              </p>
            )}
            {phase === 'thinking' && (
              <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
                <span className="honey-pulse" />
                ClearNotes is organizing&hellip;
              </div>
            )}
            {(phase === 'organizing' || phase === 'done') && typedText && (
              <p className="text-ink-muted/40 text-xs mt-3">
                {typedText}
              </p>
            )}
          </div>
        </div>

        {/* Right pane — Output */}
        <div className="p-5 md:p-6 bg-white">
          <div className="text-xs font-medium text-ink-muted mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet" />
            Organized output
          </div>

          {(phase === 'idle' || phase === 'typing' || phase === 'thinking') && (
            <div className="min-h-[200px] flex items-center justify-center">
              <p className="text-sm text-ink-muted/40 italic">
                Waiting for notes&hellip;
              </p>
            </div>
          )}

          {(phase === 'organizing' || phase === 'done') && (
            <div className="space-y-3 min-h-[200px]">
              {script.topics.map((topic, i) => (
                <div
                  key={`${currentScript}-${i}`}
                  className={`rounded-xl border border-line p-3 bg-cream/30 transition-all duration-500 ${
                    phase === 'organizing'
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div
                    className={`text-xs font-medium mb-2 flex items-center gap-1.5 ${
                      topic.color === 'violet'
                        ? 'text-violet'
                        : topic.color === 'coral'
                        ? 'text-coral'
                        : 'text-ink'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${colorMap[topic.color]}`}
                    />
                    {topic.label}
                  </div>
                  <div className="space-y-1.5 pl-3.5 border-l-2 border-line">
                    {topic.subtopics.map((sub, j) => (
                      <div key={j}>
                        <div className="text-xs text-ink-muted font-medium">
                          {sub.name}
                        </div>
                        <p className="text-sm text-ink font-mono leading-relaxed">
                          {sub.note}
                        </p>
                      </div>
                    ))}
                  </div>
                  {topic.tags && topic.tags.length > 0 && (
                    <div className="flex gap-1.5 mt-2">
                      {topic.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            tagBgMap[topic.color]
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {phase === 'done' && (
                <div className="text-center pt-2">
                  <button
                    onClick={handleTryAgain}
                    className="text-sm text-violet font-medium hover:underline underline-offset-4"
                  >
                    Try it again with different notes
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-xs text-ink-muted/50 mt-4">
        Demo simulated. Real product uses your notes locally + on-device embeddings.
      </p>
    </div>
  );
}
