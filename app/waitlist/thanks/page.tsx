'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';
import { Twitter, Linkedin, Link2 } from 'lucide-react';
import { trackEvent, EVENTS } from '@/components/analytics/events';
import { useEffect } from 'react';

function ThanksContent() {
  const searchParams = useSearchParams();
  const position = searchParams.get('position');

  useEffect(() => {
    trackEvent(EVENTS.THANKS_PAGE_VIEW, { position: position || 'unknown' });
  }, [position]);

  const shareText = encodeURIComponent(
    'I just joined the waitlist for ClearNotes — notes that organize themselves. Check it out!'
  );
  const shareUrl = encodeURIComponent('https://clearnotes.app');

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://clearnotes.app');
  };

  return (
    <Container maxWidth="content">
      <div className="min-h-[60vh] flex items-center justify-center py-24">
        <div className="text-center max-w-lg">
          {/* Checkmark */}
          <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-6">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 16.5L13 21.5L24 10.5"
                stroke="var(--coral)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-3">
            You&apos;re on the list!
          </h1>

          {position && (
            <p className="text-lg text-ink-muted mb-8">
              You&apos;re <span className="font-semibold text-ink">#{Number(position).toLocaleString()}</span> in line.
            </p>
          )}

          {!position && (
            <p className="text-lg text-ink-muted mb-8">
              We&apos;ll send you an email when it&apos;s your turn.
            </p>
          )}

          <p className="text-sm text-ink-muted mb-6">
            Know someone drowning in notes? Share ClearNotes with them.
          </p>

          {/* Share buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-line text-sm font-medium text-ink hover:bg-violet-soft transition-colors"
            >
              <Twitter size={16} strokeWidth={1.75} />
              Share on X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-line text-sm font-medium text-ink hover:bg-violet-soft transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.75} />
              LinkedIn
            </a>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 h-10 px-4 rounded-xl border border-line text-sm font-medium text-ink hover:bg-violet-soft transition-colors"
            >
              <Link2 size={16} strokeWidth={1.75} />
              Copy link
            </button>
          </div>

          {/* Optional survey */}
          <div className="mt-12 pt-8 border-t border-line text-left max-w-sm mx-auto">
            <p className="text-sm font-medium text-ink mb-3">
              Quick question (optional):
            </p>
            <p className="text-sm text-ink-muted mb-4">
              What&apos;s your biggest note-taking pain right now?
            </p>
            <textarea
              className="w-full p-3 rounded-xl border border-line bg-white text-sm text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-violet resize-none"
              rows={3}
              placeholder="I can never find that one note from last week..."
            />
            <button className="mt-2 text-sm text-violet font-medium hover:underline">
              Submit answer
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default function ThanksPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Suspense
          fallback={
            <Container maxWidth="content">
              <div className="min-h-[60vh] flex items-center justify-center">
                <div className="honey-pulse" />
              </div>
            </Container>
          }
        >
          <ThanksContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
