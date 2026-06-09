import type { Metadata } from 'next';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Changelog — ClearNotes',
  description: 'What\'s new in ClearNotes. Every update, documented.',
};

export default function ChangelogPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Container maxWidth="content">
          <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-violet-soft flex items-center justify-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  stroke="var(--violet)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="font-heading font-bold text-2xl text-ink mb-3">
              Changelog coming soon.
            </h1>
            <p className="text-ink-muted max-w-md mb-8">
              We&apos;ll document every update here — from small fixes to major features.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center h-11 px-6 rounded-xl bg-violet text-white font-heading font-semibold hover:bg-[#6D28D9] transition-colors text-sm"
            >
              Subscribe to updates
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
