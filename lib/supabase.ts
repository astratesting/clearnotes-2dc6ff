import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// In-memory fallback for when Supabase is not configured
const waitlistStore: Map<string, { email: string; source: string; plan_interest: string | null; created_at: string }> = new Map();

function getSupabase() {
  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey);
}

export interface WaitlistEntry {
  id?: string;
  email: string;
  source: string;
  plan_interest: string | null;
  referrer_code?: string | null;
  created_at?: string;
}

export async function upsertWaitlistEntry(
  entry: WaitlistEntry
): Promise<{ position: number; isDuplicate: boolean }> {
  const email = entry.email.toLowerCase().trim();
  const supabase = getSupabase();

  if (supabase) {
    // Upsert into Supabase
    const { data, error } = await supabase
      .from('waitlist')
      .upsert(
        {
          email,
          source: entry.source || 'homepage',
          plan_interest: entry.plan_interest,
          referrer_code: entry.referrer_code,
        },
        { onConflict: 'email', ignoreDuplicates: false }
      )
      .select('created_at');

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    // Get position
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .lte('created_at', data?.[0]?.created_at || new Date().toISOString());

    return {
      position: count || 1,
      isDuplicate: false,
    };
  }

  // In-memory fallback
  const existing = waitlistStore.get(email);
  if (existing) {
    const entries = Array.from(waitlistStore.values()).sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    const position = entries.findIndex((e) => e.email === email) + 1;
    return { position, isDuplicate: true };
  }

  const now = new Date().toISOString();
  waitlistStore.set(email, {
    email,
    source: entry.source || 'homepage',
    plan_interest: entry.plan_interest,
    created_at: now,
  });

  const entries = Array.from(waitlistStore.values()).sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  const position = entries.findIndex((e) => e.email === email) + 1;

  return { position, isDuplicate: false };
}

export async function getWaitlistCount(): Promise<number> {
  const supabase = getSupabase();

  if (supabase) {
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });
    return count || 0;
  }

  return waitlistStore.size;
}
