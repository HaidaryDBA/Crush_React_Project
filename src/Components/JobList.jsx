import { useState } from "react";
const JobList = ({job}) => {
const [showDescription, setShowDescription] = useState(false);

    let description = job.description;

    if(!showDescription){
        description = job.description.substring(0, 100) + "...";
    }


  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">


  
    {/* =================================================
         JOB LIST
    ================================================== */}

    <section className="mt-8 space-y-5">


      {/* =================================================
           JOB CARD 1
      ================================================== */}

    <article key={job.id}
        className="group rounded-2xl border
         border-slate-800 bg-slate-900/95 
         p-6 transition duration-300 hover:-translate-y-1 
         hover:border-slate-700 hover:bg-slate-900 
         hover:shadow-2xl"
      >

        {/* Top */}

        <div className="flex flex-col gap-5 md:flex-row">

          {/* Company Logo */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xl font-bold">
            {job.company.initial}
          </div>


          {/* Main */}

          <div className="min-w-0 flex-1 bg-black-500">

            <div className="flex flex-col justify-between gap-3 lg:flex-row">

              <div>

                <h3 className="text-xl font-semibold transition group-hover:text-violet-400">
                  {job.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-slate-400">
                  {job.company.name}
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
                ◉ {job.location.type}
              </span>

              <span className="flex items-center gap-1.5">
                ◷ {job.location.country}
              </span>
              <span className="flex items-center gap-1.5">
                ◷ {job.location.city}
              </span>

              <span className="flex items-center gap-1.5">
              {job.jobType}
              </span>
              <span className="flex items-center gap-1.5">
              {job.salary.min}-{job.salary.max} {job.salary.currency}/{job.salary.period}
              </span>

              <span className="flex items-center gap-1.5">
                {job.postedAt}
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
            
            
            {description}
          </p>
          

        </div>
        

        {/* Requirements */}
        {showDescription &&
        <div>
             <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Requirements
          </h4>

          <ul className="mt-3 grid gap-2 text-sm text-slate-400 md:grid-cols-2">

            <li className="flex gap-2">
              <span className="text-violet-400">✓</span>
              {job.requirements}
            </li>


          </ul>

        </div>


        {/* Skills */}

        <div className="mt-6">

          <h4 className="text-sm font-semibold">
            Required Skills
          </h4>

          <div className="mt-3 flex flex-wrap gap-2">
            { job.skills.map((skill, index) => (
              <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400" key={index}>
                {skill}
              </span>
            )) }

          </div>

        </div>

        {/* Footer */}

        <div className="mt-7 flex flex-col gap-4 border-t border-slate-800 pt-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2 text-xs text-slate-500">

            <span>
              📍
            </span>

            {job.location.city} {job.location.country}

          </div>

        
          <div className="flex gap-3">

            <button className="rounded-xl border border-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-700 hover:text-white">
              <a href={`/jobs/${job.id}`}>View Details</a>
            </button>
        
            <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500">
              Apply Now
            </button>
        
          </div>
        
        </div>
        </div>
        }

       <button

            className="text-black-400 bg-blue-300 rounded p-2 w-30"
            onClick={() => setShowDescription(!showDescription)}>{showDescription ? "less" : "More..."}
            </button>

      </article>

    
    </section>


   
  </main>

  )
}

export default JobList