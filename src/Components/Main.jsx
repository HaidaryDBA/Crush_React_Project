const Main = () => {
  return (
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
        className="group rounded-2xl border border-slate-800 bg-slate-900/95 p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900 hover:shadow-2xl"
      >

        {/* Top */}

        <div className="flex flex-col gap-5 md:flex-row">

          {/* Company Logo */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold">
            T
          </div>


          {/* Main */}

          <div className="min-w-0 flex-1 bg-black-500">

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

  )
}

export default Main