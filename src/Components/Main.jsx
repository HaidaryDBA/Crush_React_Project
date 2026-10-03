import jobs from '../data/jobs.json'
import JobList from './JobList'
const Main = () => {
 const recents = jobs.slice(0,3);

   
  
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
{ recents.map((job) =>(
    <JobList key = {job.id} job={job} />
))}
      


  
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