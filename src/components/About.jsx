import React from 'react';
import Tour1 from '../assets/tour1-CzT4uSuF.jpg';
import Tour2 from '../assets/tour2-C-pCsb7w copy.jpg';
import Tour3 from '../assets/tour2-C-pCsb7w.jpg';

function About() {
  return (
    <section id="about" className="w-full bg-[#f5f5f5] py-16 px-4">
      {/* Sarlavha */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Biz haqimizda</h2>
        <p className="text-lg sm:text-xl mt-4">Sizning ishonchli sayohat hamkoringiz</p>
      </div>

      {/* Vazifalar */}
      <ul className="grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto mb-12">
        <li className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Bizning vazifamiz</h3>
          <p className="text-base text-gray-700">
            Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish.
          </p>
        </li>
        <li className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Bizning vazifamiz</h3>
          <p className="text-base text-gray-700">
            Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish.
          </p>
        </li>
      </ul>

      {/* Kompaniya haqida matn va rasmlar */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mb-16 gap-8 px-2">
        <blockquote className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl">
          Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga
          yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi
          yirik aviakompaniyalar bilan hamkorlik qiladi. <br /> <br />
          Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. <br /> <br />
          <strong>Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling!</strong> Xizmatlarimiz: Fransiyaga turlar
          va dam olish, tibbiy sug‘urtalash, turizm va sayyohlik xizmatlari O‘zbekistonda, Antaliya, BAA, Germaniya, Indoneziya va
          Bali orollariga turlar.
        </blockquote>

        <div className="flex flex-col items-center gap-4">
          <img
            src={Tour1}
            alt="Tour 1"
            className="rounded-2xl w-full max-w-md h-60 object-cover"
          />
          <div className="flex gap-4">
            <img
              src={Tour2}
              alt="Tour 2"
              className="rounded-2xl w-1/2 h-48 object-cover"
            />
            <img
              src={Tour3}
              alt="Tour 3"
              className="rounded-2xl w-1/2 h-48 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Jamoamiz */}
      <div className="text-center mb-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Bizning jamoamiz</h3>
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-2">
        {['Direktor', 'Yurist', 'Operator', 'Administrator'].map((role, idx) => (
          <li key={idx} className="bg-white shadow-lg rounded-xl p-6 text-center">
            <p className="text-lg sm:text-xl font-semibold text-gray-800">{role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
