import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/istanbul-DLpjv57y.avif";
import Dubai from "../assets/antaliya-q-8wNECN.avif";
import Yevropa from "../assets/saudi-8KHwzW8O.avif";

function Tour() {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-20 mx-auto pt-23" id="aviachiptalar">
      <div className="mx-auto max-w-[1200px]">
        <h5 className="text-3xl font-bold mb-6 ml-8">Aviachiptalar</h5>
        <div className="bg-white rounded-lg shadow-2xl p-6 w-[1200px] mx-auto flex flex-col gap-6">
          <div className="flex gap-4">
            <button
              className={`bg-[#F26522] text-white rounded-xl py-2 px-5 hover:bg-orange-600 ${
                !open ? "bg-orange-600" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setOpen(false)}
            >
              Borish
            </button>
            <button
              className={`bg-[#F26522] text-white rounded-xl py-2 px-5 hover:bg-orange-600 ${
                open ? "bg-orange-600" : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setOpen(true)}
            >
              Qaytish
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Qayerdan
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Qayerdan"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Qayerga
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Qayerga"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Jo‘nash sanasi
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Qaytish sanasi
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                placeholder="dd/mm/yyyy"
              />
            </div>
            {open && (
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Yo‘lovchilar
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  placeholder="1"
                  min="1"
                />
              </div>
            )}
          </div>
          <button className="w-full bg-[#F26522] text-white py-2 rounded hover:bg-orange-600">
            Qidirish
          </button>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-[1200px]">
        <h5 className="text-3xl font-bold mb-6 ml-8 text-center">
          Mashhur shaharlar
        </h5>
        <ul className="flex justify-between p-6 gap-6 mt-8">
          <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
            <img
              className="w-[300px] h-[200px] rounded-3xl"
              src={Uzbtravel}
              alt=" Uzbekiston"
            />
            <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
              Dubai
            </p>
            <blockquote className="text-[16px] opacity-70 p-2">
              Zamonaviy arxitektura va hashamatli savdo markazlari
            </blockquote>
            <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2 mb-2">
              Batafsil ma'lumot
            </button>
          </li>
          <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
            <img
              className="w-[300px] h-[200px] rounded-3xl"
              src={Turkish}
              alt=" Turkiya"
            />
            <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
              Saudiya Arabistoni
            </p>
            <blockquote className="text-[16px] opacity-70 p-2">
              Umra ziyorati uchun maxsus paketlar
            </blockquote>
            <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
              Batafsil ma'lumot
            </button>
          </li>
          <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
            <img
              className="w-[300px] h-[200px] rounded-3xl"
              src={Dubai}
              alt=" Dubay"
            />
            <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
              Istanbul
            </p>
            <blockquote className="text-[16px] opacity-70 p-2">
              Tarixiy obidalar va zamonaviy madaniyat
            </blockquote>
            <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
              Batafsil ma'lumot
            </button>
          </li>
          <li className="shadow-lg shadow-gray-300 hover:shadow-xl  w-full h-[400px] rounded-2xl">
            <img
              className="w-[300px] h-[200px] rounded-3xl"
              src={Yevropa}
              alt=" Yevropa"
            />
            <p className="text-[20px] font-bold w-full h-auto my-4 p-2">
              Antalya
            </p>
            <blockquote className="text-[16px] opacity-70 p-2">
              Dam olish va sohil <br />
              bo'yi kurortlari
            </blockquote>
            <button className="bg-[#F26522] rounded-2xl py-2 px-4 text-center text-white ml-2">
              Batafsil ma'lumot
            </button>
          </li>
        </ul>
      </div>
      <div className="mx-auto p-10 mt-10 bg-orange-200 w-full">
        <h6 className="text-3xl font-bold mb-6 ml-8 text-center">
          Hamkorlarimiz
        </h6>
        <Marquee pauseOnClick={true} speed={100} className="flex">
          <div className="flex gap-6 grid-cols-1 md:grid-cols-5">
            <img className="w-[250px] h-[200px] rounded-3xl" src="https://images.ctfassets.net/m9ph4qvas97u/1IvJzHV23IHLdbkDuYWqMO/47e5f2b7fc5fe9f39580d056657aab9b/240603-oneworld-alliance-fiji-airways-1440x655px.png?fm=webp&q=80"alt="" />
            <img className="w-[250px] h-[200px] rounded-3xl" src="https://static1.simpleflyingimages.com/wordpress/wp-content/uploads/2018/12/united-airlines-dreamliner-101200xx3000-1688-0-156-700x394.jpg" alt="" />
            <img className="w-[250px] h-[200px] rounded-3xl" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsAYsTGntPhor89GIDk-RgCXHAfhW_ptl37YfDtIP9JQzQ4hIABIRw8PqMASR4AQH2Qiw&usqp=CAU" alt="" />
            <img className="w-[250px] h-[200px] rounded-3xl" src="https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1247904515.jpg?c=original&q=h_447,c_fill" alt="" />
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default Tour;
