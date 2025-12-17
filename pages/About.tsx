import React, { useState, useEffect } from 'react';
import { Lightbulb, Users, Heart, Zap, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated to include team1.png through team5.png
  const teamImages = [
    "/public/team1.png", 
    "/public/team2.png", 
    "/public/team3.png", 
    "/public/team4.png", 
    "/public/team5.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamImages.length - 1 : prev - 1));
  };

  // Autoplay functionality: Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === teamImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [teamImages.length]);

  return (
    <div className="bg-white pb-20">
       {/* Header Bar */}
       <div className="bg-[#FF9900] py-10 px-6 text-center shadow-md">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white drop-shadow-sm">
          Sobre Nosotros
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Logo and Intro Text */}
        <div className="flex flex-col items-center mb-16">
            
            {/* Logo Image - Aligned to the right as requested */}
            <div className="w-full max-w-4xl flex justify-end mb-6">
                 {/* Updated to new icon logo */}
                 <img src="/public/logo-icon.png" alt="Packengers" className="h-24 md:h-32 w-auto" />
            </div>
            
            {/* Text Content - Indented Paragraphs */}
            <div className="text-gray-800 leading-relaxed text-lg space-y-6 text-justify font-normal max-w-4xl">
                <p className="indent-10">
                    Packengers es una empresa española de tecnología logística (FreightTech) con sede en Barcelona. 
                    Nace a partir de varios años de experiencia operando en México, donde el equipo desarrolló un modelo sólido 
                    para ayudar a transportistas a trabajar con más eficiencia, menos kilómetros vacíos y mejor liquidez. 
                    Esa experiencia —probada en un mercado complejo— permitió crear una plataforma más robusta basada en IA para dar el salto a Europa.
                </p>
                <p className="indent-10">
                    La empresa llega a España como parte de la Incubadora Logística 4.0 del Consorci de la Zona Franca de Barcelona, 
                    un entorno que impulsa soluciones innovadoras para la logística y que facilita su expansión al mercado europeo.
                </p>
                <p className="indent-10 font-semibold text-black">
                    Packengers está aquí para transformar la forma en que trabajan los transportistas: más ingresos, menos incertidumbre, 
                    planificación real del mes y liquidez inmediata tras cada viaje.
                </p>
            </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 flex flex-col items-center">
            {/* Values Title Button Style - Widened Box */}
            <div className="w-full border-[3px] border-[#FF9900] rounded-xl py-4 text-center mb-16 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FF9900] uppercase tracking-wide">
                  Nuestros valores
                </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 w-full max-w-4xl">
                {/* Value 1 */}
                <div className="flex gap-6 items-start group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                    <div className="bg-[#FF9900] text-white p-4 rounded-full flex-shrink-0 mt-1 shadow-md">
                         <Users size={28} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3B71CA] mb-2 group-hover:translate-x-1 transition-transform">Clientes Primero</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Nos enfocamos en entender profundamente las necesidades de transportistas y empresas, 
                            construyendo soluciones que generen confianza y resultados reales.
                        </p>
                    </div>
                </div>

                {/* Value 2 */}
                <div className="flex gap-6 items-start group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                    <div className="bg-[#FF9900] text-white p-4 rounded-full flex-shrink-0 mt-1 shadow-md">
                         <Lightbulb size={28} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3B71CA] mb-2 group-hover:translate-x-1 transition-transform">Innovación y aprendizaje continuo</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           Creemos en mejorar cada día. Fomentamos ideas nuevas, simplificación y curiosidad constante 
                           para ofrecer tecnología cada vez más eficiente.
                        </p>
                    </div>
                </div>

                {/* Value 3 */}
                <div className="flex gap-6 items-start group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                    <div className="bg-[#FF9900] text-white p-4 rounded-full flex-shrink-0 mt-1 shadow-md">
                         <Zap size={28} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3B71CA] mb-2 group-hover:translate-x-1 transition-transform">Dar nuestro mayor potencial</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           Actuamos con rapidez y responsabilidad. No aplazamos lo que puede resolverse hoy.
                        </p>
                    </div>
                </div>

                 {/* Value 4 */}
                 <div className="flex gap-6 items-start group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                    <div className="bg-[#FF9900] text-white p-4 rounded-full flex-shrink-0 mt-1 shadow-md">
                         <Users size={28} fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3B71CA] mb-2 group-hover:translate-x-1 transition-transform">Espíritu de equipo – Ubuntu</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           “Yo no soy todo lo que puedo ser hasta que tú no seas todo lo que puedes ser.” 
                           Crecemos juntos, apoyándonos mutuamente para lograr mejores resultados.
                        </p>
                    </div>
                </div>

                 {/* Value 5 */}
                 <div className="flex gap-6 items-start group hover:bg-orange-50 p-4 rounded-xl transition-colors">
                    <div className="bg-[#FF9900] text-white p-4 rounded-full flex-shrink-0 mt-1 shadow-md">
                         <Handshake size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#3B71CA] mb-2 group-hover:translate-x-1 transition-transform">Actitud positiva y trato humano</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                           La cortesía, la cercanía y el entusiasmo son parte esencial de cómo servimos a nuestros usuarios.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Team Section with Slideshow */}
        <div className="flex flex-col items-center">
            {/* Team Title - Widened Box */}
            <div className="w-full border-[3px] border-[#FF9900] rounded-xl py-4 text-center mb-16 shadow-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-[#FF9900] uppercase tracking-wide">
                    Equipo
                </h2>
            </div>
            
            {/* Slideshow Container */}
            <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                
                {/* Images */}
                <div 
                    className="w-full h-full bg-gray-100 relative"
                >
                    <img 
                        src={teamImages[currentSlide]} 
                        alt={`Team member ${currentSlide + 1}`} 
                        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                        onError={(e) => {
                            // Fallback if image not found to a placeholder that looks decent
                            e.currentTarget.src = `https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`;
                        }}
                    />
                     {/* Gradient overlay for text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Left Arrow */}
                <button 
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-white hover:text-[#FF9900] p-3 rounded-full backdrop-blur-sm transition-all shadow-lg transform hover:scale-110 z-10"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={32} strokeWidth={3} />
                </button>

                {/* Right Arrow */}
                <button 
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/80 text-white hover:text-[#FF9900] p-3 rounded-full backdrop-blur-sm transition-all shadow-lg transform hover:scale-110 z-10"
                    aria-label="Next slide"
                >
                    <ChevronRight size={32} strokeWidth={3} />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {teamImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? "bg-[#FF9900] w-6" 
                                    : "bg-white/70 hover:bg-white"
                            }`}
                        />
                    ))}
                </div>
            </div>
            <p className="mt-4 text-gray-500 text-sm italic">
                Haz clic en las flechas para ver más fotos de nuestro equipo.
            </p>
        </div>

      </div>
    </div>
  );
};

export default About;