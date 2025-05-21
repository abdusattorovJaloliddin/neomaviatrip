import React, { useState } from 'react';
import Logo from '../assets/logo_white-B6aJPl_J.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#F26522]  z-999  ">
    <div className='max-w-[1200px] mx-auto flex justify-between items-center h-[90px] px-4'>
        <a href="">
        <img src={Logo} alt="Logo" className="w-auto h-10" />
      </a>
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex w-full bg-[#F26522] md:w-auto`}>
        <ul className="flex flex-col md:flex-row items-center justify-between gap-10 p-4 md:p-0">
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#home">Asosiy</a></li>
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#about">Biz haqimizda</a></li>
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#tour">Turlar</a></li>
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#hotel">Mehmonxonalar</a></li>
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#aviachiptalar">Aviachiptalar</a></li>
          <li><a className="text-white text-[16px] hover:text-[#F26522]" href="#contact">Aloqa</a></li>
        </ul>
      </nav>
    <select
  name="lang"
  id=""
  className="hidden md:block bg-[#F26522] text-white text-[20px] p-2"
>
  <option value="UZ" className="text-white bg-[#F26522]">
    Uz
  </option>
  <option value="RU" className="text-white bg-[#F26522]">
    Ru
  </option>
  <option value="EN" className="text-white bg-[#F26522]">
    En
  </option>
</select>
      <div
        className="md:hidden flex flex-col items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-[40px] h-[4px] bg-white m-1 rounded-[15px]"></div>
        <div className="w-[40px] h-[4px] bg-white m-1 rounded-[15px]"></div>
        <div className="w-[40px] h-[4px] bg-white m-1 rounded-[15px]"></div>
      </div>
    </div>
    </header>
  );
}

export default Header;