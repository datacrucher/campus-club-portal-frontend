import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import FormField from '../components/FormField.jsx'

const clubOptions = [
  'CHiPSET Technical Club',
  'Dramatics Society',
  'Entrepreneurship Cell',
  'Robotics Guild',
  'Literary Circle',
  'Sports Board',
]

const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year']

const initialForm = {
  fullName: '',
  email: '',
  regNumber: '',
  year: '',
  club: '',
  reason: '',
  password: '',
}

export default function Register() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  function validate() {
    const next = {}
    if (!form.fullName.trim()) next.fullName = 'Enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.regNumber.trim()) next.regNumber = 'Enter your registration number.'
    if (!form.year) next.year = 'Select your year of study.'
    if (!form.club) next.club = 'Select a club to join.'
    if (form.password.length < 6) next.password = 'Use at least 6 characters.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // Demo-only persistence — swap for a real API call in production.
    const users = JSON.parse(localStorage.getItem('clubPortalUsers') || '[]')
    const memberId = `${form.club.slice(0, 3).toUpperCase()}-${1000 + users.length}`
    users.push({ ...form, memberId, status: 'Pending' })
    localStorage.setItem('clubPortalUsers', JSON.stringify(users))

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="mx-auto max-w-lg px-5 py-24 text-center sm:px-8">
        <span className="eyebrow">Application received</span>
        <h1 className="mt-3 font-display text-3xl font-bold">You're on the list, {form.fullName.split(' ')[0]}.</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate">
          Your application to {form.club} is pending approval. Log in anytime to check your
          member status and ID card.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/login" className="btn-primary">
            Go to login
          </Link>
          <Link to="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
      <span className="eyebrow">Registration</span>
      <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Join a club</h1>
      <p className="mt-3 text-sm leading-relaxed text-slate">
        Fill this out once. You can apply to more clubs later from your dashboard without
        re-entering your details.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Full name"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Priya Sharma"
            required
            error={errors.fullName}
          />
          <FormField
            label="Email address"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="priya@university.edu"
            required
            error={errors.email}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Registration number"
            name="regNumber"
            value={form.regNumber}
            onChange={handleChange}
            placeholder="RA2211003010XXX"
            required
            error={errors.regNumber}
          />
          <FormField
            label="Year of study"
            name="year"
            as="select"
            value={form.year}
            onChange={handleChange}
            options={yearOptions}
            required
            error={errors.year}
          />
        </div>

        <FormField
          label="Club"
          name="club"
          as="select"
          value={form.club}
          onChange={handleChange}
          options={clubOptions}
          placeholder="Choose a club to join"
          required
          error={errors.club}
        />

        <FormField
          label="Why do you want to join? (optional)"
          name="reason"
          as="textarea"
          value={form.reason}
          onChange={handleChange}
          placeholder="A couple of sentences is plenty."
        />

        <FormField
          label="Create a password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="At least 6 characters"
          required
          error={errors.password}
        />

        <button type="submit" className="btn-primary w-full sm:w-auto">
          Submit application
        </button>

        <p className="text-sm text-slate">
          Already registered?{' '}
          <Link to="/login" className="font-medium text-violet hover:underline">
            Log in instead
          </Link>
        </p>
      </form>
    </section>
  )
}
