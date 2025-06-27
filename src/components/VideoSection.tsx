import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O Caminho para o Sorriso Perfeito
          </h2>
          <p className="text-xl text-gray-600">
            Um processo simples e eficaz em apenas 3 passos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Avaliação Personalizada
                </h3>
                <p className="text-gray-600">
                  Nossos especialistas analisam suas necessidades para um plano de 
                  tratamento exclusivo e adequado ao seu perfil.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tratamento Confortável e Eficaz
                </h3>
                <p className="text-gray-600">
                  Utilizamos as mais modernas tecnologias para garantir seu conforto 
                  e resultados rápidos durante todo o processo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sorriso Transformado
                </h3>
                <p className="text-gray-600">
                  Desfrute da confiança e alegria de um sorriso que sempre sonhou, 
                  com resultados duradouros e naturais.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-3 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Processo 100% seguro e indolor</span>
              </div>
              <div className="flex items-center gap-3 text-green-600 mt-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Resultados visíveis desde a primeira sessão</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6529409/pexels-photo-6529409.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tratamento odontológico moderno"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 transform hover:scale-110">
                  <Play className="w-8 h-8 text-sky-500 ml-1" />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-sm">Veja como funciona</p>
              <p className="text-xs opacity-90">em apenas 2 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;