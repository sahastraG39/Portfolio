'use client';

import { useState } from 'react';

export function ContactSection() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });
      const data = await res.json();
      if (res.ok) setStatus('Message sent successfully (simulated).');
      else setStatus(data.error || 'Something went wrong.');
    } catch (e) {
      setStatus('Network error.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
      <form
        className="mt-6 grid gap-4 max-w-xl"
        action={async (formData) => onSubmit(formData)}
      >
        <input
          className="w-full rounded-md border px-3 py-2 bg-transparent"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="w-full rounded-md border px-3 py-2 bg-transparent"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
        <textarea
          className="w-full rounded-md border px-3 py-2 bg-transparent"
          name="message"
          placeholder="Your message"
          rows={5}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md border bg-primary text-white px-4 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>
    </section>
  );
}


