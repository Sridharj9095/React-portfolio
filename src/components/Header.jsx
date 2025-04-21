import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="relative flex justify-between items-center max-w-6xl mx-auto p-4">
        <a
          href="/"
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black to-black hover:from-pink-500 hover:to-yellow-500 transition-all duration-300"
        >
          Sridhar Jeganathan
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul
          className={`
            md:flex md:items-center md:gap-6
            absolute md:relative top-full md:top-0 left-0 w-full md:w-auto
            bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0
            shadow-md md:shadow-none transition-all duration-300 ease-in-out
            z-40 md:z-auto
            ${isOpen ? "block opacity-100" : "hidden opacity-0"} 
            md:block md:opacity-100
          `}
        >
          {["portfolio", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block md:inline-block py-2 md:py-0 hover:text-emerald-600 active:text-emerald-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
