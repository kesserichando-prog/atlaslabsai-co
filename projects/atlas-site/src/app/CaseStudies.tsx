"use client";

import { useState, useEffect } from "react";

export function CaseStudies() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cases = [
    {
      title: "Cornerstone Dental Eliminated 23% No-Show Rate",
      client: "Cornerstone Dental",
      industry: "Healthcare",
      problem: "23% appointment no-show rate causing $3,200/month in lost revenue",
      solution: "Automated SMS reminder sequence with confirmation links",
      results: { noShows: "23% → 6%", revenue: "$3,200/mo" },
      time: "2 weeks",
      icon: "🦷",
    },
    {
      title: "Smith & Partners Law: 15 Hours/Week Saved",
      client: "Smith & Partners Law",
      industry: "Legal",
      problem: "Manual document intake taking 15+ hours per week",
      solution: "OCR + AI extraction pipeline with auto-filing",
      results: { timeSaved: "15 hrs/week", accuracy: "99.2%" },
      time: "3 weeks",
      icon: "⚖️",
    },
    {
      title: "Metro Real Estate: 94% Faster Lead Response",
      client: "Metro Real Estate Group",
      industry: "Real Estate",
      problem: "40% of leads waiting 24+ hours for response",
      solution: "Instant lead qualification + automated follow-up sequences",
      results: { responseTime: "4 hrs → 15 min", conversions: "+32%" },
      time: "1 week",
      icon: "🏠",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cases.map((c, i) => (
        <div
          key={i}
          className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-sm hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 ${
            !mounted ? "opacity-0 translate-y-8" : `animate-in fade-in slide-in-from-bottom-${(i + 1) * 4} duration-700`
          }`}
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {/* Industry Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
              i === 0 ? "bg-blue-500/20 text-blue-400" :
              i === 1 ? "bg-emerald-500/20 text-emerald-400" :
              "bg-orange-500/20 text-orange-400"
            } text-xl`}>
              {c.icon}
            </div>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              i === 0 ? "bg-blue-500/10 text-blue-400" :
              i === 1 ? "bg-emerald-500/10 text-emerald-400" :
              "bg-orange-500/10 text-orange-400"
            }`}>
              {c.industry}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-xl mb-3 text-neutral-100 group-hover:text-orange-400 transition-colors">
            {c.title}
          </h3>

          {/* Problem */}
          <p className="text-sm text-neutral-400 mb-6 leading-relaxed">{c.problem}</p>

          {/* Results */}
          <div className="space-y-3 mb-6">
            {Object.entries(c.results).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between py-2 border-b border-neutral-800/50 last:border-0">
                <span className="text-sm text-neutral-500 capitalize">{formatKey(key)}:</span>
                <span className="text-sm font-semibold text-emerald-400">{value}</span>
              </div>
            ))}
          </div>

          {/* Implementation Time */}
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <div className="w-1.5 h-1.5 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full" />
            {c.time} to implement
          </div>
        </div>
      ))}
    </div>
  );
}

function formatKey(key: string): string {
  const map: Record<string, string> = {
    noShows: "No-Show Rate",
    revenue: "Revenue Recovered",
    timeSaved: "Time Saved",
    accuracy: "Accuracy",
    responseTime: "Response Time",
    conversions: "Conversions",
  };
  return map[key] || key;
}