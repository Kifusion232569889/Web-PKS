import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-orange-500">Política de Privacidad</h1>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black mb-2">Datos identificativos</h2>
          <p>
            En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos:
            La empresa titular de la plataforma Packengers.es es PKS PACKENGERS S.L., domiciliada en Av. Parc Logístic, 2-10, 08040 Barcelona, con CIF B21955984, y correo electrónico de contacto: info@packengers.com.
            El acceso y uso del portal de PKS PACKENGERS atribuye la condición de USUARIO, que acepta desde su acceso las Condiciones Generales de uso aquí reflejadas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">Protección de datos de carácter personal</h2>
          <p>
            En cumplimiento de lo establecido en el Reglamento General (UE) 2016/679 de Protección de Datos, se informa al usuario que los datos personales facilitados voluntariamente serán incorporados a las Actividades de Tratamiento automatizadas titularidad de PKS PACKENGERS S.L., quien ejercerá como Responsable del Tratamiento.
          </p>
          <p className="mt-2">
            A efectos del RGPD y de la Ley Orgánica 3/2018 (LOPDGDD), respecto a la prestación de los Servicios:
            <br />
            PKS PACKENGERS será responsable del tratamiento de datos relativos a:
            <ul className="list-disc pl-5 mt-1">
              <li>CRM</li>
              <li>Sitio web</li>
              <li>Usuarios que se registran por cuenta propia en la plataforma</li>
            </ul>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">Datos que recopilaremos</h2>
          <p>La información personal que recopilamos puede incluir:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Datos de contacto</li>
            <li>Nombre, correo electrónico, número de teléfono, dirección postal, fecha de nacimiento.</li>
            <li>Datos de localización (GPS)</li>
            <li>Información profesional para transportistas</li>
            <li>Historial de actividad y rutas realizadas</li>
            <li>Información técnica (IP, cookies, logs)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">Finalidades del tratamiento</h2>
          <p>PKS PACKENGERS informa que los datos serán tratados para:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Gestionar solicitudes de contacto</li>
            <li>Enviar comunicaciones comerciales e informativas</li>
            <li>Gestionar y prestar los Servicios</li>
            <li>Administrar la App y el sitio web</li>
            <li>Crear perfiles operativos para mejorar recomendaciones y matching</li>
            <li>Cumplir obligaciones legales</li>
          </ul>
        </section>

        <section>
            <p className="italic text-sm mt-8 border-t pt-4">
                Nota: Este es un resumen visual basado en la documentación proporcionada. Para el texto legal completo, consulte el documento oficial de la empresa.
            </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;