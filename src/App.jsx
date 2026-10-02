
import './App.css'




function App() {

  return (
  <>

  {/* =====================================================
       NAVBAR
  ====================================================== */}

  <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">

    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

      {/* Logo */}

      <a href="#" className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 font-bold shadow-lg shadow-violet-600/20">
          J
        </div>

        <div>
          <h1 className="text-lg font-bold tracking-tight">
            JobBoard
          </h1>

          <p className="hidden text-[11px] text-slate-500 sm:block">
            Find your next opportunity
          </p>
        </div>

      </a>


      {/* Navigation */}

      <div className="hidden items-center gap-8 md:flex">

        <a
          href="#"
          className="text-sm font-medium text-white"
        >
          Jobs
        </a>

        <a
          href="#"
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          Companies
        </a>

        <a
          href="#"
          className="text-sm font-medium text-slate-400 transition hover:text-white"
        >
          Saved Jobs
        </a>

      </div>


      {/* Right */}

      <div className="flex items-center gap-3">

        <button
          className="hidden rounded-xl border border-slate-800 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:text-white sm:block"
        >
          Sign In
        </button>

        <button
          className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
        >
          Post a Job
        </button>

      </div>

    </div>

  </nav>


  {/* =====================================================
       HERO
  ====================================================== */}

  <header className="relative overflow-hidden border-b border-slate-800">

    {/* Background */}

    <div className="absolute inset-0">

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl">
      </div>

    </div>


    <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:py-28">

      <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-400">
        Discover your next opportunity
      </span>


      <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">

        Find a job that
        <span className="text-violet-400">
          fits your skills.
        </span>

      </h2>


      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400">
        Explore opportunities from companies around the world.
        Search by position, skills, salary and location.
      </p>


      {/* Search */}

      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl md:flex-row">

        <div className="flex flex-1 items-center rounded-xl bg-slate-950 px-4">

          <span className="mr-3 text-slate-500">
            ⌕
          </span>

          <input
            type="text"
            placeholder="Job title, skills or keywords"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-600"
          />

        </div>


        <div className="flex flex-1 items-center rounded-xl bg-slate-950 px-4">

          <span className="mr-3 text-slate-500">
            ◉
          </span>

          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-slate-600"
          />

        </div>


        <button className="rounded-xl bg-violet-600 px-7 py-3 text-sm font-semibold transition hover:bg-violet-500">
          Search Jobs
        </button>

      </div>

    </div>

  </header>


  {/* =====================================================
       MAIN
  ====================================================== */}

  <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">


    {/* =================================================
         TOP BAR
    ================================================== */}

    <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

      <div>

        <p className="text-sm text-slate-500">
          Explore opportunities
        </p>

        <h2 className="mt-1 text-2xl font-bold">
          Latest Jobs
        </h2>

      </div>


      {/* Sort */}

      <div className="flex items-center gap-3">

        <span className="text-sm text-slate-500">
          Sort by
        </span>

        <button className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm text-slate-300">
          Newest
          <span className="ml-3 text-slate-500">
            ↓
          </span>
        </button>

      </div>

    </div>


    {/* =================================================
         FILTERS
    ================================================== */}

    <div className="mt-6 flex flex-wrap gap-2">

      <button className="rounded-full bg-violet-600 px-4 py-2 text-xs font-medium">
        All Jobs
      </button>

      <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-400 transition hover:text-white">
        Remote
      </button>

      <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-400 transition hover:text-white">
        Full Time
      </button>

      <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-400 transition hover:text-white">
        Part Time
      </button>

      <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-400 transition hover:text-white">
        Internship
      </button>

      <button className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-400 transition hover:text-white">
        $50k+
      </button>

    </div>


    {/* =================================================
         JOB LIST
    ================================================== */}

    <section className="mt-8 space-y-5">


      {/* =================================================
           JOB CARD 1
      ================================================== */}

      <article
        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
      >

        {/* Top */}

        <div className="flex flex-col gap-5 md:flex-row">

          {/* Company Logo */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold">
            T
          </div>


          {/* Main */}

          <div className="min-w-0 flex-1">

            <div className="flex flex-col justify-between gap-3 lg:flex-row">

              <div>

                <h3 className="text-xl font-semibold transition group-hover:text-violet-400">
                  Frontend Developer
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-400">
                  TechNova Inc.
                </p>

              </div>


              {/* Save */}

              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 transition hover:border-violet-500/40 hover:text-violet-400">
                ♡
              </button>

            </div>


            {/* Meta */}

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">

              <span className="flex items-center gap-1.5">
                ◉ Remote
              </span>

              <span className="flex items-center gap-1.5">
                ◷ Full Time
              </span>

              <span className="flex items-center gap-1.5">
                $2,500 – $3,500 / month
              </span>

              <span className="flex items-center gap-1.5">
                Posted 2 days ago
              </span>

            </div>

          </div>

        </div>


        {/* Description */}

        <div className="mt-6 border-t border-slate-800 pt-6">

          <h4 className="text-sm font-semibold">
            Job Description
          </h4>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            We are looking for a talented Frontend Developer to join
            our engineering team. You will be responsible for building
            responsive and scalable web applications and working closely
            with designers and backend developers.
          </p>

        </div>


        {/* Requirements */}

        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Requirements
          </h4>

          <ul className="mt-3 grid gap-2 text-sm text-slate-400 md:grid-cols-2">

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              2+ years of frontend development experience
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Strong knowledge of React.js
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Experience with REST APIs
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Good understanding of responsive design
            </li>

          </ul>

        </div>


        {/* Skills */}

        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Required Skills
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">

            <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              React
            </span>

            <span className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-400">
              JavaScript
            </span>

            <span className="rounded-lg bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-400">
              TypeScript
            </span>

            <span className="rounded-lg bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-400">
              Tailwind CSS
            </span>

            <span className="rounded-lg bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-400">
              Git
            </span>

          </div>

        </div>


        {/* Footer */}

        <div className="mt-7 flex flex-col gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-xs text-slate-500">

            <span>
              📍
            </span>

            Kabul, Afghanistan

          </div>


          <div className="flex gap-3">

            <button className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:text-white">
              View Details
            </button>

            <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500">
              Apply Now
            </button>

          </div>

        </div>

      </article>


      {/* =================================================
           JOB CARD 2
      ================================================== */}

      <article
        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
      >

        <div className="flex flex-col gap-5 md:flex-row">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl font-bold text-emerald-400">
            A
          </div>


          <div className="min-w-0 flex-1">

            <div className="flex flex-col justify-between gap-3 lg:flex-row">

              <div>

                <h3 className="text-xl font-semibold transition group-hover:text-violet-400">
                  Backend Developer
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-400">
                  Acme Technologies
                </p>

              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 hover:text-violet-400">
                ♡
              </button>

            </div>


            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">

              <span>◉ Remote</span>

              <span>◷ Full Time</span>

              <span>$3,000 – $4,500 / month</span>

              <span>Posted 4 days ago</span>

            </div>

          </div>

        </div>


        <div className="mt-6 border-t border-slate-800 pt-6">

          <h4 className="text-sm font-semibold">
            Job Description
          </h4>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            Join our backend engineering team and help us build secure,
            reliable and scalable APIs for our growing platform.
          </p>

        </div>


        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Requirements
          </h4>

          <ul className="mt-3 grid gap-2 text-sm text-slate-400 md:grid-cols-2">

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              2+ years backend development experience
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Strong Python knowledge
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Experience with Django or FastAPI
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              PostgreSQL database experience
            </li>

          </ul>

        </div>


        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Required Skills
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">

            <span className="rounded-lg bg-yellow-500/10 px-3 py-1.5 text-xs text-yellow-400">
              Python
            </span>

            <span className="rounded-lg bg-green-500/10 px-3 py-1.5 text-xs text-green-400">
              Django
            </span>

            <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
              PostgreSQL
            </span>

            <span className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs text-purple-400">
              REST API
            </span>

            <span className="rounded-lg bg-orange-500/10 px-3 py-1.5 text-xs text-orange-400">
              Docker
            </span>

          </div>

        </div>


        <div className="mt-7 flex flex-col gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="text-xs text-slate-500">
            📍 Remote · Worldwide
          </div>

          <div className="flex gap-3">

            <button className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm text-slate-300 hover:text-white">
              View Details
            </button>

            <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold hover:bg-violet-500">
              Apply Now
            </button>

          </div>

        </div>

      </article>


      {/* =================================================
           JOB CARD 3
      ================================================== */}

      <article
        className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
      >

        <div className="flex flex-col gap-5 md:flex-row">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-xl font-bold text-orange-400">
            C
          </div>


          <div className="min-w-0 flex-1">

            <div className="flex flex-col justify-between gap-3 lg:flex-row">

              <div>

                <h3 className="text-xl font-semibold transition group-hover:text-violet-400">
                  UI/UX Designer
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-400">
                  Creative Studio
                </p>

              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 hover:text-violet-400">
                ♡
              </button>

            </div>


            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">

              <span>◉ Hybrid</span>

              <span>◷ Part Time</span>

              <span>$1,500 – $2,000 / month</span>

              <span>Posted 1 week ago</span>

            </div>

          </div>

        </div>


        <div className="mt-6 border-t border-slate-800 pt-6">

          <h4 className="text-sm font-semibold">
            Job Description
          </h4>

          <p className="mt-2 text-sm leading-7 text-slate-400">
            We are searching for a creative UI/UX Designer who can
            transform complex problems into simple and beautiful
            user experiences.
          </p>

        </div>


        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Requirements
          </h4>

          <ul className="mt-3 grid gap-2 text-sm text-slate-400 md:grid-cols-2">

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Strong portfolio
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Figma experience
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Understanding of UX principles
            </li>

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              Good communication skills
            </li>

          </ul>

        </div>


        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Required Skills
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">

            <span className="rounded-lg bg-pink-500/10 px-3 py-1.5 text-xs text-pink-400">
              Figma
            </span>

            <span className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs text-purple-400">
              UI Design
            </span>

            <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs text-blue-400">
              UX
            </span>

            <span className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-400">
              Prototyping
            </span>

          </div>

        </div>


        <div className="mt-7 flex flex-col gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="text-xs text-slate-500">
            📍 Kabul, Afghanistan
          </div>

          <div className="flex gap-3">

            <button className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm text-slate-300 hover:text-white">
              View Details
            </button>

            <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold hover:bg-violet-500">
              Apply Now
            </button>

          </div>

        </div>

      </article>


    </section>


    {/* =================================================
         PAGINATION
    ================================================== */}

    <div className="mt-10 flex justify-center">

      <div className="flex items-center gap-2">

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 hover:text-white">
          ‹
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-sm font-medium">
          1
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-sm text-slate-400 hover:text-white">
          2
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-sm text-slate-400 hover:text-white">
          3
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-500 hover:text-white">
          ›
        </button>

      </div>

    </div>

  </main>


  {/* =====================================================
       FOOTER
  ====================================================== */}

  <footer className="mt-10 border-t border-slate-800">

    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">

      <p>
        © 2026 JobBoard. All rights reserved.
      </p>

      <div className="flex gap-6">

        <a href="#" className="hover:text-white">
          About
        </a>

        <a href="#" className="hover:text-white">
          Privacy
        </a>

        <a href="#" className="hover:text-white">
          Terms
        </a>

        <a href="#" className="hover:text-white">
          Contact
        </a>

      </div>

    </div>

  </footer>


  </>
  )
  }
  export default App