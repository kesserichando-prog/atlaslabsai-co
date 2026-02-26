/**
 * Contact Form Component
 * Uses useForm custom hook for proper state management
 * Following react-patterns skill
 */

'use client';

import { useForm } from '@/hooks';

function ContactForm() {
  const { values, handleChange, handleSubmit, isSubmitting, error } = useForm(
    {
      name: '',
      email: '',
      message: '',
    },
    async (formData) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      return data;
    }
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 flex items-center gap-2">
          <span>✗</span>
          <span>{error}</span>
        </div>
      )}

      {/* Success message is handled by parent component via useForm's reset */}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
          placeholder="John Doe"
          disabled={isSubmitting}
          aria-required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200"
          placeholder="you@company.com"
          disabled={isSubmitting}
          aria-required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
          What's slowing you down?
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="w-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl px-5 py-4 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-200 h-32 resize-none"
          placeholder="Describe the manual processes slowing you down..."
          disabled={isSubmitting}
          aria-required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none"
      >
        {isSubmitting ? 'Sending...' : 'Find My Automation Gaps'}
      </button>
    </form>
  );
}

export default ContactForm;