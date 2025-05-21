import React from "react";
import { RiContactsLine } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { TbBuildingEstate } from "react-icons/tb";

function Hero() {
  return (
    <section>
      <div className=" mx-auto py-[90px] px-4 flex flex-col items-center justify-center text-center bg-[#F26522]">
        <h1 className="text-white text-[50px] w-full h-auto">Sayohatingizni biz bilan boshlang</h1>
        <p className="text-white text-[20px] w-full h-auto mt-[20px]">Nemo Travel - huzur uchun yo'l</p>
        <ul className="flex flex-col md:flex-row items-center justify-between gap-10 mt-[50px] bg-white rounded-[90px] p-10">
          <li className="flex items-center gap-5">
            <RiContactsLine  className="bg-[#F26522] text-[40px] text-white rounded-[20px]"/>
            <span className="flex flex-col items-start justify-start">
              <p className="text-[20px] text-grey-600 opacity-80 mb-[10px]">Mamnun mijozlar</p>
              <p className="text-[25px] text-black-600">45000+</p>
            </span>
          </li>
          <li className="flex items-center gap-5">
            <TbBuildingEstate  className="bg-[#F26522] text-[40px] text-white rounded-[20px]" />
            <span  className="flex flex-col items-start justify-start">
              <p className="text-[20px] text-grey-600 opacity-80 mb-[10px]">Mamlakatlar</p>
              <p className="text-[25px] text-black-600">30+</p>
            </span>
          </li>
          <li className="flex items-center gap-5">
            <CiClock2  className="bg-[#F26522] text-[40px] text-white rounded-[20px]" />
            <span  className="flex flex-col items-start justify-start">
              <p className="text-[20px] text-grey-600 opacity-80 mb-[10px]">Tajriba</p>
              <p className="text-[25px] text-black-600">5+ yil</p>
            </span>
          </li>
          <li>
            <button className="bg-[#F26522] text-white text-[20px] py-3 px-10 rounded-[40px]">Batafsil ma'lumot</button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
