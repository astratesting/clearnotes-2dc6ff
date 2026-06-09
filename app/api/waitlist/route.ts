import { NextRequest, NextResponse } from 'next/server';
import { isValidEmail, normalizeEmail } from '@/lib/email';
import { upsertWaitlistEntry } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    let email: string;
    let source: string;
    let planInterest: string | null;

    const contentType = request.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const body = await request.json();
      email = body.email;
      source = body.source || 'homepage';
      planInterest = body.plan_interest || null;
    } else {
      // Form POST fallback
      const formData = await request.formData();
      email = formData.get('email') as string;
      source = (formData.get('source') as string) || 'homepage';
      planInterest = (formData.get('plan_interest') as string) || null;

      // Honeypot check
      const honeypot = formData.get('website') as string;
      if (honeypot) {
        // Silently reject bot submissions
        return NextResponse.redirect(new URL('/waitlist/thanks', request.url), 303);
      }
    }

    // Validate
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const normalized = normalizeEmail(email);

    // Validate source
    const validSources = ['homepage', 'pricing-card', 'final-cta', 'changelog'];
    if (!validSources.includes(source)) {
      source = 'homepage';
    }

    // Validate plan
    const validPlans = ['free', 'personal', 'pro'];
    if (planInterest && !validPlans.includes(planInterest)) {
      planInterest = null;
    }

    const result = await upsertWaitlistEntry({
      email: normalized,
      source,
      plan_interest: planInterest,
    });

    // Get referrer from URL if present
    const url = new URL(request.url);
    const referrerCode = url.searchParams.get('ref');

    if (referrerCode && !result.isDuplicate) {
      // Store referrer code with entry (already handled in upsert if applicable)
    }

    if (result.isDuplicate) {
      return NextResponse.json(
        { position: result.position, message: 'Already on the list.' },
        { status: 409 }
      );
    }

    // For form POST fallback, redirect
    const accept = request.headers.get('accept') || '';
    if (!accept.includes('application/json')) {
      return NextResponse.redirect(
        new URL(`/waitlist/thanks?position=${result.position}`, request.url),
        303
      );
    }

    return NextResponse.json({ position: result.position });
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
