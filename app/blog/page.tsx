import type { Metadata } from 'next';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Blog — ClearNotes',
  description: 'Thoughts on note-taking, knowledge management, and building ClearNotes.',
};

export default function BlogPage() {
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
                  d="M12 20H5a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2"
                  stroke="var(--violet)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="font-heading font-bold text-2xl text-ink mb-3">
              We&apos;re writing — check back soon.
            </h1>
            <p className="text-ink-muted max-w-md mb-8">
              We&apos;ll share thoughts on note-taking, knowledge management, and what we&apos;re learning as we build ClearNotes.
            </p>
            <a
              href="#waitlist"
              className="inline-flex items-center h-11 px-6 rounded-xl bg-violet text-white font-heading font-semibold hover:bg-[#6D28D9] transition-colors text-sm"
            >
              Get notified when we publish
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
