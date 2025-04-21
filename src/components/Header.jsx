function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
        >
          Sridhar Jeganathan
        </a>

        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="#portfolio"
              className="hover:text-emerald-600 active:text-emerald-600 transition-colors duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-600 active:text-emerald-600 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-600 active:text-emerald-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
