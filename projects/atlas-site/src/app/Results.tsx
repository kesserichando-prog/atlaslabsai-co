"use client";

import { useState, useEffect } from "react";

export function Results() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const metrics = [
    { label: "Active Automations", value: 47, change: "+3 this week", icon: "⚙️" },
    { label: "Hours Saved", value: mounted ? Math.floor(Date.now() / 100000) % 10000 : 2847, change: "+12%", icon: "⏱️" },
    { label: "Revenue Unlocked", value: "$47,230", change: "+$8,400 this month", icon: "💰" },
    { label: "Avg Response Time", value: "14 min", change: "↓ from 4 hours", icon: "🚀" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((m, i) => (
        <div
          key={i}
          className={`group relative bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-sm hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 ${
            !mounted ? "opacity-0 translate-y-8" : `animate-in fade-in slide-in-from-bottom-${(i + 1) * 4} duration-700`
          }`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
            i === 0 ? "bg-blue-500/20 text-blue-400" :
            i === 1 ? "bg-orange-500/20 text-orange-400" :
            i === 2 ? "bg-emerald-500/20 text-emerald-400" :
            "bg-teal-500/20 text-teal-400"
          } text-2xl mb-4`}>
            {m.icon}
          </div>

          {/* Label */}
          <p className="text-sm text-neutral-500 mb-2">{m.label}</p>

          {/* Value */}
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
            {typeof m.value === 'number' ? (mounted ? m.value.toLocaleString() : '---') : m.value}
          </p>

          {/* Change */}
          <p className="text-xs text-emerald-400 mt-3 flex items-center gap-1">
            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
            {m.change}
          </p>
        </div>
      ))}
    </div>
  );
}