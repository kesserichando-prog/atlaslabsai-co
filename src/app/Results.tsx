"use client";

import { useState, useEffect } from "react";

function IconZap({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconClock({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconTrendingUp({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconActivity({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

const resultIcons = [IconZap, IconClock, IconTrendingUp, IconActivity];
const resultColors = ["text-blue-400", "text-orange-400", "text-emerald-400", "text-teal-400"];

export function Results() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const metrics = [
    { label: "Active Automations", value: 47, change: "+3 this week" },
    { label: "Hours Saved", value: mounted ? Math.floor(Date.now() / 100000) % 10000 : 2847, change: "+12%" },
    { label: "Revenue Unlocked", value: "$47,230", change: "+$8,400 this month" },
    { label: "Avg Response Time", value: "14 min", change: "from 4 hours" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {metrics.map((m, i) => {
        const Icon = resultIcons[i];
        return (
        <div
          key={i}
          className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-5 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 ${
            !mounted ? "opacity-0 translate-y-8" : `animate-in fade-in slide-in-from-bottom-${(i + 1) * 4} duration-700`
          }`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl ${resultColors[i]} ${
            i === 0 ? "bg-blue-500/20" :
            i === 1 ? "bg-orange-500/20" :
            i === 2 ? "bg-emerald-500/20" :
            "bg-teal-500/20"
          } mb-3 md:mb-4`}>
            <Icon className="w-5 h-5 md:w-6 md:h-6" />
          </div>

          {/* Label */}
          <p className="text-xs md:text-sm text-neutral-500 mb-1 md:mb-2">{m.label}</p>

          {/* Value */}
          <p className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
            {typeof m.value === 'number' ? (mounted ? m.value.toLocaleString() : '---') : m.value}
          </p>

          {/* Change */}
          <p className="text-[10px] md:text-xs text-emerald-400 mt-2 md:mt-3 flex items-center gap-1">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse flex-shrink-0" />
            {m.change}
          </p>
        </div>
        );
      })}
    </div>
  );
}