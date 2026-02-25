"use client";

import { useState, useEffect } from "react";

export function Results() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const metrics = [
    { label: "Active Automations", value: 47, change: "+3 this week" },
    { label: "Hours Saved This Month", value: mounted ? Math.floor(Date.now() / 100000) % 10000 : 2847, change: "+12%" },
    { label: "Revenue Unlocked", value: "$47,230", change: "+$8,400 this month" },
    { label: "Avg Response Time", value: "14 min", change: "↓ from 4 hours" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {metrics.map((m, i) => (
        <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-sm text-zinc-500 mb-1">{m.label}</p>
          <p className="text-3xl font-bold text-zinc-100">{typeof m.value === 'number' ? (mounted ? m.value : '---') : m.value}</p>
          <p className="text-xs text-emerald-400 mt-2">{m.change}</p>
        </div>
      ))}
    </div>
  );
}