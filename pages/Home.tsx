import React from 'react';
import { Link } from 'react-router-dom';
import { Power } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[#3B71CA] min-h-[80vh] flex flex-col relative overflow-hidden">
      
      {/* Top Navigation Buttons */}
      <div className="w-full p-8 flex justify-end items-start gap-4 z-20 flex-wrap">
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

      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-7xl w-full mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 z-10 flex flex-col items-start">
             
             {/* Logo Section */}
             <div className="mb-6">
                <img 
                  src="/logo.png" 
                  alt="Packengers Logo" 
                  className="h-32 md:h-48 w-auto object-contain bg-white/20 rounded-xl px-4 py-2 backdrop-blur-sm"
                />
             </div>

             {/* Main Text */}
             <p className="text-xl md:text-3xl font-normal leading-tight max-w-xl">
               La solución que ofrece a clientes y transportistas mejores condiciones en el campo <br/>
               <span className="font-bold">SOCIAL, ECONÓMICO y AMBIENTAL.</span>
             </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-[700px]">
                {/* Updated to the ChatGPT image provided. Assuming .png extension as per other files. */}
                <img 
                    src="/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.png"
                    onError={(e) => {
                        // Fallback logic
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src.endsWith('.png')) {
                            // Try jpeg if png fails
                            target.src = "/ChatGPT%20Image%20Nov%2019,%202025,%2001_30_09%20PM.jpeg";
                        } else {
                            // General fallback
                            target.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                        }
                    }}
                    alt="Logística Ilustración" 
                    className="object-contain w-full h-auto drop-shadow-2xl rounded-lg"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;