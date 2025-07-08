import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    question: "Invisalign dói?",
    answer:
      "O desconforto é mínimo. Nos primeiros dias após trocar os alinhadores, você pode sentir uma leve pressão — sinal de que os dentes estão se movendo. A maioria dos pacientes se adapta rapidamente.",
  },
  {
    question: "Quanto tempo dura o tratamento com Invisalign?",
    answer:
      "Depende da complexidade do seu caso. Em média, tratamentos com Invisalign duram entre 6 e 18 meses. Após a avaliação, criamos um plano personalizado com a duração estimada.",
  },
  {
    question: "Preciso usar o Invisalign o dia todo?",
    answer:
      "Sim. Para que o tratamento seja eficaz, é necessário usar os alinhadores por 20 a 22 horas por dia, retirando apenas para comer, beber líquidos quentes ou escovar os dentes.",
  },
  {
    question: "Com que frequência preciso trocar os alinhadores?",
    answer:
      "Normalmente a cada 7 a 14 dias, conforme o plano definido pelo dentista. Cada alinhador é feito para mover seus dentes gradualmente até a posição desejada.",
  },
  {
    question: "Posso comer com os alinhadores?",
    answer:
      "Não. Os alinhadores devem ser removidos durante as refeições. Isso evita danos ao material e mantém a higiene bucal em dia.",
  },
  {
    question: "Como faço para limpar meus alinhadores?",
    answer:
      "A limpeza é simples! Basta escová-los suavemente com escova de dentes e sabão neutro, além de enxaguar com água fria. Também oferecemos kits de limpeza específicos na clínica.",
  },
  {
    question: "É possível fazer Invisalign com convênio?",
    answer:
      "Aceitamos convênio odontológico somente para a consulta inicial de avaliação com nossos dentistas especialistas. O tratamento com Invisalign não é coberto pelo convênio, mas oferecemos condições facilitadas de pagamento.",
  },
  {
    question: "Quais são as formas de pagamento para Invisalign?",
    answer:
      "Aqui na Dental Santé, aceitamos pagamentos via cartão de crédito, débito, dinheiro e Pix para maior comodidade dos nossos pacientes.",
  },
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
          <p className="text-xl text-gray-600">Tudo o que Você Precisa Saber</p>
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

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a href="https://tintim.link/whatsapp/e5a967f3-c8b4-4db8-b4b5-62189b3d10fc/2401d20a-39b5-47b2-8af4-20caf1ee5f93">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Falar com Especialista
          </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
