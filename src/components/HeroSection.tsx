import React, { useState } from 'react';
import { Calendar, Phone, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você integraria com sua API
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforme seu <span className="text-sky-500">Sorriso</span>,
              <br />
              Transforme sua <span className="text-sky-500">Vida</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubra como nossos tratamentos personalizados podem devolver sua confiança 
              e bem-estar com um sorriso radiante e saudável.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">+1.000 sorrisos transformados</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-sky-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Calendar className="w-5 h-5 inline mr-2" />
              Agende sua Avaliação Gratuita
            </button>
            <button className="border-2 border-sky-500 text-sky-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-500 hover:text-white transition-all duration-200">
              <Phone className="w-5 h-5 inline mr-2" />
              (11) 99999-9999
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Garante sua Consulta Gratuita
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                required
              />
              <input
                type="tel"
                placeholder="Seu telefone/WhatsApp"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                required
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-lg"
              >
                Quero meu Novo Sorriso!
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">
              Seus dados estão seguros conosco. Não enviamos spam.
            </p>
          </div>
          
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-full shadow-lg animate-bounce">
            <span className="font-bold text-sm">GRÁTIS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;