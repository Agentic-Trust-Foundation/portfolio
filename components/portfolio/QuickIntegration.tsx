"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type QuickIntegrationProps = {
  code: string;
  language: "TypeScript" | "Python";
};

export function QuickIntegration({ code, language }: QuickIntegrationProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-emerald-400/10 bg-black/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-slate-500">
          <span className="rounded border border-white/10 px-2 py-1">{language}</span>
          Quick Integration
        </div>
        <button onClick={copy} className="flex items-center gap-1.5 rounded-lg border border-white/10 px-2.5 py-1.5 text-[10px] text-slate-400 transition hover:border-emerald-400/30 hover:text-emerald-300">
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[11px] leading-6 text-slate-300"><code>{code}</code></pre>
    </div>
  );
}
