import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import FormField from '../components/FormField.jsx'

export default function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('clubPortalUsers') || '[]')
    const match = users.find((u) => u.email === form.email && u.password === form.password)

    if (!match) {
      setError('No account matches that email and password. Try registering first.')
      return
    }

    onLogin(match)
    navigate('/dashboard')
  }

  function handleDemoLogin() {
    const demoUser = {
      fullName: 'Abhilash R.',
      email: 'demo@campus.edu',
      club: 'CHiPSET Technical Club',
      memberId: 'CHP-1042',
      status: 'Active',
      year: '2nd Year',
    }
    onLogin(demoUser)
    navigate('/dashboard')
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-5 py-14 sm:px-8">
      <span className="eyebrow">Welcome back</span>
      <h1 className="mt-3 font-display text-3xl font-bold">Log in to your ID</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        Check your application status, or view your active club membership card.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
        <FormField
          label="Email address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="priya@university.edu"
          required
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Your password"
          required
        />

        {error && <p className="font-mono text-xs text-red-600">{error}</p>}

        <button type="submit" className="btn-primary w-full">
          Log in
        </button>
      </form>

      <button
        type="button"
        onClick={handleDemoLogin}
        className="mt-4 text-center font-mono text-xs uppercase tracking-wider text-violet-light hover:underline"
      >
        Skip — view a demo dashboard
      </button>

      <p className="mt-8 text-sm text-slate">
        New here?{' '}
        <Link to="/register" className="font-medium text-violet hover:underline">
          Register for a club
        </Link>
      </p>
    </section>
  )
}
