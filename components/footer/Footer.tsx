import Container from '@/components/ui/Container';
import OrbitMark from '@/components/orbit/OrbitMark';
import { Twitter, Github, Linkedin } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Roadmap', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: 'mailto:hello@clearnotes.app' },
  ],
  Resources: [
    { label: 'Help center', href: '#' },
    { label: 'Import guides', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-line py-16 md:py-20">
      <Container maxWidth="nav">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-semibold text-sm text-ink mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-muted hover:text-violet transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <OrbitMark size={22} />
            <span className="text-sm text-ink-muted">
              &copy; 2026 ClearNotes
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-violet transition-colors"
              aria-label="Follow us on X"
            >
              <Twitter size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-violet transition-colors"
              aria-label="View on GitHub"
            >
              <Github size={18} strokeWidth={1.75} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-violet transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-ink-muted/60 mt-6">
          Made by people who had 14,000 unsorted notes.
        </p>
      </Container>
    </footer>
  );
}
