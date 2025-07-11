// SectionVideos.tsx
"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";
import video01 from "../assets/imgs/clincheck1.mp4";
import video02 from "../assets/imgs/clincheck2.mp4";
import video03 from "../assets/imgs/ClinCheck4.mp4";

const SectionVideos = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16,
    },
    loop: true,
  });

  const videos = [
    {
      src: video01,
      titulo: "Veja em 3D como seu novo sorriso vai ficar",
      description:
        "Com a tecnologia exclusiva ClinCheck®, você consegue visualizar todo o planejamento do seu tratamento Invisalign antes mesmo de começar. ",
      description2:
        "No vídeo ao lado, mostramos uma simulação real: é possível ver o movimento exato de cada dente, etapa por etapa, até alcançar o alinhamento ideal.",
    },
    {
      src: video02,
      titulo: "Acompanhamento Digital: Veja a Evolução do Seu Sorriso",
      description:
        "Neste vídeo, você confere uma simulação completa do tratamento com alinhadores Invisalign usando a tecnologia ClinCheck®.",
      description2:
        "O destaque aqui é a evolução detalhada do alinhamento dentário, mostrando como cada dente se movimenta ao longo das semanas.",
    },
    {
      src: video03,
      titulo: "Precisão Milimétrica no Planejamento do Seu Sorriso",
      description:
        "O vídeo acima mostra o poder do ClinCheck®, o sistema de inteligência 3D usado no tratamento com alinhadores Invisalign.",
      description2:
        "Com ele, nossos especialistas conseguem planejar cada movimento com precisão milimétrica — seja para girar um dente, alinhar a mordida ou corrigir a inclinação.",
    },
  ];

  return (
    <section className="py-10 px-4 w-auto bg-white-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Veja Seu Novo Sorriso Antes Mesmo de Sorrir para o Espelho
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Com o planejamento digital 3D do ClinCheck®, você acompanha cada etapa
          da sua transformação com segurança, clareza e emoção.
        </p>
      </div>
      <div className="relative">
        {/* Setas laterais */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700"
        >
          <MdArrowBackIosNew />
        </button>

        <div ref={sliderRef} className="keen-slider">
          {videos.map((video, index) => (
            <div key={index} className="keen-slider__slide">
              <div className="bg-white rounded-xl shadow-md flex justify-center items-center w-full h-[500px]">
                <video
                  src={video.src}
                  controls
                  className="rounded-md w-2/4 h-100 object-cover mb-4"
                  autoPlay
                  muted
                  playsInline
                />
                <div className="text-wrap  ml-10">
                  <h2 className="text-xl mb-5 ">{video.titulo}</h2>
                  <p className="text-gray-700 text-[15px] w-[500px]">
                    {video.description}
                  </p>
                  <p className="text-gray-700 text-[15px] w-[500px]">
                    {video.description2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white px-3 py-2 rounded-full hover:bg-blue-700"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default SectionVideos;
