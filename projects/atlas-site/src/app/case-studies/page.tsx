import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Atlas Automation",
  description: "Real results from real automation. See how we've helped businesses save time and unlock revenue.",
};

export default function CaseStudiesPage() {
  const cases = [
    {
      slug: "cornerstone-dental-no-show-reduction",
      title: "How Cornerstone Dental Eliminated 23% No-Show Rate",
      client: "Cornerstone Dental",
      industry: "Healthcare",
      problem: "23% appointment no-show rate causing significant revenue loss and scheduling inefficiencies",
      solution: "Implemented automated SMS reminder sequence with 2-day, 1-day, and 2-hour reminders. Added easy confirmation/reschedule links.",
      results: {
        noShowRate: "23% → 6%",
        monthlyRevenueRecovered: "$3,200",
        patientSatisfaction: "+15%",
      },
      timeSaved: "12 hrs/month",
      revenueImpact: "$3,200/mo recovered",
    },
    // More case studies...
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-zinc-400 mb-12">
          Real results from real automation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <article key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full">
                {c.industry}
              </span>
              <h2 className="text-xl font-semibold mt-4 mb-2">{c.title}</h2>
              <p className="text-zinc-400 mb-4">{c.problem}</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-zinc-500">Time Saved</span>
                  <p className="text-emerald-400 font-medium">{c.timeSaved}</p>
                </div>
                <div>
                  <span className="text-zinc-500">Revenue Impact</span>
                  <p className="text-blue-400 font-medium">{c.revenueImpact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}