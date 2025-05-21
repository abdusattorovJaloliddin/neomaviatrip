import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const botToken = '7653287730:AAFZcYkEMTap6UYaJwHARlTKujL-ylITsrc';
  const chatId = '6570325323';

  const sendMessage = async () => {
    const text = `
      Yangi xabar keldi! 📩
      Ism: ${firstname}
      Email: ${email}
      Telefon: ${phone}
      Mavzu: ${subject}
      Xabar: ${message}
    `;

    try {
      await axios({
        method: 'POST',
        url: `https://api.telegram.org/bot${botToken}/sendMessage`,
        data: {
          chat_id: chatId,
          text: text,
        },
      });
      alert('Xabar muvaffaqiyatli yuborildi!');
      setFirstname('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Xabar yuborishda xatolik:', error);
      alert('Xabar yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !email || !phone || !subject || !message) {
      alert('Iltimos, barcha maydonlarni to‘ldiring!');
      return;
    }
    sendMessage();
  };

  return (
    <section className="bg-gray-100 py-20" id="contact">
      <div className="container mx-auto px-4">
        <h6 className="text-3xl font-bold text-center mb-4">Biz bilan bog‘lanish</h6>
        <p className="text-xl text-center mb-8 text-gray-600">Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Ismingiz</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#F26522] rounded-md h-10"
                  placeholder="Ismingiz"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Emailingiz</label>
                <input
                  type="email"
                  className="w-full p-2 border border-[#F26522] rounded-md h-10"
                  placeholder="Emailingiz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Telefon raqamingiz</label>
                <input
                  type="tel"
                  className="w-full p-2 border border-[#F26522] rounded-md h-10"
                  placeholder="Telefon raqamingiz"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Mavzu</label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#F26522] rounded-md h-10"
                  placeholder="Mavzu"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Xabar</label>
                <textarea
                  className="w-full p-2 border border-[#F26522] rounded-md h-24 resize-none"
                  placeholder="Xabar"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F26522] text-white py-2 rounded-md hover:bg-orange-600"
              >
                Yuborish
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <div className="shadow-md bg-white p-6 rounded-lg h-[250px]">
              <p className="text-lg font-semibold">Aloqa ma‘lumotlari</p>
              <p className="text-gray-600">Manzil: Toshkent shahri, Muqimiy ko‘chasi 44-A uy</p>
              <p className="text-gray-600">Tel: +998 95 150 00 00</p>
              <p className="text-gray-600">Email: info@nemoavia.uz</p>
              <p className="text-gray-600">Ish vaqti: Du-Sha 24 soat</p>
            </div>
            <div className="shadow-md bg-white p-6 rounded-lg mt-4 h-auto">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2837463913424!2d69.23896297512701!3d41.28092867131355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2sMuqimiy%20ko%27chasi%2044%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1747656473144!5m2!1suz!2s" width="100%" height="300px" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Muqimiy xaritasi"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;