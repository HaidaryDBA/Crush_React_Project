const Footer = () => {
  return (
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

  )
}

export default Footer