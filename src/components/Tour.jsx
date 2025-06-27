import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/istanbul-DLpjv57y.avif";
import Dubai from "../assets/antaliya-q-8wNECN.avif";
import Yevropa from "../assets/saudi-8KHwzW8O.avif";

function Tour() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-5 sm:my-10 md:my-20 mx-auto pt-6 sm:pt-12 md:pt-23" id="aviachiptalar">
      <div className="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-0">
        <h5 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ml-2 sm:ml-4 md:ml-8">Aviachiptalar</h5>
        <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 w-full mx-auto flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button
              className={`bg-[#F26522] text-white rounded-xl py-1 sm:py-2 px-3 sm:px-5 hover:bg-orange-600 ${
                !open ? "bg-orange-600" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setOpen(false)}
            >
              Borish
            </button>
            <button
              className={`bg-[#F26522] text-white rounded-xl py-1 sm:py-2 px-3 sm:px-5 hover:bg-orange-600 ${
                open ? "bg-orange-600" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setOpen(true)}
            >
              Qaytish
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            <div>
              <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1">
                Qayerdan
              </label>
              <input
                type="text"
                className="w-full p-1 sm:p-2 border rounded"
                placeholder="Qayerdan"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1">
                Qayerga
              </label>
              <input
                type="text"
                className="w-full p-1 sm:p-2 border rounded"
                placeholder="Qayerga"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1">
                Jo‘nash sanasi
              </label>
              <input
                type="date"
                className="w-full p-1 sm:p-2 border rounded"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1">
                Qaytish sanasi
              </label>
              <input
                type="date"
                className="w-full p-1 sm:p-2 border rounded"
                placeholder="dd/mm/yyyy"
              />
            </div>
            {open && (
              <div>
                <label className="block text-gray-600 text-xs sm:text-sm font-medium mb-1">
                  Yo‘lovchilar
                </label>
                <input
                  type="number"
                  className="w-full p-1 sm:p-2 border rounded"
                  placeholder="1"
                  min="1"
                />
              </div>
            )}
          </div>
          <button className="w-full bg-[#F26522] text-white py-1 sm:py-2 rounded hover:bg-orange-600">
            Qidirish
          </button>
        </div>
      </div>
      <div className="mx-auto mt-10 sm:mt-16 md:mt-20 max-w-[1200px] px-4">
  <h5 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
    Mashhur shaharlar
  </h5>

  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[ 
      {
        img: Uzbtravel,
        title: "Dubai",
        desc: "Zamonaviy arxitektura va hashamatli savdo markazlari",
      },
      {
        img: Turkish,
        title: "Saudiya Arabistoni",
        desc: "Umra ziyorati uchun maxsus paketlar",
      },
      {
        img: Dubai,
        title: "Istanbul",
        desc: "Tarixiy obidalar va zamonaviy madaniyat",
      },
      {
        img: Yevropa,
        title: "Antalya",
        desc: "Dam olish va sohil bo'yi kurortlari",
      },
    ].map((item, index) => (
      <li
        key={index}
        className="shadow-lg shadow-gray-300 hover:shadow-xl rounded-2xl flex flex-col items-center bg-white"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-[180px] sm:h-[200px] md:h-[220px] rounded-t-2xl object-cover"
        />
        <p className="text-lg sm:text-xl font-bold w-full text-center mt-4 px-2">
          {item.title}
        </p>
        <blockquote className="text-sm sm:text-base text-gray-600 text-center px-4 mt-2">
          {item.desc}
        </blockquote>
        <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-white my-4">
          Batafsil ma'lumot
        </button>
      </li>
    ))}
  </ul>
</div>

      <div className="mx-auto p-4 sm:p-6 md:p-10 mt-8 sm:mt-10 md:mt-10 bg-orange-200 w-full">
        <h6 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 ml-2 sm:ml-4 md:ml-8 text-center">
          Hamkorlarimiz
        </h6>
        <Marquee pauseOnClick={true} speed={100} className="flex gap-4">
          <div className="flex gap-4">
            <img className="w-[150px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[150px] md:h-[200px] rounded-2xl object-cover" src="https://images.ctfassets.net/m9ph4qvas97u/1IvJzHV23IHLdbkDuYWqMO/47e5f2b7fc5fe9f39580d056657aab9b/240603-oneworld-alliance-fiji-airways-1440x655px.png?fm=webp&q=80" alt="" />
            <img className="w-[150px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[150px] md:h-[200px] rounded-2xl object-cover" src="https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2018/12/united-airlines-dreamliner-101200xx3000-1688-0-156-700x394.jpg" alt="" />
            <img className="w-[150px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[150px] md:h-[200px] rounded-2xl object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAYsTGntPhor89GIDk-RgCXHAfhW_ptl37YfDtIP9JQzQ4hIABIRw8PqMASR4AQH2Qiw&usqp=CAU" alt="" />
            <img className="w-[150px] sm:w-[200px] md:w-[250px] h-[100px] sm:h-[150px] md:h-[200px] rounded-2xl object-cover" src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1247904515.jpg?c=original&q=h_447,c_fill" alt="" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Tour;