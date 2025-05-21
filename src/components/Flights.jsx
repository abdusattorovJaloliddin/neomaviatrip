import React from "react";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/antaliya-q-8wNECN.avif";
import Dubai from "../assets/saudi-8KHwzW8O.avif";
import Yevropa from "../assets/istanbul-DLpjv57y.avif";

function Flights() {
  return (
    <section id="tour" className="my-20 mx-auto py-10">
      <h4 className="text-[30px] text-center font-bold m-10">Turlar</h4>
      <p className="text-[20px] text-center">Eng yaxshi sayohat turlari</p>
      <ul className="flex justify-between p-6 gap-6 mt-8">
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-[300px] h-[200px] rounded-3xl"
            src={Uzbtravel}
            alt=" Uzbekiston"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            O'zbekiston bo'ylab sayohat
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil
          </button>
        </li>
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-[300px] h-[200px] rounded-3xl"
            src={Turkish}
            alt=" Turkiya"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            Turkiya bo'ylab sayohat
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Istanbul, Antalya, Kappadokiya - eng mashhur joylar
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil
          </button>
        </li>
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-[300px] h-[200px] rounded-3xl"
            src={Dubai}
            alt=" Dubay"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">Dubai </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Zamonaviy arxitektura va hashamatli savdo markazlari
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil
          </button>
        </li>
        <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
          <img
            className="w-[300px] h-[200px] rounded-3xl"
            src={Yevropa}
            alt=" Yevropa"
          />
          <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
            Yevropa bo'ylab sayohat
          </p>
          <blockquote className="text-[16px] opacity-70 p-2">
            Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar
          </blockquote>
          <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
            Batafsil
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Flights;
