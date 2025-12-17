import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Power, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Removed CargaFull from the simple mapping to handle it with a dropdown manually
  const navLinks = [
    { name: 'Inicio', path: '/', external: false },
    { name: 'Sobre Nosotros', path: '/about', external: false },
    // CargaFull is handled separately
    { name: 'Contáctanos', path: '/contact', external: false },
    { name: 'Blog', path: 'https://medium.com/packengers', external: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-[#3B71CA] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/public/logo-icon.png" 
              alt="Packengers" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/') ? 'bg-[#FF9900] text-white' : 'text-white hover:bg-blue-700'}`}
            >
              Inicio
            </Link>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about') ? 'bg-[#FF9900] text-white' : 'text-white hover:bg-blue-700'}`}
            >
              Sobre Nosotros
            </Link>

            {/* CargaFull Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                   isActive('/cargafull') || isActive('/demo')
                    ? 'bg-[#FF9900] text-white'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                CargaFull.IA <ChevronDown size={16} />
              </button>
              {/* Dropdown Content */}
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50">
                <Link 
                  to="/cargafull" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF9900] border-b border-gray-100 transition-colors"
                >
                  Información
                </Link>
                <Link 
                  to="/demo" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF9900] transition-colors"
                >
                  Demo
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/contact') ? 'bg-[#FF9900] text-white' : 'text-white hover:bg-blue-700'}`}
            >
              Contáctanos
            </Link>

            <a
              href="https://medium.com/packengers"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Blog
            </a>

            {/* Iniciar Sesión Button */}
            <a 
              href="https://app-pks-packengers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-4 rounded shadow-md flex items-center gap-2 transition-transform transform hover:-translate-y-0.5 text-sm"
            >
               <Power size={18} strokeWidth={3} />
               Iniciar Sesión
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Inicio</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Sobre Nosotros</Link>
            
            <div className="px-3 py-2 text-white font-medium">CargaFull.IA</div>
            <Link to="/cargafull" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-sm text-gray-200 hover:text-white">Información</Link>
            <Link to="/demo" onClick={() => setIsOpen(false)} className="block pl-6 pr-3 py-2 text-sm text-gray-200 hover:text-white">Demo</Link>
            
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Contáctanos</Link>
            <a href="https://medium.com/packengers" onClick={() => setIsOpen(false)} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-800">Blog</a>
            
             {/* Mobile Iniciar Sesión */}
             <a 
                href="https://app-pks-packengers.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-[#FF9900] text-white hover:bg-[#E68A00] flex items-center gap-2 mt-2"
             >
                <Power size={18} strokeWidth={3} />
                Iniciar Sesión
             </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;