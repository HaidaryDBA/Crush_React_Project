const Headers = () => {
  return (
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

      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-3 shadow-2xl md:flex-row text-white">

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
  )
}

export default Headers