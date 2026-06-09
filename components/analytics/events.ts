export const EVENTS = {
  HERO_CTA_CLICK: 'hero_cta_click',
  DEMO_PLAY: 'demo_play',
  DEMO_TRY_AGAIN: 'demo_try_again',
  PRICING_CARD_CLICK: 'pricing_card_click',
  FAQ_OPEN: 'faq_open',
  FORM_SUBMIT: 'form_submit',
  THANKS_PAGE_VIEW: 'thanks_page_view',
} as const;

export type EventName = (typeof EVENTS)[keyof typeof EVENTS];

function getSessionId(): string {
  if (typeof document === 'undefined') return '';
  const cookie = document.cookie
    .split('; ')
    .find((c) => c.startsWith('sid='));
  if (cookie) return cookie.split('=')[1];

  const id = Math.random().toString(36).substring(2, 15);
  document.cookie = `sid=${id}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  return id;
}

export async function trackEvent(
  eventName: EventName,
  properties?: Record<string, string | number | boolean>
): Promise<void> {
  if (typeof window === 'undefined') return;

  try {
    await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: getSessionId(),
        event_name: eventName,
        properties: properties || {},
      }),
      keepalive: true,
    });
  } catch {
    // Silently fail — analytics should never block the user
  }
}
