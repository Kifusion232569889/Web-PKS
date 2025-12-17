import React from 'react';
import { Box } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#FF9900] py-8 px-6 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Términos y condiciones</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-6 pb-20">
        
        <div className="space-y-8 text-gray-800 text-sm md:text-base leading-relaxed text-justify">
          
          <section>
            <h2 className="font-bold text-lg uppercase mb-2">Términos y condiciones de uso – CargaFull.IA</h2>
            <h3 className="font-bold mb-2">Disposiciones Generales</h3>
            <p>
              CargaFull.IA es una plataforma tecnológica desarrollada por PKS PACKENGERS S.L., diseñada para poner en contacto a empresas y profesionales del transporte con empresas y profesionales que requieren servicios de transporte, permitiendo la gestión, planificación, búsqueda y optimización de rutas mediante herramientas digitales e inteligencia artificial. Este documento define las Condiciones Generales de Uso de la página web y aplicación de CargaFull.IA (en adelante, “la Plataforma”). El uso de la Plataforma implica que el Usuario declara haber leído y comprendido estos términos y que acepta los derechos y obligaciones establecidos para acceder y utilizarla.
            </p>
            <p className="mt-2">
              PKS PACKENGERS S.L. no es parte en ningún contrato o acuerdo de transporte entre Transportistas y Clientes; su función se limita a proporcionar la Plataforma tecnológica que facilita la conexión, comunicación y gestión operativa entre Usuarios registrados.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-2">Definiciones</h3>
            <ul className="list-disc pl-5 space-y-1">
               <li><strong>Plataforma:</strong> Conjunto de sistemas web, servicios digitales, algoritmos y aplicaciones móviles desarrolladas por PKS PACKENGERS S.L.</li>
               <li><strong>Usuario:</strong> Persona física o jurídica registrada en la Plataforma con el fin de utilizar los servicios ofrecidos.</li>
               <li><strong>Transportista:</strong> Usuario registrado dedicado profesionalmente al transporte de mercancías.</li>
               <li><strong>Cliente:</strong> Usuario registrado que publica necesidades de transporte o gestiona cargas.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-2">Registro en la Plataforma</h3>
            <p>
              La Plataforma CargaFull.IA solo puede ser utilizada por profesionales o empresas. Para su funcionamiento se requiere acceso a internet, correo electrónico válido y dispositivo compatible. Para crear una cuenta, el Usuario deberá completar el formulario de registro y proporcionar datos veraces.
            </p>
          </section>

          <section>
            <h3 className="font-bold mb-2">Funcionamiento de la Plataforma</h3>
            <p>
              La Plataforma facilita la comunicación entre Usuarios, optimiza rutas mediante inteligencia artificial, centraliza cargas de distintos sistemas y ayuda a gestionar servicios de transporte, pero no presta directamente servicios de transporte. No podrán transportarse mercancías ilegales, prohibidas o que supongan un riesgo.
            </p>
          </section>

          <section>
             <h3 className="font-bold mb-2">Precio y Pago</h3>
             <p>
               El precio será el acordado entre Cliente y Transportista. La Plataforma puede registrar dicho precio, pero PKS PACKENGERS S.L. no interviene en la fijación del importe, excepto cuando ofrezca servicios específicos integrados.
             </p>
          </section>

          <section>
             <h3 className="font-bold mb-2">Propiedad Intelectual</h3>
             <p>
               Queda prohibido usar la marca o el nombre CargaFull.IA sin autorización previa, salvo en contextos operativos propios de la Plataforma.
             </p>
          </section>

          <section>
             <h3 className="font-bold mb-2">Legislación Aplicable</h3>
             <p>
               Las presentes condiciones se rigen por la legislación española. Para disputas, serán competentes los tribunales del domicilio social de PKS PACKENGERS S.L.
             </p>
          </section>

        </div>

        <div className="mt-16 flex justify-end">
             <div className="flex flex-col items-center">
                 {/* Updated to new icon logo */}
                 <img src="/public/logo-icon.png" alt="Packengers" className="h-16 w-auto" />
             </div>
        </div>

      </div>
    </div>
  );
};

export default Terms;