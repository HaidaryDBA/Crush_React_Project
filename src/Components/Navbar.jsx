const Navbar = () => {
  return (
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

  )
}

export default Navbar