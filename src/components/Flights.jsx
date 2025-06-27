import React from "react";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/antaliya-q-8wNECN.avif";
import Dubai from "../assets/saudi-8KHwzW8O.avif";
import Yevropa from "../assets/istanbul-DLpjv57y.avif";

function Flights() {
  const tours = [
    {
      img: Uzbtravel,
      title: "O'zbekiston bo'ylab sayohat",
      desc: "O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar",
    },
    {
      img: Turkish,
      title: "Turkiya bo'ylab sayohat",
      desc: "Istanbul, Antalya, Kappadokiya – eng mashhur joylar",
    },
    {
      img: Dubai,
      title: "Dubai",
      desc: "Zamonaviy arxitektura va hashamatli savdo markazlari",
    },
    {
      img: Yevropa,
      title: "Yevropa bo'ylab sayohat",
      desc: "Fransiya, Italiya, Germaniya, Ispaniya – eng go'zal shaharlar",
    },
  ];

  return (
    <section id="tour" className="py-16 px-4 bg-white">
      <div className="text-center mb-10">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Turlar</h4>
        <p className="text-base sm:text-lg text-gray-700">Eng yaxshi sayohat turlari</p>
      </div>

      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {tours.map((tour, index) => (
          <li
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto"
          >
            <img
              src={tour.img}
              alt={tour.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{tour.title}</p>
              <blockquote className="text-sm text-gray-600 opacity-80 mb-4">
                {tour.desc}
              </blockquote>
              <button className="bg-[#F26522] rounded-xl py-2 px-4 text-white text-sm hover:bg-orange-600 transition">
                Batafsil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Flights;
