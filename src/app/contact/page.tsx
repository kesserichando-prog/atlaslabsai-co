import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Atlas Automation",
  description: "Ready to automate? Tell us about your business and we'll identify automation opportunities.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get Started</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Tell us about your business. Atlas will analyze your processes and identify automation opportunities.
        </p>
        
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-orange-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-400 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-orange-500"
                placeholder="you@company.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Company</label>
            <input 
              type="text" 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-orange-500"
              placeholder="Your company"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">What's your biggest pain point?</label>
            <textarea 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-zinc-100 focus:outline-none focus:border-orange-500 h-32"
              placeholder="Describe the manual processes slowing you down..."
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">What would you like to automate?</label>
            <div className="space-y-2">
              {["Lead generation & outreach", "Document processing", "Appointment scheduling", "Customer follow-ups", "Data entry & CRM updates"].map((item, i) => (
                <label key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                  <input type="checkbox" className="rounded bg-zinc-800 border-zinc-600" />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <button 
            type="submit"
            className="w-full bg-orange-500 text-zinc-950 py-3 rounded-lg font-medium hover:bg-orange-400 transition-colors"
          >
            Find My Automation Gap
          </button>
        </form>
      </div>
    </div>
  );
}