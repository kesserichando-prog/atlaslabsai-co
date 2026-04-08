"use client";

import { useState, useEffect } from "react";

function IconHeart({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function IconScale({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3h5v5" /><path d="M8 3H3v5" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <path d="M21 3l-9 9" /><path d="M3 3l9 9" />
    </svg>
  );
}

function IconBuilding({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" />
      <line x1="9" y1="9" x2="9" y2="9.01" /><line x1="9" y1="13" x2="9" y2="13.01" /><line x1="9" y1="17" x2="9" y2="17.01" />
    </svg>
  );
}

const caseIcons = [IconHeart, IconScale, IconBuilding];

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
    },
    {
      title: "Smith & Partners Law: 15 Hours/Week Saved",
      client: "Smith & Partners Law",
      industry: "Legal",
      problem: "Manual document intake taking 15+ hours per week",
      solution: "OCR + AI extraction pipeline with auto-filing",
      results: { timeSaved: "15 hrs/week", accuracy: "99.2%" },
      time: "3 weeks",
    },
    {
      title: "Metro Real Estate: 94% Faster Lead Response",
      client: "Metro Real Estate Group",
      industry: "Real Estate",
      problem: "40% of leads waiting 24+ hours for response",
      solution: "Instant lead qualification + automated follow-up sequences",
      results: { responseTime: "4 hrs → 15 min", conversions: "+32%" },
      time: "1 week",
    },
  ];

  const iconColors = ["text-blue-400", "text-emerald-400", "text-orange-400"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {cases.map((c, i) => {
        const Icon = caseIcons[i];
        return (
        <div
          key={i}
          className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 ${
            !mounted ? "opacity-0 translate-y-8" : `animate-in fade-in slide-in-from-bottom-${(i + 1) * 4} duration-700`
          }`}
          style={{ animationDelay: `${i * 150}ms` }}
        >
          {/* Industry Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${iconColors[i]} ${
              i === 0 ? "bg-blue-500/20" :
              i === 1 ? "bg-emerald-500/20" :
              "bg-orange-500/20"
            }`}>
              <Icon className="w-5 h-5" />
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
        );
      })}
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