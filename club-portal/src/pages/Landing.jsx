import { Link } from 'react-router-dom'
import ClubIDCard from '../components/ClubIDCard.jsx'

const clubs = [
  { name: 'CHiPSET Technical Club', category: 'Technology', members: 240 },
  { name: 'Dramatics Society', category: 'Performing Arts', members: 96 },
  { name: 'Entrepreneurship Cell', category: 'Business', members: 180 },
  { name: 'Robotics Guild', category: 'Technology', members: 132 },
  { name: 'Literary Circle', category: 'Arts & Culture', members: 74 },
  { name: 'Sports Board', category: 'Athletics', members: 310 },
]

const steps = [
  { title: 'Pick a club', body: 'Browse every recognized club on campus and read what they actually do.' },
  { title: 'Fill the form', body: 'Tell us your details once — it carries over to every club you join.' },
  { title: 'Get your ID', body: 'Receive a digital member card the moment a club approves you.' },
]

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-grid-pattern bg-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <div>
            <span className="eyebrow">SRM Campus · Club Registration</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your club membership,
              <br />
              <span className="text-violet">stamped and issued</span> online.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate">
              Register once, join as many clubs as you like, and carry a digital ID card
              that proves it — no paper forms, no waiting in line outside the club room.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="btn-primary">
                Start registration
              </Link>
              <Link to="/login" className="btn-secondary">
                I already have an ID
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ClubIDCard
              name="Abhilash R."
              club="CHiPSET Technical Club"
              memberId="CHP-1042"
              status="Active"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Three steps, no queues</h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="rounded-lg border-2 border-ink/10 bg-white p-6">
              <span className="font-mono text-xs text-violet-light">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Club directory */}
      <section className="border-t-2 border-ink bg-violet-pale/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Directory</span>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">Clubs open for registration</h2>
            </div>
            <p className="text-sm text-slate">{clubs.length} clubs accepting members this semester</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.map((club) => (
              <div
                key={club.name}
                className="flex flex-col justify-between rounded-lg border-2 border-ink bg-paper p-5 shadow-[4px_4px_0_0_#17171F] transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-violet-light">
                    {club.category}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold leading-snug">{club.name}</h3>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-slate">{club.members} members</span>
                  <Link
                    to="/register"
                    className="font-display text-xs font-semibold text-violet hover:underline"
                  >
                    Join →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
