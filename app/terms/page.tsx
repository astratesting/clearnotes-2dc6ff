import type { Metadata } from 'next';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Terms of Service — ClearNotes',
  description: 'ClearNotes terms of service. Plain language, no gotchas.',
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Container maxWidth="content">
          <article className="prose py-24 max-w-[720px] mx-auto">
            <h1>Terms of Service</h1>
            <p>
              <strong>Last updated:</strong> June 2026
            </p>
            <p>
              By using ClearNotes, you agree to these terms. We&apos;ve written
              them in plain language because nobody reads legalese.
            </p>

            <h2>The service</h2>
            <p>
              ClearNotes is a note-taking application that uses AI to organize
              your notes. During the beta period, the service is provided free of
              charge. We may introduce paid plans later; you&apos;ll always have
              a free tier.
            </p>

            <h2>Your content</h2>
            <ul>
              <li>You own your notes. Full stop.</li>
              <li>
                We do not claim any rights to your content.
              </li>
              <li>
                You can export your notes at any time in Markdown, plain text,
                or Notion format.
              </li>
              <li>
                We do not use your notes to train AI models.
              </li>
            </ul>

            <h2>Acceptable use</h2>
            <p>
              Don&apos;t use ClearNotes for anything illegal, harmful, or that
              infringes on others&apos; rights. We reserve the right to suspend
              accounts that violate this.
            </p>

            <h2>Availability</h2>
            <p>
              We aim for 99.9% uptime but don&apos;t guarantee it, especially
              during beta. We&apos;ll communicate planned downtime in advance.
            </p>

            <h2>Refunds</h2>
            <p>
              Paid plans come with a 14-day money-back guarantee. Email{' '}
              <a href="mailto:support@clearnotes.app">
                support@clearnotes.app
              </a>{' '}
              for a refund — no questions asked.
            </p>

            <h2>Liability</h2>
            <p>
              ClearNotes is provided &ldquo;as is.&rdquo; We are not liable for
              any loss of data, though we take backups seriously and will do our
              best to help you recover anything lost.
            </p>

            <h2>Changes to terms</h2>
            <p>
              We may update these terms. Material changes will be communicated by
              email and on this page. Continued use after changes means you
              accept the new terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Email{' '}
              <a href="mailto:legal@clearnotes.app">legal@clearnotes.app</a>.
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
