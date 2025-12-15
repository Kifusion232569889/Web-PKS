import React, { useState } from 'react';
import { Calendar, TrendingUp, Leaf, CheckCircle, Truck, ChevronDown, ChevronUp, Map } from 'lucide-react';

const CargaFull: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Cómo funciona la optimización de rutas?",
      answer: "La inteligencia artificial analiza tu ubicación, tu calendario, tus preferencias y los trayectos más rentables. A partir de ello genera propuestas de ida, vuelta o combinadas para maximizar tus ingresos y minimizar desplazamientos vacíos."
    },
    {
      question: "¿Necesito instalar algo?",
      answer: "No. Solo necesitas un dispositivo con acceso a internet. La plataforma funciona desde web y está optimizada para móvil."
    },
    {
      question: "¿Qué tipo de cargas puedo encontrar?",
      answer: "Cargas generales, paletizadas, grupaje, cargas completas, logística e-commerce y rutas nacionales e internacionales. El tipo exacto dependerá de tu perfil y disponibilidad."
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Solo pagas por utilización del servicio una vez aceptas el viaje, y es un 10% - 15% del valor de tu viaje."
    },
    {
      question: "¿Puedo usar CargaFull.IA para planificar rutas internacionales dentro de la UE?",
      answer: "Absolutamente. La plataforma está diseñada para el transporte nacional e internacional. Te ayudamos a encontrar cargas que completen circuitos rentables cruzando fronteras, teniendo en cuenta aspectos logísticos específicos."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-[#FF9900] py-8 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Que es CargaFull.IA</h1>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl mb-12">
             {/* Updated image to CargaFulllogo.png as requested */}
             <img 
               src="/CargaFulllogo.png" 
               alt="CargaFull Logo" 
               className="w-full h-auto rounded-lg shadow-lg object-contain bg-white/50"
               onError={(e) => {
                 // Fallback if the specific casing/file isn't found
                 const target = e.currentTarget as HTMLImageElement;
                 target.src = "/CargaFullLogo.png"; 
               }}
             />
          </div>
          
          <div className="bg-[#3B71CA] text-white p-8 rounded-xl shadow-lg max-w-5xl text-center">
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              CargaFull.IA es la plataforma inteligente que unifica todas las bolsas de carga en un solo lugar. 
              Con IA, selecciona las mejores rutas de ida y vuelta y planifica tu agenda completa, optimizando todo tu trabajo.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Title */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="border-2 border-[#FF9900] rounded-lg p-2 inline-block w-full">
             <h2 className="text-3xl font-bold text-[#FF9900] pl-4">Beneficios</h2>
        </div>
      </div>

      {/* Benefits Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl mb-2 text-gray-800">1. +70% Ocupación</h3>
          <p className="text-gray-600 mb-4 font-medium">Más cargas. Más Entregas</p>
          <div className="text-5xl font-extrabold text-[#FF9900] my-4">+70%</div>
          <div className="flex items-center justify-center gap-2 text-gray-700 mt-2 font-bold">
            <Truck /> <span>360 rutas</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl mb-2 text-gray-800">2. Calendario 24/7</h3>
          <p className="text-gray-600 mb-4 font-medium">Viajes e ingresos siempre</p>
          <div className="my-4">
            <Calendar size={64} className="text-[#FF9900]" />
          </div>
          <div className="mt-4 pt-4 border-t border-orange-200 w-full">
            <h4 className="font-bold text-gray-800">3. Mayor Planificación</h4>
            <p className="text-sm text-gray-600">Menos incertidumbre</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-bold text-xl mb-2 text-gray-800">4. Reducción de Emisiones</h3>
          <p className="text-gray-600 mb-4 font-medium">Por optimización real de trayectos</p>
          <div className="my-4">
             <Leaf size={64} className="text-green-500" />
          </div>
          <p className="text-sm text-gray-600 font-bold mt-2">Ayudamos al planeta</p>
        </div>
      </div>

      {/* Details Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Optimization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-orange-50 p-8 rounded-xl border border-orange-200">
             <h3 className="text-2xl font-bold text-gray-800 mb-2">1. +70% Ocupación</h3>
             <p className="text-lg font-bold text-gray-600 mb-6">Más cargas. Más Entregas</p>
             <div className="flex justify-center">
               <span className="text-6xl font-black text-[#FF9900] opacity-90">+70%</span>
             </div>
             <p className="text-center font-bold text-xl mt-4 text-gray-700">360 rutas</p>
          </div>
          <div>
            <div className="bg-[#FF9900] text-white px-6 py-2 rounded-t-lg inline-block font-bold text-xl mb-4 w-full text-center md:text-left md:w-auto">
              Optimización
            </div>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <span>CargaFull.IA centraliza todas las bolsas de carga en una plataforma.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                <span>Nuestra IA selecciona las mejores rutas y encuentra retornos cargados automáticamente, eliminando kilómetros vacíos y encadenando cargas continuas para maximizar tu productividad.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
            <div className="bg-[#FF9900] text-white px-6 py-2 rounded-t-lg inline-block font-bold text-xl mb-4 w-full text-center md:text-left md:w-auto">
              Calendario y Planificación
            </div>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-blue-800 flex items-center gap-2"><Calendar size={20}/> Calendario Inteligente:</span>
                <span>Cuéntanos tus días libres y metas de ingresos. CargaFull.AI crea un plan mensual realista que respeta tus descansos.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-blue-800 flex items-center gap-2"><Map size={20}/> Planificación de Rutas:</span>
                <span>La IA organiza y enlaza tus trayectos automáticamente. Sabrás siempre qué viajes realizarás y qué ingresos esperar.</span>
              </li>
            </ul>
          </div>
          <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 flex flex-col items-center">
              <TrendingUp size={80} className="text-gray-700 mb-4" />
              <h3 className="font-bold text-xl mb-2">3. Calendario 24/7</h3>
              <p className="text-center text-gray-600 mb-8">Viajes e ingresos siempre</p>
              
              <div className="w-full border-t border-gray-300 my-4"></div>
              
              <h3 className="font-bold text-xl mb-2">4. Mayor Planificación</h3>
              <p className="text-center text-gray-600">Menos incertidumbre</p>
          </div>
        </div>

        {/* Emissions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-orange-50 p-8 rounded-xl border border-orange-200 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Reducción de Emisiones</h3>
                <p className="text-gray-600 mb-6">Por optimización real de trayectos</p>
                <div className="flex justify-center mb-4">
                    <Leaf size={100} className="text-green-600" />
                </div>
                <p className="font-bold text-gray-700">Ayudamos al planeta</p>
            </div>
            <div>
                <div className="bg-[#FF9900] text-white px-6 py-2 rounded-t-lg inline-block font-bold text-xl mb-4 w-full text-center md:text-left md:w-auto">
                Ahorra dinero Reduce emisiones
                </div>
                <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                    <span><span className="font-bold">Kilómetros siempre con carga:</span> CargaFull IA reduce los trayectos vacíos, ayudando a gastar menos en combustible y generar menos emisiones al mismo tiempo.</span>
                </li>
                <li className="flex gap-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                    <span><span className="font-bold">Eficiencia que se nota:</span> Al aprovechar mejor cada kilómetro, ahorras dinero y contaminas menos en cada ruta.</span>
                </li>
                </ul>
            </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Preguntas Frecuentes (FAQ)</h2>
        <div className="space-y-4">
           {faqs.map((faq, i) => (
               <div key={i} className="bg-[#FF9900] text-white rounded-md shadow overflow-hidden transition-all duration-300">
                   <div 
                     className="p-4 flex justify-between items-center cursor-pointer hover:bg-orange-600 transition-colors"
                     onClick={() => toggleFaq(i)}
                   >
                       <span className="font-semibold flex items-center gap-2 text-lg">
                           <span className="bg-white text-[#FF9900] rounded-full w-2 h-2 flex-shrink-0 inline-block mr-2"></span>
                           {faq.question}
                       </span>
                       {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                   </div>
                   {/* Dropdown Answer */}
                   <div 
                     className={`bg-white text-gray-800 transition-all duration-300 ease-in-out ${
                       openFaq === i ? 'max-h-[500px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                     }`}
                   >
                     <p className="text-lg leading-relaxed border-l-4 border-[#FF9900] pl-4">
                       {faq.answer}
                     </p>
                   </div>
               </div>
           ))}
        </div>
      </div>

    </div>
  );
};

export default CargaFull;