import Link from 'next/link';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Container maxWidth="content">
          <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 text-center">
            <div className="font-heading font-bold text-6xl text-violet/20 mb-4">
              404
            </div>
            <h1 className="font-heading font-bold text-2xl text-ink mb-3">
              Page not found
            </h1>
            <p className="text-ink-muted mb-8 max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
              href="/"
              className="inline-flex items-center h-11 px-6 rounded-xl bg-violet text-white font-heading font-semibold hover:bg-[#6D28D9] transition-colors"
            >
              Back to home
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
