"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, ExternalLink, Github, ShieldCheck, WalletCards, Globe2 } from "lucide-react";
import Link from "next/link";
import { NetworkCanvas } from "./NetworkCanvas";
import { LiveTerminal } from "./LiveTerminal";
import { InteractiveSandbox } from "./InteractiveSandbox";
import { QuickIntegration } from "./QuickIntegration";

const ecosystem = [
  {
    id:"trust", name:"agentic-trust", label:"THE TRUST LAYER", icon:ShieldCheck, accent:"emerald",
    blurb:"Identity, delegation, authorization, policy and revocation for autonomous actions.",
    tabs:[
      ["Identity","Who is acting, for whom, and with which credentials?"],
      ["Delegation","What authority was granted, for what purpose, and for how long?"],
      ["Policy","Which resources, actions, limits and approval rules apply?"],
      ["Audit","What happened, under whose authority, and can it be revoked?"]
    ]
  },
  {
    id:"pay", name:"agent-pay", label:"THE FINANCIAL LAYER", icon:WalletCards, accent:"blue",
    blurb:"Controlled financial authority for budgets, instruments, approvals and transactions.",
    tabs:[
      ["Budget","Bound the amount an agent may spend without broad financial access."],
      ["Instrument","Use a wallet or dedicated payment instrument such as a virtual card."],
      ["Approval","Escalate sensitive or exceptional transactions to the human."],
      ["Ledger","Keep payment execution traceable and reconcilable."]
    ]
  },
  {
    id:"adapter", name:"agent-site-adapter", label:"THE ACTION BRIDGE", icon:Globe2, accent:"violet",
    blurb:"A service integration boundary connecting agent capabilities to websites and APIs.",
    tabs:[
      ["Discover","Expose the capabilities and constraints an integration offers."],
      ["Bind","Keep the interaction tied to the intended origin and context."],
      ["Execute","Translate bounded agent intent into service actions."],
      ["Observe","Return execution evidence without silently expanding authority."]
    ]
  }
] as const;

const maturity = [
  ["01","INTERN","Observe","Human drives the action. Agent has minimal authority.","human"],
  ["02","JUNIOR","Assist","Agent proposes and performs bounded low-risk tasks.","notify"],
  ["03","SENIOR","Execute","Agent acts autonomously inside explicit policies.","policy"],
  ["04","PRINCIPAL","Delegate","Agent can coordinate bounded sub-agents and escalate exceptions.","delegate"]
] as const;

const flow = [
  ["01","AGENT / INTENT","A task is requested with a purpose and context.","Network"],
  ["02","SITE ADAPTER","Capabilities and origin are bound to the interaction.","Globe2"],
  ["03","ATF TRUST GATE","Identity, delegation, policy and risk boundaries are evaluated.","LockKeyhole"],
  ["04","AGENT-PAY","Financial policy decides whether to execute, notify or ask.","WalletCards"],
  ["05","SERVICE / LEDGER","The action executes and produces auditable evidence.","Check"]
] as const;

export function Landing() {
  const reduce=useReducedMotion();
  const [selected,setSelected]=useState(0);
  const [tab,setTab]=useState(0);
  const [level,setLevel]=useState(2);
  const [flowStep,setFlowStep]=useState(2);
  const [integration,setIntegration]=useState(false);
  const E=ecosystem[selected];
  const Icon=E.icon;

  return (
    <main className="overflow-hidden bg-[#030712] text-slate-100">
      <section className="relative isolate min-h-[760px] border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(16,185,129,.14),transparent_28%),radial-gradient(circle_at_25%_65%,rgba(59,130,246,.10),transparent_30%)]"/>
        <NetworkCanvas/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/15 via-[#030712]/55 to-[#030712]"/>
        <div className="relative z-10 mx-auto flex min-h-[760px] w-[min(1180px,calc(100%-32px))] flex-col justify-center py-28">
          <div className="max-w-4xl">
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-emerald-400">
              <span className="status-dot"/> Agentic Trust Foundation / ATF + Agent-Pay
            </motion.div>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08}} className="text-balance text-5xl font-semibold leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-[92px]">
              Securing the<br/><span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Autonomous Agent Economy.</span>
            </motion.h1>
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.16}} className="mt-8 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              A trust, delegation and controlled-access layer for agents that can act, transact and collaborate on behalf of humans.
            </motion.p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#ecosystem" className="group glow-button-primary"><span>Explore Ecosystem</span><ArrowDown size={15} className="transition-transform group-hover:translate-y-1"/></a>
              <a href="https://github.com/Agentic-Trust-Foundation/agentic-trust" target="_blank" rel="noreferrer" className="glow-button"><Github size={15}/> Read Specification <ExternalLink size={12} className="opacity-50"/></a>
            </div>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
              {[["01","Identity","Who is acting?"],["02","Authority","What may it do?"],["03","Policy","Under which limits?"],["04","Audit","What actually happened?"]].map(([n,t,s])=><div key={n} className="bg-slate-950/75 p-4 sm:p-5"><div className="text-[10px] font-mono text-emerald-400">{n}</div><div className="mt-2 font-medium">{t}</div><div className="mt-1 text-xs text-slate-500">{s}</div></div>)}
            </div>
            <LiveTerminal/>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="relative border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionKicker>CORE STACK / 03 LAYERS</SectionKicker>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">One ecosystem.<br/><span className="text-slate-500">Three boundaries.</span></h2>
          <p className="mt-6 max-w-2xl text-slate-400">Trust establishes authority. The adapter connects that authority to real services. Agent-Pay controls the financial edge.</p>
          <div className="mt-12 grid gap-4 lg:grid-cols-[.85fr_1.15fr]">
            <div className="space-y-3">
              {ecosystem.map((item,i)=>{
                const I=item.icon;
                return <button key={item.id} onMouseEnter={()=>{setSelected(i);setTab(0);setIntegration(false)}} onClick={()=>{setSelected(i);setTab(0);setIntegration(false)}} className={`ecosystem-card ${selected===i ? "ecosystem-active":""}`}>
                  <div className="flex items-start justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[.03]"><I size={18}/></span><ArrowRight size={16} className={selected===i ? "text-emerald-300":"text-slate-700"}/></div>
                  <div className="mt-6 text-[10px] font-bold tracking-[.2em] text-slate-500">{item.label}</div>
                  <div className="mt-2 font-mono text-lg">{item.name}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.blurb}</p>
                </button>
              })}
            </div>
            <motion.div key={E.id} initial={{opacity:0,x:12}} animate={{opacity:1,x:0}} className="min-h-[410px] rounded-3xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
              <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><Icon size={20}/></span><div><div className="font-mono text-lg">{E.name}</div><div className="text-xs text-slate-500">interactive architecture surface</div></div></div>
              <div className="mt-8 flex flex-wrap gap-2">{E.tabs.map(([name],i)=><button key={name} onClick={()=>setTab(i)} className={`tab-button ${tab===i ? "tab-active":""}`}>{name}</button>)}</div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="text-xs font-bold uppercase tracking-[.18em] text-emerald-400">0{tab+1} / {E.tabs.length.toString().padStart(2,"0")}</div>
                <h3 className="mt-3 text-2xl font-medium">{E.tabs[tab][0]}</h3>
                <p className="mt-3 max-w-xl leading-7 text-slate-400">{E.tabs[tab][1]}</p>
                <div className="mt-8 h-px bg-gradient-to-r from-emerald-400/70 via-blue-400/30 to-transparent"/>
                <div className="mt-5 flex items-center gap-2 text-xs text-slate-500"><Check size={14} className="text-emerald-400"/> authority remains bounded at this layer</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#020711] py-20 sm:py-28">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionKicker>LIVE AGENTIC SANDBOX / SIMULATION</SectionKicker>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">See the trust boundary<br/><span className="text-slate-500">before the action executes.</span></h2>
          <p className="mt-6 max-w-2xl leading-7 text-slate-400">Run a deterministic browser-side simulation of an agent requesting a financial action, crossing the ATF trust gate, binding to a site capability, and producing an auditable decision.</p>
          <div className="mt-10"><InteractiveSandbox /></div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050b14] py-24 sm:py-32">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionKicker>MATURITY MODEL / INTERACTIVE</SectionKicker>
          <div className="mt-4 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div><h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">Autonomy is a<br/><span className="text-slate-500">controlled gradient.</span></h2><p className="mt-6 leading-7 text-slate-400">More autonomy changes execution, not ownership of authority. Select a level to inspect the human boundary.</p></div>
            <div>
              <div className="grid grid-cols-4 gap-2">{maturity.map((m,i)=><button key={m[0]} onClick={()=>setLevel(i)} className={`maturity-node ${level===i ? "maturity-active":""}`}><span>{m[0]}</span><b>{m[1]}</b></button>)}</div>
              <motion.div key={level} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="mt-4 rounded-3xl border border-white/10 bg-slate-950/70 p-7">
                <div className="flex flex-wrap items-center gap-3"><span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold tracking-[.18em] text-emerald-300">{maturity[level][2].toUpperCase()}</span><span className="text-xs text-slate-600">HUMAN OVERSIGHT / {maturity[level][4]}</span></div>
                <h3 className="mt-5 text-2xl">{maturity[level][1]}</h3><p className="mt-2 leading-7 text-slate-400">{maturity[level][3]}</p>
                <div className="mt-7 grid grid-cols-3 gap-2 text-center text-[10px] uppercase tracking-widest"><div className="rounded-xl border border-white/10 p-4"><b className="block text-emerald-300">SCOPE</b><span className="mt-1 block text-slate-600">bounded</span></div><div className="rounded-xl border border-white/10 p-4"><b className="block text-blue-300">POLICY</b><span className="mt-1 block text-slate-600">enforced</span></div><div className="rounded-xl border border-white/10 p-4"><b className="block text-violet-300">AUDIT</b><span className="mt-1 block text-slate-600">traceable</span></div></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-24 sm:py-32">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionKicker>ARCHITECTURE FLOW / LIVE PATH</SectionKicker>
          <h2 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">From intent to action,<br/><span className="text-slate-500">without losing the boundary.</span></h2>
          <div className="mt-14 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-2">{flow.map((f,i)=><button key={f[0]} onClick={()=>setFlowStep(i)} className={`flow-step ${flowStep===i ? "flow-active":""}`}><span className="font-mono text-[10px] text-emerald-400">{f[0]}</span><span className="flex-1 text-left font-medium">{f[1]}</span><ArrowRight size={15}/></button>)}</div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-6 sm:p-9">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,.12),transparent_40%)]"/>
              <div className="relative">
                <div className="mb-8 flex items-center justify-between"><div className="font-mono text-xs text-slate-500">execution trace</div><span className="flex items-center gap-2 text-[10px] text-emerald-400"><i className="status-dot"/>BOUNDARY OK</span></div>
                <div className="space-y-4">{flow.slice(0,flowStep+1).map((f,i)=><motion.div initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} key={f[0]} className="flex gap-4"><div className="mt-1 h-6 w-6 shrink-0 rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-center text-[10px] leading-6 text-emerald-300">{i+1}</div><div><div className="text-sm">{f[1]}</div><div className="mt-1 text-xs leading-5 text-slate-500">{f[2]}</div></div></motion.div>)}</div>
                <div className="mt-8 rounded-2xl border border-emerald-400/10 bg-emerald-400/[.04] p-4 text-xs leading-6 text-slate-400">Authority is evaluated before execution. Downstream components consume the decision; they do not silently expand it.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050810] py-24 sm:py-32">
        <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
          <SectionKicker>USE CASES / ACTIONS</SectionKicker>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[["Shopping agent","Purchase inside merchant, category and spend policies."],["Travel agent","Book routine travel and escalate exceptional decisions."],["Enterprise agent","Call internal APIs only within delegated scope."],["Cloud agent","Change infrastructure inside approved environments."],["Agent → Agent","Delegate a bounded task without transferring full authority."],["Payment agent","Execute controlled transactions with approval boundaries."]].map(([t,b],i)=><motion.div whileHover={reduce?undefined:{y:-4}} key={t} className="rounded-2xl border border-white/10 bg-white/[.02] p-6"><div className="mb-8 font-mono text-xs text-slate-600">0{i+1}</div><h3 className="text-lg">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{b}</p></motion.div>)}
          </div>
        </div>
      </section>

      <footer className="bg-black py-12">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><div className="font-mono text-lg tracking-tight">ATF<span className="text-emerald-400">/</span>AGENT-PAY</div><p className="mt-2 max-w-md text-xs leading-5 text-slate-600">Trust, delegation and controlled access for the Agentic Internet.</p></div>
          <div className="flex flex-wrap gap-3 text-xs text-slate-500">
            <Link href="/architecture" className="footer-link">Architecture</Link><Link href="/protocols" className="footer-link">Protocols</Link><Link href="/verification" className="footer-link">Verification</Link><Link href="/phases" className="footer-link">Roadmap</Link>
            <a href="https://github.com/Agentic-Trust-Foundation" target="_blank" rel="noreferrer" className="footer-link">GitHub ↗</a>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-emerald-400"><i className="status-dot"/> All agents operational</div>
        </div>
      </footer>
    </main>
  );
}

function SectionKicker({children}:{children:ReactNode}) {
  return <div className="flex items-center gap-3 text-[10px] font-bold tracking-[.25em] text-emerald-400"><span className="h-px w-8 bg-emerald-400/60"/>{children}</div>;
}
