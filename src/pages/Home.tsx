import React from 'react';
import { Link } from 'react-router-dom';
import { Power, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  // Common button styles for uniformity with responsive adjustments
  const buttonStyle = "bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-1 md:px-6 rounded shadow-md transition-transform transform hover:-translate-y-0.5 text-[10px] sm:text-xs md:text-base w-full md:w-auto md:min-w-[160px] flex justify-center items-center text-center h-[36px] md:h-[42px] whitespace-nowrap";

  return (
    <div className="w-full bg-[#3B71CA] min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Top Navigation Buttons */}
      {/* Mobile: Grid (3 on top, 2 on bottom) | Desktop: Flex row */}
      <div className="w-full py-6 px-4 md:py-8 md:px-12 z-20 grid grid-cols-6 gap-2 md:flex md:justify-end md:items-center md:gap-4">
        
        {/* Row 1 (Mobile): 3 items, span 2 cols each */}
        <Link 
          to="/about" 
          className={`${buttonStyle} col-span-2`}
        >
          Sobre Nosotros
        </Link>
        
        {/* CargaFull with Dropdown */}
        <div className="relative group z-30 col-span-2">
            <button className={`${buttonStyle} gap-1 cursor-default w-full`}>
               CargaFull.IA <ChevronDown size={14} className="md:w-4 md:h-4" />
            </button>
            <div className="absolute left-0 mt-1 w-full bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top min-w-[120px]">
                <Link 
                  to="/cargafull" 
                  className="block px-2 py-2 md:px-4 md:py-3 text-xs md:text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF9900] border-b border-gray-100 text-center font-medium transition-colors"
                >
                  Información
                </Link>
                <Link 
                  to="/demo" 
                  className="block px-2 py-2 md:px-4 md:py-3 text-xs md:text-sm text-gray-700 hover:bg-orange-50 hover:text-[#FF9900] text-center font-medium transition-colors"
                >
                  Demo
                </Link>
            </div>
        </div>

        <Link 
          to="/contact" 
          className={`${buttonStyle} col-span-2`}
        >
          Contáctanos
        </Link>
        
        {/* Row 2 (Mobile): 2 items, span 3 cols each */}
        <a 
          href="https://medium.com/packengers" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${buttonStyle} col-span-3`}
        >
          Blog
        </a>

        {/* Iniciar Sesión - External Link */}
        <a 
          href="https://app-pks-packengers.vercel.app/" 
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonStyle} gap-1 md:gap-2 col-span-3`}
        >
          <Power size={14} className="md:w-[18px] md:h-[18px]" strokeWidth={3} />
          Iniciar Sesión
        </a>
      </div>

      <div className="flex-grow flex items-center justify-center -mt-4 md:-mt-20 pb-8">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-6 z-10 flex flex-col items-center lg:items-start lg:pl-4 order-1">
             
             {/* Logo Section */}
             <div className="mb-2 md:mb-4 w-full flex justify-center lg:justify-start">
                <img 
                  src="/logo.png" 
                  alt="Packengers Logo" 
                  className="h-24 sm:h-32 md:h-48 lg:h-56 w-auto object-contain"
                />
             </div>

             {/* Main Text */}
             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-snug max-w-lg text-center lg:text-left">
               La solución que ofrece a clientes y transportistas mejores condiciones en el campo <br className="hidden md:block"/>
               <span className="font-bold tracking-wide">SOCIAL, ECONÓMICO y AMBIENTAL.</span>
             </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end w-full order-2 mt-4 md:mt-0">
             <div className="relative w-full max-w-sm sm:max-w-xl lg:max-w-2xl transform lg:translate-x-10">
                <img 
                    src="/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.png"
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src.includes('.png')) {
                            target.src = "/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.jpeg";
                        } else {
                            target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                        }
                    }}
                    alt="Logística Ilustración" 
                    className="object-contain w-full h-auto drop-shadow-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;