import React from "react";
import { Quote, Star } from "lucide-react";
import mercia from "../assets/imgs/perfilMercia.webp";
import henrique from "../assets/imgs/perfilhenrique.webp";
import shirley from "../assets/imgs/perfilshirley.webp"
import resul01antes from "../assets/imgs/Antesinvisalign01antes.webp"
import resulo1dps from "../assets/imgs/Depoisinvisalign01dps.webp"
import resul02antes from "../assets/imgs/AntesInvisalign2.webp"
import resul02dps from "../assets/imgs/Depoisinvisalign2.webp"
const ResultsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Carla Campos",
      image: carla,
      text: "A clínica é sem duvida a melhor de Recife! Desde o atendimento até os tratamentos, altamente eficazes! Profissionais experientes, competentes e comprometidos. Promete muito e entrega tudo!! Estou muito satisfeita com meu resultado.",
      treatment: "",
    },
    {
      name: "João Santos",
      image: tatiana,
      text: "Adorei conhecer a clínica, linda! Amei a tarde, um momento para recarregar as energias e se renovar. Uma delicia!",
      treatment: "",
    },
    {
      name: "Ana Costa",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "Não sentia dor há anos! Além do sorriso lindo, minha qualidade de vida melhorou drasticamente.",
      treatment: "",
    },
    {
      name: "Mercia Rathunde",
      image: mercia,
      text: "Sempre com o melhor atendimento, cuidado, carinho com os pacientes. Cada vez que minha família vai a uma consulta sai mais feliz do que chegou! Gratidão à toda a equipe que faz o Dental Santé!!!",
      treatment: "",
    },
    {
      name: "Herike Carlos",
      image: henrique,
      text: "Clínica excelente , ótimos profissionais e funcionários atenciosos. Agendem logo sua avaliação! Lugar aconchegante e área kids",
      treatment: "",
    },
    {
      name: "Shirleide Lima",
      image: shirley,
      text: "Quero registrar meu elogio à Clínica Dental Sante pelo atendimento impecável. Fui recebida com acolhimento, cuidado e profissionalismo em cada detalhe. É nítido o compromisso da equipe com a excelência — da recepção ao consultório, tudo transmite confiança e respeito com o paciente.",
      treatment: "",
    },
  ];

  const beforeAfter = [
    {
      before: resul01antes ,
      after: resulo1dps ,
      treatment: "",
    },
    {
      before:  resul02antes ,

      after:  resul02dps ,
      treatment: "",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mais do que Dentes Bonitos: A Emoção de um Sorriso Renovado
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imagine a liberdade de rir abertamente, a confiança em cada
            conversa, a alegria de se sentir bem consigo mesmo. Nossos
            tratamentos não apenas transformam sorrisos, eles resgatam a sua
            essência e a sua felicidade.
          </p>
        </div>

        {/* Antes e Depois */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Transformações Reais
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {beforeAfter.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      ANTES
                    </p>
                    <img
                      src={item.before}
                      alt="Antes do tratamento"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-2">
                      DEPOIS
                    </p>
                    <img
                      src={item.after}
                      alt="Depois do tratamento"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <p className="text-center font-medium text-gray-700">
                  {item.treatment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            O Que Nossos Pacientes Dizem
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg relative "
              >
                <Quote className="w-5 h-5 text-sky-500 mb-4 items-center" />
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Quero Resultados Como Estes!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
