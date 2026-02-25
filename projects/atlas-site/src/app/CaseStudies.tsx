export function CaseStudies() {
  const cases = [
    {
      title: "How Cornerstone Dental Eliminated 23% No-Show Rate",
      client: "Cornerstone Dental",
      industry: "Healthcare",
      problem: "23% appointment no-show rate causing $3,200/month in lost revenue",
      solution: "Automated SMS reminder sequence with confirmation links",
      results: { noShows: "23% → 6%", revenue: "$3,200/mo recovered" },
      time: "2 weeks to implement",
    },
    {
      title: "Smith & Partners Law: 15 Hours/Week Saved on Document Intake",
      client: "Smith & Partners Law",
      industry: "Legal",
      problem: "Manual document intake taking 15+ hours per week",
      solution: "OCR + AI extraction pipeline with auto-filing",
      results: { timeSaved: "15 hrs/week", accuracy: "99.2%" },
      time: "3 weeks to implement",
    },
    {
      title: "Metro Real Estate: Lead Response Time Cut by 94%",
      client: "Metro Real Estate Group",
      industry: "Real Estate",
      problem: "40% of leads waiting 24+ hours for response",
      solution: "Instant lead qualification + automated follow-up sequences",
      results: { responseTime: "4 hrs → 15 min", conversions: "+32%" },
      time: "1 week to implement",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full">
              {c.industry}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
          <p className="text-sm text-zinc-500 mb-4">{c.problem}</p>
          <div className="space-y-2 text-sm">
            {Object.entries(c.results).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-zinc-500 capitalize">{key}:</span>
                <span className="text-emerald-400 font-medium">{value}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-600 mt-4">{c.time}</p>
        </div>
      ))}
    </div>
  );
}