"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, CircleDot, Play, RotateCcw, ShieldCheck, WalletCards, Globe2 } from "lucide-react";

type Step = {
  id: string;
  title: string;
  system: string;
  detail: string;
  icon: typeof ShieldCheck;
};

const steps: Step[] = [
  {
    id: "intent",
    title: "Agent requests payment",
    system: "agent-pay",
    detail: "Purchase intent: subscription / $149 / merchant.example",
    icon: WalletCards,
  },
  {
    id: "trust",
    title: "Identity + maturity verified",
    system: "agentic-trust",
    detail: "Identity verified · maturity = SENIOR · delegation scope = commerce.purchase",
    icon: ShieldCheck,
  },
  {
    id: "adapter",
    title: "Action boundary established",
    system: "agent-site-adapter",
    detail: "Origin bound · capability matched · no authority expansion",
    icon: Globe2,
  },
  {
    id: "policy",
    title: "Policy decision",
    system: "ATF + agent-pay",
    detail: "spend_limit = $500 · risk = LOW · approval = not required",
    icon: Check,
  },
  {
    id: "execute",
    title: "Transaction executed",
    system: "service / ledger",
    detail: "AUTHORIZED → EXECUTED → AUDIT EVENT WRITTEN",
    icon: Check,
  },
];

export function InteractiveSandbox() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    if (!running) return;
    if (step >= steps.length - 1) {
      setRunning(false);
      return;
    }

    const timer = window.setTimeout(() => setStep((value) => value + 1), 850);
    return () => window.clearTimeout(timer);
  }, [running, step]);

  const progress = useMemo(() => (step < 0 ? 0 : ((step + 1) / steps.length) * 100), [step]);

  const run = () => {
    setStep(0);
    setRunning(true);
  };

  const reset = () => {
    setRunning(false);
    setStep(-1);
  };

  return (
    <div className="sandbox-panel">
      <div className="flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.22em] text-emerald-400">
            <CircleDot size={12} className="animate-pulse" />
            Live Agentic Sandbox
          </div>
          <h3 className="mt-2 text-xl font-semibold tracking-tight">Run a bounded agent transaction</h3>
          <p className="mt-1 text-xs leading-5 text-slate-500">A scripted local simulation — no real payment or external API call.</p>
        </div>
        <div className="flex gap-2">
          <button onClick={run} disabled={running} className="glow-button-primary disabled:cursor-not-allowed disabled:opacity-50">
            <Play size={14} />
            {running ? "Running…" : "Run Test Agent"}
          </button>
          <button onClick={reset} className="glow-button" aria-label="Reset sandbox">
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </div>

      <div className="grid gap-6 p-5 lg:grid-cols-[1.05fr_.95fr] lg:p-7">
        <div>
          <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.16em]">
            <span className="text-slate-600">workflow trace</span>
            <span className={step >= steps.length - 1 ? "text-emerald-300" : "text-slate-600"}>
              {step >= steps.length - 1 ? "COMPLETE" : running ? "EXECUTING" : "IDLE"}
            </span>
          </div>

          <div className="space-y-2">
            {steps.map((item, index) => {
              const active = index === step;
              const done = index < step;
              const Icon = item.icon;

              return (
                <div key={item.id} className={`sandbox-step ${active ? "sandbox-step-active" : ""} ${done ? "sandbox-step-done" : ""}`}>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[.03]">
                    {done ? <Check size={15} className="text-emerald-300" /> : <Icon size={15} className={active ? "text-emerald-300" : "text-slate-600"} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[9px] text-slate-500">{item.system}</span>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                  </div>
                  {active && <span className="sandbox-scan" />}
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-[11px] leading-6">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-slate-600">agent://402/transaction</span>
            <span className="text-emerald-400">SIMULATION</span>
          </div>
          <div className="space-y-1.5 text-slate-500">
            <div><span className="text-slate-700">$</span> atf authorize --agent 402 --action purchase</div>
            <div><span className="text-slate-700">›</span> identity = <span className="text-emerald-300">VERIFIED</span></div>
            <div><span className="text-slate-700">›</span> maturity = <span className="text-blue-300">SENIOR</span></div>
            <div><span className="text-slate-700">›</span> delegation = <span className="text-emerald-300">BOUNDED</span></div>
            <div><span className="text-slate-700">›</span> policy = <span className="text-emerald-300">PASS</span></div>
            <div><span className="text-slate-700">›</span> payment = <span className="text-emerald-300">AUTHORIZED</span></div>
          </div>
          <div className="mt-6 rounded-xl border border-emerald-400/10 bg-emerald-400/[.04] p-3 text-emerald-200">
            <div className="flex items-center gap-2"><Check size={13} /> {step >= steps.length - 1 ? "Action complete — audit evidence emitted." : step >= 0 ? `Layer ${step + 1} of ${steps.length} is active.` : "Press Run Test Agent to start the workflow."}</div>
          </div>
          <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/5">
            <div className="h-full rounded-full bg-emerald-400 transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
