import React from "react";
import Uzbtravel from "../assets/uzbtravel-Dxm7Hxle.jpg";
import Turkish from "../assets/antaliya-q-8wNECN.avif";
import Dubai from "../assets/saudi-8KHwzW8O.avif";

function Hotel() {
  return (
    <section id="mehmonxonalar" className="pt-18 px-4">
      <h4 className="text-[28px] sm:text-[30px] text-center font-bold mb-4">Mehmonxonalar</h4>
      <p className="text-center text-[16px] sm:text-[18px] text-gray-600 mb-8">Toshkentdagi eng yaxshi mehmonxonalar</p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mehmonxona 1 */}
        <li className="shadow-lg hover:shadow-xl transition duration-300 bg-white rounded-2xl overflow-hidden">
          <img
            className="w-full h-[200px] object-cover"
            src={Uzbtravel}
            alt="Hyatt Regency Tashkent"
          />
          <div className="p-4">
            <h5 className="text-[20px] font-bold mb-2">Hyatt Regency Tashkent</h5>
            <p className="text-[15px] text-gray-600 mb-4">
              Navoi ko'chasi 1-uy, Toshkent. Zamonaviy mehmonxona shahar markazida.
            </p>
            <button className="bg-[#F26522] rounded-xl py-2 px-4 text-white hover:bg-orange-600 transition">
              Batafsil ma'lumot
            </button>
          </div>
        </li>

        {/* Mehmonxona 2 */}
        <li className="shadow-lg hover:shadow-xl transition duration-300 bg-white rounded-2xl overflow-hidden">
          <img
            className="w-full h-[200px] object-cover"
            src={Turkish}
            alt="Hilton Tashkent City"
          />
          <div className="p-4">
            <h5 className="text-[20px] font-bold mb-2">Hilton Tashkent City</h5>
            <p className="text-[15px] text-gray-600 mb-4">
              Islom Karimov ko'chasi 2-uy, Toshkent. Biznes mehmonxona shahar markazida.
            </p>
            <button className="bg-[#F26522] rounded-xl py-2 px-4 text-white hover:bg-orange-600 transition">
              Batafsil ma'lumot
            </button>
          </div>
        </li>

        {/* Mehmonxona 3 */}
        <li className="shadow-lg hover:shadow-xl transition duration-300 bg-white rounded-2xl overflow-hidden">
          <img
            className="w-full h-[200px] object-cover"
            src={Dubai}
            alt="City Palace Hotel"
          />
          <div className="p-4">
            <h5 className="text-[20px] font-bold mb-2">City Palace Hotel</h5>
            <p className="text-[15px] text-gray-600 mb-4">
              Amir Temur ko'chasi 15-uy, Toshkent. Diqqatga sazovor joylar yaqinida qulay mehmonxona.
            </p>
            <button className="bg-[#F26522] rounded-xl py-2 px-4 text-white hover:bg-orange-600 transition">
              Batafsil ma'lumot
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Hotel;
