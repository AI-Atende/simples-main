import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-sky-400">
              DentalCare Pro
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando sorrisos há mais de 15 anos com excelência, 
              tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-medium">(11) 3333-3333</p>
                  <p className="text-sm text-gray-400">Fixo</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <p className="font-medium">(11) 99999-9999</p>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-medium">contato@dentalcarepro.com.br</p>
                  <p className="text-sm text-gray-400">E-mail principal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Localização</h4>
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-sky-400 mt-1" />
              <div>
                <p className="font-medium">Av. Paulista, 1000</p>
                <p className="text-gray-300">Sala 1501 - Bela Vista</p>
                <p className="text-gray-300">São Paulo - SP</p>
                <p className="text-gray-300">CEP: 01310-100</p>
              </div>
            </div>
            <button className="text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium">
              Ver no Google Maps →
            </button>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Horário de Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-medium">Segunda à Sexta</p>
                  <p className="text-gray-300">8h às 18h</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-sky-400" />
                <div>
                  <p className="font-medium">Sábados</p>
                  <p className="text-gray-300">8h às 14h</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-500 bg-opacity-20 rounded-lg">
                <p className="text-red-300 text-sm font-medium">
                  🚨 Plantão 24h para emergências
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 DentalCare Pro. Todos os direitos reservados. Cuidando do seu sorriso com excelência e carinho.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;