'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent, EVENTS } from '@/components/analytics/events';

interface WaitlistFormProps {
  source?: string;
  planInterest?: string;
  variant?: 'inline' | 'full';
}

export default function WaitlistForm({
  source = 'homepage',
  planInterest,
  variant = 'inline',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const [error, setError] = useState('');
  const [position, setPosition] = useState(0);

  const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleBlur = () => {
    if (email && !validateEmail(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setError('');
    trackEvent(EVENTS.FORM_SUBMIT, { source, plan: planInterest || 'none' });

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source,
          plan_interest: planInterest || null,
        }),
      });

      const data = await res.json();

      if (!res.ok && res.status !== 409) {
        throw new Error(data.error || 'Something went wrong');
      }

      setPosition(data.position || 0);
      setStatus(res.status === 409 ? 'duplicate' : 'success');
      setEmail('');
    } catch {
      setStatus('error');
      setError('Something went wrong — try again.');
    }
  };

  if (status === 'success' || status === 'duplicate') {
    return (
      <div className="text-center py-4">
        <div className="text-2xl mb-2">&#10024;</div>
        <p className="font-heading font-semibold text-lg text-ink mb-1">
          {status === 'duplicate' ? "You're already on the list — see you soon." : "You're on the list!"}
        </p>
        {position > 0 && (
          <p className="text-sm text-ink-muted">
            You&apos;re #{position.toLocaleString()} in line.
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="/api/waitlist"
      method="POST"
      className={
        variant === 'inline'
          ? 'flex flex-col sm:flex-row gap-3 items-stretch sm:items-center'
          : 'space-y-3'
      }
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only absolute left-[-9999px]"
        onChange={(e) => {
          // If this field gets filled, it's a bot — silently block
          if (e.target.value) setStatus('success');
        }}
      />

      {/* Hidden fields for fallback POST */}
      <input type="hidden" name="source" value={source} />
      {planInterest && <input type="hidden" name="plan_interest" value={planInterest} />}

      <div className={variant === 'inline' ? 'flex-1' : ''}>
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={!!error}
          aria-describedby={error ? 'email-error' : undefined}
          className={`w-full h-12 px-4 rounded-xl border bg-white text-ink placeholder-ink-muted/50 focus:outline-none focus:ring-2 focus:ring-violet focus:border-transparent transition ${
            error ? 'border-danger' : 'border-line'
          }`}
        />
        {error && (
          <p id="email-error" className="text-sm text-danger mt-1" role="alert">
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`h-12 px-6 rounded-xl bg-violet text-white font-heading font-semibold hover:bg-[#6D28D9] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
          variant === 'inline' ? 'shrink-0' : 'w-full'
        }`}
      >
        {status === 'loading' ? (
          <>
            <span className="honey-pulse !w-3 !h-3" />
            Adding you&hellip;
          </>
        ) : (
          'Join the waitlist'
        )}
      </button>
    </form>
  );
}
