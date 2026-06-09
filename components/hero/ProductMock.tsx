export default function ProductMock() {
  return (
    <div className="relative rounded-2xl border border-line shadow-card overflow-hidden bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-cream-2/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        </div>
        <div className="flex-1 text-center">
          <div className="inline-block px-3 py-0.5 rounded-md bg-cream text-xs text-ink-muted font-mono">
            clearnotes.app
          </div>
        </div>
      </div>

      {/* App content - "After" state showing organized notes */}
      <div className="p-5 space-y-3 min-h-[320px] bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-heading font-semibold text-ink">
            All Notes
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-soft text-xs text-violet font-medium">
            Auto-organized by ClearNotes
          </div>
        </div>

        {/* Topic card: Q3 Launch */}
        <div className="rounded-xl border border-line p-3.5 bg-cream/50">
          <div className="text-xs font-medium text-violet mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet" />
            Topic: Q3 Launch
          </div>
          <div className="space-y-2 pl-3.5 border-l-2 border-violet/20">
            <div>
              <div className="text-xs text-ink-muted mb-0.5 font-medium">
                Timeline
              </div>
              <p className="text-sm text-ink font-mono leading-relaxed">
                Sarah said push to Oct 15
              </p>
            </div>
            <div>
              <div className="text-xs text-ink-muted mb-0.5 font-medium">
                Legal review
              </div>
              <p className="text-sm text-ink font-mono leading-relaxed">
                Check with legal re GDPR compliance
              </p>
            </div>
          </div>
        </div>

        {/* Topic card: Reading list */}
        <div className="rounded-xl border border-line p-3.5 bg-cream/50">
          <div className="text-xs font-medium text-coral mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-coral" />
            Topic: Reading list
          </div>
          <div className="space-y-2 pl-3.5 border-l-2 border-coral/20">
            <div>
              <div className="text-xs text-ink-muted mb-0.5 font-medium">
                Articles
              </div>
              <p className="text-sm text-ink font-mono leading-relaxed">
                HBR article on pricing tiers
              </p>
            </div>
          </div>
        </div>

        {/* Topic card: Inbox */}
        <div className="rounded-xl border border-line p-3.5 bg-cream/50">
          <div className="text-xs font-medium text-honey mb-2 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-honey" />
            Topic: Inbox
          </div>
          <div className="flex gap-2 mt-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-coral-soft text-coral font-medium">
              #follow-up
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-coral-soft text-coral font-medium">
              #this-week
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
