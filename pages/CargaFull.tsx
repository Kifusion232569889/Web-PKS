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

      {/* Intro Section - Image First, then Blue Text Box */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-4xl flex justify-center">
             {/* Updated image to CargaFulllogo.png */}
             <img 
               src="/CargaFulllogo.png" 
               alt="CargaFull Logo" 
               className="w-full h-auto rounded-lg object-contain"
               onError={(e) => {
                 const target = e.currentTarget as HTMLImageElement;
                 target.src = "/CargaFullLogo.png"; 
               }}
             />
          </div>
          
          <div className="bg-[#3B71CA] text-white p-8 rounded-xl shadow-lg w-full max-w-5xl text-center">
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

      {/* Benefits Cards Summary */}
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

        {/* Card 2 - Combined Calendar & Planning */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col items-center w-full">
              <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-800">2. Calendario 24/7</h3>
                  <Calendar className="text-[#FF9900]" size={20} />
              </div>
              <p className="text-gray-600 text-sm mb-4">Viajes e ingresos siempre</p>
          </div>
          
          <div className="w-full border-t border-orange-200 my-2"></div>

          <div className="flex flex-col items-center w-full mt-2">
              <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-800">3. Mayor Planificación</h3>
                  <TrendingUp className="text-[#FF9900]" size={20} />
              </div>
              <p className="text-gray-600 text-sm">Menos incertidumbre</p>
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

      {/* Details Sections - Zig Zag Layout on Desktop, Text First on Mobile */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        
        {/* Section 1: Optimization */}
        {/* Desktop: Card Left, Text Right | Mobile: Text First, Card Second */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Block (Mobile Order 1, Desktop Order 2) */}
          <div className="order-1 md:order-2">
            <div className="bg-[#FF9900] text-white px-6 py-2 rounded shadow-md inline-block font-bold text-xl mb-6 w-full md:w-auto text-center md:text-left">
              Optimización
            </div>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#FF9900] font-bold text-xl">•</span>
                <span>CargaFull.IA centraliza todas las bolsas de carga en una plataforma.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#FF9900] font-bold text-xl">•</span>
                <span>Nuestra IA selecciona las mejores rutas y encuentra retornos cargados automáticamente, eliminando kilómetros vacíos y encadenando cargas continuas para maximizar tu productividad.</span>
              </li>
            </ul>
          </div>

          {/* Card Block (Mobile Order 2, Desktop Order 1) */}
          <div className="order-2 md:order-1 bg-orange-50 p-10 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
             <h3 className="text-3xl font-bold text-gray-800 mb-2">1. +70% Ocupación</h3>
             <p className="text-xl font-bold text-gray-600 mb-8">Más cargas. Más Entregas</p>
             <div className="flex justify-center items-center gap-4 mb-8">
               <Truck size={48} className="text-blue-600" />
               <span className="text-7xl font-black text-[#FF9900] opacity-90">+70%</span>
             </div>
             <p className="text-center font-bold text-2xl text-gray-800">360 rutas</p>
          </div>

        </div>

        {/* Section 2: Calendar & Planning */}
        {/* Desktop: Text Left, Card Right | Mobile: Text First, Card Second */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Block (Mobile Order 1, Desktop Order 1) */}
          <div className="order-1 md:order-1">
            <div className="bg-[#FF9900] text-white px-6 py-2 rounded shadow-md inline-block font-bold text-xl mb-6 w-full md:w-auto text-center md:text-left">
              Calendario y Planificacion
            </div>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex flex-col gap-1">
                <span className="font-bold text-blue-800 flex items-center gap-2"><span className="text-[#FF9900] text-xl">•</span> Calendario Inteligente:</span>
                <span className="pl-6">Cuéntanos tus días libres y metas de ingresos. CargaFull.AI crea un plan mensual realista que respeta tus descansos.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-bold text-blue-800 flex items-center gap-2"><span className="text-[#FF9900] text-xl">•</span> Planificación de Rutas:</span>
                <span className="pl-6">La IA organiza y enlaza tus trayectos automáticamente. Sabrás siempre qué viajes realizarás y qué ingresos esperar.</span>
              </li>
            </ul>
          </div>

          {/* Card Block (Mobile Order 2, Desktop Order 2) */}
          <div className="order-2 md:order-2 bg-orange-50 p-10 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              {/* Part 1 */}
              <div className="flex flex-col items-start w-full mb-8">
                 <div className="flex items-center gap-3 mb-2">
                     <h3 className="font-bold text-2xl text-gray-800">3. Calendario 24/7</h3>
                     <Calendar size={32} className="text-[#FF9900]" />
                     <TrendingUp size={32} className="text-gray-500" />
                 </div>
                 <p className="text-gray-600 text-lg">Viajes e ingresos siempre</p>
                 <div className="flex gap-4 mt-3 ml-2">
                    <div className="bg-white p-2 rounded shadow-sm border border-gray-100"><span className="text-xl">🕒</span></div>
                    <div className="bg-white p-2 rounded shadow-sm border border-gray-100 flex items-end gap-1"><div className="w-1 h-3 bg-blue-500"></div><div className="w-1 h-5 bg-blue-500"></div></div>
                 </div>
              </div>
              
              <div className="w-full border-t-2 border-orange-200 my-4"></div>
              
              {/* Part 2 */}
              <div className="flex flex-col items-start w-full mt-4">
                 <h3 className="font-bold text-2xl text-gray-800 mb-2">4. Mayor Planificación</h3>
                 <p className="text-gray-600 text-lg mb-4">Menos incertidumbre</p>
                 <div className="flex items-center gap-6 w-full justify-center bg-white p-4 rounded-lg border border-gray-100">
                    <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Person" className="w-16 h-16 rounded-full object-cover" />
                    <Map size={48} className="text-[#FF9900]" />
                    <div className="bg-red-500 text-white rounded-full p-1 text-xs font-bold w-6 h-6 flex items-center justify-center">?</div>
                 </div>
              </div>
          </div>

        </div>

        {/* Section 3: Emissions */}
        {/* Desktop: Card Left, Text Right | Mobile: Text First, Card Second */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Block (Mobile Order 1, Desktop Order 2) */}
            <div className="order-1 md:order-2">
                <div className="bg-[#FF9900] text-white px-6 py-2 rounded shadow-md inline-block font-bold text-xl mb-6 w-full md:w-auto text-center md:text-left">
                  Ahorra dinero Reduce emisiones
                </div>
                <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex gap-3">
                    <span className="text-[#FF9900] font-bold text-xl">•</span>
                    <span><span className="font-bold text-blue-800">Kilómetros siempre con carga:</span> CargaFull IA reduce los trayectos vacíos, ayudando a gastar menos en combustible y generar menos emisiones al mismo tiempo.</span>
                </li>
                <li className="flex gap-3">
                    <span className="text-[#FF9900] font-bold text-xl">•</span>
                    <span><span className="font-bold text-blue-800">Eficiencia que se nota:</span> Al aprovechar mejor cada kilómetro, ahorras dinero y contaminas menos en cada ruta.</span>
                </li>
                </ul>
            </div>

            {/* Card Block (Mobile Order 2, Desktop Order 1) */}
            <div className="order-2 md:order-1 bg-orange-50 p-10 rounded-xl border border-orange-200 shadow-sm hover:shadow-md transition-shadow text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4 text-left">5. Reducción de Emisiones</h3>
                <p className="text-gray-600 text-xl mb-8 text-left">Por optimización real de trayectos</p>
                <div className="flex justify-center mb-8 relative">
                    <Leaf size={120} className="text-green-600" />
                    <div className="absolute bottom-0 right-1/4 bg-white rounded-full p-2 shadow-md">
                        <span className="text-xs font-bold text-green-800">CO2</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mt-1"></div>
                    </div>
                </div>
                <p className="font-bold text-gray-700 text-xl">Ayudamos al planeta</p>
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