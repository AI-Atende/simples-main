import React, { useState } from "react";
import { Calendar, Phone, Star } from "lucide-react";
import logoinvisa from "../assets/imgs/Invisalign_iTero_RGB_charcoal_2c.png";
import heroImage from "../assets/imgs/Invisalign.x16839.jpeg";

const HeroSection = () => {
  return (
    <section className=" bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4" id="#">
      <div className=" md:flex  grid items-center justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10 gap-3">
        <div className="space-y-8">
          <div className="space-y-4">
            <img src={logoinvisa} alt="" className="h-[35px]" />
            <h1 className="text-4xl md:text-5xl lg:text-[40px] font-bold text-gray-900 leading-tight">
              Cansado de esconder seu sorriso ou <br /> sentir desconforto ao
              mastigar?
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Se você busca uma solução discreta e confortável para dentes
              <br />
              desalinhados, mordida incorreta ou aquela insegurança ao sorrir, o
              <br />
              Invisalign é a resposta que você procura.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Calendar className="w-5 h-5 inline mr-2" />
              Agende sua Avaliação Gratuita
            </button>
            </a>
            <a href="tel:+558130940025">
              <button className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-500 hover:text-white transition-all duration-200">
                <Phone className="w-5 h-5 inline mr-2" />
                (81) 3094-0025
              </button>
            </a>
          </div>
        </div>
        <div className="">
          <img
            src={heroImage}
            alt=""
            className="md:h-[400px] rounded-[40px] p-2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
