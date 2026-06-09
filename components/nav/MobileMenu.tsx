'use client';

import { useEffect, useCallback } from 'react';
import Wordmark from './Wordmark';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-cream shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6">
          <Wordmark />
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-violet-soft"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2} className="text-ink" />
          </button>
        </div>

        <nav className="flex-1 px-6 pt-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 px-4 text-lg font-medium text-ink hover:bg-violet-soft rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6">
          <a
            href="#waitlist"
            onClick={onClose}
            className="block w-full text-center py-3 px-6 bg-violet text-white font-heading font-semibold rounded-xl hover:bg-[#6D28D9] transition-colors"
          >
            Join the waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
