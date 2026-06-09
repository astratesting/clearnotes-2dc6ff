import type { Metadata } from 'next';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy — ClearNotes',
  description: 'How ClearNotes handles your data. Short version: we respect it.',
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Container maxWidth="content">
          <article className="prose py-24 max-w-[720px] mx-auto">
            <h1>Privacy Policy</h1>
            <p>
              <strong>Last updated:</strong> June 2026
            </p>
            <p>
              ClearNotes is built by people who take privacy seriously. This
              policy explains what we collect, why, and how we protect it.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Email address</strong> — when you join the waitlist.
                Used only to send you product updates.
              </li>
              <li>
                <strong>Analytics events</strong> — anonymous, aggregated usage
                data (page views, button clicks). No personal data. No
                third-party trackers unless you explicitly opt in.
              </li>
            </ul>

            <h2>What we do NOT collect</h2>
            <ul>
              <li>We do not collect your notes for training AI models.</li>
              <li>
                We do not sell, rent, or share your personal data with third
                parties.
              </li>
              <li>We do not use invasive tracking pixels or fingerprinting.</li>
            </ul>

            <h2>Your notes</h2>
            <p>
              When the product launches, your notes will be encrypted at rest and
              in transit. Embeddings (the mathematical representations used to
              organize your notes) are generated on-device where possible. We
              never train models on your notes.
            </p>

            <h2>Data storage</h2>
            <p>
              Waitlist data is stored securely in Supabase (PostgreSQL) hosted in
              the EU. We use industry-standard encryption and access controls.
            </p>

            <h2>Your rights</h2>
            <ul>
              <li>
                <strong>Access:</strong> You can ask what data we hold about you.
              </li>
              <li>
                <strong>Delete:</strong> Email{' '}
                <a href="mailto:privacy@clearnotes.app">
                  privacy@clearnotes.app
                </a>{' '}
                and we&apos;ll delete your data within 30 days.
              </li>
              <li>
                <strong>Export:</strong> We&apos;ll provide your data in a
                portable format on request.
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use a single, first-party, anonymous session cookie for basic
              analytics. No third-party cookies. No advertising cookies.
            </p>

            <h2>Changes</h2>
            <p>
              If we update this policy, we&apos;ll post the changes here and
              email waitlist members if the changes are material.
            </p>

            <h2>Contact</h2>
            <p>
              Questions? Email{' '}
              <a href="mailto:privacy@clearnotes.app">
                privacy@clearnotes.app
              </a>
              .
            </p>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
