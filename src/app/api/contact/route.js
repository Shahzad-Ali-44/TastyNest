const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export async function POST(request) {
  try {
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return Response.json({ ok: false, error: 'Missing WEB3FORMS_ACCESS_KEY.' }, { status: 500 });
    }

    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const subject = typeof body?.subject === 'string' ? body.subject.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !subject || !message) {
      return Response.json({ ok: false, error: 'All fields are required.' }, { status: 400 });
    }

    const upstream = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `TastyNest - ${subject}`,
        message: `${message}\n\n---\nThis email was sent via TastyNest contact form.`,
      }),
    });

    const data = await upstream.json().catch(() => null);

    if (!upstream.ok || !data?.success) {
      return Response.json({ ok: false, error: 'Failed to send message. Please try again.' }, { status: 502 });
    }

    return Response.json({ ok: true }, { status: 200 });
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}

