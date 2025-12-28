import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FF9900] text-white py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Direction */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Dirección</h3>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Av.+Parc+Logístic,+2-10,+Sants-Montjuïc,+08040+Barcelona" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg leading-relaxed font-medium hover:text-[#3B71CA] transition-colors block"
          >
            Av. Parc Logístic, 2- 10,<br />
            Sants-Montjuïc, 08040<br />
            Barcelona
          </a>
        </div>

        {/* Contactanos */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
          <a 
            href="tel:+34624144253" 
            className="text-lg mb-2 font-medium hover:text-[#3B71CA] transition-colors block"
          >
            (+34) 624 14 42 53
          </a>
          <a 
            href="mailto:pksdavidbosch@gmail.com" 
            className="text-lg font-medium hover:text-[#3B71CA] transition-colors block"
          >
            pksdavidbosch@gmail.com
          </a>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Legal</h3>
          <div className="flex flex-col space-y-2 font-medium">
            <Link to="/privacy" className="text-lg hover:text-[#3B71CA] transition-colors">
              Políticas de Privacidad
            </Link>
            <Link to="/terms" className="text-lg hover:text-[#3B71CA] transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Social</h3>
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/packengers/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#FF9900] p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#3B71CA]"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://www.facebook.com/people/PKS-Packengers/61582465356622/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#FF9900] p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#3B71CA]"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/company/packengers/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#FF9900] p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#3B71CA]"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;