import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">

      {/* Main */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <section className="text-center lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
                ✦
              </span>

              Page Not Found
            </div>

            {/* 404 */}
            <h1 className="relative mb-4 text-[120px] font-black leading-none tracking-tight sm:text-[150px]">

              <span className="text-slate-900">4</span>

              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                0
              </span>

              <span className="text-slate-900">4</span>

            </h1>

            {/* Heading */}
            <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
              Oops!
              <span className="ml-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Page Not Found
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-slate-500 lg:mx-0">
              The page you are looking for might have been removed,
              had its name changed, or is temporarily unavailable.
            </p>

            {/* Buttons */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <Link
                to="/"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>

                Back to Home
              </Link>

              <Link
                to="/jobs"
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:text-violet-600 hover:shadow-lg"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                  />
                </svg>

                Browse Jobs
              </Link>

            </div>
          </section>

          {/* Right Illustration */}
          <section className="relative flex items-center justify-center">

            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-violet-200/40 blur-3xl" />

            {/* Illustration Container */}
            <div className="relative h-[420px] w-full max-w-lg">

              {/* Moon / Planet */}
              <div className="absolute right-8 top-4 h-72 w-72 rounded-full bg-gradient-to-br from-violet-50 to-indigo-100 opacity-80" />

              {/* Clouds */}
              <div className="absolute left-12 top-24 h-10 w-28 rounded-full bg-white shadow-sm" />

              <div className="absolute left-5 top-20 h-16 w-16 rounded-full bg-white" />

              <div className="absolute left-20 top-16 h-20 w-20 rounded-full bg-white" />

              {/* Lost Sign */}
              <div className="absolute bottom-28 left-20 z-20 rotate-[-8deg]">

                <div className="relative h-4 w-4 rounded-full bg-amber-900 mx-auto" />

                <div className="relative rounded-lg border-4 border-amber-700 bg-amber-400 px-7 py-4 shadow-lg">
                  <span className="text-2xl font-black text-amber-950">
                    Lost?
                  </span>
                </div>

                <div className="mx-auto h-28 w-3 bg-amber-800" />
              </div>

              {/* Astronaut */}
              <div className="absolute bottom-12 right-12 z-10">

                {/* Helmet */}
                <div className="relative mx-auto h-28 w-28 rounded-full border-8 border-slate-200 bg-gradient-to-br from-slate-100 to-white shadow-xl">

                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 shadow-inner" />

                  <div className="absolute right-5 top-7 h-5 w-5 rounded-full bg-violet-300 opacity-80 blur-sm" />
                </div>

                {/* Body */}
                <div className="relative mx-auto -mt-2 h-36 w-28 rounded-[40%] border-8 border-slate-200 bg-white shadow-xl">

                  {/* Chest */}
                  <div className="absolute left-1/2 top-7 h-12 w-16 -translate-x-1/2 rounded-xl border border-slate-200 bg-slate-50">
                    <div className="mx-auto mt-3 h-3 w-8 rounded-full bg-violet-500" />
                    <div className="mx-auto mt-2 h-2 w-12 rounded-full bg-slate-200" />
                  </div>

                </div>

                {/* Left Arm */}
                <div className="absolute -left-12 top-10 h-20 w-16 rotate-[35deg] rounded-full border-8 border-slate-200 bg-white" />

                {/* Right Arm */}
                <div className="absolute -right-10 top-14 h-20 w-16 rotate-[-25deg] rounded-full border-8 border-slate-200 bg-white" />

                {/* Legs */}
                <div className="absolute -bottom-12 left-1 h-20 w-12 rotate-[20deg] rounded-full border-8 border-slate-200 bg-white" />

                <div className="absolute -bottom-12 right-1 h-20 w-12 rotate-[-20deg] rounded-full border-8 border-slate-200 bg-white" />

              </div>

              {/* Plants */}
              <div className="absolute bottom-16 left-5">
                <div className="h-16 w-7 rotate-[-25deg] rounded-full bg-gradient-to-t from-indigo-400 to-violet-300" />
                <div className="absolute left-5 top-4 h-20 w-7 rotate-[25deg] rounded-full bg-gradient-to-t from-violet-400 to-purple-300" />
              </div>

              <div className="absolute bottom-12 right-0">
                <div className="h-20 w-7 rotate-[-25deg] rounded-full bg-gradient-to-t from-violet-400 to-indigo-300" />
                <div className="absolute left-5 top-4 h-16 w-7 rotate-[25deg] rounded-full bg-gradient-to-t from-indigo-400 to-purple-300" />
              </div>

              {/* Floating Stars */}
              <span className="absolute right-24 top-20 animate-pulse text-3xl text-violet-400">
                ✦
              </span>

              <span className="absolute right-5 top-40 animate-bounce text-xl text-indigo-400">
                ✦
              </span>

              <span className="absolute left-24 top-36 animate-pulse text-xl text-purple-300">
                •
              </span>

              {/* Paper Plane */}
              <div className="absolute right-0 top-8 rotate-[-15deg] text-5xl text-violet-600">
                ➤
              </div>

              {/* Ground */}
              <div className="absolute bottom-4 left-10 right-5 h-3 rounded-full bg-gradient-to-r from-violet-100 via-indigo-100 to-violet-100 blur-sm" />

            </div>
          </section>

        </div>
      </main>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute -bottom-32 left-[-10%] h-64 w-[120%] rounded-[50%] bg-violet-50" />
      </div>

    </div>
  );
}

export default NotFoundPage;