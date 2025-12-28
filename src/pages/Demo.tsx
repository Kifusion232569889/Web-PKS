import React, { useState } from 'react';
import { MapPin, Calendar, Truck, ArrowRight, Loader2, ChevronDown } from 'lucide-react';

const Demo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    vehicle: 'trailer'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setResult(false); // Reset result when typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(false);
    
    // Simulate API calculation delay
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#FF9900] py-8 px-6 text-center shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold text-white">Demo: Optimización de Rutas</h1>
        <p className="text-white mt-2 font-medium opacity-90">Prueba nuestra tecnología de inteligencia artificial</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative z-10">
            <h2 className="text-2xl font-bold text-[#3B71CA] mb-6 flex items-center gap-2">
              <Truck className="text-[#FF9900]" /> Configura tu viaje
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-4">
                {/* Origin */}
                <div className="relative">
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">¿De dónde sales?</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="text-gray-400" size={20} />
                    </div>
                    <input
                      type="text"
                      name="origin"
                      required
                      placeholder="Ej. Barcelona, Zona Franca"
                      value={formData.origin}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B71CA] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="relative">
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">¿A dónde vas?</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="text-[#FF9900]" size={20} />
                    </div>
                    <input
                      type="text"
                      name="destination"
                      required
                      placeholder="Ej. Madrid, Centro Logístico"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B71CA] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Date */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Fecha de salida</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="text-gray-400" size={20} />
                    </div>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-[#3B71CA] focus:ring-2 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">Vehículo</label>
                  <div className="relative">
                    <select
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-300 focus:border-[#3B71CA] focus:ring-2 focus:ring-blue-100 transition-all outline-none appearance-none bg-white"
                    >
                      <option value="trailer">Trailer (Lona)</option>
                      <option value="frigo">Frigorífico</option>
                      <option value="rigido">Camión Rígido</option>
                      <option value="furgoneta">Furgoneta</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                       <ChevronDown size={20} />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#3B71CA] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 ${loading ? 'opacity-80 cursor-wait' : 'hover:bg-blue-700'}`}
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Calcular Ruta Óptima'}
              </button>
            </form>
          </div>

          {/* Results Area */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {!result && !loading && (
              <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-3xl p-12 text-center text-gray-500 min-h-[400px] flex flex-col items-center justify-center">
                <Truck size={64} className="text-blue-200 mb-4" />
                <p className="text-xl font-medium">Introduce los datos de tu viaje para ver la magia de CargaFull.IA</p>
              </div>
            )}

            {loading && (
               <div className="bg-white rounded-3xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center shadow-inner">
                  <div className="w-16 h-16 border-4 border-[#FF9900] border-t-transparent rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-bold text-[#3B71CA]">Analizando rutas...</h3>
                  <p className="text-gray-500 mt-2">Nuestra IA está buscando coincidencias de retorno.</p>
               </div>
            )}

            {result && (
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 animate-fade-in-up">
                <div className="bg-[#3B71CA] p-6 text-white flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold">Ruta Optimizada</h3>
                    <p className="text-blue-100 text-sm">CargaFull.IA Score: 98/100</p>
                  </div>
                  <div className="bg-[#FF9900] px-4 py-2 rounded-lg font-bold shadow-sm">
                    Ahorro: 15%
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-col gap-6">
                    {/* Route Visual */}
                    <div className="flex items-center justify-between text-gray-800">
                      <div className="text-center w-1/3">
                        <p className="text-xs text-gray-500 uppercase font-bold">Origen</p>
                        <p className="font-bold text-lg break-words">{formData.origin}</p>
                      </div>
                      <div className="flex-grow flex flex-col items-center px-4">
                        <p className="text-xs text-[#FF9900] font-bold mb-1">6h 30min</p>
                        <div className="w-full h-1 bg-gray-200 relative">
                           <div className="absolute top-0 left-0 h-full bg-[#FF9900] w-full"></div>
                           <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 bg-white border-2 border-[#FF9900] w-4 h-4 rounded-full"></div>
                        </div>
                        <p className="text-xs text-green-600 font-bold mt-1">Carga de retorno encontrada</p>
                      </div>
                      <div className="text-center w-1/3">
                         <p className="text-xs text-gray-500 uppercase font-bold">Destino</p>
                         <p className="font-bold text-lg break-words">{formData.destination}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                         <p className="text-gray-500 text-sm">Ingreso Estimado</p>
                         <p className="text-2xl font-bold text-[#3B71CA]">850 € - 920 €</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                         <p className="text-green-600 text-sm">CO2 Ahorrado</p>
                         <p className="text-2xl font-bold text-green-700">142 kg</p>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                      <h4 className="font-bold text-[#E68A00] mb-2 flex items-center gap-2">
                        <ArrowRight size={18} /> Oportunidad de Retorno
                      </h4>
                      <p className="text-sm text-gray-700">
                        Hemos detectado <strong>3 cargas</strong> disponibles en {formData.destination} para tu vuelta a {formData.origin} el día siguiente.
                      </p>
                    </div>

                    <a 
                      href="https://app-pks-packengers.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-[#FF9900] hover:bg-[#E68A00] text-white font-bold py-3 rounded-lg shadow transition-colors"
                    >
                      Ver detalles y reservar
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Demo;