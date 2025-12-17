import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nombre, apellidos, email, asunto, mensaje } = formData;
    
    // Construct the mailto link
    const subject = encodeURIComponent(asunto ? `[Web Contacto] ${asunto}` : "Nuevo mensaje desde la web");
    const body = encodeURIComponent(
      `Nombre: ${nombre} ${apellidos}\n` +
      `Correo: ${email}\n\n` +
      `Mensaje:\n${mensaje}`
    );
    
    // Open the default email client
    window.location.href = `mailto:pksdavidbosch@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[#FF9900] py-8 px-6 text-center shadow-md relative z-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Contáctanos</h1>
      </div>

      {/* Map Section */}
      <div className="w-full h-[50vh] min-h-[400px] relative z-0">
        <iframe 
          src="https://maps.google.com/maps?q=Av.+Parc+Log%C3%ADstic%2C+2-10%2C+Sants-Montju%C3%AFc%2C+08040+Barcelona&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Packengers"
        ></iframe>
      </div>

      {/* Content Overlay - Shifted down to overlap bottom of map or sit below */}
      <div className="flex-grow bg-gray-50 px-4 pb-20 -mt-20 relative z-10">
           <div className="max-w-6xl mx-auto">
               <div className="bg-[#3B71CA] rounded-3xl shadow-2xl p-8 md:p-12 w-full flex flex-col md:flex-row gap-12 border-4 border-[#FF9900]">
                  {/* Left Side Info */}
                  <div className="md:w-1/3 text-white space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
                      {/* Logo */}
                      <div className="mb-6">
                          {/* Updated to new icon logo */}
                          <img 
                            src="/logo-icon.png" 
                            alt="Packengers" 
                            className="h-16 w-auto object-contain bg-white/10 rounded px-2 backdrop-blur-sm"
                          />
                      </div>
                      
                      {/* Contact Details */}
                      <div className="space-y-6 w-full">
                          <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="bg-[#FF9900] p-3 rounded-full flex-shrink-0 shadow-lg">
                                  <Phone className="text-white" size={24} />
                              </div>
                              <div>
                                  <p className="text-xs uppercase opacity-80 mb-1">Teléfono</p>
                                  <p className="font-bold text-lg">(+34) 624 14 42 53</p>
                              </div>
                          </div>

                          <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="bg-[#FF9900] p-3 rounded-full flex-shrink-0 shadow-lg">
                                  <Mail className="text-white" size={24} />
                              </div>
                              <div className="break-all">
                                  <p className="text-xs uppercase opacity-80 mb-1">Correo</p>
                                  <p className="font-bold text-lg">pksdavidbosch@gmail.com</p>
                              </div>
                          </div>

                          <div className="flex flex-col md:flex-row items-center gap-4">
                              <div className="bg-[#FF9900] p-3 rounded-full flex-shrink-0 shadow-lg">
                                  <MapPin className="text-white" size={24} />
                              </div>
                              <div>
                                  <p className="text-xs uppercase opacity-80 mb-1">Ubicación</p>
                                  <p className="font-bold text-lg">Av. Parc Logístic, 2- 10,<br/>Sants-Montjuïc, 08040 Barcelona</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Right Side Form */}
                  <div className="md:w-2/3 w-full">
                      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                          No dude en <br/>contactar con nosotros
                      </h2>

                      <form className="space-y-4" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-orange-200 text-sm font-bold mb-1 ml-1">Nombre</label>
                                  <input 
                                    type="text" 
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] shadow-sm text-gray-800" 
                                  />
                              </div>
                              <div>
                                  <label className="block text-orange-200 text-sm font-bold mb-1 ml-1">Apellidos</label>
                                  <input 
                                    type="text" 
                                    name="apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] shadow-sm text-gray-800" 
                                  />
                              </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                  <label className="block text-orange-200 text-sm font-bold mb-1 ml-1">Correo</label>
                                  <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] shadow-sm text-gray-800" 
                                  />
                              </div>
                              <div>
                                  <label className="block text-orange-200 text-sm font-bold mb-1 ml-1">Asunto</label>
                                  <input 
                                    type="text" 
                                    name="asunto"
                                    value={formData.asunto}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] shadow-sm text-gray-800" 
                                  />
                              </div>
                          </div>

                          <div>
                              <label className="block text-orange-200 text-sm font-bold mb-1 ml-1">Mensaje</label>
                              <textarea 
                                rows={5} 
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                required
                                className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9900] shadow-sm text-gray-800 resize-none"
                              ></textarea>
                          </div>

                          <div className="pt-2">
                              <button type="submit" className="bg-[#1D4ED8] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded shadow-lg transition-transform transform hover:-translate-y-0.5 w-full md:w-auto uppercase tracking-wider">
                                  Enviar
                              </button>
                          </div>
                      </form>
                  </div>
               </div>
           </div>
      </div>
    </div>
  );
};

export default Contact;