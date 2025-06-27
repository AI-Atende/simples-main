import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quais convênios vocês aceitam?",
      answer: "Trabalhamos com os principais convênios odontológicos do mercado, incluindo Bradesco Dental, SulAmérica Odonto, Amil Dental, entre outros. Entre em contato para verificar se seu plano está coberto."
    },
    {
      question: "Os tratamentos são dolorosos?",
      answer: "Utilizamos técnicas modernas de anestesia e sedação consciente para garantir que você tenha o máximo conforto durante todos os procedimentos. Nosso foco é tornar sua experiência a mais tranquila possível."
    },
    {
      question: "Qual o tempo médio de duração dos tratamentos?",
      answer: "O tempo varia conforme o tipo de tratamento. Limpezas e clareamentos podem ser feitos em uma sessão, enquanto tratamentos como ortodontia podem levar de 12 a 24 meses. Fazemos um cronograma personalizado na sua consulta."
    },
    {
      question: "Vocês oferecem opções de pagamento?",
      answer: "Sim! Oferecemos diversas formas de pagamento: à vista com desconto, parcelamento no cartão em até 12x, financiamento próprio em até 24x sem juros, e também aceitamos PIX e transferência bancária."
    },
    {
      question: "Como faço para agendar uma consulta?",
      answer: "É muito fácil! Você pode agendar pelo WhatsApp (11) 99999-9999, ligar no (11) 3333-3333, ou preencher o formulário aqui no site. Retornamos em até 2 horas para confirmar seu horário."
    },
    {
      question: "Vocês atendem emergências?",
      answer: "Sim, temos plantão 24h para emergências odontológicas. Entre em contato pelo nosso WhatsApp de emergência que será direcionado para o dentista de plantão."
    },
    {
      question: "É possível fazer uma avaliação online?",
      answer: "Oferecemos consultas online para orientações gerais e triagem, mas para um diagnóstico preciso e início de tratamento, é necessária uma avaliação presencial em nossa clínica."
    },
    {
      question: "Vocês garantem os resultados dos tratamentos?",
      answer: "Sim! Todos os nossos tratamentos possuem garantia. O período varia conforme o procedimento realizado, e explicamos detalhadamente durante a consulta inicial."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Suas Dúvidas Respondidas
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que Você Precisa Saber
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-sky-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;