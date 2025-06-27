import React from "react";
import Logo from "../assets/logo_white-B6aJPl_J.png";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo va manzil */}
          <div className="space-y-4">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
            <p className="text-sm text-gray-300">
              Toshkent shahri, Muqimiy ko‘chasi 44-A uy
            </p>
          </div>

          {/* Bog‘lanish */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bog‘lanish</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 Tel: +998 95 150 00 00</li>
              <li>📧 Email: info@nemoavia.uz</li>
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="hover:text-gray-300">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  <BsTelegram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="mailto:info@nemoavia.uz" className="hover:text-gray-300">
                  <MdEmail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Manzil */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Manzil</h3>
            <p className="text-sm text-gray-300">
              Toshkent shahri, Muqimiy ko‘chasi 44-A uy
            </p>
          </div>
        </div>

        <hr className="border-white/20 my-8" />
        <p className="text-center text-sm text-gray-400">
          © 2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
