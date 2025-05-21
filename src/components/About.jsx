import React from 'react'
import Tour1 from '../assets/tour1-CzT4uSuF.jpg';
import Tour2 from '../assets/tour2-C-pCsb7w copy.jpg';
import Tour3 from '../assets/tour2-C-pCsb7w.jpg';

function About() {
  return (
    <section id='about' className='w-full bg-[#f5f5f5] py-[70px]'>
      <div>
        <h2 className='text-[30px] my-[20px] text-center font-bold'>Biz haqimizda</h2>
        <p className='text-[20px] my-[20px] text-center'>Sizning ishonchli sayohat hamkoringiz</p>
        <ul className='flex items-center mx-auto p-2 my-[20px] justify-between'>
          <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[600px]'>
            <p className='font-bold text-[20px] my-[20px]'>Bizning vazifamiz</p>
            <blockquote className='text-[20px]'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etis</blockquote>
          </li>
           <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[600px]'>
            <p className='font-bold text-[20px] my-[20px]'>Bizning vazifamiz</p>
            <blockquote className='text-[20px]'>Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etis</blockquote>
          </li>
        </ul>
      </div>
      <div className='flex justify-between items-center mx-auto my-15'>
        <blockquote className='text-[20px] w-[600px] m-10'>Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. <br /> <br /> Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.</blockquote>
        <div className='m-4'>
          <img className='w-[550px] h-[300px] rounded-3xl' src={Tour1} alt="" />
          <span className='flex items-center my-3 gap-2.5'>
            <img className='w-[275px] h-[200px] rounded-3xl' src={Tour2} alt="" />
            <img className='w-[275px] h-[200px] rounded-3xl' src={Tour3} alt="" />
          </span>
        </div>
      </div>
      <div>
        <h3 className='text-[30px] my-[20px] text-center font-bold'>Bizning jamoamiz</h3>
        <ul className='flex items-center mx-auto p-4 my-[20px] justify-between'>
          <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[300px]'>
            <p className='font-bold text-[20px] my-[20px] text-center shadow-amber-700'>Direktor</p>
          </li>
           <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[300px]'>
            <p className='font-bold text-[20px] my-[20px] text-center shadow-amber-700'>Yurist</p>
          </li>
           <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[300px]'>
            <p className='font-bold text-[20px] my-[20px] text-center shadow-amber-700'>Operator</p>
          </li>
          <li className='shadow-lg p-[20px] rounded-[10px] bg-[#ffffff] w-[300px]'>
            <p className='font-bold text-[20px] my-[20px] text-center shadow-amber-700'>Administrator</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About