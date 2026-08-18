import { Navigate, Link } from 'react-router-dom'
import ClubIDCard from '../components/ClubIDCard.jsx'

const activityLog = [
  { label: 'Application submitted', done: true },
  { label: 'Faculty coordinator review', done: true },
  { label: 'Membership card issued', done: false },
]

export default function Dashboard({ user, onLogout }) {
  if (!user) return <Navigate to="/login" replace />

  const completedSteps = activityLog.filter((s) => s.done).length

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Hey, {user.fullName?.split(' ')[0] || 'there'}.
          </h1>
        </div>
        <button type="button" onClick={onLogout} className="btn-secondary self-start">
          Log out
        </button>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Left: status + activity */}
        <div className="space-y-6">
          <div className="rounded-lg border-2 border-ink bg-white p-6">
            <h2 className="font-display text-lg font-semibold">Application progress</h2>
            <p className="mt-1 text-sm text-slate">
              {completedSteps} of {activityLog.length} steps complete
            </p>

            <ol className="mt-6 space-y-4">
              {activityLog.map((step, i) => (
                <li key={step.label} className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] ${
                      step.done ? 'bg-success text-white' : 'border-2 border-ink/20 text-slate'
                    }`}
                  >
                    {step.done ? '✓' : i + 1}
                  </span>
                  <span className={`text-sm ${step.done ? 'text-ink' : 'text-slate'}`}>{step.label}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-lg border-2 border-ink/10 bg-violet-pale/40 p-6">
            <h2 className="font-display text-lg font-semibold">Club details</h2>
            <dl className="mt-4 grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-slate">Club</dt>
              <dd className="font-medium text-ink">{user.club || '—'}</dd>
              <dt className="text-slate">Year</dt>
              <dd className="font-medium text-ink">{user.year || '—'}</dd>
              <dt className="text-slate">Email</dt>
              <dd className="truncate font-medium text-ink">{user.email || '—'}</dd>
            </dl>
          </div>

          <Link to="/register" className="inline-block font-display text-sm font-semibold text-violet hover:underline">
            + Apply to another club
          </Link>
        </div>

        {/* Right: ID card */}
        <div className="flex justify-center lg:justify-end">
          <div className="lg:sticky lg:top-24">
            <ClubIDCard
              name={user.fullName}
              club={user.club}
              memberId={user.memberId}
              status={user.status || 'Pending'}
              rotate={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
