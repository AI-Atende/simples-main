import React from 'react';
import { Award, Heart, Shield, Sparkles, Users, Zap } from 'lucide-react';

const DiferentialsSection: React.FC = () => {
  const diferentials = [
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Equipamentos de última geração para diagnósticos precisos e tratamentos menos invasivos."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais altamente qualificados e em constante atualização, dedicados ao seu bem-estar."
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Aqui, você não é apenas um paciente, é parte da nossa família. Cuidado e atenção em cada etapa."
    },
    {
      icon: Sparkles,
      title: "Ambiente Acolhedor",
      description: "Um espaço pensado para o seu conforto e tranquilidade, tornando sua visita uma experiência agradável."
    },
    {
      icon: Shield,
      title: "Garantia de Qualidade",
      description: "Nosso compromisso com resultados duradouros e sua satisfação total."
    },
    {
      icon: Award,
      title: "Reconhecimento Profissional",
      description: "Certificações internacionais e prêmios que atestam nossa excelência em odontologia."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Por Que Escolher Nossa Clínica?
          </h2>
          <p className="text-xl text-gray-600">
            Nosso Compromisso com a Sua Saúde e Felicidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferentials.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50 hover:from-sky-50 hover:to-blue-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Mais de 15 Anos Transformando Sorrisos
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-sky-100">Pacientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sky-100">Taxa de Satisfação</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-sky-100">Suporte de Emergência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiferentialsSection;