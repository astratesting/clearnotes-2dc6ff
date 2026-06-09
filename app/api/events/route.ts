import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { session_id, event_name, properties } = body;

    // Log event (in production, this would go to a database)
    console.log('[Analytics]', {
      session_id,
      event_name,
      properties,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // Silently succeed
  }
}
