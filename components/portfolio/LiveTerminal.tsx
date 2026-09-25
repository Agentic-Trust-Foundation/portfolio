"use client";

import { useEffect, useState } from "react";
import { Activity, CircleCheck } from "lucide-react";

const lines = [
  "Agent #402 authenticated via ATF",
  "delegation.scope = commerce.purchase",
  "policy.check = PASS",
  "spend_limit = $500",
  "risk_signal = LOW",
  "status = SECURE"
];

export function LiveTerminal() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((v) => v + 1), 1700);
    return () => clearInterval(id);
  }, []);

  useEffect(() => setIndex(tick % lines.length), [tick]);

  return (
    <div className="terminal-panel flex h-[260px] min-h-[260px] max-h-[260px] flex-col overflow-hidden">
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-slate-400">
          <Activity size={13} className="text-emerald-400" />
          trust monitor
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <i className="status-dot" />
          LIVE
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden p-4 font-mono text-[11px] leading-relaxed">
        <div className="space-y-2">
          <div className="text-slate-500">$ atf observe --agent 402</div>
          {lines.slice(0, index + 1).map((line, i) => (
            <div
              key={line}
              className={i === index ? "text-emerald-300" : "text-slate-400"}
            >
              <span className="mr-2 text-slate-600">›</span>
              {line}
              {i === index && <span className="cursor-blink">▋</span>}
            </div>
          ))}
          <div className="flex items-center gap-2 border-t border-white/10 pt-2 text-emerald-300">
            <CircleCheck size={12} />
            authority boundary intact
          </div>
        </div>
      </div>
    </div>
  );
}
