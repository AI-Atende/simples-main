import React from 'react';
import { AlertTriangle } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm sm:text-base">ÚLTIMAS HORAS!</span>
        </div>
        <p className="text-sm sm:text-base">
          Sua chance de ter o sorriso dos sonhos com a primeira consulta <span className="font-bold">grátis</span> está acabando!
        </p>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Header;