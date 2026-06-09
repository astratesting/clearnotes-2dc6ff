'use client';

import { useState, useEffect } from 'react';
import Wordmark from './Wordmark';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';
import { trackEvent, EVENTS } from '@/components/analytics/events';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ['features', 'how', 'pricing', 'faq'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-sm border-b border-line shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-nav mx-auto w-full px-6 md:px-8 flex items-center justify-between h-16">
          <Wordmark />

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href
                      ? 'text-violet bg-violet-soft'
                      : 'text-ink-muted hover:text-ink hover:bg-violet-soft/50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#waitlist"
              className="hidden lg:inline-flex items-center h-10 px-5 bg-violet text-white text-sm font-heading font-semibold rounded-xl hover:bg-[#6D28D9] transition-colors"
              onClick={() => trackEvent(EVENTS.HERO_CTA_CLICK, { source: 'nav' })}
            >
              Join waitlist
            </a>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-violet-soft"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={24} strokeWidth={2} className="text-ink" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
