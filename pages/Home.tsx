import React from 'react';
import { Link } from 'react-router-dom';
import { Power } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#3B71CA] min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Top Navigation Buttons */}
      <div className="w-full py-8 px-6 md:px-12 flex justify-end items-center gap-4 z-20 flex-wrap">
        <Link 
          to="/about" 
          className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-6 rounded shadow-md transition-transform transform hover:-translate-y-0.5 text-sm md:text-base"
        >
          Sobre Nosotros
        </Link>
        <Link 
          to="/cargafull" 
          className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-6 rounded shadow-md transition-transform transform hover:-translate-y-0.5 text-sm md:text-base"
        >
          CargaFull.IA
        </Link>
        <Link 
          to="/contact" 
          className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-6 rounded shadow-md transition-transform transform hover:-translate-y-0.5 text-sm md:text-base"
        >
          Contáctanos
        </Link>
        <button className="bg-[#FF9900] hover:bg-[#E68A00] text-white font-semibold py-2 px-6 rounded shadow-md flex items-center gap-2 transition-transform transform hover:-translate-y-0.5 text-sm md:text-base">
          <Power size={18} strokeWidth={3} />
          Iniciar Sesión
        </button>
      </div>

      <div className="flex-grow flex items-center justify-center -mt-10 md:-mt-20">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 z-10 flex flex-col items-start lg:pl-4">
             
             {/* Logo Section - Removed background, increased size */}
             <div className="mb-4">
                <img 
                  src="/public/logo.png" 
                  alt="Packengers Logo" 
                  className="h-40 md:h-56 lg:h-64 w-auto object-contain"
                />
             </div>

             {/* Main Text */}
             <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-snug max-w-lg text-left">
               La solución que ofrece a clientes y transportistas mejores condiciones en el campo <br className="hidden md:block"/>
               <span className="font-bold tracking-wide">SOCIAL, ECONÓMICO y AMBIENTAL.</span>
             </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end w-full">
             <div className="relative w-full max-w-xl lg:max-w-2xl transform lg:translate-x-10">
                <img 
                    src="/public/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.png"
                    onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src.includes('.png')) {
                            target.src = "/public/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.jpeg";
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