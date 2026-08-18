import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App() {
  // Demo-only auth state, held in memory. Replace with real auth (e.g. a
  // token from your backend) when this is wired up to an API.
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route
              path="/dashboard"
              element={<Dashboard user={user} onLogout={() => setUser(null)} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
