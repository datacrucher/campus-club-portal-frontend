export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-base font-bold">Campus Clubs</p>
          <p className="mt-1 max-w-sm text-sm font-bold text-paper/60">
            One portal to find, join, and manage every student club on campus.
          </p>
        </div>
        <p className="font-mono text-xs uppercase font-bold tracking-wider text-paper/50">
          Built for students, by students
        </p>
      </div>
    </footer>
  )
}
