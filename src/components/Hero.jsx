import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { TbBuildingEstate } from "react-icons/tb";

function Hero() {
  return (
    <section id="asosiy">
      <div className="mx-auto py-10 sm:py-16 md:py-24 px-4 flex flex-col items-center justify-center text-center bg-[#F26522]">
        <h1 className="mt-2 text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Sayohatingizni biz bilan boshlang
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl mt-3 sm:mt-5 md:mt-6">
          Nemo Travel – huzur uchun yo‘l
        </p>

        <ul className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-10 mt-6 sm:mt-10 md:mt-14 bg-white rounded-2xl sm:rounded-[60px] md:rounded-[90px] p-4 sm:p-6 md:p-10 shadow-lg">
          <li className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <RiContactsLine className="bg-[#F26522] p-1 sm:p-2 text-white text-3xl sm:text-4xl md:text-5xl rounded-lg sm:rounded-xl" />
            <div className="flex flex-col text-left">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg opacity-80">Mamnun mijozlar</p>
              <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-semibold">45 000+</p>
            </div>
          </li>

          <li className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <TbBuildingEstate className="bg-[#F26522] p-1 sm:p-2 text-white text-3xl sm:text-4xl md:text-5xl rounded-lg sm:rounded-xl" />
            <div className="flex flex-col text-left">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg opacity-80">Mamlakatlar</p>
              <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-semibold">30+</p>
            </div>
          </li>

          <li className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <CiClock2 className="bg-[#F26522] p-1 sm:p-2 text-white text-3xl sm:text-4xl md:text-5xl rounded-lg sm:rounded-xl" />
            <div className="flex flex-col text-left">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg opacity-80">Tajriba</p>
              <p className="text-gray-900 text-base sm:text-lg md:text-2xl font-semibold">5+ yil</p>
            </div>
          </li>

          <li>
            <button
              className="bg-[#F26522] text-white text-sm sm:text-base md:text-lg py-2 sm:py-2.5 md:py-3 px-6 sm:px-8 md:px-10 rounded-xl sm:rounded-2xl md:rounded-3xl transition hover:bg-orange-600 focus:outline-none"
              aria-label="Batafsil ma'lumot"
            >
              Batafsil ma'lumot
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
