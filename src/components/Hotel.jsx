import React from "react";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/antaliya-q-8wNECN.avif";
import Dubai from "../assets/saudi-8KHwzW8O.avif";
import Yevropa from "../assets/istanbul-DLpjv57y.avif";

function Hotel() {
  return (
    <section id="hotel" className="my-20 mx-auto py-10">
      <h4 className="text-[30px] text-center font-bold m-10">Mehmonxonalar</h4>
      <ul className="flex justify-between p-6 gap-6 mt-8">
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-full h-[200px] rounded-t-2xl"
            src={Uzbtravel}
            alt=" Uzbekiston"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            Hyatt Regency Tashkent
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Navoi ko'chasi 1-uy, Toshkent Zamonaviy mehmonxona markaz markazida{" "}
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil ma'lumot
          </button>
        </li>
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-full h-[200px] rounded-t-2xl"
            src={Turkish}
            alt=" Turkiya"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            Hilton Tashkent City
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Islom Karimov ko'chasi 2-uy, Toshkent Biznes mehmonxona shahar
            markazida{" "}
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil ma'lumot
          </button>
        </li>
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-full h-[200px] rounded-t-2xl"
            src={Dubai}
            alt=" Dubay"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            City Palace Hotel
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Amir Temur ko'chasi 15-uy, Toshkent Qulay mehmonxona diqqatga
            sazovor joylar yaqinida{" "}
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil ma'lumot
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Hotel;
