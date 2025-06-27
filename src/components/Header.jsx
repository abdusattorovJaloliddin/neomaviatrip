import React, { useState, useEffect } from "react";
import Logo from "../assets/logo_white-B6aJPl_J.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <header className="fixed w-full bg-[#F26522] z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-14 sm:h-16 md:h-20 px-4">
        <a href="#">
          <img src={Logo} alt="Logo" className="h-6 sm:h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6 lg:gap-10">
            {[
              "Asosiy",
              "Biz haqimizda",
              "Turlar",
              "Mehmonxonalar",
              "Aviachiptalar",
              "Aloqa",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="text-white text-sm md:text-base hover:underline"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <select
            name="lang"
            className="ml-6 bg-transparent text-white text-sm md:text-base p-1 border border-white rounded cursor-pointer focus:outline-none"
          >
            <option value="UZ">Uz</option>
            <option value="RU">Ru</option>
            <option value="EN">En</option>
          </select>
        </nav>

        <div className="flex items-center md:hidden gap-2">
          <select
            name="lang"
            className="bg-transparent text-white text-sm p-1 border border-white rounded cursor-pointer focus:outline-none"
          >
            <option value="UZ">Uz</option>
            <option value="RU">Ru</option>
            <option value="EN">En</option>
          </select>

          <button
            className="flex flex-col items-center justify-center w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#F26522] w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-2">
          <ul className="flex flex-col gap-3">
            {[
              "Asosiy",
              "Biz haqimizda",
              "Turlar",
              "Mehmonxonalar",
              "Aviachiptalar",
              "Aloqa",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                  className="block text-white text-sm sm:text-base py-2 hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
