/**
 * /api/consultation/route.ts
 * Server-side handler for consultation form submissions.
 *
 * TODO: Wire up a real delivery mechanism:
 *   - Option A: Formspree  → fetch('https://formspree.io/f/YOUR_ENDPOINT', { method: 'POST', body })
 *   - Option B: Resend     → import { Resend } from 'resend'; new Resend(process.env.RESEND_API_KEY)
 *   - Option C: CRM        → POST to your CRM's inbound webhook
 *   - Option D: Nodemailer → process.env.SMTP_* vars + nodemailer transport
 *
 * For all options, store secrets in .env.local (never commit them).
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateConsultationForm, type ConsultationFormData } from '@/lib/validation';

export async function POST(req: NextRequest) {
    let body: Partial<ConsultationFormData>;

    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
    }

    // Server-side validation (mirrors client-side)
    const { ok, errors } = validateConsultationForm(body);
    if (!ok) {
        return NextResponse.json({ ok: false, errors }, { status: 422 });
    }

    // ── TODO: Deliver the lead ─────────────────────────────────────────────────
    // Replace this block with your chosen delivery mechanism (see header TODOs).
    console.log('[consultation] New lead received:', {
        name: body.full_name,
        email: body.email,
        phone: body.phone,
        best_time: body.best_time,
        interest: body.interest,
    });
    // ───────────────────────────────────────────────────────────────────────────

    return NextResponse.json({ ok: true });
}
