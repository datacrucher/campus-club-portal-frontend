/**
 * ClubIDCard — the portal's signature element.
 * A stamped "membership ID" card, echoing a physical campus ID badge.
 * Used on the landing hero (sample) and the dashboard (the user's own card).
 */
export default function ClubIDCard({
  name = 'Your Name',
  club = 'Choose a club',
  memberId = 'XXXX-0000',
  status = 'Pending',
  rotate = true,
}) {
  const statusColor =
    status === 'Active'
      ? 'bg-success/10 text-success'
      : status === 'Pending'
      ? 'bg-amber/15 text-amber-dark'
      : 'bg-ink/10 text-slate'

  return (
    <div
      className={`relative w-full max-w-sm select-none rounded-xl border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_0_#17171F] ${
        rotate ? 'sm:-rotate-2' : ''
      }`}
    >
      {/* perforated edge */}
      <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white ring-2 ring-ink/10" />
      <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white ring-2 ring-ink/10" />

      <div className="flex items-start justify-between">
        <span className="eyebrow">Campus Clubs · Member ID</span>
        <span className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusColor}`}>
          {status}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-violet font-display text-lg font-bold text-paper">
          {name.trim().charAt(0).toUpperCase() || '?'}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-lg font-bold leading-tight text-ink">{name}</p>
          <p className="truncate text-sm font-bold text-slate">{club}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-dashed border-ink/20 pt-3">
        <div>
          <p className="font-mono text-[10px] uppercase font-bold tracking-wider text-slate">Member No.</p>
          <p className="font-mono text-sm font-bold text-ink">{memberId}</p>
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-[1px] bg-ink/80" />
          ))}
        </div>
      </div>
    </div>
  )
}
