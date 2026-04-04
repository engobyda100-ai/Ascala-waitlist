"use client"

import { useInView } from "@/hooks/use-in-view"
import { Link2, BookOpen, Users, FileText, TrendingUp, Zap, CheckSquare, Upload, ArrowRight } from "lucide-react"

// ── Reusable mini UI primitives ──────────────────────────────────────

function Toggle({ checked, label, sub }: { checked: boolean; label: string; sub: string }) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
        checked ? "bg-amber-500/10 border-amber-500/30" : "bg-white/5 border-white/10"
      }`}
    >
      <div>
        <p className={`text-sm font-semibold ${checked ? "text-white" : "text-gray-400"}`}>{label}</p>
        <p className="text-xs text-gray-500">{sub}</p>
      </div>
      <div
        className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
          checked ? "bg-amber-500 justify-end" : "bg-gray-700 justify-start"
        }`}
      >
        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
      </div>
    </div>
  )
}

function ChatBubble({ text, isUser }: { text: string; isUser?: boolean }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
          isUser
            ? "bg-[#C26A43] text-white rounded-tr-sm"
            : "bg-white/10 text-gray-200 rounded-tl-sm"
        }`}
      >
        {text}
      </div>
    </div>
  )
}

function StepLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">{number}</span>
      <div className="h-px w-8 bg-amber-500/40" />
      <span className="text-xs text-amber-500/60 tracking-widest uppercase">{label}</span>
    </div>
  )
}

// ── Step 1: Catch Signals Through The Noise ──────────────────────────

function SignalsStep() {
  const { ref, isInView } = useInView()
  const benefits = [
    "Find frictions in unspoken user behavior",
    "Get actionable feedback from your target market persona",
    "Test your SaaS flows without leaving your office",
    "Deliver a product that users care about",
  ]
  const noiseItems = [
    { label: "User clicked away", signal: false },
    { label: "Session ended early", signal: false },
    { label: "Form abandoned at step 3", signal: true },
    { label: "Feature ignored", signal: false },
    { label: "Confusion during onboarding", signal: false },
  ]

  return (
    <section
      ref={ref}
      className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div>
        <StepLabel number="01" label="Why Ascala" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Catch Signals <span className="text-amber-500">Through The Noise</span>
        </h3>
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <ArrowRight className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
              <span className="text-gray-300 text-base">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold">User Session Events</p>
        <div className="space-y-2">
          {noiseItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border ${
                item.signal
                  ? "bg-amber-500/15 border-amber-500/40"
                  : "bg-white/3 border-white/5"
              }`}
            >
              <div className={`w-2 h-2 rounded-full shrink-0 ${item.signal ? "bg-amber-500" : "bg-gray-600"}`} />
              <span className={`text-sm flex-1 ${item.signal ? "text-amber-200 font-medium" : "text-gray-500"}`}>
                {item.label}
              </span>
              {item.signal && (
                <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Signal</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 p-4 bg-[#C26A43]/20 border border-[#C26A43]/40 rounded-xl">
          <p className="text-xs text-[#C26A43] font-bold mb-1 uppercase tracking-wide">Ascala Insight</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            "Users are abandoning the form at step 3 due to unclear field labels. Recommend simplifying the UX copy."
          </p>
        </div>
      </div>
    </section>
  )
}

// ── Step 2: One Workspace ────────────────────────────────────────────

function WorkspaceStep() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <div className="text-center mb-10">
        <StepLabel number="02" label="The Product" />
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          One <span className="text-amber-500">Workspace</span>
        </h3>
      </div>

      {/* App mockup */}
      <div className="bg-[#1c1a17] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-gray-400">Ascala Workspace</span>
          </div>
          <div className="flex gap-3 text-xs text-gray-500">
            <span className="hover:text-gray-300 cursor-pointer">Share</span>
            <span className="hover:text-gray-300 cursor-pointer">Settings</span>
            <span className="hover:text-gray-300 cursor-pointer">Account</span>
          </div>
        </div>

        <div className="grid grid-cols-[220px_1fr_240px] min-h-[380px]">
          {/* Left: Project Assets */}
          <div className="border-r border-white/10 p-4 space-y-4">
            <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">Project Assets</p>
            <input
              readOnly
              value="www.yourApp.com"
              className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 cursor-default"
            />
            <div className="border border-dashed border-white/20 rounded-xl p-4 text-center">
              <Upload className="w-5 h-5 text-gray-500 mx-auto mb-1" />
              <p className="text-xs text-gray-500 leading-tight">Drop files here or click to upload</p>
              <p className="text-[10px] text-gray-600 mt-1">PDFs, docs, spreadsheets, images</p>
              <button className="mt-2 text-[10px] border border-white/10 rounded-md px-3 py-1 text-gray-400">
                Choose files
              </button>
            </div>
            <div className="space-y-2">
              {[
                { name: "Market Resear...", size: "44 KB", status: "Metadata only" },
                { name: "Target phase...", size: "18.6 KB", status: "Ready" },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg">
                  <div className="w-6 h-6 rounded bg-amber-500/20 flex items-center justify-center shrink-0">
                    <FileText className="w-3 h-3 text-amber-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] text-gray-300 truncate">{f.name}</p>
                    <p className="text-[10px] text-gray-500">{f.size} · {f.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center: Chat */}
          <div className="flex flex-col border-r border-white/10">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <p className="text-sm font-semibold text-white">Ascala Intake Agent</p>
                <p className="text-[10px] text-green-400">● Online · AI analysis active</p>
              </div>
            </div>
            <div className="flex-1 p-4 space-y-3 overflow-hidden">
              <ChatBubble text="Hi! I'm here to help. The more context you give me, the more insights and test recommendations I can give you. What brings you here today?" />
              <ChatBubble text="What tests should I run to make sure my audience is engaged with my product?" isUser />
              <ChatBubble text="You're asking a critical question, but 'audience engagement' is too broad. For a product targeting Product Managers and Designers, I recommend running Engagement + Onboarding tests. Here's your validation checklist..." />
            </div>
            <div className="px-4 py-3 border-t border-white/10">
              <div className="bg-white/5 rounded-xl px-4 py-2 text-xs text-gray-500">
                Describe the product or import context from uploaded assets…
              </div>
            </div>
          </div>

          {/* Right: Validation Suite */}
          <div className="p-4 space-y-4">
            <div>
              <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">Validation Suite</p>
              <p className="text-[10px] text-gray-500">3 of 4 tests selected</p>
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">Select validation tests</p>
            <div className="space-y-2">
              <Toggle checked label="Engagement" sub="Pending run" />
              <Toggle checked label="Onboarding" sub="Pending run" />
              <Toggle checked={false} label="Accessibility" sub="Not selected" />
              <Toggle checked label="Compliance" sub="Pending run" />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>3 pending · 0 completed</span>
            </div>
            <button className="w-full py-2 bg-[#C26A43] text-white text-sm font-bold rounded-xl hover:bg-[#C26A43]/90 transition-colors">
              Run Tests
            </button>
            <div>
              <p className="text-xs text-gray-400 font-semibold mb-2">Results</p>
              <p className="text-xs text-gray-600 text-center py-4">No results yet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Step 3: Give Context ─────────────────────────────────────────────

function ContextStep() {
  const { ref, isInView } = useInView()
  const inputs = [
    { icon: Link2, label: "Prototype Link" },
    { icon: BookOpen, label: "Market Research" },
    { icon: Users, label: "Target Market" },
    { icon: FileText, label: "Product Description" },
    { icon: TrendingUp, label: "Value Proposition" },
  ]

  return (
    <section
      ref={ref}
      className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Left: condensed project assets panel */}
      <div className="bg-[#1c1a17] border border-white/10 rounded-2xl p-5 shadow-xl">
        <p className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Project Assets</p>
        <input
          readOnly
          value="www.yourApp.com"
          className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 mb-3 cursor-default"
        />
        <div className="border border-dashed border-white/20 rounded-xl p-5 text-center mb-3">
          <Upload className="w-6 h-6 text-gray-500 mx-auto mb-2" />
          <p className="text-xs text-gray-500">Drop files here or click to upload</p>
          <p className="text-[10px] text-gray-600 mt-1">PDFs, docs, spreadsheets, and images</p>
          <button className="mt-3 text-[10px] border border-white/10 rounded-md px-3 py-1.5 text-gray-400">
            Choose files
          </button>
        </div>
        {[
          { name: "Market Resear...", size: "44 KB · Metadata only" },
          { name: "Target phase...", size: "18.6 KB · Ready" },
        ].map((f, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg mb-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
              <FileText className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <div>
              <p className="text-xs text-gray-300">{f.name}</p>
              <p className="text-[10px] text-gray-500">{f.size}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: text */}
      <div>
        <StepLabel number="03" label="Step One" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Give <span className="text-amber-500">Context</span>
        </h3>
        <p className="text-gray-400 mb-8 text-base leading-relaxed">
          Drop in your product details so Ascala's AI can simulate the right user personas for your SaaS.
        </p>
        <ul className="space-y-4">
          {inputs.map(({ icon: Icon, label }, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-gray-200 font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Step 4: Choose Your AI-Persona Tests ────────────────────────────

function TestsStep() {
  const { ref, isInView } = useInView()
  const tests = [
    { label: "Engagement", desc: "Are users actually engaged with your core loop?" },
    { label: "Onboarding", desc: "Can new users find value in under 5 minutes?" },
    { label: "Accessibility", desc: "Is your product usable for all user types?" },
    { label: "Compliance", desc: "Does your flow meet privacy and legal standards?" },
  ]

  return (
    <section
      ref={ref}
      className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Left: text */}
      <div>
        <StepLabel number="04" label="Step Two" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Choose Your <span className="text-amber-500">AI-Persona Tests</span>
        </h3>
        <p className="text-gray-400 mb-8 text-base leading-relaxed">
          Select the validation tests that matter most. Ascala runs each one through simulated personas that behave like your real users.
        </p>
        <ul className="space-y-4">
          {tests.map(({ label, desc }, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#C26A43]/15 border border-[#C26A43]/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckSquare className="w-4 h-4 text-[#C26A43]" />
              </div>
              <div>
                <p className="text-white font-semibold">{label}</p>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: Validation Suite panel */}
      <div className="bg-[#1c1a17] border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="mb-5">
          <p className="text-sm font-bold text-white">Validation Suite</p>
          <p className="text-xs text-gray-500">3 of 4 tests selected</p>
        </div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">Select validation tests</p>
        <div className="space-y-3 mb-6">
          <Toggle checked label="Engagement" sub="Pending run" />
          <Toggle checked label="Onboarding" sub="Pending run" />
          <Toggle checked={false} label="Accessibility" sub="Not selected" />
          <Toggle checked label="Compliance" sub="Pending run" />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span>3 pending · 0 completed</span>
          <button className="px-5 py-2 bg-[#C26A43] text-white text-xs font-bold rounded-lg hover:bg-[#C26A43]/90 transition-colors">
            Run Tests
          </button>
        </div>
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs text-gray-400 font-semibold mb-4">Results</p>
          <div className="text-center py-6 text-xs text-gray-600">No results yet</div>
        </div>
      </div>
    </section>
  )
}

// ── Step 5: Interact with Ascala Intelligence ────────────────────────

function IntelligenceStep() {
  const { ref, isInView } = useInView()
  const capabilities = [
    { icon: ArrowRight, label: "Recommends next actions", desc: "Prioritized steps based on what your personas struggled with." },
    { icon: Zap, label: "Recommends tests", desc: "Suggests the right validation tests for your specific SaaS type." },
    { icon: CheckSquare, label: "Creates a working checklist", desc: "A clear action plan so you always know what to fix first." },
  ]

  return (
    <section
      ref={ref}
      className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Left: Chat panel */}
      <div className="bg-[#1c1a17] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <div>
            <p className="text-xs font-bold text-white">Ascala Intake Agent</p>
            <p className="text-[10px] text-green-400">Online · Analysis active</p>
          </div>
        </div>
        <div className="p-4 space-y-3">
          <ChatBubble text="What tests should I run to make sure my audience is engaged with my product?" isUser />
          <ChatBubble text="You're asking a critical question. 'Audience engagement' is too broad — it's about workflow transformation, not just clicks. Who exactly is your target persona?" />
          <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-gray-400 space-y-2">
            <p className="text-gray-300 font-semibold text-[11px]">Based on your context, here's your plan:</p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2"><span className="text-amber-500">→</span><span>Target: Product Managers, Designers, Researchers</span></div>
              <div className="flex items-center gap-2"><span className="text-amber-500">→</span><span>Run: Engagement + Onboarding tests first</span></div>
              <div className="flex items-center gap-2"><span className="text-[#C26A43]">✓</span><span>Watching for: repeated actions that signal confusion</span></div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-white/10">
          <div className="bg-white/5 rounded-xl px-4 py-2 text-xs text-gray-500">
            Ask Ascala anything about your product…
          </div>
        </div>
      </div>

      {/* Right: text */}
      <div>
        <StepLabel number="05" label="Step Three" />
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
          Interact with <span className="text-amber-500">Ascala Intelligence</span>
        </h3>
        <p className="text-gray-400 mb-8 text-base leading-relaxed">
          Have a conversation with the AI to shape your testing strategy. Ascala does the heavy lifting.
        </p>
        <ul className="space-y-6">
          {capabilities.map(({ icon: Icon, label, desc }, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold">{label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── Step 6: Run Predictive Simulation ───────────────────────────────

function SimulationStep() {
  const { ref, isInView } = useInView()

  const users = [
    { name: "Maya T.", role: "Product Manager", action: "Completed onboarding", ms: 142, pass: true },
    { name: "Jordan K.", role: "Designer", action: "Dropped off at step 3", ms: 289, pass: false },
    { name: "Priya R.", role: "Researcher", action: "Triggered engagement loop", ms: 67, pass: true },
    { name: "Aiden S.", role: "Founder", action: "Completed onboarding", ms: 201, pass: true },
    { name: "Layla M.", role: "Product Manager", action: "Flagged confusing CTA", ms: 334, pass: false },
    { name: "Owen C.", role: "Designer", action: "Activated core feature", ms: 118, pass: true },
  ]

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <StepLabel number="06" label="The Engine" />
        <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
          Hundreds of Digital Users.{" "}
          <span className="text-amber-500">Seconds.</span>
        </h3>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Ascala deploys an army of AI personas — each with distinct goals, habits, and expectations —
          and runs them through your product simultaneously.
        </p>
      </div>

      {/* Simulation dashboard */}
      <div className="bg-[#1c1a17] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-gray-400 ml-2">Predictive Simulation — Live Run</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-semibold">Running</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 divide-x divide-white/10 border-b border-white/10">
          {[
            { label: "Digital Users", value: "247", color: "text-amber-500" },
            { label: "Tests Running", value: "3", color: "text-white" },
            { label: "Completed", value: "189", color: "text-green-400" },
            { label: "Signals Found", value: "42", color: "text-[#C26A43]" },
          ].map(({ label, value, color }) => (
            <div key={label} className="px-6 py-5 text-center">
              <p className={`text-3xl font-black ${color}`}>{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>

        {/* Live user feed */}
        <div className="p-6">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Live Persona Feed</p>
          <div className="space-y-2">
            {users.map((user, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${
                  user.pass
                    ? "bg-green-500/5 border-green-500/20"
                    : "bg-red-500/5 border-red-500/20"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-2 h-2 rounded-full shrink-0 ${user.pass ? "bg-green-400" : "bg-red-400"} animate-pulse`} />
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {user.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-white">{user.name}</span>
                  <span className="text-xs text-gray-500 ml-2">{user.role}</span>
                </div>
                <p className={`text-sm ${user.pass ? "text-green-300" : "text-red-300"} truncate max-w-[200px]`}>
                  {user.action}
                </p>
                <span className="text-[11px] text-gray-600 shrink-0">{user.ms}ms</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
            <span>+ 241 more users running...</span>
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 6 ? "bg-amber-500" : "bg-white/10"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">Simulation progress</span>
            <span className="text-xs text-amber-500 font-bold">76%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-[#C26A43] rounded-full" style={{ width: "76%" }} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Step 7: View Full Report ─────────────────────────────────────────

function ReportStep() {
  const { ref, isInView } = useInView()

  return (
    <section
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <StepLabel number="07" label="Coming Next" />
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
        View Full <span className="text-amber-500">Report</span>
      </h3>
      <p className="text-gray-400 mb-10 max-w-lg mx-auto text-base">
        A complete analysis of every test run — findings, friction points, and prioritized fixes, all in one place.
      </p>

      <div className="relative max-w-2xl mx-auto">
        {/* Blurred mock report */}
        <div className="bg-[#1c1a17] border border-white/10 rounded-2xl p-6 shadow-2xl filter blur-[2px] select-none pointer-events-none">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="h-3 w-28 bg-white/20 rounded-full mb-2" />
              <div className="h-2 w-16 bg-white/10 rounded-full" />
            </div>
            <div className="h-8 w-20 bg-[#C26A43]/40 rounded-lg" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-3 space-y-2">
                <div className="h-2 w-12 bg-white/15 rounded-full" />
                <div className="h-6 w-8 bg-amber-500/30 rounded-md" />
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2.5 bg-white/10 rounded-full" style={{ width: `${85 - i * 12}%` }} />
            ))}
          </div>
        </div>

        {/* Coming soon overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent rounded-2xl">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-5">
            <p className="text-white font-bold text-lg">coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Main export ──────────────────────────────────────────────────────

export function HowItWorks() {
  return (
    <section className="bg-[#0d0d0d] py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <p className="text-xs text-amber-500 uppercase tracking-widest font-bold mb-4">The Platform</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            How It Works
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-xl mx-auto">
            From raw context to actionable insights — without leaving your desk.
          </p>
        </div>

        <div className="space-y-32">
          <SignalsStep />
          <WorkspaceStep />
          <ContextStep />
          <TestsStep />
          <IntelligenceStep />
          <SimulationStep />
          <ReportStep />
        </div>
      </div>
    </section>
  )
}
