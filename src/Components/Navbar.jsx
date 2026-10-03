import { NavLink,Link} from 'react-router-dom'
import { FaHome, } from 'react-icons/fa'
const Navbar = () => {
const navLinks = ({isActive}) => isActive ? "text-black-500/92 font-medium bg-white p-2 rounded-xl hover:bg-gray-200" : "text-slate-400 font-medium transition hover:text-white"
  return (
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">

    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

      {/* Logo */}

      <Link to="#" className="flex items-center gap-3">

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

      </Link>


      {/* Navigation */}

      <div className="hidden items-center gap-8 md:flex">

        <NavLink
          to="/"
          className={navLinks}
        >
          <i className='inline-block '><FaHome color='red' className='flex size-5 ' /></i>
          
          Home
        </NavLink>

        <NavLink
          to="/add-job"
          className={navLinks}
        >
          
          Add Job
        </NavLink>

        <NavLink
          to="/saved-jobs"
          className={navLinks}
        >
          Saved Jobs
        </NavLink>

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