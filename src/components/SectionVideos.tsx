// SectionVideos.tsx
"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosArrowForward } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

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
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      titulo:"Veja em 3D como seu novo sorriso vai ficar",
description: ``,
description2: "Veja em 3D como seu novo sorriso vai ficar",    
},
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      description: "Vídeo explicativo sobre as funcionalidades da plataforma.",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      description: "Exemplo de interação real com o sistema apresentado.",
    },
  ];

  return (
    <section className="py-10 px-4 w-auto bg-blue-100">
      <h2 className="text-2xl font-bold w-100 text-center mb-6">Assista Nossos Vídeos</h2>

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
                />
                <div className="text-wrap">
                  <h2>{video.titulo}</h2>
                <p className="text-gray-700  ml-20 text-">{video.description}</p>
                <br />
                <p className="text-gray-700  ml-20 text-">{video.description2}</p>
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