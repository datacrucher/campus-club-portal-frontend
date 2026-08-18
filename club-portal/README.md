# Campus Clubs — Registration Portal

A responsive React + Tailwind frontend for a student club registration portal:
landing page, registration form, login, and a member dashboard.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Folder structure

```
club-portal/
├── index.html                # HTML entry point, loads Google Fonts
├── package.json
├── vite.config.js            # Vite build config
├── tailwind.config.js        # Design tokens: colors, fonts, backgrounds
├── postcss.config.js
└── src/
    ├── main.jsx               # React root, mounts <App />
    ├── index.css              # Tailwind directives + shared component classes
    ├── App.jsx                # Router setup + top-level auth state
    │
    ├── components/            # Reusable pieces shared across pages
    │   ├── Navbar.jsx          # Responsive nav bar with mobile hamburger menu
    │   ├── Footer.jsx
    │   ├── ClubIDCard.jsx      # The digital membership "ID card" — the
    │   │                       # portal's signature visual element, reused
    │   │                       # on the landing hero and the dashboard
    │   └── FormField.jsx       # Labeled input/select/textarea used by
    │                           # both the registration and login forms
    │
    └── pages/                  # One file per route
        ├── Landing.jsx          # Hero, "how it works", club directory
        ├── Register.jsx         # Multi-field form with validation
        ├── Login.jsx             # Email/password login + demo login
        └── Dashboard.jsx        # Application status + the user's ID card
```

### Why this split

- **`components/` vs `pages/`** — anything mounted at a route (`/`, `/register`,
  `/login`, `/dashboard`) lives in `pages/`. Anything reused across more than
  one page (or reusable in principle, like `FormField`) lives in `components/`.
- **`ClubIDCard`** is pulled out on its own because it appears in two places
  (a sample card on the landing hero, the real card on the dashboard) and
  carries the page's visual identity — keeping it in one file keeps that
  identity consistent everywhere it shows up.
- **`App.jsx`** only wires routes together and holds the (demo) logged-in
  user in state; it doesn't contain any page markup itself.

## Notes on the demo data layer

There's no backend here. `Register.jsx` and `Login.jsx` read/write a
`clubPortalUsers` array in `localStorage` so the flow is fully clickable:
register → "log in" → see your dashboard and ID card. Swap the two
`localStorage` calls in those files for real API requests when you connect
a backend — the rest of the app (routing, layout, validation) doesn't need
to change.

## Design notes

- **Palette**: ink (`#17171F`), paper (`#FAF9F6`), violet (`#4C1D95`), amber
  (`#F5A623`) — a stamped/badge feel rather than a generic SaaS look.
- **Type**: Space Grotesk for headings, Inter for body text, JetBrains Mono
  for the "member ID" style labels and numbers.
- **Responsive**: single-column and a collapsing hamburger nav below the
  `sm` breakpoint; grid layouts expand at `sm`/`lg`.
