import React from "react";
import Logo from "../assets/logo_white-B6aJPl_J.png";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
  <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={Logo} alt="Logo" className="w-32 h-auto" />
            <p className="text-sm">Toshkent shahri, Muqimiy ko‘chasi 44-A uy</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Bog‘lanish</h3>
            <ul className="space-y-2 text-sm">
              <li>Tel: +998 95 150 00 00</li>
              <li>info@nemoavia.uz</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
            <ul className="flex space-x-4">
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
                <a href="#" className="hover:text-gray-300">
                  <MdEmail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4">Manzil</h6>
            <p className="text-sm">Toshkent shahri, Muqimiy ko‘chasi 44-A uy</p>
          </div>
        </div>

        <hr className="border-white/20 my-8" />
        <p className="text-center text-sm">2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
}

export default Footer;
